import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div
      className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:gap-9"
      id="projects"
    >
      <div className="flex h-auto flex-col overflow-hidden rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="h-[50%] w-full content-center bg-neutral-100">
          <video
            src="#"
            poster="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            className="relative mx-auto h-[90%] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          ></video>
        </div>
        <div className="mx-auto flex h-[50%] flex-col gap-2 p-2 tracking-tight md:gap-4 lg:gap-6">
          <Link
            to={"#"}
            className="text-lg font-extrabold uppercase hover:text-neutral-400 md:text-2xl lg:text-4xl"
          >
            Spotify
          </Link>
          <p className="leading-tight font-medium text-neutral-400 md:text-xl lg:text-2xl">
            Real-time music streaming platform with synchronized playback, live
            chat, and social listening features
          </p>
          <p className="grow text-sm text-neutral-400 md:text-base lg:text-lg">
            Technologies
            <div className="h-full w-full bg-red-600">Logo's carousel</div>
          </p>
        </div>
      </div>
      <div className="flex h-auto flex-col overflow-hidden rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="h-[50%] w-full content-center bg-neutral-100">
          <video
            src="#"
            poster="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            className="relative mx-auto h-[90%] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          ></video>
        </div>
        <div className="mx-auto flex h-[50%] flex-col gap-2 p-2 tracking-tight md:gap-4 lg:gap-6">
          <Link
            to={"#"}
            className="text-lg font-extrabold uppercase hover:text-neutral-400 md:text-2xl lg:text-4xl"
          >
            Spotify
          </Link>
          <p className="leading-tight font-medium text-neutral-400 md:text-xl lg:text-2xl">
            Real-time music streaming platform with synchronized playback, live
            chat, and social listening features
          </p>
          <p className="grow text-sm text-neutral-400 md:text-base lg:text-lg">
            Technologies
            <div className="h-full w-full bg-red-600">Logo's carousel</div>
          </p>
        </div>
      </div>
      <div className="flex h-auto flex-col overflow-hidden rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="h-[50%] w-full content-center bg-neutral-100">
          <video
            src="#"
            poster="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            className="relative mx-auto h-[90%] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          ></video>
        </div>
        <div className="mx-auto flex h-[50%] flex-col gap-2 p-2 tracking-tight md:gap-4 lg:gap-6">
          <Link
            to={"#"}
            className="text-lg font-extrabold uppercase hover:text-neutral-400 md:text-2xl lg:text-4xl"
          >
            Spotify
          </Link>
          <p className="leading-tight font-medium text-neutral-400 md:text-xl lg:text-2xl">
            Real-time music streaming platform with synchronized playback, live
            chat, and social listening features
          </p>
          <p className="grow text-sm text-neutral-400 md:text-base lg:text-lg">
            Technologies
            <div className="h-full w-full bg-red-600">Logo's carousel</div>
          </p>
        </div>
      </div>
    </div>
  );
}
