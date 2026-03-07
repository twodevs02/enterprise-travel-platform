import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar
} from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
    >
      <Toolbar />

      <List>

        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={Link} to="/hotels">
          <ListItemText primary="Hotels" />
        </ListItemButton>

        <ListItemButton component={Link} to="/bookings">
          <ListItemText primary="Bookings" />
        </ListItemButton>

        <ListItemButton component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItemButton>

      </List>
    </Drawer>
  );
}

export default Sidebar;