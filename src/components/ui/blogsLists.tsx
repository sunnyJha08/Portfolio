type BlogEntry = {
  date: string;
  title: string;
  description: string;
  link?: string;
};

const blogEntries: BlogEntry[] = [
  {
    date: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    link: "#",
  },
  {
    date: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    date: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

function BlogItem({ date, title, description, link }: BlogEntry) {
  return (
    <li className="ms-4 mb-10 last:mb-0">
      <div className="bg-neutral-quaternary border-buffer absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>

      <time className="text-body text-sm leading-none font-normal">{date}</time>

      <h3 className="text-heading my-2 text-lg font-semibold">{title}</h3>

      <p className="text-body mb-4 text-base font-normal">{description}</p>

      {link && (
        <a
          href={link}
          className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary rounded-base box-border inline-flex items-center border px-4 py-2.5 text-sm leading-5 font-medium shadow-xs focus:ring-4 focus:outline-none"
        >
          Learn more
          <svg
            className="ms-1.5 -me-0.5 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      )}
    </li>
  );
}

export default function BlogsLists() {
  return (
    <div>
      <ol className="border-default relative border-s">
        {blogEntries.map((entry, idx) => (
          <BlogItem key={idx} {...entry} />
        ))}
      </ol>
    </div>
  );
}
