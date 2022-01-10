// ------------ IMPORT MODULES ---------------------
// imports morgan logger middleware
const morgan = require("morgan");

// ------------ SETTINGS ------------------
// morgan logger middleware -> http://expressjs.com/en/resources/middleware/morgan.html
const morganLoggerMw = morgan("dev");

// ------------ EXPORT MODULE ---------------------
module.exports = morganLoggerMw;
