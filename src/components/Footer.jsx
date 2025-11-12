import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex h-auto max-w-screen p-4">
      <div className="w-2/4">2025 | sunny</div>
      <div className="flex w-2/4 items-center justify-end gap-4 text-2xl">
        <Link
          to={"https://github.com/sunnyJha08"}
          className="hover:text-gray-400"
        >
          <FaGithub />
        </Link>
        <Link to={"https://x.com/SunnyJha08"} className="hover:text-gray-400">
          <FaXTwitter />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/sunny-jha-0b1b76309/"}
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
}
