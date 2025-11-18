import { Link } from "react-router-dom";
import type { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav
      className="flex min-w-screen items-center justify-between p-2"
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
          <span className="text-lg font-bold tracking-tight">SUNNY JHA</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        className="flex gap-2 text-sm font-semibold text-neutral-500"
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
  );
};
