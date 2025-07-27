import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";

// Layouts for roles
import StudentLayout from "./layouts/StudentLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import AdminLayout from "./layouts/AdminLayout";

// Role-based dashboards and pages
import StudentDashboard from "./pages/student/Dashboard";
import TeacherDashboard from "./pages/teacher/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import RegisterUser from "./pages/admin/RegisterUser";
import UserList from "./pages/admin/UserList";
import ManageClasses from "./pages/admin/ManageClasses";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Student Routes */}
        <Route element={<StudentLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Teacher Routes */}
        <Route element={<TeacherLayout />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>

        {/* Admin Routes - Nested under /admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="users" element={<UserList />} />
          <Route path="manage-classes" element={<ManageClasses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
