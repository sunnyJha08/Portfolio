export default function AboutMeCard() {
  return (
    <div className="mx-6 mt-4 mb-8 h-auto max-w-screen" id="about-me">
      <img
        src="src/assets/logo.png"
        alt="Profile picture"
        className="h-auto max-w-2/5 rounded-sm"
      />
      <div className="my-3">
        <h3 className="text-3xl font-semibold">Sunny Jha</h3>
        <p className="mt-2 text-neutral-500">
          I'm a Software Enginner niche into Full Stack development for web
          applications. I love to create beautiful and functional web
          experiences using the latest technologies and best practices in the
          industry. I'm passionate about coding, learning new things, and
          solving problems. When I'm not coding, you can find me exploring
          nature, reading books, playing video games, or in social activities.
        </p>
      </div>
    </div>
  );
}
