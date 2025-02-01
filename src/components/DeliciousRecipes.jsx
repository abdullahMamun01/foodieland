import Image from "next/image";
import { Clock, Utensils, Heart } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    time: "30 Minutes",
    category: "Western",
  },
  {
    id: 3,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 4,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "https://images.unsplash.com/photo-1464219222984-216ebffaaf85",
    time: "30 Minutes",
    category: "Eastern",
  },
  {
    id: 5,
    title: "Rainbow Chicken Salad with Almond Honey Mustard",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",

    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 6,
    title: "Barbeque Spicy Sandwiches with Fries",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586",
    time: "30 Minutes",
    category: "Western",
  },
  {
    id: 7,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082",
    time: "30 Minutes",
    category: "Eastern",
  },
  {
    id: 8,
    title: "Chicken Ramen Soup with Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",
    time: "30 Minutes",
    category: "Eastern",
  },
];

export default function DeliciousRecipes() {
  return (
    <section className="py-10 md:py-20 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 md:mb-20">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] md:text-5xl font-semibold  max-w-lg">
            Try this delicious recipe to make your day
          </h2>
          <p className="text-gray-500 leading-5 md:leading-0 max-w-xl text-xs md:text-sm lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, i) => (
            <div key={recipe.id} className="group mb-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart
                    className="w-[20px] h-[18px]"
                    fill={i === 0 || i === 2 || i == 5 ? "#FF6363" : "#DBE2E5"}
                    stroke="none"
                  />
                </button>
              </div>
              <h3 className="font-bold text-[16px] md:text-[18px] text-gray-900 mb-2 md:mb-3 line-clamp-2 mt-5 px-1">
                {recipe.title}
              </h3>
              <div className="flex items-center gap-6 text-gray-500 mt-5 md:mt-6">
                <div className="flex items-center gap-2 ">
                  <Clock className="w-[17px] md:w-[18px]" fill="#000000" stroke="white" />
                  <span className="text-[13px] md:text-sm font-[500] text-gray-900 opacity-60">
                    {recipe.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 ">
                  <Utensils className="w-[17px] md:w-[18px] h-[18px]" fill="#000000" stroke="black" />
                  <span className="text-[13px] md:text-sm text-gray-900 opacity-60 font-[500]">
                    {recipe.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
