import User from './../models/userModel.js'
import bcrypt, { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRETKEY = process.env.SECRETKEY;

export const register = async (req, res) =>{
  try {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
      return res.status(400).json({message: "All fields are required."})
    }
    const userExist = await User.findOne({email})
    if(userExist){
      return res.status(400).json({message: "Email already exists."})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({username, email, password: hashedPassword})

    const savedData = await newUser.save()
    res.status(200).json(savedData)

  } catch (error) {
    res.status(500).json({errorMessage: error.message})
  }
}

export const loginUser = async (req, res) =>{
  try {
    const {email, password} = req.body;
    const userExist = await User.findOne({email})
    if(!userExist){
      return res.status(404).json({message: "User data not found."})
    }
    
    const isPasswordValid = await bcrypt.compare(password, userExist.password)
    if(!isPasswordValid){
      return res.status(404).json({message: "Invalid credentials!"})
    }

    const token = jwt.sign({ id: userExist._id, email: userExist.email}, SECRETKEY, {expiresIn: "1hr"})

    res.status(200).json({message: "Login successfully.", token: token})
  } catch (error) {
    res.status(500).json({errorMessage: error.message})
  }
}

export const profile = async (req, res) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token) return res.status(400).json({status: false, message: "Access Denied"})

    jwt.verify(token, SECRETKEY, async (err, decode) => {
      const user = await User.findById(decode?.id)
      if(!user) return res.status(400).json({status: false, message: "Invalid token."})

        const userData = {
          id: user?.id,
          name: user?.username,
          email: user?.email,
        }
    
        res.status(200).json({status: true, message: "Profile Data", data: userData})
    })

  } catch (error) {
    res.status(500).json({status: success, message: "Something went wrong"})
  }
}