import mongoose from "mongoose"
import express from "express"
import cors from "cors";
import session from 'express-session';

import UserController from "./controllers/user-controller.js";
import SessionController from "./controllers/session-controller.js";
import ReviewsController from "./controllers/reviews-controller.js";
import FollowsController from "./controllers/follows-controller.js";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const CONNECTION_STRING = "mongodb+srv://darshi24:darshi24@cluster0.wwke7rm.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);

const app = express();
app.set('trust proxy',1);
app.use(express.json());
app.use(cors({
    credentials : true,
    origin : 'https://preeminent-cranachan-3c8ddf.netlify.app'
    // origin : 'http://localhost:3000'
}));
app.use(session({
    secret : 'process.env.SECRET',
    resave : false,
    saveUninitialized : true,
    cookie : {secure : false}

}))


UserController(app);
ReviewsController(app);
SessionController(app);
FollowsController(app);


app.listen(process.env.PORT | 4000);

