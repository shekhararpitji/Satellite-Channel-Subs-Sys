const { Package } = require("../models");
const { deletePackageServices, get1PackageServices } = require("../services/packServices");

exports.addPackage = async (req, res) => {
  try{
    const Package= await addPackageServices(req);
    return res.status(201).json({ message: "Package Added Successfully",Package });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getSinglePackage = async (req, res) => {
 try{ const Package=await get1PackageServices(req);

    return res
      .status(200)
      .json({ message: "Package Retreive Sucessfully", Package });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllPackage = async (req, res) => {
  try {
    const Packages = await Package.findAll();
    if (!Packages) {
      return res.status(404).json({ message: "Package not found " });
    }
    return res
      .status(200)
      .json({ message: "Packages Retreive Sucessfully", Packages });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const Package=await deletePackageServices(req);
    return res
      .status(200)
      .json({ message: "Packages Deleted Sucessfully", Package });
  } catch (error) {
    console.error(error);
  }
};

