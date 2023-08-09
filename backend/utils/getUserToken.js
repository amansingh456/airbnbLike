const jwt = require('jsonwebtoken');
require("dotenv").config()

const getUserToken = (req) => {
   const token = req.cookies.access_token
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  return decoded;
};

module.exports = getUserToken;