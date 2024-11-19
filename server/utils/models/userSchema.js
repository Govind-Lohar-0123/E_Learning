import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const userModel = mongoose.model("user", userSchema);





// userSchema.pre("save", async function (next) {
//     let user = this;
//     if (!user.isModified("password")) return next();
//     try {
       
//         return next();
//     }
//     catch (err) {
//         return next(err);
//     }
// })




export default userModel;