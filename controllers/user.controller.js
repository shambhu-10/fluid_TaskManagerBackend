import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";


const signUp = (req, res) => {
    const { name, email, password } = req.body;


    const userExists = User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = argon2.hash(password);

    const user = User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });

};


const login = (req, res) => {

    const { email, password } = req.body;

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    const user = User.findOne({ email });

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const decoded = argon2.verify(user.password, password);

    if (!decoded) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });

};

export { signUp, login }



