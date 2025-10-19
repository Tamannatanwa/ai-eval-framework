"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  BarChart3,
  Activity,
  Settings,
  LayoutDashboard,
  LogOut,
  UserCircle2,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Replace this with actual user data from your auth context or session
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatarUrl: "", // Optional if you want to use an image instead of icon
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/evaluations", label: "Evaluations", icon: Activity },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    console.log("Logout clicked");
    // Your logout logic here (e.g., signOut() or router.push('/login'))
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/dashboard" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
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
            );
          })}

          {/* User Section */}
          <div className="ml-8 flex items-center space-x-3 relative group">
            {/* Avatar */}
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-gray-600"
              />
            ) : (
              <UserCircle2 className="w-8 h-8 text-gray-300" />
            )}

            {/* User Info */}
            <div className="text-sm">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </div>

            {/* Logout Icon */}
            <button
              onClick={handleLogout}
              className="ml-2 p-2 rounded hover:bg-gray-700 transition relative"
            >
              <LogOut className="w-5 h-5 text-gray-300" />
              {/* Tooltip */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Logout
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
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
            const isActive = pathname === item.href;
            const Icon = item.icon;
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
            );
          })}

          {/* Mobile User Section */}
          <div className="flex items-center justify-between px-3 pt-3 border-t border-gray-600">
            <div className="flex items-center space-x-2">
              <UserCircle2 className="w-7 h-7 text-gray-300" />
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded hover:bg-gray-600 transition"
            >
              <LogOut className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
