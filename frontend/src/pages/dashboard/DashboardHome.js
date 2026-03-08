import { Grid, Paper, Typography } from "@mui/material";
import BookingChart from "../../components/charts/BookingChart";
function Card({ title, value }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3
      }}
    >
      <Typography variant="subtitle2" color="gray">
        {title}
      </Typography>

      <Typography variant="h4">
        {value}
      </Typography>
    </Paper>
  );
}

function DashboardHome() {
  return (
    <>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={24} md={24} lg={12}>
          <Card title="Total Hotels" value="24"/>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card title="Total Bookings" value="156"/>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card title="Total Users" value="82"/>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6">
              Booking Analytics
            </Typography>

            <BookingChart />
          </Paper>
        </Grid>
      </Grid>

    </>
  );
}

export default DashboardHome;