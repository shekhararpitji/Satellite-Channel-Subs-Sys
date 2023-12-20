const { Channel } = require("../models");

exports.get1ChannelServices = async (req) => {
  const { name } = req.params;
  const channel = await Channel.findOne({
    where: {
      name,
    },
  });
  return channel;
};

exports.addChannelServices = async (req) => {
  const { name, description, category, packId } = req.body;

  const channel = await Channel.create({
    name,
    description,
    category,
    packId,
  });
  return channel;
};

exports.deleteChannelServices = async (req) => {
  const { id } = req.params;
  const channel = await Channel.destroy({
    where: {
      id: id,
    },
    raw: true,
  });
  return channel;
};
