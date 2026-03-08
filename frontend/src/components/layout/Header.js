import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar
} from "@mui/material";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Travel Admin Dashboard
        </Typography>

        <Box>
          <Avatar>A</Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;