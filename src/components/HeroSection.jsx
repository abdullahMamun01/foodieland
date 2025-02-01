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
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="max-w-7xl lg:min-h-[640px] mx-auto  bg-[#E7FAFE] rounded-3xl my-4 md:my-8">
        <div className="relative grid md:grid-cols-2 gap-12 items-center h-full md:py-0 pt-4">
          <Image
            src={Badge}
            alt="Badge"
            
            className="  w-[70px] h-[70px]  lg:w-32 lg:h-32  rounded-s-full absolute left-0 top-[450px] md:top-[105px] z-[100] md:left-1/2 ml-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="space-y-6 px-6 md:px-8 lg:px-10">
            <div className="inline-flex items-center px-4 py-2  md:py-3 md:px-5 gap-2 font-bold rounded-full text-[12px] md:text-[14px]  bg-white text-black">
              <CookingPot className="md:w-5 md:h-5 w-4 h-4" stroke="#C6A07A" />{" "}
              Hot Recipes
            </div>
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px]  lg:max-w-md  font-bold leading-tight">
              Spicy delicious chicken wings
            </h1>
            <p className="text-gray-900 opacity-60 text-[14px] md:text-[16px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="flex items-center space-x-6">
              <span className="inline-flex items-center gap-1 justify-center rounded-full px-2 py-1.5 md:px-3 md:py-2 bg-[#DBEEF1] text-white">
                <Clock12
                  className="md:w-5 md:h-5 w-4 h-4  rounded-full"
                  fill="black"
                />

                <p className="whitespace-nowrap text-[12px] md:text-sm text-gray-900 opacity-80">
                  30 Minutes
                </p>
              </span>

              <span className="inline-flex items-center gap-1 justify-center rounded-full md:px-3 md:py-2 px-2.5 py-1.5 bg-[#DBEEF1] text-white">
                <Utensils
                  className="md:w-5 md:h-5 w-4 h-4  rounded-full"
                  fill="black"
                  stroke="black"
                  strokeWidth={2}
                />

                <p className="whitespace-nowrap text-[12px] md:text-sm text-gray-900 opacity-80">
                  chicken
                </p>
              </span>
            </div>
            <div></div>
            <div className="flex justify-between lg:h-[100px] items-end">
              <div className="flex items-center space-x-3">
                <div className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] overflow-hidden rounded-full bg-gray-200">
                  <Image
                    width={100}
                    height={100}
                    src={User}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    John Smith
                  </p>
                  <p className="text-[10px] md:text-[12px] lg:text-sm text-gray-600 font-semibold">
                    15 March 2022
                  </p>
                </div>
              </div>

              <button
                className="rounded-[10px] lg:rounded-[14px] border flex gap-2 justify-center items-center  bg-black px-4 py-2 lg:px-5 lg:py-3 text-[12px] lg:text-[14px] text-sm font-medium text-white  "
                type="button"
              >
                View Recipe
                <CirclePlay
                  className="bg-white rounded-full w-3 h-3 lg:w-4 lg:h-4"
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
              className="md:rounded-tr-[30px] md:rounded-br-[30px] w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
