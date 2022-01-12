// ------------ IMPORT MODULES ---------------------
// imports swagger autogen
// const swaggerAutogen = require("swagger-autogen")();

// ------------ SETTINGS ------------------
// oficial docs --> https://www.npmjs.com/package/swagger-autogen
// helper documentation --> https://davibaltar.medium.com/documenta%C3%A7%C3%A3o-autom%C3%A1tica-de-apis-em-node-js-eb03041c643b

// set swagger API general documentation
// const swaggerOptions = {
//   info: {
//     swagger: "2.0",
//     title: "Variance Analysis",
//     version: "1.0.0",
//     description: "Variance analysis app for accountants",
//     license: {
//       name: "None",
//       url: "",
//     },
//     contact: {
//       name: "Luiz R. R. Cascaldi",
//       url: "",
//       email: "luizricardocascaldi@gmail.com",
//     },
//   },
//   host: "localhost:3000", // by default: 'localhost:3000'
//   basepath: "/api", // by default: '/'
//   schemes: ["http"], // by default: ['http']
//   consumes: ["application/json"],
//   produces: ["application/json"],
// };

// sets swagger output file generation path
// const outputFile = "../documentation/swagger_output.json";

// set app endpoints file path
// const endpointsFiles = ["./app.js", "./routes/*.js"];

//const dt = require("../routes/users.routes");

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

// ---------------- RUN --------------------
// call swagger autogen

// swaggerAutogen(outputFile, endpointsFiles, swaggerDocs);

// module.exports = { swaggerOptions };
