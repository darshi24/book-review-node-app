import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    content : String,
    reviewerID : {type : mongoose.Schema.Types.ObjectId, ref:"users"},
    bookISBN : String,
    upVotes : Number,
    downVotes : Number

}, {collection: "reviews"});

export default reviewsSchema;