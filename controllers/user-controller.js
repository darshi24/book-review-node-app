import * as userDao from '../daos/user-dao.js';

const findUserById = async(req,res) => {
    const user = await userDao.findUserById(req.params.uid);
    res.json(user);
}

const findUsersByRole = async(req, res) => {
    const users = await userDao.findUsersByRole(req.params.role);
    res.json(users);
}
const createUser = async(req,res) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}

const deleteUser = async(req,res) => {
    const uid = req.params.uid;
    const status = await userDao.deleteUser(uid);
    res.json(status);
}

const updateUser = async(req,res) => {
    const updatedUser  = req.body;
    const userIdToUpdate  = req.params.uid;
    const status = await userDao.updateUser(userIdToUpdate ,updatedUser);
    res.json(status);
}

const login = async(req, res) => {
    const existingUser = await userDao.findUserByCredentials(req.body.username, req.body.password);
    if(existingUser) {
        req.session["currentUser"] = existingUser;
        console.log("Log in...")
        console.log(req.session["currentUser"]);
        console.log(req.session);
        res.json(existingUser)
    }else{
        res.sendStatus(403);
    }
}

const logout = async(req, res) => {
    req.session.destroy();
    res.sendStatus(204);
}

const register = async(req, res) => {
    const foundUser = await userDao.findUserByUsername(req.body.username);
    if(foundUser) {
        res.status(409)
    }else{

        const newUser = await userDao.createUser(req.body);
        req.session["currentUser"] = newUser
        console.log(req.session["currentUser"]);
        res.json(newUser);
    }
}

const profile = async (req, res) => {
    const currentUserSession = req.session["currentUser"];
    console.log(req.session);
    console.log("Profile...")
    console.log(currentUserSession);

    if (currentUserSession) {
        const currentID = currentUserSession._id;
        const latestCurrentUSerInfo = await userDao.findUserById(currentID);
        req.session["currentUser"] = latestCurrentUSerInfo;
        res.json(latestCurrentUSerInfo);
    }else {
        res.sendStatus(404);
    }
}

export default (app) => {
    app.get('/api/users/user/:uid',findUserById);
    app.get('/api/users/role/:role', findUsersByRole);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);

    app.post('/api/users/login', login);
    app.post('/api/users/logout', logout);
    app.post('/api/users/register', register);
    app.get('/api/users/profile', profile);

}




