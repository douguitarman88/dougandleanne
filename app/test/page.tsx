"use client";
import SignupForm from '@/contents/test';

import React from "react";
import { useImmer } from "use-immer";
import { Input } from "@/components/input2";
import Button from '@/components/button';

interface FormState {
  profile: {
    username: string;
    email: string;
  };
  metadata: {
    notificationsEnabled: boolean;
  };
}

const page = () => {
    // Manage structural/nested state intuitively using useImmer
      const [formData, updateFormData] = useImmer<FormState>({
        profile: {
          username: "",
          email: "",
        },
        metadata: {
          notificationsEnabled: true,
        },
      });
    
      // Immer mutative onChange handler 
      const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // updateFormData passes a mutable draft object
        updateFormData((draft) => {
          // Direct mutations are safe here; Immer compiles the immutable state output
          if (name === "username" || name === "email") {
            draft.profile[name] = value;
          }
        });

        console.log(formData)
      };

      const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Pass the form element directly to FormData
        const formData = new FormData(event.currentTarget);

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;

        // Alternative: Convert all fields into a single object
        const allFields = Object.fromEntries(formData.entries());
        console.log('ALL')
        console.log(allFields);

        alert('Hello ' + allFields.username + ' ' + allFields.email);
    };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Sign Up
          </h1>
          <div className="w-full max-w-xs">
            <form className="space-y-4" onSubmit={onSubmit}>
                    <Input
                      id="user-input"
                      label="Username"
                      name="username"
                      placeholder="johndoe"
                      value={formData.profile.username}
                      onChange={handleProfileChange}
                      error={formData.profile.username.length > 0 && formData.profile.username.length < 3 ? "Too short" : ""}
                    />
            
                    <Input
                      id="email-input"
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.profile.email}
                      onChange={handleProfileChange}
                    />

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <Button
                            label='Click Me'
                        //onClick={onClick}
                        />
                        </div>
                    </div>
                  </form>
            {/* <SignupForm /> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default page