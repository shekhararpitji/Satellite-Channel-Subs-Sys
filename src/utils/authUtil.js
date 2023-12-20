const JWT = require("jsonwebtoken");
exports.createToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = JWT.sign(payload, process.env.SECRET);
  return token;
};

exports.validateToken = async (req, res) => {
  const token = req.get("authorization")?.split(" ")[1];
  const payload = JWT.verify(token, process.env.SECRET);
  return payload;
};
