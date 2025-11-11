export default function HeroSection() {
  return (
    <div className="mt-10 mb-15 h-auto max-w-screen">
      <p className="px-6 text-center text-2xl font-bold text-neutral-500">
        Software Engineer focused on Full-Stack Development. I build scalable
        application and keep learning to grow personally and professionally
      </p>

      <div className="mt-8 flex justify-center gap-4 overflow-hidden">
        <a
          className="rounded-md border-2 border-black p-2 hover:border-neutral-500 hover:text-neutral-500"
          href="#about-me"
        >
          About me
        </a>
        <button className="cursor-pointer rounded-md border-2 bg-black p-2 text-white hover:bg-white hover:text-black">
          Get in touch
        </button>
      </div>
    </div>
  );
}
