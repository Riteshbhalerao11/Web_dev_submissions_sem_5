import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import HomeIcon from "../icons/HomeIcon";
import LogoutIcon from "../icons/LogoutIcon";
import PatientIcon from "../icons/PatientIcon";
import SettingsIcon from "../icons/SettingsIcon";
import ProfileIcon from "../icons/ProfileIcon";
import "./lp-sidebar.css";

const LPSidebar = ({ activeTab, setSelected }) => {
  useEffect(() => {
    console.log(activeTab);
  });
  return (
    <div className="lp-sidebar">
      <div className="nav-items">
        <NavItem
          isSelected={activeTab[0]}
          OnClick={() => setSelected(0)}
          Icon={<HomeIcon />}
          iconText="Home"
        ></NavItem>
        <NavItem
          isSelected={activeTab[1]}
          OnClick={() => setSelected(1)}
          Icon={<ProfileIcon />}
          iconText="Profile"
        ></NavItem>
        <NavItem
          isSelected={activeTab[2]}
          OnClick={() => setSelected(2)}
          Icon={<PatientIcon />}
          iconText="Patient"
        ></NavItem>
        <NavItem
          isSelected={activeTab[3]}
          OnClick={() => setSelected(3)}
          Icon={<LogoutIcon />}
          iconText="Logout"
        ></NavItem>
        <NavItem
          isSelected={activeTab[4]}
          OnClick={() => setSelected(4)}
          Icon={<SettingsIcon />}
          iconText="Settings"
        ></NavItem>
      </div>
    </div>
  );
};

export default LPSidebar;
