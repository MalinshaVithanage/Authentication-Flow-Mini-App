"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const login = useAuthStore(state => state.login)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      if (email === 'test@visionexdigital.com.au' && password === 'password123') {
        login()
        router.push('/dashboard')
      } else {
        setError('Invalid credentials')
      }
      setLoading(false)
    }, 1000)
  }
  
  return (
    <section className="bg-darkbg h-screen container mx-auto ">
      <div className=" min-h-screen grid md:grid-cols-2 ">
        <div className="mb-12 md:mr-[48px] mx-[10px] md:mb-0">
          <form
            onSubmit={handleSubmit}
            className=" pt-[68px] rounded-xl w-full space-y-5"
          >
            <div className=" top-0 left-0  ...">
              <img src="/images/logo.png" />

              <div className="pt-[70px]">
                <p className="text-[24px] sm:text-base md:text-[24px] lg:text-[40px] font-medium leading-[1.2]">
                  Welcome back to Room.me!
                </p>
                <p className="text-[14px] sm:text-base md:text-[16px] lg:text-[20px] font-normal leading-[1.5] mb-3">
                  Room.me is an innovative video conference product that
                  revolutionizes virtual meetings.
                </p>

                {error && <ErrorMessage message={error} />}

                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" loading={loading}>
                  Sign in
                </Button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 w-full border border-gray-300 bg-white text-black  py-4 rounded-[8px] px-3"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                  <span>Sign in with Google</span>
                </button>
              </div>
              <div className="flex items-center justify-between text-[#E6E6E6] my-5 text-[10px] sm:text-base md:text-[14px] lg:text-[14px]">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox  text-blue-600 bg-[#E6E6E6] checked:bg-[#E6E6E6] "
                  />
                  <span className=" font-normal ">Remember for 30 days</span>
                </label>
                <a
                  href="#"
                  className="text-[#A89FFF] hover:underline font-medium"
                >
                  Forgot password
                </a>
              </div>

              <div className="text-center text-white mt-4 text-[10px] sm:text-base md:text-[14px] lg:text-[16px]">
                Doesn’t have account?{" "}
                <a href="#" className="text-white underline ">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
        <TestimonialCarousel />
      
      </div>
    </section>
  );
}
