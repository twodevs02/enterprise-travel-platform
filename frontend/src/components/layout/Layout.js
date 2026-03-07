import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const drawerWidth = 240;

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>

      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        <Toolbar />
        {children}
      </Box>

    </Box>
  );
}

export default Layout;