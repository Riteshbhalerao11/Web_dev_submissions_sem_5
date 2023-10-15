import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import TeacherSignUp from "./components/teachersignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherLogin from "./components/teacherlogin";
import { PrivateRoute } from "./privateroute";
import TeacherHomePage from "./components/teacherhomepage";
import LandingPage from "./components/landing";
import StudentSignUp from "./components/studentsignup";
import StudentLogin from "./components/studentlogin";
import ParentHomePage from "./components/UnitList";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<TeacherHomePage />} />
          </Route>
          <Route path="/teachersignup" element={<TeacherSignUp />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/parent" element={<ParentHomePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
