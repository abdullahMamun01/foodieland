import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";
import AboutStats from "@/components/about/AboutStats";
import FoodielandStory from "@/components/about/FoodielandStory";
import FoodielandTeam from "@/components/about/FoodielandTeam";
import AboutHeroSection from "@/components/about/AboutHeroSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Stats Section */}
      <AboutStats />

      {/* Story Section */}
      <FoodielandStory />

      {/* Team Section */}
      <FoodielandTeam />

      {/* Contact Section */}
      <section className="py-16 bg-whit">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">hello@foodieland.com</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Foodie Street
                  <br />
                  Cooking City, FC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="mt-10">
        <NewsletterSection />
      </div>
    </div>
  );
}
