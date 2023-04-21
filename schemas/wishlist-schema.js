import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    userID : {type : mongoose.Schema.Types.ObjectId, ref:"users"},
    wishlist : [{
        bookISBN : {type:String},
        bookAuthor : {type:String},
        bookTitle : {type:String},
        bookImage : {type:String}
    }]
}, {collection: 'wishlists'});

export default wishlistSchema;