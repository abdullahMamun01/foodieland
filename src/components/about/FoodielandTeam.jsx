import {
    Facebook,
    Twitter,
    Instagram
  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Team1 from "../../../public/assets/team-1.jpg";
import Team2 from "../../../public/assets/team-2.jpg";
import Team3 from "../../../public/assets/team-5.jpg";
import Team4 from "../../../public/assets/team-4.jpg";
export default function FoodielandTeam() {
  return (
    <section className="py-20 lg:py-32 bg-white max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Culinary Experts</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Emily Chen", role: "Executive Chef" ,image: Team1 },
              { name: "John Doe", role: "Head of Photography" ,image: Team2},
              { name: "Sarah Johnson", role: "Nutritionist" ,image: Team3 },
              { name: "John Doe", role: "Head of Photography" ,image: Team4},
            
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={700}
                    height={700}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Facebook className="h-5 w-5" stroke="none" fill="black"/>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Twitter className="h-5 w-5" stroke="none" fill="black"/>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Instagram className="h-5 w-5" stroke="white" fill="black"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
