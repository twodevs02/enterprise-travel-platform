import { Grid, Paper, Typography } from "@mui/material";

function DashboardHome() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Hotels</Typography>
            <Typography variant="h4">24</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Bookings</Typography>
            <Typography variant="h4">156</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">82</Typography>
          </Paper>
        </Grid>

      </Grid>
    </>
  );
}

export default DashboardHome;