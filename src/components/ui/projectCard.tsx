export default function Card() {
  const projectCards = [
    {
      href: "https://www.example.com",
      img: "https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60",
      imgAlt: "project 1",
      projectName: "ITHub.",
      projectDesc:
        "In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.",
      githubLink: "https://github.com/sunnyJha08",
    },

    {
      href: "https://www.example.com/app-tracker",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=60",
      imgAlt: "project 2",
      projectName: "TaskFlow.",
      projectDesc:
        "A productivity app that streamlines task management and boosts workflow efficiency for teams.",
      githubLink: "https://github.com/sunnyJha08/taskflow",
    },

    {
      href: "https://www.example.com/ecommerce",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=700&auto=format&fit=crop&q=60",
      imgAlt: "project 3",
      projectName: "ShopEase.",
      projectDesc:
        "A modern e-commerce platform offering secure payments, dynamic product filtering, and optimized UI.",
      githubLink: "https://github.com/sunnyJha08/shopease",
    },

    {
      href: "https://www.example.com/ai-tool",
      img: "https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60",
      imgAlt: "project 4",
      projectName: "InsightAI.",
      projectDesc:
        "An AI-powered analytics dashboard providing real-time insights and automated reporting.",
      githubLink: "https://github.com/sunnyJha08/insightai",
    },
  ];

  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:grid-cols-2"
      id="projects"
    >
      {projectCards.map((card, idx) => (
        <div className="block w-full rounded-xl border p-6 shadow-lg" key={idx}>
          <a href={card.href} target="_blank" className="block overflow-hidden">
            <img
              className="h-auto w-full rounded-xl object-cover"
              src={card.img}
              alt={card.imgAlt}
            />
          </a>

          <a href={card.href} target="_blank">
            <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight hover:text-neutral-400 sm:text-2xl">
              {card.projectName}
            </h5>
          </a>

          <p className="mb-6 text-sm sm:text-base">{card.projectDesc}</p>

          <a
            href={card.githubLink}
            target="_blank"
            className="inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-medium shadow-xs focus:ring-4 focus:outline-none"
          >
            Github
            <svg
              className="ms-1.5 -me-0.5 h-4 w-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
