import CategoriesSection from "@/components/CategoriesSection";
import ChefFeature from "@/components/ChefFeature";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import LatestRecipes from "@/components/LatestRecipes";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <LatestRecipes />
      <ChefFeature/>
      <InstagramSection/>
    </main>
  );
}
