import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="mx-auto flex max-w-xs items-center justify-between bg-(--background-color) p-2">
      <div>
        <Link to={"/"}>
          <img
            src="../../src/assets/profilePic.jpg"
            alt="profile picture"
            className="h-auto w-10 rounded-full border border-white"
          />
        </Link>
      </div>
      <div>
        <Link to={"/contact/"} className="text-(--primary-color)">
          Contact
        </Link>
      </div>
    </div>
  );
}
