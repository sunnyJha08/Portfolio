import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2" id="projects">
      <div className="flex flex-col overflow-hidden rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="relative h-auto w-full">
          <video
            src="#"
            poster="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          ></video>
          <button className="absolute inset-0 z-1 cursor-pointer">
            <CirclePlay className="mx-auto size-20" />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-5 tracking-tight">
          <Link
            to={"#"}
            className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl"
          >
            Spotify
          </Link>
          <p className="leading-5 text-neutral-500 sm:text-xl lg:text-2xl">
            Real-time music streaming platform with synchronized playback, live
            chat, and social listening features
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500 md:text-base lg:text-2xl">
              Technologies
            </p>
            <div className="bg-black p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
