import { HomeIcon, FireIcon, CollectionIcon, ClockIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white h-screen p-4 shadow-md sticky top-0">
      <div className="flex flex-col space-y-4">
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
          <HomeIcon className="w-6 h-6" />
          Home
        </button>
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
          <FireIcon className="w-6 h-6" />
          Trending
        </button>
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
          <CollectionIcon className="w-6 h-6" />
          Subscriptions
        </button>
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
          <ClockIcon className="w-6 h-6" />
          Library
        </button>
      </div>
    </aside>
  );
}
