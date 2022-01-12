// ------------ IMPORT MODULES ---------------------
// imports MongoDB ObjectID data type
const ObjectId = require("mongodb").ObjectId;

// ------------ IMPORT MODELS ---------------------
// imports userModel from db. Not necessary anymore since all db interactions are done by services
// const { userModel } = require("../models/user.models");

// ------------ IMPORT SERVICES ---------------------
// import services of user controllers
const {
  readUsers,
  createUser,
  readUser,
  updateUser,
} = require("../services/users.services.js");

// ------------ CONTROLLERS ------------------
// GET users
const getUsers = async (req, res, next) => {
  try {
    // list all users
    const userList = await readUsers();
    res.status(200).json(userList);
  } catch (err) {
    res.status(400).json({ msg: `Bad request. ${err}` });
  }
};

// POST user
const postUser = async (req, res, next) => {
  try {
    const newUser = await createUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ msg: `Error creating new user. ${err}` });
  }
};

// GET user
const getUser = async (req, res, next) => {
  try {
    // important note -> use "req.query.id" if the route params are optional a.k.a. defined as "/?id=xxx"
    const userID = new ObjectId(req.params.id); // convert user ID to ObjectId
    const userInfo = await readUser(userID);
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(400).json({ msg: `Bad request. ${err}` });
  }
};

// PUT user
const putUser = async (req, res, next) => {
  const userID = new ObjectId(req.params.id); // convert user ID to ObjectId
  //const userNewData = new User({
  //  _id: req.params.id,
  //  name: req.body.name,
  //  email: req.body.email,
  //  password: req.body.password,
  //});
  try {
    const updatedUser = await updateUser(userID, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ msg: `Error updating user information. ${err}` });
  }
};

// https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656256-complete-the-crud-with-update-and-delete

// ------------ EXPORT MODULE ---------------------
module.exports = { getUsers, postUser, getUser, putUser };

//https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis/
