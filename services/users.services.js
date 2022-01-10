// ------------ IMPORT MODULES ---------------------
// imports userModel operations from database
const { userModel } = require("../models/user.models");

// ------------ SETTINGS ------------------
// settings

// ------------ SERVICES ------------------

// list all users service
const listUsers = async () => await userModel.find();

const createUser = async (userData) => {
  try {
    const newUserData = await userModel.create(userData);
    return newUserData;
  } catch (err) {
    throw new Error(err);
  }
};

const readUser = async (userID) => {
  const userData = await userModel.findOne({ _id: userID });
  if (userData == null) {
    throw new Error("User not found");
  } else {
    return userData;
  }
};

// ------------ EXPORT MODULE ---------------------
module.exports = { listUsers, createUser, readUser };
