import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protect = (req, res, next) => {

    let token = req.headers.authorization;

    if (token) {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

        req.user = User.findById(decoded.id);

        next();

    } 
    else {
        res.status(401).json({ message: "Token not found" });
    }
};





