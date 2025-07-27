import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold">Students</h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold">Teachers</h2>
          <p className="text-3xl font-bold text-green-600">15</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold">Classes</h2>
          <p className="text-3xl font-bold text-purple-600">10</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold">Subjects</h2>
          <p className="text-3xl font-bold text-yellow-500">30</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 space-x-4">
        <button
          onClick={() => navigate("/admin/register")}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Register User
        </button>
        <button
          onClick={() => navigate("/admin/manage-classes")}
          className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Manage Classes
        </button>
      </div>
    </div>
  );
}
