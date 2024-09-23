import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username == " " ||
    email === " " ||
    password === ""
  ) {
    next(errorHandler(400, "all fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "signed up successfully " });
  } catch (err) {
    next(err);
    // next(err) passes the error to the error-handling middleware in index.js.
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === " " || password === "") {
    next(errorHandler(400, "all fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "invalid email or password"));
    }
    const ValidPassword = bcryptjs.compareSync(password, validUser.password);
    if (!ValidPassword) {
      return next(errorHandler(400, "invalid email or password"));
    }
    const token = jwt.sign(
      { id: validUser._id, username: validUser.username },
      process.env.JWT_SECRET
    );

    
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};
