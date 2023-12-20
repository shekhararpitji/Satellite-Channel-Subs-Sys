const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { createToken } = require("../utils/authUtil");

exports.registerService = async (req, res) => {
  const { name, email, password, cPassword, mobile_number, role, active } =
    req.body;
  try {
    if (password !== cPassword) {
      res
        .status(400)
        .send({ message: "Password and Confirm password does not match" });
    }

    const existingUserEmail = await User.findOne({
      where: { email },
    });
    if (existingUserEmail) {
      res.status(409).send({ message: "Email already register" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      mobile_number,
      role,
      active,
    });
    if (!user) {
      res.status(404).json({ message: "Not found" });
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};

exports.loginService = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });
  const result = await bcrypt.compare(password, user.password);
  if (!user) {
    return res.status(404).json({ message: "Not found" });
  } else if (!result) {
    return res.status(404).json({ message: "Wrong password" });
  }

  const access_token = createToken(user);
  return { access_token };
};

exports.get1Service = async (req) => {
  const id = req.params.id;
  const user = await User.findOne({
    where: {
      id,
    },
  });
  return user;
};

exports.getUser = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  return user;
};
