export default function Card() {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:grid-cols-2"
      id="projects"
    >
      <div className="block w-full rounded-xl border p-6 shadow-lg">
        <a
          href="https://www.example.com"
          target="_blank"
          className="block overflow-hidden"
        >
          <img
            className="h-auto w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60"
            alt="project 1"
          />
        </a>

        <a href="https://www.example.com" target="_blank">
          <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight hover:text-neutral-400 sm:text-2xl">
            Streamlining your design process today.
          </h5>
        </a>

        <p className="mb-6 text-sm sm:text-base">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>

        <a
          href="https://www.example.com"
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

      {/* repeat same block for other cards */}

      <div className="block w-full rounded-xl border p-6 shadow-lg">
        <a
          href="https://www.example.com"
          target="_blank"
          className="block overflow-hidden"
        >
          <img
            className="h-auto w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60"
            alt="project 1"
          />
        </a>

        <a href="https://www.example.com" target="_blank">
          <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight hover:text-neutral-400 sm:text-2xl">
            Streamlining your design process today.
          </h5>
        </a>

        <p className="mb-6 text-sm sm:text-base">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>

        <a
          href="https://www.example.com"
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

      {/* repeat same block for other cards */}

      <div className="block w-full rounded-xl border p-6 shadow-lg">
        <a
          href="https://www.example.com"
          target="_blank"
          className="block overflow-hidden"
        >
          <img
            className="h-auto w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1762997455163-98123f974331?w=700&auto=format&fit=crop&q=60"
            alt="project 1"
          />
        </a>

        <a href="https://www.example.com" target="_blank">
          <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight hover:text-neutral-400 sm:text-2xl">
            Streamlining your design process today.
          </h5>
        </a>

        <p className="mb-6 text-sm sm:text-base">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>

        <a
          href="https://www.example.com"
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
    </div>
  );
}
