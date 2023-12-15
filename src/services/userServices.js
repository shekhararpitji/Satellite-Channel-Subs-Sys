import bcrypt from 'bcryptjs'
export const registerService = async (req,res) => {
    try {
       
      const { userName, password, email, firstName, lastName, roles } = req.body;
     
      const salt = 10;
      const hashpassword = await bcrypt.hash(password, salt);
  
      await User.create({
        userName,
        password: hashpassword,
        email,
        firstName,
        lastName,
        roles
      });
    } catch (error) {
      console.error(error.message);
    }
  };