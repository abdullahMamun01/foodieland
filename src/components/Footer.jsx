import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-6 lg:py-8 bg-white">
      <div className=" px-4">
        <div className="flex flex-col md:flex-row px-2 lg:px-0 lg:justify-between lg:items-center gap-6 border-b pb-10">
          {/* Logo */}
          <div>
            <Link href="/" className="">
              <Image
                src="/assets/Logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-[16px] mt-4 lg:mt-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex  lg:items-center gap-8">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-800 hover:text-gray-600 transition-colors font-[500] text-[16px]"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-800 hover:text-gray-600 transition-colors font-[500] text-[16px]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-gray-600 transition-colors font-[500] text-[16px]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-gray-600 transition-colors font-[500] text-[16px]"
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between mt-10">
          <div className="text-center text-gray-500 text-[18px] font-[400] px-2 lg:px-0 lg:mx-auto">
            <span className="text-[#FF7967]"> SpaceZee </span> 
            <span className="mx-2"> © 2024  </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://facebook.com"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
