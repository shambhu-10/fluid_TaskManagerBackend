import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model("users", userSchema);

export default User



// {
//     "name": "sam5",
//     "email": "sam5@gmail.com",
//     "password": "123456"
// }