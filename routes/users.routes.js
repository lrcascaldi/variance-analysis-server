// ------------ IMPORT MODULES ---------------------
// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports router
const validate = require("../middlewares/datavalidationMiddleware");

// ------------ IMPORT SCHEMAS ---------------------
const { userInSchema } = require("../validators/userValidation");

// ------------ IMPORT CONTROLLERS ---------------------
// imports controllers modules
const {
  getUsers,
  createUser,
  readUser,
} = require("../controllers/users.controllers");

// ------------ ROUTES ---------------------

// GET /users
router.get("/", getUsers);

//validate(userInSchema),
// POST /users
router.post("/", validate(userInSchema), createUser);

// GET /user
router.get("/:id", readUser);

// ------------ EXPORT MODULE ---------------------
module.exports = router;
