import React from 'react'

interface InputProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, type, value, onChange }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
