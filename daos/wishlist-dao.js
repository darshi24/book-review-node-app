import wishlistModel from "../models/wishlist-model.js";

export const addToWishlist = async(userID, book) => {
    const user = await wishlistModel.findOne({userID:userID});
    if(user) {
        const response = await wishlistModel.updateOne({ userID: userID }, { $push: { wishlist: book } });
        return response;
    }else{
        const response = await wishlistModel.create({userID: userID, wishlist: [book]});
        return response;
    }

}

export const removeFromWishlist = async(userID,wishlistBookID) => {
    const response = await wishlistModel.updateOne({userID:userID},{$pull: {wishlist:{_id:wishlistBookID}}})
    return response;
}
export const getWishlist = async(userID) => {
    const wishlist = wishlistModel.findOne({userID:userID});
    return wishlist;
}