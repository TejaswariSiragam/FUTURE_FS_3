export default function Home() {
  return (
    <div className="flex bg-[#0f0f0f] text-white min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-56 p-4 border-r border-gray-800">
        <h2 className="text-xl font-bold text-red-600 mb-6">YouTube</h2>

        <ul className="space-y-4 text-sm">
          <li className="hover:text-red-500 cursor-pointer">🏠 Home</li>
          <li className="hover:text-red-500 cursor-pointer">▶ Shorts</li>
          <li className="hover:text-red-500 cursor-pointer">📺 Subscriptions</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">

        {/* TOP BAR */}
        <div className="flex items-center mb-6">
          <input
            placeholder="Search"
            className="w-1/2 px-4 py-2 rounded-full bg-[#121212] border border-gray-700 focus:outline-none"
          />
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {/* VIDEO CARD */}
          <a
            href="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src="https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg"
              className="rounded-lg"
            />
            <p className="mt-2 text-sm font-semibold">
              React Tutorial for Beginners
            </p>
            <p className="text-xs text-gray-400">Code Academy</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
            target="_blank"
          >
            <img
              src="https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
              className="rounded-lg"
            />
            <p className="mt-2 text-sm font-semibold">
              Learn React in 30 Minutes
            </p>
            <p className="text-xs text-gray-400">Programming with Mosh</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=bMknfKXIFA8"
            target="_blank"
          >
            <img
              src="https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg"
              className="rounded-lg"
            />
            <p className="mt-2 text-sm font-semibold">
              Next.js Full Course
            </p>
            <p className="text-xs text-gray-400">JavaScript Mastery</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dGcsHMXbSOA"
            target="_blank"
          >
            <img
              src="https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg"
              className="rounded-lg"
            />
            <p className="mt-2 text-sm font-semibold">
              Build YouTube Clone
            </p>
            <p className="text-xs text-gray-400">Clever Programmer</p>
          </a>

        </div>
      </main>
    </div>
  );
}

