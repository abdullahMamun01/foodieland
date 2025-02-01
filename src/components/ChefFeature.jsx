
import Image from "next/image"
import Chief from "../../public/assets2/sheif.png"
import Tomato from '../../public/assets2/tomato.png'
import Oninon from '../../public/assets2/onion.png'
import Vega from '../../public/assets2/vegan-mini.png'
import Meat from '../../public/assets2/meat-mini.png'

export default function ChefFeature() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-20 ">
      <div className="grid md:grid-cols-2 gap-8 items-center max-h-[597px]">
        {/* Left Column - Text Content */}
        <div className="space-y-6 h-full flex flex-col justify-center items-start">
          <h2 className="text-[48px] font-bold leading-tight lg:mt-10">Everyone can be a <br /> chef in their own kitchen</h2>
          <p className="text-gray-700 max-w-md">
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
              className="object-contain w-[710px] h-[660px] absolute right-10"
              priority
            />
          </div>

          {/* Floating Food Elements */}
          <div className="absolute bottom-32 left-0 animate-float-slow">
            <Image
              src={Tomato}
              alt="Meat"
              width={50}
              height={50}
              className="object-contain w-[40px] h-[40px]"
            />
          </div>
          <div className="absolute top-40 left-8 animate-float-slow">
            <Image
              src={Meat}
              alt="Meat"
              width={80}
              height={80}
              className="object-contain w-[80px] h-[80px]"
            />
          </div>
          <div className="absolute right-32 top-32 animate-float-delayed">
            <Image
              src={Oninon}
              alt="Onion"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="absolute right-8 top-60  animate-float">
            <Image
              src={Vega}
              alt="Lettuce"
              width={70}
              height={70}
              className="object-contain w-[70px] h-[70px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

