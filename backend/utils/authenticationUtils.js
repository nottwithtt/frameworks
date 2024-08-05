const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

const authenticateUser = async (req, res, next) => {
  try {
    const { sessionToken } = req.cookies;
    if (!sessionToken) {
      return res.status(401).json({ error: "You must be logged in" });
    }
    const payload = jwt.verify(sessionToken, process.env.ACCESS_TOKEN_SEQUENCE);
    req.user = payload;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "You must be logged in" });
  }
};

module.exports = { hashPassword, comparePassword, authenticateUser };
