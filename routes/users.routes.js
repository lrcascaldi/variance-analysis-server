// ------------ IMPORT MODULES ---------------------
// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports router
const validate = require("../middlewares/datavalidationMiddleware");

// ------------ IMPORT VALIDATION SCHEMAS ---------------------
// import user schema validation
const { userSchema } = require("../validators/userValidation");

// ------------ IMPORT CONTROLLERS ---------------------
// imports controllers modules
const {
  getUsers,
  postUser,
  getUser,
} = require("../controllers/users.controllers");

// ------------ ROUTES ---------------------
// GET /users
router.get("/", getUsers);

// POST /users
router.post("/", validate(userSchema), postUser);

// GET /user
router.get("/:id", getUser);

// ------------ EXPORT MODULE ---------------------
module.exports = router;
