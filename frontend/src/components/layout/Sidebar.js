import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth
        }
      }}
    >
      <Toolbar />

      <List>

        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard"/>
        </ListItemButton>

        <ListItemButton component={Link} to="/hotels">
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Hotels"/>
        </ListItemButton>

        <ListItemButton component={Link} to="/bookings">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Bookings"/>
        </ListItemButton>

        <ListItemButton component={Link} to="/profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile"/>
        </ListItemButton>

      </List>
    </Drawer>
  );
}

export default Sidebar;