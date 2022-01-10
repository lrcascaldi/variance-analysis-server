// ------------ IMPORT MODULES ---------------------
// imports MongoDB ObjectID data type
const ObjectId = require("mongodb").ObjectId;

// ------------ IMPORT MODELS ---------------------
// imports userModel from db. Not necessary anymore since all db interactions are done by services
// const { userModel } = require("../models/user.models");

// ------------ IMPORT SERVICES ---------------------
const {
  readUsers,
  createUser,
  readUser,
} = require("../services/users.services");

// ------------ CONTROLLERS ------------------

// GET all users controller
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

// ------------ EXPORT MODULE ---------------------
module.exports = { getUsers, postUser, getUser };

//https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis/
