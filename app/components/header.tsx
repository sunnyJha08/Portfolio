import { NavLink } from "react-router";
import pp from "../assets/images/profilePic.jpg";
export default function Header() {
  return (
    <header className="max-w-3xl flex mx-auto items-center justify-between p-4">
      <NavLink to={"/"}>
        <img
          src={pp}
          alt="Logo"
          className="size-12 hover:scale-90 rounded-full object-cover shadow-md"
        />
      </NavLink>
      <nav className="flex gap-4">
        <NavLink to={"/blogs"}>Blogs</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
}
