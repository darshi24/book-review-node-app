import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    username : String,
    password : String,
    role : String,
    bio : String,
    firstname : String,
    lastname : String,
    email : String,
    bannerPicture : String,
    profilePicture : String,
}, {collection: 'users'});
export default userSchema;