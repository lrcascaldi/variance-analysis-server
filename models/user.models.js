// ------------ IMPORT MODULES ---------------------
// imports mongoose
const mongoose = require("mongoose");

// ------------ MODELS ------------------
// define userIn schema
const user = new mongoose.Schema({
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
const userModel = mongoose.model("user", user, "User");

// ------------ EXPORT MODULE ---------------------
module.exports = {
  userModel,
};
