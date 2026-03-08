import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config()
const PORT = process.env.PORT || 5007
app.listen(PORT, ()=>{
    console.log(`Auth service running on http://localhost:${PORT}`)
})