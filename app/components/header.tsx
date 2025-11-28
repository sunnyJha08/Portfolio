import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <img src="#" alt="Logo" />
      </NavLink>
      <nav>
        <NavLink to={"/blogs"}>Blogs</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
}
