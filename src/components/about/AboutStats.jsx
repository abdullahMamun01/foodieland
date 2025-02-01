import React from "react";

export default function AboutStats() {
  return (
    <section className="py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">15K+</div>
            <p className="text-gray-600">Recipes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">250K+</div>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">1.8M+</div>
            <p className="text-gray-600">Positive Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">80+</div>
            <p className="text-gray-600">Food Categories</p>
          </div>
        </div>
      </div>
    </section>
  );
}
