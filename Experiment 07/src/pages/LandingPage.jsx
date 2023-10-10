import React, { useState } from "react";
import LPNavbar from "../Components/LandingPageComps/LPNavbar";
import LPSidebar from "../Components/LandingPageComps/LPSidebar";
import "./LandingPage.css";
// import '../custom.scss'
import MainContent from "./MainContent";

const sections = ["Home", "Profile", "Patient", "Logout", "Settings"];
const LandingPage = () => {
  const [activeTab, setActiveTab] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const setSelected = (idx) => {
    setActiveTab((prevActiveTab) => {
      const newArr = [...prevActiveTab];
      for (let i = 0; i < prevActiveTab.length; i++) {
        newArr[i] = false;
        if (i === idx) {
          newArr[i] = true;
        }
      }
      console.log(newArr);
      return newArr;
    });
  };
  return (
    <>
      <LPNavbar></LPNavbar>
      <section className="landing-page">
        <LPSidebar
          activeTab={activeTab}
          setSelected={setSelected}
        />
        <MainContent activeTab={activeTab} sections={sections} />
      </section>
      {activeTab[0] && <div className="image-section"></div>}
    </>
  );
};

export default LandingPage;
