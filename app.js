// ------------ IMPORT MODULES ---------------------

// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports moongose
const mongoose = require("mongoose");

// imports logger middleware
const morganLoggerMw = require("./middlewares/loggerMiddleware");

// ------------ SWAGGER -----------------------
// imports swagger ui
const swaggerUI = require("swagger-ui-express");

// import swagger docs
const swaggerJsDoc = require("swagger-jsdoc");

// import swagger options
// const swaggerOptions = require("./middlewares/swagger.js");

// ------------ SETTINGS ------------------

// imports .env for reading environment variables -> https://www.npmjs.com/package/dotenv
require("dotenv").config();

// initialize express -> https://expressjs.com/pt-br/starter/hello-world.html
const app = express();

// initialize router
app.use(router);

// set app port using .env variable
const port = process.env.APP_PORT;

// imports swagger output file
//const swaggerFile = require("./documentation/swagger_output.json");

// swagger docs use options information
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "text",
      version: "1.0.0",
      version: "1.0.0",
      description: "Variance analysis app for accountants",
      license: {
        name: "None",
        url: "",
      },
      contact: {
        name: "Luiz R. R. Cascaldi",
        url: "",
        email: "luizricardocascaldi@gmail.com",
      },
    },
  },
  apis: ["./app.js", "./routes/*.js"],
  basepath: "/api/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// const endpointsFiles = ["./app.js", "./routes/*.js"];

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

//const docsRoutes = require("./routes/docs.routes.js");

// ------------ ROUTES SETTINGS ------------------
// base routes
app.use("/", baseRoutes);

// users routes
app.use("/api/users", usersRoutes);

// docs route
//app.use("/api/docs", docsRoutes);

// ALL /api/docs/
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// "swagger-autogen": "node ./middlewares/swagger.js",

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
