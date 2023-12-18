const bcrypt = require ('bcryptjs');
const {User}  = require ('../models');
const { validateToken, createToken } = require ("../utils/authUtil");
const { sequelize } = require('../models');

exports.registerService = async (req,res) => {
    try { 
       
      const { name, password, email,  roles, mobile_number } = req.body;
     
      const salt = 10;
      const hashpassword = await bcrypt.hash(password, salt);
      
  await User.create({
    name,
    password: hashpassword,
    email,
    roles,
    mobile_number
  });
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (req, res) => {
    const { name, email, password, cPassword, mobileNumber, role } = req.body;
  
    try {
      if (password !== cPassword) {
        return res
          .status(400)
          .json({ message: "Password and Confirm password does not match" });
      }
  
      const existingUserEmail = await User.findOne({
        where: { email },
      });
      if (existingUserEmail) {
        return res.status(409).json({ message: "Email already register" });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        password: hashPassword,
        mobileNumber,
        role,
      });
  
      if (role === "admin")
        return res.json({
          message: "Admin Register Successfully",
        });
      else if (role === "operator")
        return res.json({
          message: "Operator Register Successfully",
        });
      else return res.json({ message: "User Register Successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  };


  exports.loginService = async (req, res) => {
    const { userName } = req.body;
    const user = await User.findOne({
      where: {
        userName,
      }
    });
    if (!user) {
      return res.status(404).json({ message: "username not found" });
    }
  
    const access_token = createToken(user);
    return { access_token };
  };
