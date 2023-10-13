import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LingualBuddyLogo from "../assets/Logo.png";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Quiz } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function CustomSideBar() {
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
            <img
              src={LingualBuddyLogo}
              alt="LingualBuddy Logo"
              height="60px"
              width="60px"
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
        <SubMenu label="More" icon={<MoreHorizIcon />}>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
