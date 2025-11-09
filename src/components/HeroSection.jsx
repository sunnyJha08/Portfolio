export default function HeroSection() {
  return (
    <div className="my-20 h-auto max-w-screen">
      <p className="px-5 text-center text-4xl font-bold">
        Software Engineer focused on Full-Stack Development. I build scalable
        application and keep learning to grow personally and professionally
      </p>

      <div className="mt-8 flex justify-center gap-4 overflow-hidden">
        <button className="rounded-md border-2 border-black p-2">
          About me
        </button>
        <button className="rounded-md border-white bg-black p-2 text-white">
          Get in touch
        </button>
      </div>
    </div>
  );
}
