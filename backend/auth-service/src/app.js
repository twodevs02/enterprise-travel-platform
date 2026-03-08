import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser())
app.get('/', (req, res)=>{
    res.send("Working1232134556787")
})
app.use('/', authRoutes)
export default app;