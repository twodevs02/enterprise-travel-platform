import User from "../models/auth.model.js"
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/token.util.js";

export const registerUser = async(data)=>{
    const {name, email, password, role} = data

    const user = await User.findOne({
        where: { email }
    });

    if (user) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    const newUser = await User.create({
        name, email, password:hashedPassword, role
    })
    return newUser;
}

export const loginUser = async(data)=>{
    const {email, password} = data
    const user = await User.findOne({
        where:{email}
    })
    if (!user) {
        throw new Error("Invalid user");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid user");
    }
    return generateToken(user)
}