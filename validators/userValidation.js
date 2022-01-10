// ------------ IMPORT MODULES ---------------------
// imports yup data validation middleware
const yup = require("yup");

// ------------ SETTINGS ------------------
// userSchema settings for yup data validation middleware -> https://github.com/jquense/yup
const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(1).max(20).required(),
});

// ------------ EXPORT MODULE ---------------------
module.exports = { userSchema };
