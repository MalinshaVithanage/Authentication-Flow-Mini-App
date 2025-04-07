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
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
