import Image from "next/image";
import Link from "next/link";
import Breakfast from "../../public/assets/breakfast.png";
import Vegan from "../../public/assets/vegan.png";
import Meat from "../../public/assets/meat.png";
import Dessert from "../../public/assets/dessert.png";
import Luanch from "../../public/assets/luanch.png";
import Chocolate from "../../public/assets/chocolate.png";



const categories = [
  {
    name: "Breakfast",
    icon: Breakfast,
    bgColor: "bg-gray-50",
  },
  {
    name: "Vegan",
    icon: Vegan,
    bgColor: "bg-green-50",
  },
  {
    name: "Meat",
    icon: Meat,
    bgColor: "bg-red-50",
  },
  {
    name: "Dessert",
    icon: Dessert,
    bgColor: "bg-yellow-50",
  },
  {
    name: "Lunch",
    icon: Luanch,
    bgColor: "bg-orange-50",
  },
  {
    name: "Chocolate",
    icon: Chocolate,
    bgColor: "bg-brown-50",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-[40px] md:py-[70px] lg-[75px] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[25px] md:text-[40px] lg:text-[48px] font-bold">Categories</h2>
          <button
        
            className="bg-[#E7FAFE]  px-5 py-3  lg:px-6 lg:py-4 rounded-lg lg:rounded-2xl font-semibold text-[12px] md:text-sm lg:text-[16px]  transition-colors duration-150 ease-in-out"
          >
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className={`${category.bgColor} rounded-3xl px-4 md:p-5 lg:p-6 text-center transition-transform hover:scale-105`}
            >
              <div className="aspect-square relative mb-2 lg:mb-3 flex items-center justify-center">
                <Image
                  width={180}
                  height={202}
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  
                  className="object-contain p-1 md:p-1.5 lg:p-2 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto"
                />
              </div>
              <h3 className="font-bold mb-4 md:mb-2 lg:mb-1  text-[16px] md:text-[20px] lg:text-[18px]">{category.name}</h3>
            </Link>
          ))}
        </div>

  
      </div>
    </section>
  );
}
