import { Link } from "react-router-dom";
import type { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="sticky top-0 z-50 mx-auto min-h-fit max-w-7xl p-3">
      <nav
        className="flex items-center justify-between rounded-full p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xs"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo/Profile Section */}
        <div>
          <Link
            to="/"
            className="flex items-center justify-center gap-2"
            aria-label="Home - Sunny Jha"
          >
            <img
              src="src/assets/profilePic.jpg"
              alt="Sunny Jha profile"
              className="size-12 rounded-full object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <span className="text-lg font-extrabold tracking-tighter">
              SUNNY JHA
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className="flex items-center gap-2 pr-2 text-sm font-semibold text-neutral-500 sm:gap-4 sm:text-lg md:gap-6 md:text-xl lg:gap-8 lg:text-2xl"
          role="list"
        >
          <Link
            to="/projects"
            className="transition-colors hover:text-black"
            aria-label="View projects"
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="transition-colors hover:text-black"
            aria-label="Read blogs"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-black"
            aria-label="Contact information"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
