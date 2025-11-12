export default function LinkWithHoverText({ href, hoverText }) {
  return (
    <a href={href} className="hover:text-neutral-500">
      {hoverText}
    </a>
  );
}
