const { User } = require("../models");

const {
  loginService,
  registerService,
  get1Service,
} = require("../services/roleServices");
const { validateToken } = require("../utils/authUtil");

exports.registerCtrl = async (req, res) => {
 try{
   const user= await registerService(req, res);
  
  const role=user.role;
  if (user) {
    return res.status(201).send({ message: `${role} Registered successfully ..`, });
  }}catch(error){
    res.status(500).send("Server Error");
  }  
};

exports.loginCtrl = async (req, res) => {
  try {
    const { access_token } = await loginService(req, res);
    res.status(200).json({ jwt: access_token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getAllCtrl = async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user) {
      return res.status(400).send({ message: "Not found" });
    }
    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.get1Ctrl = async (req, res) => {
  try {
    const user = await get1Service(req);
    if (!user) {
      return res.status(400).send({ message: "user not found" });
    }
    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.deleteCtrl = async (req, res) => {
  try {
    const id =req.params.id;
    const access_token = await validateToken(req);
    const user = await User.destroy({ where: { id  } });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(400).send("Server Error");
  }
};
