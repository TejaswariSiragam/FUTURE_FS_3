export default function VideoCard({ thumbnail, title, channel }) {
  return (
    <div className="cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-lg"
      />

      <div className="mt-2">
        <h3 className="text-sm font-semibold text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-xs">{channel}</p>
      </div>
    </div>
  );
}
