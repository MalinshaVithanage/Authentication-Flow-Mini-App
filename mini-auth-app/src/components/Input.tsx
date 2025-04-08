"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  label,
  placeholder,
  name,
  value,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label className="mt-6 block text-[22px] font-medium leading-[1.5]">
        {label}
      </label>

      <div className="relative">
      <input
        type={isPassword && showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-4 w-full border border-[#383838] bg-[#1D1D21] rounded-[8px] px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 mt-3"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      )}
      </div>
   
    </div>
  );
}
