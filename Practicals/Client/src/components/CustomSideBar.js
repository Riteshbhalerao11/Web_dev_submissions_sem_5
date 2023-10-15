import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Quiz } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CustomSideBar() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/landing");
    } catch (e) {
      console.log(e);
      setError("Failed to log out");
    }
  }

  return (
    <Sidebar backgroundColor="white" style={{ height: "100vh" }}>
      <Menu>
        <MenuItem style={{ padding: "0px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                padding: "9px",
                fontWeight: "bold",
                fontSize: 20,
                letterSpacing: "1px",
              }}
            >
              Practicals
            </span>
          </div>
        </MenuItem>
        <MenuItem icon={<HomeIcon style={{ marginRight: "20px" }} />}>
          Home
        </MenuItem>
        <MenuItem icon={<LeaderboardIcon style={{ marginRight: "20px" }} />}>
          Leaderboard
        </MenuItem>
        <MenuItem icon={<LibraryBooksIcon style={{ marginRight: "20px" }} />}>
          Courses
        </MenuItem>
        <MenuItem icon={<Quiz style={{ marginRight: "20px" }} />}>
          Quiz
        </MenuItem>
        <MenuItem
          onClick={handleLogOut}
          icon={<LogoutIcon style={{ marginRight: "20px" }} />}
        >
          Log Out
        </MenuItem>
        <SubMenu label="More" icon={<MoreHorizIcon />}>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
