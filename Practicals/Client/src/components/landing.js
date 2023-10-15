import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container-cs">
      <div className="child">
        <button style={{ height: "100px", width: "100px", margin: "20px" }}>
          <Link to={"/studentlogin"}>Parent</Link>
        </button>
        <button style={{ height: "100px", width: "100px", margin: "20px" }}>
          <Link to={"/teacherlogin"}>Teacher</Link>
        </button>
      </div>
    </div>
  );
}
