import Image from "next/image";
import { Clock, Utensils } from "lucide-react";
import RecepeImage from "../../public/assets2/recepie-image.png";
import Ads from "../../public/assets2/Ads.png";


const latestRecipes = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Snack",
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Fish",
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Breakfast",
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Meat",
  },
  {
    id: 6,
    title: "Fruity Pancake with Orange & Blueberry",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Sweet",
  },
  {
    id: 7,
    title: "The Best Easy One Pot Chicken and Rice",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Meat",
  },
  {
    id: 8,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: RecepeImage,
    time: "30 Minutes",
    type: "Pasta",
  },
];

export default function LatestRecipes() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-24">
        <h2 className="text-4xl font-bold mb-4">Simple and tasty recipes</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestRecipes.map((recipe, i) =>
            i === 5 ? (
              <div key={recipe.id} className="flex justify-center items-center">
                <Image
                  src={Ads}
                  alt={recipe.title}
                  width={400}
                  height={250}
                  className="object-contain mx-auto "
                />
              </div>
            ) : (
              <div
                key={recipe.id}
                className="rounded-[30px] w-[400px] h-[434px] overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD]"
              >
                <div className="w-full">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={300}
                    height={250}
                    className="object-contain mx-auto rounded-2xl "
                    style={{ width: "368px", height: "250px" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[24px] mb-4 line-clamp-2 text-gray-800">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" fill="black" stroke="white"/>
                      <span className="text-[14px] text-gray-600 font-semibold">
                        {recipe.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-5 h-5" fill="black" stroke="black"/>
                      <span className="text-[14px] text-gray-600 font-semibold">
                        {recipe.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
