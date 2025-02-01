import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="w-full border-b py-4">
    <nav className="max-w-7xl mx-auto px-4 py-3.5">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif italic">
         <Image src="/assets2/Logo.png" alt="Logo" width={100} height={100}  />
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-black hover:text-gray-600 font-[500] text-[16px]">
            Home
          </Link>
          <Link href="/recipes" className="text-black hover:text-gray-600 font-[500] text-[16px]">
            Recipes
          </Link>
          <Link href="/blog" className="text-black hover:text-gray-600 font-[500] text-[16px]">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600 font-[500] text-[16px]">
            Contact
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600 font-[500] text-[16px]">
            About us
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-black">
            <Facebook className="w-5 h-5" fill="black" stroke="none"/>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            <Twitter className="w-5 h-5" fill="black" stroke="none"/>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            <Instagram className="w-5 h-5" fill="white" stroke="black"/>
          </Link>
        </div>
      </div>
    </nav>
  </div>
  )
}
