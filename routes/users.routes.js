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
  putUser,
} = require("../controllers/users.controllers.js");

// ------------ ROUTES ---------------------
// GET /users

/**
 * @swagger
 * /api/users/:
 *  get:
 *    description: Get all users
 *    responses:
 *      200:
 *        description: Users list
 *      400:
 *        description: Bad request
 *
 */
router.get("/", getUsers);

// POST /users

/**
 * @swagger
 * /api/users/:
 *  post:
 *    description: Create new user
 *    parameters:
 *    - in: formData
 *      name: name
 *      type: string
 *      description: user first and last names
 *      required: true
 *    - in: formData
 *      name: email
 *      type: String
 *      description: user email
 *      required: true
 *    - in: formData
 *      name: password
 *      type: String
 *      description: user password
 *      required: true
 *
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Error creating new user
 *
 */
router.post("/", validate(userSchema), postUser);

// GET /user/:id

/**
 * @swagger
 * /api/users/:id:
 *  get:
 *    description: Get user
 *    parameters:
 *    - in: path
 *      name: id
 *      type: object
 *      description: user ID
 *      required: true
 *
 *    example:
 *      id: 62da7bce60a2d7f82c034961
 *
 *    responses:
 *      200:
 *        description: User data
 *      400:
 *        description: Bad request
 *
 */
router.get("/:id", getUser);

// PUT /users/:id

/**
 * @swagger
 * /api/users/:id:
 *  put:
 *    description: Update user data
 *    parameters:
 *    - in: path
 *      name: id
 *      type: object
 *      description: user ID
 *      required: true
 *    - in: formData
 *      name: name
 *      type: String
 *      description: user first and last names
 *      required: true
 *    - in: formData
 *      name: email
 *      type: String
 *      description: user email
 *      required: true
 *    - in: formData
 *      name: password
 *      type: String
 *      description: user password
 *      required: true
 *
 *    responses:
 *      200:
 *        description: User updated
 *      400:
 *        description: Bad request
 *
 */
router.put("/:id", validate(userSchema), putUser);

// ------------ EXPORT MODULE ---------------------
module.exports = router;
