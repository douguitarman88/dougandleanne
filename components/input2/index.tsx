"use client";

import React from "react";

// Explicitly extend native HTML input types without forwardRef or ComponentPropsWithRef
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id: string; // Required for clean label accessibility coupling
  ref?: React.Ref<HTMLInputElement>; // React 19 allows direct extraction of ref as a standard prop
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = "",
  type = "text",
  ref,
  ...props // Extracts custom value, onChange, disabled, etc.
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        ref={ref} // Directly binding the prop straight to the element
        className={`
          bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 dark:border-gray-700"}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
};