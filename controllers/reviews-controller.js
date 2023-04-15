import * as reviewsDao from "../daos/reviews-dao.js"

const getAllReviews = async (req,res) => {
    const reviews = await reviewsDao.getAllReviews();
    res.json(reviews);
}
const getReviewsForBookISBN = async(req, res) => {
    const reviews = await reviewsDao.getReviewsForBookISBN(req.params.isbn);
    res.json(reviews);
}

const getReviewsForAuthor = async (req,res) => {
    const reviews = await reviewsDao.getReviewsForAuthor((req.params.aid));
    res.json(reviews);
}

const createReview = async(req, res) => {
    const newReview = await reviewsDao.createReview(req.body);
    res.json(newReview);
}

const updateReview = async(req, res) => {
    const updatedReview = await reviewsDao.updateReview(req.params.rid, req.body);
    res.json(updatedReview);
}

const deleteReview = async(req, res) => {
    const status = await reviewsDao.deleteReview(req.params.rid);
    res.json(status);
}

export default (app) => {
    app.get('/api/reviews', getAllReviews);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:rid', deleteReview);
    app.put('/api/reviews/:rid', updateReview);
    app.get('/api/reviews/book/:isbn', getReviewsForBookISBN);
    app.get('/api/reviews/author/:aid', getReviewsForAuthor);
}