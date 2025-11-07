import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-700 max-w-full">
      <nav className="flex">
        <div className="w-2/4">
          <a
            className="w-max h-auto flex items-center gap-2 p-2"
            href="http://localhost:5173/">
            <img
              src="../../../public/assets/logo.png"
              alt="Logo"
              className="h-auto max-w-[2.2rem]  rounded-full"
            />
            <p>Sunny Jha</p>
          </a>
        </div>
        <div className="w-2/4 flex justify-end items-center gap-8 p-4 text-white">
          <Link to="http://localhost:5173/blogs">Blogs</Link>
          <button className="cursor-pointer">Contact</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
