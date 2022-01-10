// ------------ IMPORT MODULES ---------------------
// imports morgan logger middleware
const yup = require("yup");

// ------------ SETTINGS ------------------
// morgan logger middleware -> https://github.com/jquense/yup
const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(1).max(20).required(),
});

// ------------ EXPORT MODULE ---------------------
module.exports = { userSchema };
