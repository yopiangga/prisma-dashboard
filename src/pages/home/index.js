import { FaStar } from "react-icons/fa";
import { FaDatabase, FaHospital, FaUsers } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

export function HomePage() {
  return (
    <div className="col-span-12 grid lg:grid-cols-5 grid-cols-2 gap-3">
      <Card title="Total Hospital" icon={<FaHospital />} value="10" />
      <Card title="Total Doctor" icon={<FaUsers />} value="10" />
      <Card title="Total Patient" icon={<FaUsers />} value="10" />
      <Card title="Total Medical Record" icon={<FaDatabase />} value="10" />
      <Card title="Total User" icon={<FaUsers />} value="10" />
    </div>
  );
}

function Card({ title, icon, value }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg shadow-xs">
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="flex ">{icon}</div>
          <span className="text-sm font-semibold text-gray-900 line-clamp-1 mt-2">
            {value}
          </span>
          <span className="text-xs text-gray-500 line-clamp-1">{title}</span>
        </div>
      </div>
    </div>
  );
}
