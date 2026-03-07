import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { registerUser } from "../../api/authApi";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await registerUser({ name, email, password });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        onChange={(e) => setName(e.target.value)}
      />
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

      <Button variant="contained" fullWidth onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
}

export default Register;
