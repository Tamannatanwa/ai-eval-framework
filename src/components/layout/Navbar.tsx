"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Next 13 hook to get current route
import React, { useState } from 'react'
import { BarChart3, Activity, Settings, LayoutDashboard } from 'lucide-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // get current route

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon:LayoutDashboard },
    { href: "/evaluations", label: "Evaluations", icon: Activity },
    { href: "/settings", label: "Settings", icon: Settings },
    // { href: "/", label: "Home", icon: BarChart3 },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">Logo</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded hover:bg-gray-600 transition-colors ${
                  isActive ? "bg-gray-700 font-bold" : ""
                }`}
              >
                <Icon className="w-5 h-5 mr-1" />
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-4 bg-gray-700 rounded">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded hover:bg-gray-600 transition-colors ${
                  isActive ? "bg-gray-600 font-bold" : ""
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navbar
