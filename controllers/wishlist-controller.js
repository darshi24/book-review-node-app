import * as wishlistDao from "../daos/wishlist-dao.js";

const addToWishList = async(req,res) => {
    const book = req.body;
    const userID = req.params.uid;

    const response = await wishlistDao.addToWishlist(userID,book);
    res.json(response);
}

const removeFromWishlist = async(req,res) => {
    const userID = req.params.uid;
    const wishlistBookID = req.params.bid;

    const response = await wishlistDao.removeFromWishlist(userID,wishlistBookID);

    res.json(response);

}
const getWishlist = async(req,res) => {
    const userID = req.params.uid;
    const response = await wishlistDao.getWishlist(userID);
    res.json(response);
}

export default (app) => {
    app.post('/api/users/:uid/wishlist', addToWishList);
    app.get('/api/users/:uid/wishlist',getWishlist);
    app.delete('/api/users/:uid/wishlist/:bid',removeFromWishlist);
}