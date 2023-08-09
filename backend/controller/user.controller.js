const { UserModel } = require("../model/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {createError} = require("../utils/customError")



// Register User Controller
const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "name, email and password are required",
    });
  }

// checking if user is already registered or not..
try {
   const findUser = await UserModel.findOne({ email });
   if (findUser) {
      return res.status(400).json({
        message: "User already registered, Please login",
      });
    }
} catch (error) {
   console.log('error: ', error);
}
  

  try {
   // hashing password ....
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    const { isSeller, password, ...otherDetails } = newUser._doc;
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};




// Login User Controller
const loginUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    console.log("1")
    if (!user) return next(createError(404, "User not found"));
    console.log("2")
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong Password"));

    console.log(user._id,user.isSeller)
    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY
    );
      console.log("toooe", token)
    const { password, isSeller, ...otherDetails } = user._doc;
    console.log(user)
    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ otherDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
