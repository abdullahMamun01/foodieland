import React from "react";
import User from "../../public/assets/user.png";
import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, InstagramIcon } from "lucide-react";

import Oval from "../../public/assets/Oval.png";
/* 
{
    id: 1,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    likes: "44,686",
    likedBy: "craig_love",
    caption:
      "The vegetables dishes need to have certain vitamin for those people",
    location: "Tokyo, Japan",
    timestamp: "September 19",
  },
*/

export default function Post({
  image,
  likes,
  likedBy,
  caption,
  location,
  timestamp,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-md overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={User}
              alt="Foodieland profile"
              width={320}
              height={320}
            />
          </div>
          <div>
            <p className=" text-[13px] lg:text-sm font-semibold flex items-center gap-1">
              Foodieland
              <span className="text-blue-500">•</span>
            </p>
            <p className="text-[11px] lg:text-xs text-gray-500">
              {location}
            </p>
          </div>
        </div>
        <button className="ml-auto">
          <span className="text-2xl leading-none">...</span>
        </button>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square max-md:h-[280px] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt="Instagram post"
          fill
          className="object-cover "
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <Heart className="w-5 h-5 md:w-6 md:h-6" />
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <Send className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <Bookmark className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        {/* Liked By Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={Oval}
              alt={`${likedBy} profile`}
              width={20}
              height={20}
            />
          </div>
          <p className="text-sm">
            Liked by <span className="font-semibold">{likedBy}</span> and{" "}
            <span className="font-semibold">others</span>
          </p>
        </div>

        {/* Caption */}
        <div className="space-y-1">
          <p className="text-sm line-clamp-2">
            <span className="font-semibold">Foodieland</span> {caption}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-[9px] font-[500] text-gray-400 uppercase">
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
