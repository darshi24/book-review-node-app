import reviewsModel from "../models/reviews-model.js";

export const getAllReviews = async() => {
    const reviews = await reviewsModel.find();
    return reviews;
}
export const getReviewsForBookISBN = async(bookISBN) => {
    const reviews = await reviewsModel.find({bookISBN : bookISBN }).populate("reviewerID").exec();
    return reviews;
}

export const getReviewsForAuthor = async(authorID) => {
    const reviews = await reviewsModel.find({reviewerID : authorID }).populate("reviewerID").exec();
    return reviews;
}

export const createReview = async(review) => {
    const newReview = await reviewsModel.create(review);
    return newReview;
}
export const updateReview = async(rid, review) => {
    const updatedReview = await reviewsModel.updateOne({_id : rid} , review);
    return updatedReview;
}
export const deleteReview = async(rid) => {
    const status = await reviewsModel.deleteOne({_id : rid} );
    return status;
}