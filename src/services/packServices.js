const { Package,Channel } = require("../models");

// exports.addPackageServices = async (req) => {
//   const { name, duration, category, price } = req.body;

//   const package = await Package.create({
//     name,
//     duration,
//     category,
//     price,
    
//   });
//   return package;
// };

exports.addPackageServices = async (req) => {
    const { name, duration, category, price,channel } = req.body;
  
    const package = await Package.create({
      name,
      duration,
      category,
      price    })
    return package;
  };
  

exports.get1PackageServices = async (req) => {
  const { id } = req.params;
  const package = await Package.findOne({
    where: {
      id: id,
    },
  });
  return package;
};

exports.deletePackageServices = async (req) => {
  const { id } = req.params;
  const package = await Package.destroy({
    where: {
      id: id,
    },
  });
  return package;
};
