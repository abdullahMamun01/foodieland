import Image from "next/image";
import Link from "next/link";
import Breakfast from "../../public/assets2/breakfast.png";
import Vegan from "../../public/assets2/vegan.png";
import Meat from "../../public/assets2/meat.png";
import Dessert from "../../public/assets2/dessert.png";
import Luanch from "../../public/assets2/luanch.png";
import Chocolate from "../../public/assets2/chocolate.png";



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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[48px] font-bold">Categories</h2>
          <button
        
            className="bg-[#E7FAFE] px-6 py-4 rounded-2xl font-semibold text-[16px]  transition-colors duration-150 ease-in-out"
          >
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className={`${category.bgColor} rounded-3xl p-6 text-center transition-transform hover:scale-105`}
            >
              <div className="aspect-square relative mb-3 ">
                <Image
                  width={180}
                  height={202}
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  
                  className="object-contain p-2"
                />
              </div>
              <h3 className="font-bold text-[18px]">{category.name}</h3>
            </Link>
          ))}
        </div>

  
      </div>
    </section>
  );
}
