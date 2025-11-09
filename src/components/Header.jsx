import { Link } from "react-router-dom";
import ContactForm from "./ContactForm.jsx";

function Header() {
  return (
    <div className="h-auto max-w-screen">
      <nav className="flex">
        <div className="w-2/4">
          <Link
            className="flex h-full w-max items-center gap-2 p-2"
            href="http://192.168.0.100:5173/"
          >
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="h-auto max-w-[2.2rem] rounded-full"
            />
            <p className="text-lg font-medium tracking-tighter">Sunny jha</p>
          </Link>
        </div>
        <div className="flex w-2/4 items-center justify-end gap-4 p-4 text-lg font-light">
          <Link
            className="hover:text-gray-400"
            to="http://192.168.0.100:5173/blogs"
          >
            Blogs
          </Link>
          <button className="cursor-pointer hover:text-gray-400">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
