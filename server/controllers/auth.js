import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/User.js";
//USER REGISTRATION
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picPath,
            friends,
            location,
            occupation

        } = req.body;

        //generate a random salt using bcrypt
        const salt = await bcrypt.genSalt();

        //uses bcrypt to hash a password with the generated salt
        const passwordHash = await bycrypt.hash(password, salt);

        //formatting user data
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picPath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000)
        })

        //save new user into an additional variable
        const savedUser = await newUser.saved();

        //creating a json version so that the frontend can receive the 201 status code
        res.status(201).json(savedUser);


    } catch (error) {
        res.status(500).json({ error: err.message });

    }

    
}