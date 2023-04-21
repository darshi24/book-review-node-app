import mongoose from "mongoose";
import wishlistSchema from "../schemas/wishlist-schema.js";
const wishlistModel = mongoose.model('wishlists',wishlistSchema);
export default wishlistModel;