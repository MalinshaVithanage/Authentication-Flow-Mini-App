'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import Input from '@/components/Input'
import Button from '@/components/Button'
import ErrorMessage from '@/components/ErrorMessage'

export default function LoginPage() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Both fields are required.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Invalid email format.')
      return
    }

    if (email === 'test@visionexdigital.com.au' && password === 'password123') {
      setError('')
      setLoading(true)
      setTimeout(() => {
        login()
        router.push('/dashboard')
      }, 1000)
    } else {
      setError('Incorrect email or password.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-5">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <ErrorMessage message={error} />}

        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </div>
  )
}
