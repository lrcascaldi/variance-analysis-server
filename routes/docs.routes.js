// ------------ IMPORT MODULES ---------------------
// imports express and router
const router = require("express").Router();

// imports swagger
const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc"); // will be removed

// ------------ SETTINGS ------------------
// imports swagger output file
const swaggerFile = require("../documentation/swagger_output.json");

// ------------ ROUTES ---------------------
// ALL /api/docs/
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// ------------ EXPORT MODULE ---------------------
module.exports = router;
