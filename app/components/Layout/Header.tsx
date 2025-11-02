'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          TechPulse
        </Link>

        {/* Main Navigation */}
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
