// ------------ IMPORT MODULES ---------------------
// imports mongoose
const mongoose = require("mongoose");

// ------------ MODELS ------------------
// define userIn schema
const userIn = new mongoose.Schema({
  name: {
    type: String, // text field
    required: true, // field is required
    lowercase: true, // convert field to lowercase before saving
  },
  email: {
    type: String, // text field
    required: true, // field is required
    lowercase: true, // convert field to lowercase before saving
    unique: true, // field must be unique
  },
  password: {
    type: String, // text field
    required: true, // field is required
  },
});

// userOut

// ------------ SETTINGS ------------------
// compile model from schema
const UserIn = mongoose.model("UserIn", userIn, "User");

// ------------ EXPORT MODULE ---------------------
module.exports = {
  UserIn,
};
