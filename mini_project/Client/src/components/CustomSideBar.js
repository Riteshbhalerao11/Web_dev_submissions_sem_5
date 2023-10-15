import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LingualBuddyLogo from "../assets/Logo.png";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Quiz } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function CustomSideBar(props) {
  const selected = props.selected;
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError("Failed to log out");
    }
  }

  return (
    <Sidebar id="sb" backgroundColor="white">
      <Menu>
        <MenuItem id="Title-tile" style={{ padding: "0px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={LingualBuddyLogo}
              style={{
                height: 60,
                width: 60,
              }}
              alt=""
            />
            <span
              style={{
                padding: "9px",
                fontWeight: "bold",
                fontSize: 20,
                letterSpacing: "1px",
              }}
            >
              LingualBuddy
            </span>
          </div>
        </MenuItem>
        <MenuItem
          style={{
            backgroundColor: selected === "home" ? "#228B22" : "white",
          }}
          icon={
            <HomeIcon
              style={{
                marginRight: "20px",
                color: selected === "home" ? "white" : "black",
              }}
            />
          }
        >
          <Link
            to={"/"}
            style={{
              color: selected === "home" ? "white" : "black",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem
          style={{
            backgroundColor: selected === "scores" ? "#228B22" : "white",
            color: selected === "scores" ? "white" : "black",
          }}
          icon={
            <LeaderboardIcon
              style={{
                marginRight: "20px",
                color: selected === "scores" ? "white" : "black",
              }}
            />
          }
        >
          <Link
            style={{
              color: selected === "scores" ? "white" : "black",
              textDecoration: "none",
            }}
            to={"/scores"}
          >
            Scores
          </Link>
        </MenuItem>
        <MenuItem
          style={{
            backgroundColor: selected === "courses" ? "#228B22" : "white",
            color: selected === "courses" ? "white" : "black",
          }}
          icon={
            <LibraryBooksIcon
              style={{
                marginRight: "20px",
                color: selected === "courses" ? "white" : "black",
              }}
            />
          }
        >
          Courses
        </MenuItem>
        <MenuItem
          style={{
            backgroundColor: selected === "quiz" ? "#228B22" : "white",
          }}
          icon={
            <Quiz
              style={{
                marginRight: "20px",
                color: selected === "quiz" ? "white" : "black",
              }}
            />
          }
        >
          <Link
            style={{
              color: selected === "quiz" ? "white" : "black",
              textDecoration: "none",
            }}
            to={"/quiz"}
          >
            Quiz
          </Link>
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
