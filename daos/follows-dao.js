import followsModel from "../models/follows-model.js";

export const userFollowsUser = async (follower, followed) => {
    const response = await followsModel.create({follower, followed});
    return response;
}

export const userUnfollowsUser = async (follower, followed) => {
    const status = await followsModel.deleteOne({follower:follower, followed : followed});
    return status;
}

export const findFollowers = async(id) => {
    const response = followsModel.find({followed : id}).populate("follower").exec();
    return response;
}

export const findFollowing = async(id) => {
    const response = followsModel.find({follower : id}).populate("followed").exec();
    return response;
}

export const findFollowsPair = async(follower, followed) => {
    const response = followsModel.findOne({follower:follower, followed: followed})
    return response;
}