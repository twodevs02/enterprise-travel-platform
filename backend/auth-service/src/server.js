import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config()
const PORT = process.env.PORT || 5007
app.listen(PORT, ()=>{
    console.log(`User service running on http://localhost:${PORT}`)
})