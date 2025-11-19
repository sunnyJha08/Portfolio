import { Link } from "react-router-dom";
import { type FC } from "react";
export const Navbar: FC = () => {
  const links = [
    { name: "Projects", to: "/projects", ariaLabel: "View projects" },
    { name: "Blogs", to: "/blogs", ariaLabel: "Read blogs" },
    { name: "Contact", to: "/contact", ariaLabel: "Contact information" },
  ];

  return (
    <div className="sticky top-0 z-50 mx-auto min-h-fit max-w-7xl p-2">
      <nav
        className="flex items-center justify-between rounded-full p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xs sm:p-[0.4rem] md:p-[0.7rem]"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo/Profile Section */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          aria-label="Home - Sunny Jha"
        >
          <img
            src="src/assets/profilePic.jpg"
            alt="Sunny Jha profile"
            className="size-12 rounded-full object-cover sm:size-13 md:size-14 lg:size-15"
            loading="lazy"
          />
        </Link>

        {/* Navigation Links */}

        <div
          className="flex items-center gap-4 font-semibold text-neutral-500 sm:gap-4 sm:text-lg md:gap-6 md:text-xl lg:gap-8 lg:text-2xl"
          role="list"
        >
          {links.map((link, idx) => (
            <Link
              className="transition-all duration-300 ease-in-out hover:text-black"
              to={link.to}
              key={idx}
              aria-label={link.ariaLabel}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
