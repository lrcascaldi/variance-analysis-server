// ------------ IMPORT MODULES ---------------------
// imports MongoDB ObjectID data type
const ObjectId = require("mongodb").ObjectId;

// ------------ IMPORT MODELS ---------------------
const { UserIn } = require("../models/user.models");

// ------------ IMPORT SERVICES ---------------------
const { listUsers } = require("../services/users.services");

// ------------ CONTROLLERS ------------------

// GET all users controller
const getUsers = async (req, res, next) => {
  try {
    // list all users
    const userList = await listUsers();
    console.log(userList);
    res.status(200).json(userList);
  } catch (err) {
    res.status(400).json({ msg: "Bad request" }).send(err);
  }
};

// https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

// ------------ CONTROLLERS ------------------
// list all users
//const listUsers = (req, res) => {
//  UserIn.find({})
//    .then((result) => res.status(200).json({ result }))
//    .catch((error) => res.status(500).json({ msg: "No users were found" }));
//};

// POST user
const createUser = (req, res) => {
  UserIn.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

// GET user
// important note -> use "req.query.id" if the route params are optional a.k.a. defined as "/?id=xxx"
const readUser = (req, res) => {
  const userID = new ObjectId(req.params.id); // convert user ID to ObjectId
  UserIn.findOne({ _id: userID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(201).json({ msg: "User not found" }));
};

// ------------ EXPORT MODULE ---------------------
module.exports = { getUsers, createUser, readUser };

//https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis/
