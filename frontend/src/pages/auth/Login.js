import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { loginUser } from "../../api/authApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      console.log(res.data);

      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}

export default Login;
