import {
  Facebook,
  Twitter,
  Instagram,
  Clock,
  ChevronRight,
  CirclePlay,
  Clock12,
  Utensils,
  CookingPot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Recipie from "../../public/assets2/baked-chicken-wings.png";
import User from "../../public/assets2/user.png";
import Badge from "../../public/assets2/Badge.png";
import Logo from "../../public/assets2/logo.png";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="w-full border-b py-4">
        <nav className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif italic">
             <Image src="/assets2/Logo.png" alt="Logo" width={100} height={100}  />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-gray-600">
                Home
              </Link>
              <Link href="/recipes" className="text-black hover:text-gray-600">
                Recipes
              </Link>
              <Link href="/blog" className="text-black hover:text-gray-600">
                Blog
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600">
                Contact
              </Link>
              <Link href="/about" className="text-black hover:text-gray-600">
                About us
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl h-[640px] mx-auto  bg-[#E7FAFE] rounded-3xl my-8">
        <div className="relative grid md:grid-cols-2 gap-12 items-center h-full">
          <Image
            src={Badge}
            alt="Badge"
            width={600}
            height={600}
            className="rounded-full absolute top-[105px] z-[100] left-1/2 ml-10 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover"
          />
          <div className="space-y-6 px-10">
            <div className="inline-flex items-center  py-3 px-5 gap-2 font-bold rounded-full text-[14px]  bg-white text-black">
              <CookingPot className="w-5 h-5" stroke="#C6A07A" /> Hot Recipes
            </div>
            <h1 className="text-[64px]  max-w-md  font-bold leading-tight">
              Spicy delicious chicken wings
            </h1>
            <p className="text-gray-900 opacity-60">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="flex items-center space-x-6">
              <span className="inline-flex items-center gap-1 justify-center rounded-full px-3 py-2 bg-[#DBEEF1] text-white">
                <Clock12 className="w-5 h-5  rounded-full" fill="black" />

                <p className="whitespace-nowrap text-sm text-gray-900 opacity-80">
                  30 Minutes
                </p>
              </span>

              <span className="inline-flex items-center gap-1 justify-center rounded-full px-3 py-2 bg-[#DBEEF1] text-white">
                <Utensils
                  className="w-5 h-5  rounded-full"
                  fill="black"
                  stroke="black"
                  strokeWidth={2}
                />

                <p className="whitespace-nowrap text-sm text-gray-900 opacity-80">
                  chicken
                </p>
              </span>
            </div>
            <div></div>
            <div className="flex justify-between lg:h-[100px] items-end">
              <div className="flex items-center space-x-3">
                <div className="w-[50px] h-[50px] overflow-hidden rounded-full bg-gray-200">
                  <Image
                    width={100}
                    height={100}
                    src={User}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-gray-600 font-semibold">
                    15 March 2022
                  </p>
                </div>
              </div>

              <button
                className=" rounded-[14px] border flex gap-2 justify-center items-center  bg-black px-5 py-3 text-[14px] text-sm font-medium text-white  "
                type="button"
              >
                View Recipe
                <CirclePlay
                  className="bg-white rounded-full w-4 h-4"
                  fill="black"
                />
              </button>
            </div>
          </div>
          <div className="relative bg-white w-full h-full">
            <div className="absolute inset-0  bg-contain bg-no-repeat bg-center opacity-10" />
            <Image
              src={Recipie}
              alt="Spicy chicken wings with dipping sauce"
              width={600}
              height={600}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
