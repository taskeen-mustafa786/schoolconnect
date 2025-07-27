import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, IdentificationIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      cnic: "",
      gender: "",
      role: "student",
      class: "",
      section: "",
      subject: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      cnic: Yup.string()
        .matches(/^\d{5}-\d{7}-\d{1}$/, "CNIC must be in xxxxx-xxxxxxx-x format")
        .required("CNIC is required"),
      role: Yup.string().required("Role is required"),
      class: Yup.string().required("Class is required"),
      section: Yup.string().required("Section is required"),
      subject: Yup.string().when("role", {
        is: "teacher",
        then: Yup.string().required("Subject is required"),
        otherwise: Yup.string(),
      }),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  const handleCNICChange = (e) => {
    const cnic = e.target.value;
    formik.setFieldValue("cnic", cnic);
    if (/^\d{5}-\d{7}-\d{1}$/.test(cnic)) {
      const genderDigit = parseInt(cnic.charAt(cnic.length - 1));
      const deducedGender = genderDigit % 2 === 0 ? "Female" : "Male";
      setGender(deducedGender);
      formik.setFieldValue("gender", deducedGender);
    } else {
      setGender("");
      formik.setFieldValue("gender", "");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full transition-all">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Register New User</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="relative">
            <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>}
          </div>

          {/* CNIC */}
          <div className="relative">
            <IdentificationIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="CNIC (xxxxx-xxxxxxx-x)"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              value={formik.values.cnic}
              onChange={handleCNICChange}
            />
            {formik.touched.cnic && formik.errors.cnic && <div className="text-red-500 text-sm mt-1">{formik.errors.cnic}</div>}
          </div>

          {/* Gender */}
          {gender && (
            <div className="text-sm text-gray-600">
              Detected Gender: <span className="font-semibold text-blue-700">{gender}</span>
            </div>
          )}

          {/* Role */}
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            {...formik.getFieldProps("role")}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* Class */}
          <input
            type="text"
            placeholder="Class"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            {...formik.getFieldProps("class")}
          />
          {formik.touched.class && formik.errors.class && <div className="text-red-500 text-sm mt-1">{formik.errors.class}</div>}

          {/* Section */}
          <input
            type="text"
            placeholder="Section"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            {...formik.getFieldProps("section")}
          />
          {formik.touched.section && formik.errors.section && <div className="text-red-500 text-sm mt-1">{formik.errors.section}</div>}

          {/* Subject (only for teacher) */}
          {formik.values.role === "teacher" && (
            <>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>}
            </>
          )}

          {/* Password */}
          <div className="relative">
            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
