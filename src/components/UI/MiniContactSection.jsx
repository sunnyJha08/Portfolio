export default function () {
  return (
    <div className="mx-6 max-w-screen rounded-sm bg-stone-100 p-5">
      <div>
        <p className="text-3xl font-semibold">Let's Talk</p>
        <p className="text-lg font-semibold">
          Drop in your email ID and I will get back to you.
        </p>
      </div>
      <hr />
      <div>
        <form method="post" className="relative">
          <input
            type="email"
            placeholder="sunny.aayu08@gmail.com"
            autoComplete="email"
            className="my-2 w-full rounded-sm bg-black p-3 text-white"
          />
          <button
            type="submit"
            className="absolute top-3.5 right-1 rounded-sm border-2 border-white px-2 py-1 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
