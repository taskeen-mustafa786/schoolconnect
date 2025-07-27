import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Student Dashboard</h2>
        {/* Sidebar links here */}
      </aside>
      <main className="w-full p-4">
        <Outlet /> {/* Render nested pages here */}
      </main>
    </div>
  );
}
