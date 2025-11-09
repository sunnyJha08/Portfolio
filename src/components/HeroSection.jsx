export default function HeroSection() {
  return (
    <div className="max-w-screen h-auto ">
      <div className="mt-20  ">
        <p className="text-4xl font-bold px-5 text-center">
          Software Engineer focused on Full-Stack Development. I build scalable
          application and keep learning to grow personally and professionally
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4 overflow-hidden">
        <button className="border-2  border-black rounded-md p-2">
          About me
        </button>
        <button className="bg-black border-white text-white rounded-md p-2">
          Get in touch
        </button>
      </div>
    </div>
  );
}
