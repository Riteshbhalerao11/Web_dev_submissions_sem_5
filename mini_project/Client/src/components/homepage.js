import React from "react";
import SideBar from "./CustomSideBar";
import UnitList from "./UnitList";
import Langs from "../assets/Langs.jpg";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar selected="home" />
      <UnitList />
      <img src={Langs} alt="" style={{ height: "100vh", width: "50%" }} />
    </div>
  );
}
