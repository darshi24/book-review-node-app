import mongoose from "mongoose";
import followSchema from "../schemas/follow-schema.js";

const followsModel = mongoose.model("follows",followSchema);
export default followsModel;