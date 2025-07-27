import React, { useState, useEffect } from 'react';

// Dummy data for now (this should be fetched from the backend)
const dummyUsers = [
  { id: 1, name: 'John Doe', role: 'Teacher', CNIC: '12345-1234567-1', class: '10', section: 'A' },
  { id: 2, name: 'Jane Smith', role: 'Student', CNIC: '12345-1234567-2', class: '9', section: 'B' },
  { id: 3, name: 'Mark Johnson', role: 'Teacher', CNIC: '12345-1234567-3', class: '11', section: 'C' },
  { id: 4, name: 'Sarah Lee', role: 'Student', CNIC: '12345-1234567-4', class: '10', section: 'A' },
];

const UserList = () => {
  const [users, setUsers] = useState({ teachers: [], students: [] });
  const [filteredUsers, setFilteredUsers] = useState({ teachers: [], students: [] });
  const [searchText, setSearchText] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    const teachers = dummyUsers.filter(user => user.role === 'Teacher');
    const students = dummyUsers.filter(user => user.role === 'Student');
    setUsers({ teachers, students });
    setFilteredUsers({ teachers, students });
  }, []);

  useEffect(() => {
    const filterUsers = (users) => {
      return users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchText.toLowerCase()) ||
                              user.CNIC.includes(searchText);
        const matchesClass = selectedClass ? user.class === selectedClass : true;
        const matchesSection = selectedSection ? user.section === selectedSection : true;
        return matchesSearch && matchesClass && matchesSection;
      });
    };

    setFilteredUsers({
      teachers: filterUsers(users.teachers),
      students: filterUsers(users.students),
    });
  }, [searchText, selectedClass, selectedSection, users]);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setUsers({
      teachers: users.teachers.filter(user => user.id !== id),
      students: users.students.filter(user => user.id !== id),
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">User List</h2>

      {/* Search Bar */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or CNIC"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="p-3 border border-gray-300 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by Class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
        </select>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="p-3 border border-gray-300 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by Section</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      {/* Teachers Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Teachers</h3>
        <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">CNIC</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.teachers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.CNIC}</td>
                <td className="p-3">{user.class}</td>
                <td className="p-3">{user.section}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Students Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Students</h3>
        <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">CNIC</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.students.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.CNIC}</td>
                <td className="p-3">{user.class}</td>
                <td className="p-3">{user.section}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
