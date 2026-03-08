import { loginUser, registerUser } from "../services/auth.service.js"
import { verifyToken } from "../utils/token.util.js"

export const register = async(req, res)=>{
    try {
        console
        const user = await registerUser(req.body)
        res.status(201).json({msg:"User Register", user})
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}

export const login = async(req, res)=>{
    try {
        const token = await loginUser(req.body) 
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,   // true only for HTTPS
            path: "/"
        });
        res.status(200).json({msg:"User login successfully!"})
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}

export const getMe = (req, res) => {
  try {

    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token" });
    }
    const decoded = verifyToken(token);
    res.status(200).json({
      id: decoded.id,
      role: decoded.role
    });

  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};