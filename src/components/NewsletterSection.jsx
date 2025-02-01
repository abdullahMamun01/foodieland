import Image from "next/image";
import Salad from "../../public/assets2/salad.png";
import PhotoPlate from "../../public/assets2/photo-plate.png";
import Rucola from "../../public/assets2/rucola-png.png";
export default function NewsletterSection() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-[#E7F9FD] rounded-[35px] md:rounded-[60px] px-8 py-16 overflow-hidden">
          {/* Decorative Images - Left Side */}
          <div className="absolute left-0 bottom-10 md:bottom-0 ">
            <div className="relative w-[220px] h-[220px] md:w-[310px] md:h-[300px]">
              <Image
                 src={Salad}
                alt="Decorative vegetables"
                width={310}
                height={300}
                className="object-contain w-[310px] h-[300px]"
              />
            </div>
          </div>

          {/* Decorative Images - Right Side */}
          <div className="absolute right-0 bottom-0 ">
            <div className="relative w-[170px] h-[170px] md:w-[250px] md:h-[250px]">
              <Image
                 src={PhotoPlate}
                alt="Decorative vegetables"
                width={310}
                height={300}
                className="object-contain w-[310px] h-[300px]"
              />
            </div>
          </div>

          <div className="absolute left-[900px] bottom-12 ">
            <div className="relative w-[80px] h-[90px]">
              <Image
                 src={Rucola}
                alt="Decorative vegetables"
                fill
                className="object-contain w-[60px] h-[80px]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-[48px] font-semibold mb-4">
              Deliciousness to your inbox
            </h2>
            <p className="  max-w-full md:max-w-[615px] font-normal mx-auto text-base text-[14px]  md:tex-[16px] my-6 md:my-10 leading-7 text-center text-gray-900 opacity-60 mb-8">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <form className="  relative flex flex-col sm:flex-row gap-4 max-w-lg lg:max-w-md mx-auto overflow-hidden mt-14">
              <div className="relative inline-block py-8 bg-white rounded-2xl w-[360px] h-[65px]  lg:h-[80px] md:w-[480px] px-4">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="absolute top-2 right-0 lg:top-4 lg:right-2 px-10 py-3 border-none focus:outline-none rounded-full   focus:ring-black/5 w-full"
                />
                <button className="absolute top-3.5 right-2 lg:top-2.5 lg:right-2 w-[100px] h-[40px] lg:w-[160px] lg:h-[60px]  gap-0 rounded-[16px] text-[14px]  bg-black text-white hover:bg-gray-800">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
