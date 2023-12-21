const Joi = require("joi");

const validateAddChannel = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
 
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
