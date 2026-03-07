import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HotelList() {
  return (
    <div>
      <Typography variant="h4">Hotels</Typography>

      <Button variant="contained" component={Link} to="/hotels/add">
        Add Hotel
      </Button>
    </div>
  );
}

export default HotelList;
