export default function ProjectCard({ src, alt }) {
  return (
    <div className="mx-6 mt-4 mb-10 max-w-full rounded-sm bg-stone-100 p-5 shadow-md">
      <img src={src} alt={alt} className="h-auto w-full rounded-lg" />
      <div className="mt-5">
        <div className="text-2xl font-semibold">Lorem dolor</div>
        <p className="mt-2 font-light text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam
          corporis earum!
        </p>
      </div>
    </div>
  );
}
