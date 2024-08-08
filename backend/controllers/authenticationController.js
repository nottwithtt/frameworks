const JWT = require("jsonwebtoken");
const User = require("../models/User");
const {
  hashPassword,
  comparePassword,
} = require("../utils/authenticationUtils");

const register = async (req, res, next) => {
  try {
    const { username, password, name, surname } = req.body;
    if (!username || !password || !name || !surname) {
      return res
        .status(400)
        .json({ error: "Please enter all required fields" });
    }
    const exists = await User.exists({ username: username });
    if (exists != null) {
      return res.status(401).json({ error: "User already exists" });
    }
    const hashed = await hashPassword(password);
    const user = await User.create({
      username: username,
      name: name,
      surname: surname,
      password: hashed,
      contacts: [],
    });
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please enter all required fields" });
    }
    const user = await User.exists({ username: username });
    if (user == null) {
      return res.status(401).json({ error: "User not found" });
    }

    const userWithData = await User.findById(user._id);
    const match = await comparePassword(password, userWithData.password);
    if (!match) {
      return res.status(401).json({ error: "Wrong password" });
    }

    req.user = userWithData;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const createSession = async (req, res) => {
  try {
    const sessionToken = JWT.sign(
      {
        id: req.user._id,
        username: req.user.username,
      },
      process.env.ACCESS_TOKEN_SEQUENCE,
      { expiresIn: "30m" }
    );

    res.cookie("sessionToken", sessionToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 30,
    });
    return res.status(200).json({ message: "Welcome to the page" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Esto lo estoy probando, es para verificar que exite una session abierta y
// salta el login
const verifyToken = async (req, res) => {
  const token = req.cookies.sessionToken;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SEQUENCE);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "Token is valid", userId: user._id });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { login, register, createSession, verifyToken };
