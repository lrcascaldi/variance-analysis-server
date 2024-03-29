// ------------ IMPORT MODULES ---------------------
// imports userModel operations from database
const { userModel } = require("../models/user.models.js");

// ------------ SETTINGS ------------------
// settings

// ------------ SERVICES ------------------
// read users
const readUsers = async () => await userModel.find();

// create user
const createUser = async (userData) => {
  try {
    const newUserData = await userModel.create(userData);
    return newUserData;
  } catch (err) {
    throw new Error(err);
  }
};

// read user
const readUser = async (userID) => {
  const userData = await userModel.findOne({ _id: userID });
  if (userData == null) {
    throw new Error("User not found");
  } else {
    return userData;
  }
};

// update user
const updateUser = async (userID, userData) => {
  const userNewData = await userModel.findOneAndUpdate(
    { _id: userID },
    userData,
    { new: true }
  );
  return userNewData;
};

// ------------ EXPORT MODULE ---------------------
module.exports = { readUsers, createUser, readUser, updateUser };
