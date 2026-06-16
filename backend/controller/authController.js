const User = require('../models/Users')
const bcrypt = require('bcrypt')

exports.SignUp = async(req, res)=> {
    try {
        const{email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({message: "All fields are requried!"})
        }

        const existUser = await User.findOne({email})
        if(existUser) {
            return res.status(400).json({message: "User already exists!"})
        }

        const hashPass = await bcrypt.hash(password, 10)

        const newUser = await User.create({email, password: hashPass})

        res.status(201).json({message: "Signed Up successfully!", user: newUser})

    } catch (error) {
        res.status(500).json({error: error.message, message: "SignUp Error!"})
    }
}


exports.LogIn = async(req, res)=> {
    try {
        const{email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({message: "All fields are requried!"})
        }

        const existUser = await User.findOne({email})
        if(!existUser) {
            return res.status(404).json({message: "User does not exists!"})
        }

        const matchPass = await bcrypt.compare(password, existUser.password)
        if(!matchPass) {
            return res.status(400).json({message: "Password Incorrect!"})
        }

        res.status(200).json({message: "Logged In successfully!"})

    } catch (error) {
        res.status(500).json({error: error.message, message: "LogIn Error!"})
    }
}