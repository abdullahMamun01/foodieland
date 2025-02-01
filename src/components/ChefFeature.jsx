
import Image from "next/image"
import Chief from "../../public/assets/sheif.png"
import Tomato from '../../public/assets/tomato.png'
import Oninon from '../../public/assets/onion.png'
import Vega from '../../public/assets/vegan-mini.png'
import Meat from '../../public/assets/meat-mini.png'

export default function ChefFeature() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-20 ">
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[597px] lg:px-0 px-1">
        {/* Left Column - Text Content */}
        <div className="space-y-4 md:space-y-5 lg:space-y-6 h-full flex flex-col justify-center items-start">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold md:font-bold leading-tight">Everyone can be a <br className="hidden md:block" /> chef in their own kitchen</h2>
          <p className="text-gray-900 opacity-60 max-w-md text-[16px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqut enim ad minim
          </p>
          <button style={{ marginTop: '3.5rem' }} className="py-3 inline-block px-8 rounded-md text-white text-[14px] bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white transition duration-150 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Column - Chef Image with Floating Elements */}
        <div className="relative ">
          {/* Main Chef Image */}
          <div className="relative aspect-[3/3]  bottom-0  rounded-xl  bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD]">
            <Image
              src={Chief}
              alt="Chef holding a plate"
              width={710}
              height={597}
              className="object-contain w-[400px] h-[397px] lg:w-[710px] lg:h-[660px] absolute right-10"
              priority
            />
          </div>

          {/* Floating Food Elements */}
          <div className="absolute bottom-20 lg:bottom-32 left-0 animate-float-slow">
            <Image
              src={Tomato}
              alt="Meat"
              width={50}
              height={50}
              className="object-contain w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
            />
          </div>
          <div className="absolute top-20 lg:top-30 lg:top-40 left-8 animate-float-slow">
            <Image
              src={Meat}
              alt="Meat"
              width={80}
              height={80}
              className="object-contain h-[70px] w-[70px] lg:w-[80px] lg:h-[80px]"
            />
          </div>
          <div className="absolute right-20 lg:right-32 lg:top-32 top-24 animate-float-delayed">
            <Image
              src={Oninon}
              alt="Onion"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="absolute right-4 lg:right-8 top-40 lg:top-60  animate-float">
            <Image
              src={Vega}
              alt="Lettuce"
              width={70}
              height={70}
              className="object-contain w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

