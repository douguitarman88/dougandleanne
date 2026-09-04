"use client";

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

export default function RegisterForm() {
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
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
    </div>
  );
}