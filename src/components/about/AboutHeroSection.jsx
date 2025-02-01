import React from "react";

export default function AboutHeroSection() {
  return (
    <section
      className="relative min-h-[450px] bg-no-repeat bg-opacity-10 bg-center bg-cover py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.deliveryhero.io/image/foodpanda/home-vendor-bd.jpg?width=1264&height=808.96)`,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#E7F9FD00] to-[#E7F9FD] opacity-70"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            We're a team of food lovers and cooking enthusiasts
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover the story behind Foodieland and our passion for sharing
            delicious recipes with food lovers around the world
          </p>
        </div>
      </div>
    </section>
  );
}
