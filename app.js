import mongoose from "mongoose"
import express from "express"
import cors from "cors";
import session from 'express-session';

import UserController from "./controllers/user-controller.js";
import SessionController from "./controllers/session-controller.js";
import ReviewsController from "./controllers/reviews-controller.js";
import FollowsController from "./controllers/follows-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000'
}));
app.use(session({
    secret : 'process.env.SECRET',
    cookie : {secure : false}

}))


UserController(app);
ReviewsController(app);
SessionController(app);
FollowsController(app);


app.listen(process.env.PORT | 4000);

