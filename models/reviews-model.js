import mongoose from "mongoose";
import reviewsSchema from "../schemas/reviewes-schema.js";

const reviewsModel = mongoose.model('reviews',reviewsSchema);
export default reviewsModel;