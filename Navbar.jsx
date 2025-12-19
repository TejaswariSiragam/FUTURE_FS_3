export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow sticky top-0 z-50">
      <h1 className="text-red-600 font-bold text-2xl">YouTube</h1>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-full px-4 py-1 w-1/3"
      />
      <button className="bg-red-600 px-4 py-1 rounded text-white font-semibold">
        Sign In
      </button>
    </nav>
  );
}
