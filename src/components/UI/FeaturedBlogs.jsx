import LinkWithHoverText from "./LinkWithHoverText";

export default function FeaturedBlogs() {
  return (
    <div className="mx-6 mb-8 h-auto max-w-screen">
      <p className="my-6 border-b-4 border-double border-black text-2xl font-extralight italic">
        <LinkWithHoverText href={"#"} hoverText={"Lorem ipsum dolor sit."} />
      </p>
      <p className="my-6 border-b-4 border-double border-black text-2xl font-extralight italic">
        <LinkWithHoverText href={"#"} hoverText={"Lorem ipsum dolor sit."} />
      </p>
      <p className="my-6 border-b-4 border-double border-black text-2xl font-extralight italic">
        <LinkWithHoverText href={"#"} hoverText={"Lorem ipsum dolor sit."} />
      </p>
      <p className="my-6 border-b-4 border-double border-black text-2xl font-extralight italic">
        <LinkWithHoverText href={"#"} hoverText={"Lorem ipsum dolor sit."} />
      </p>
    </div>
  );
}
