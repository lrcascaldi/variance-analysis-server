// ------------ IMPORT MODULES ---------------------
// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports moongose
const mongoose = require("mongoose");

// imports logger middleware
const morganLoggerMw = require("./middlewares/loggerMiddleware");

// imports .env for reading environment variables -> https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ------------ SETTINGS ------------------
// initialize express -> https://expressjs.com/pt-br/starter/hello-world.html
const app = express();

// initialize router
app.use(router);

// set app port using .env variable
const port = process.env.APP_PORT;

// ------------ MIDDLEWARE SETUPS ------------------
// imports middleware responsible for json parsing
app.use(express.json());

// imports middleware responsible for parsing body and reading nested json objects
app.use(express.urlencoded({ extended: true }));

// imports middleware resposinble for logging route history
app.use(morganLoggerMw);

// ------------ IMPORT ROUTES ------------------
// base routes
const baseRoutes = require("./routes/base.routes.js");

// users routes
const usersRoutes = require("./routes/users.routes.js");

// docs routes
const docsRoutes = require("./routes/docs.routes.js");

// ------------ ROUTES SETTINGS ------------------
// base routes
app.use("/", baseRoutes);

// users routes
app.use("/api/users", usersRoutes);

// docs route
app.use("/api/docs", docsRoutes);

// ------------ SERVER APP STARTUP ------------------
// try database connection and initialize server app
mongoose.connect(process.env.MONGO_URI).then((result) =>
  app.listen(port, () => {
    console.log(
      `Variance Analysis App API listening at http://localhost:${port}`
    );
  })
);

// ------------ EXPORT MODULE ---------------------
module.exports = port;

// ------------ HELPERS ---------------------
// https://youtu.be/9bqziIplOwI?list=PLhGp6N0DI_1RL9djhgSH65pZhJ6xSyKX8
