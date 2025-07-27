import React, { useState } from 'react';

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Class 10', section: 'A', teacher: 'Mr. Ahmed' },
    { id: 2, name: 'Class 9', section: 'B', teacher: 'Ms. Sara' },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">Class</th>
            <th className="py-2 px-4 text-left">Section</th>
            <th className="py-2 px-4 text-left">Class Teacher</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id} className="border-b">
              <td className="py-2 px-4">{cls.name}</td>
              <td className="py-2 px-4">{cls.section}</td>
              <td className="py-2 px-4">{cls.teacher}</td>
              <td className="py-2 px-4 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
