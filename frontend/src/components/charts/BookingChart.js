import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", bookings: 30 },
  { month: "Feb", bookings: 50 },
  { month: "Mar", bookings: 70 },
  { month: "Apr", bookings: 40 }
];

function BookingChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="bookings"
          stroke="#1976d2"
        />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default BookingChart;