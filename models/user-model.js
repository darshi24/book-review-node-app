import mongoose from "mongoose";
import userSchema from "../schemas/user-schema.js";
const userModel =mongoose.model('users',userSchema);
export default userModel;