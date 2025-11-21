import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      id="projects"
    >
      <div className="flex flex-col rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="relative h-40 w-full overflow-hidden bg-red-100">
          <img
            src="https://cdn.stocksnap.io/img-thumbs/280h/PSVLQHIH6O.jpg"
            alt="project 1"
            className="absolute top-10 left-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-3 p-5 tracking-tight">
          <Link to={"#"} className="text-2xl font-bold">
            Spotify
          </Link>
          <p className="leading-5 text-neutral-500">
            Real-time music streaming platform with synchronized playback, live
            chat, and social listening features
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Technologies</p>
            <div className="bg-black p-6"></div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
