import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  loading?: boolean
  type?: 'button' | 'submit'
}

export default function Button({ children, loading = false, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full text-[18px] font-semibold leading-[1.2]  text-white py-4 my-6 rounded-[8px] bg-gradient-to-r from-[#8B80FF] to-[#5C53BC]"
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
