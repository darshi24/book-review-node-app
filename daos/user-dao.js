import userModel from "../models/user-model.js";

export const createUser = async (user) => {
    const newUser = await userModel.create(user);
    return newUser;
};

export const findUserById = async (id) => {
    const user = await userModel.findById(id);
    return user;
};

export const findUsersByRole = async (role) => {
    const users = await userModel.find({role:role});
    return users;
}

export const findUserByUsername = async (username) => {
    const user = await userModel.findOne({ username });
    return user;
};

export const findUserByCredentials = async (username, password) => {
    const user = await userModel.findOne({ username, password });
    console.log("Found user");
    console.log(user);
    return user;
};

export const deleteUser = async (uid) => {
    const status = await userModel.deleteOne({ _id: uid });
    return status;
};

export const updateUser = async (uid, user) => {
    const status = userModel.updateOne({_id: uid}, user);
    return status;
}