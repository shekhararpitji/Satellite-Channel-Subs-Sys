const { Channel } = require("../models");
const { get1ChannelServices, addChannelServices, deleteChannelServices } = require("../services/channelServices");

const addChannel = async (req, res) => {

  try {
const channel=await addChannelServices(req);
    return res.status(201).json({ message: "Channel Added Successfully",channel });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSingleChannel = async (req, res) => {

  try {
   const channel=await get1ChannelServices(req);
    if (!channel) {
      return res.status(404).json({ message: "Channel not found " });
    }

    return res
      .status(200)
      .json({ message: "Channel Retreive Sucessfully", channel });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllChannel = async (req, res) => {
  try {
    const channels = await Channel.findAll();
    if (!channels) {
      return res.status(404).json({ message: "Channel not found " });
    }
    return res
      .status(200)
      .json({ message: "Channels Retreive Sucessfully", channels });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteChannel = async (req, res) => {
  try {
    const channel = await deleteChannelServices(req);
    if (!channel) {
      return res.status(404).json({ message: "Channel not found " });
    }
    return res
      .status(200)
      .json({ message: "Channels Deleted Sucessfully", channel });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addChannel, getSingleChannel, getAllChannel, deleteChannel };