import { FaStar } from "react-icons/fa";

export function HomePage() {
  return (
    <div className="col-span-12 grid grid-cols-5 gap-3">
      <div className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg shadow-xs">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex ">
              <FaStar className={`${"text-yellow-400"}`} />
            </div>
            <span className="text-sm font-semibold text-gray-900 line-clamp-1 mt-2">
              rating.created_user.name
            </span>
            <span className="text-xs text-gray-500 line-clamp-1">
              {new Date("").toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
