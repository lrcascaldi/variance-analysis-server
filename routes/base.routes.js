// ------------ IMPORT MODULES ---------------------
// imports express
const express = require("express");

// imports .env for reading environment variables -> https://www.npmjs.com/package/dotenv
require("dotenv").config();

// set app port using .env variable
const port = process.env.APP_PORT;

// imports router
const router = express.Router();

// ------------ IMPORT CONTROLLERS ---------------------

// ------------ ROUTES ---------------------
// GET /
router.get("/", (req, res) => {
  res.send(`Variance Analysis App API listening at http://localhost:${port}`);
});

// ------------ EXPORT MODULE ---------------------
module.exports = router;
