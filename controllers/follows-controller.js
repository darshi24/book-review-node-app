import * as followsDao from "../daos/follows-dao.js";

const userFollowsUser = async (req,res) => {
    const follower = req.params.follower;
    const followed = req.params.followed;

    let follow = await followsDao.findFollowsPair(follower,followed);
    if (follow) {
        res.sendStatus(400);
    }else {
        follow = await followsDao.userFollowsUser(follower,followed);
        res.json(follow);
    }
}

const userUnfollowsUser = async (req,res) => {
    const follower = req.params.follower;
    const followed = req.params.followed;

    let follow = await followsDao.findFollowsPair(follower,followed);
    if (follow) {
        const status = followsDao.userUnfollowsUser(follower,followed);
        res.json(status);
    } else {
        res.sendStatus(400);
    }
}

const findFollowers = async (req,res) => {
    const uid = req.params.uid;
    const followers = await followsDao.findFollowers(uid);
    console.log(followers)
    res.json(followers);
}

const findFollowing = async (req,res) => {
    const uid = req.params.uid;
    const following = await followsDao.findFollowing(uid);
    res.json(following);
}

const findFollowsPair = async (req, res) => {
    const follower = req.params.follower;
    const followed = req.params.followed;

    const follow = await followsDao.findFollowsPair(follower,followed);
    res.json(follow)
}

export default (app) => {
    app.get("/api/users/:follower/follows/:followed",findFollowsPair);
    app.post("/api/users/:follower/follows/:followed",userFollowsUser);
    app.delete("/api/users/:follower/follows/:followed",userUnfollowsUser);
    app.get("/api/users/followers/:uid",findFollowers);
    app.get("/api/users/following/:uid",findFollowing);

}