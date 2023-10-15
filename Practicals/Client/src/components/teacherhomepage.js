import React from "react";
import SideBar from "./CustomSideBar";
import TeacherForm from "./teacherform";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <TeacherForm />
    </div>
  );
}
