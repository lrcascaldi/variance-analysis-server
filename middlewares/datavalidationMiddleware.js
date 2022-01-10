// ------------ IMPORT MODULES ---------------------
// none

// ------------ SETTINGS ------------------
// morgan logger middleware -> http://expressjs.com/en/resources/middleware/morgan.html
const validate = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// ------------ EXPORT MODULE ---------------------
module.exports = validate;
