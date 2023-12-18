const Joi = require("joi");

const validateAddChannel = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ error: error.details[0].message });
  }

  req.body = value;
  return next();
};

module.exports = {
  validateAddChannel,
};