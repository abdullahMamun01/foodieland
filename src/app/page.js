import CategoriesSection from "@/components/CategoriesSection";
import ChefFeature from "@/components/ChefFeature";
import DeliciousRecipes from "@/components/DeliciousRecipes";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import LatestRecipes from "@/components/LatestRecipes";
import NewsletterSection from "@/components/NewsletterSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <LatestRecipes />
      <ChefFeature/>
      <InstagramSection/>
      <DeliciousRecipes/>
      <NewsletterSection/>
   
    </main>
  );
}
