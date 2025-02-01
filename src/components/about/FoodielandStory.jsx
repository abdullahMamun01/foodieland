import Image from "next/image";
import React from "react";

export default function FoodielandStory() {
  return (
    <section className="py-16 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2020, Foodieland began as a small blog sharing family
              recipes. Today, we've grown into a global community of food
              enthusiasts, home chefs, and culinary experts. Our mission is to
              make cooking accessible, enjoyable, and inspiring for everyone.
            </p>
            <p className="text-gray-600">
              We believe that good food brings people together, creates
              memories, and makes life more delicious. Through our carefully
              curated recipes, cooking tips, and food stories, we aim to inspire
              people to explore the joy of cooking. Whether you're a beginner or
              a seasoned chef, our community is here to support and inspire you
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
