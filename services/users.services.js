// ------------ IMPORT MODULES ---------------------
// imports `modules`
const { UserIn } = require("../models/user.models");

// ------------ SETTINGS ------------------
// settings

// ------------ SERVICES ------------------

// list all users service
const listUsers = async () => await UserIn.find();

// ------------ EXPORT MODULE ---------------------
module.exports = { listUsers };
