import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, InstagramIcon } from "lucide-react";
import User from "../../public/assets/user.png";
import Oval from "../../public/assets/Oval.png";
const instagramPosts = [
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
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1565299543923-37dd37887442",
    likes: "44,686",
    likedBy: "craig_love",
    caption:
      "Sweet food can bring someone into happiness as long as they don't eat to much",
    location: "Tokyo, Japan",
    timestamp: "September 19",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    likes: "44,686",
    likedBy: "craig_love",
    caption:
      "What are you doing before start cooking? prepare the tools or ingredients?",
    location: "Tokyo, Japan",
    timestamp: "September 19",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    likes: "44,686",
    likedBy: "craig_love",
    caption:
      "Steak never be wrong, it's suitable for you who want romantic dinner",
    location: "Tokyo, Japan",
    timestamp: "September 19",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-10 md:py-20 lg:py-24 bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] min-h-[964px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="lg:text-center max-w-4xl mx-auto mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-[25px] md:text-[40px] lg:text-[48px] font-bold mb-4">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-gray-900 opacity-60 text-[12px] md:text-[14px] lg:text-[16px] max-w-3xl lg:max-w-3.5xl text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-100 rounded-md overflow-hidden"
            >
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
                    <p className="text-[11px] lg:text-xs text-gray-500">{post.location}</p>
                  </div>
                </div>
                <button className="ml-auto">
                  <span className="text-2xl leading-none">...</span>
                </button>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square ">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  fill
                  className="object-cover"
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
                      alt={`${post.likedBy} profile`}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-sm">
                    Liked by{" "}
                    <span className="font-semibold">{post.likedBy}</span> and{" "}
                    <span className="font-semibold">others</span>
                  </p>
                </div>

                {/* Caption */}
                <div className="space-y-1">
                  <p className="text-sm line-clamp-2">
                    <span className="font-semibold">Foodieland</span>{" "}
                    {post.caption}
                  </p>
                  
                </div>

                <div className="mt-4">
                  <p className="text-[9px] font-[500] text-gray-400 uppercase">
                    {post.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Button */}
        <div className="flex justify-center mt-10 md:mt-20">
          <button className="flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-3 bg-gray-950 text-white rounded-xl font-inter text-xs md:text-sm lg:text-[14px] font-semibold leading-[16.94px] tracking-[-0.02em] text-left  decoration-skip-ink-none">
            <span className="text-[10px] lg:text-sm p-1">Visit Our Instagram</span>
            <InstagramIcon className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] md:mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
