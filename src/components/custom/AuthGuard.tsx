"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter()
  const isLoggedIn = Boolean(localStorage.getItem("token")) // example

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login") // redirect if not logged in
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null // don't render children until login
  }

  return <>{children}</>
}

export default AuthGuard
