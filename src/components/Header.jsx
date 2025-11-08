import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-full">
      <nav className="flex">
        <div className="w-2/4">
          <a
            className="w-max h-full flex items-center gap-2 p-2"
            href="http://192.168.0.100:5173/">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="h-auto max-w-[2.2rem]  rounded-full"
            />
            <p className="font-serif  text-lg ">Sunny Jha</p>
          </a>
        </div>
        <div className="w-2/4 flex justify-end items-center gap-4 p-4 text-lg  font-medium">
          <Link
            className="hover:text-gray-400"
            to="http://192.168.0.100:5173/blogs">
            Blogs
          </Link>
          <button className="cursor-pointer  hover:text-gray-400">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
