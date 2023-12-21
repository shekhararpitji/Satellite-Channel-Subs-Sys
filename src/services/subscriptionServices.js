const { Op } = require("sequelize");
const { User, Package, Subscription } = require("../models");

exports.subscribePackage = async (userId, packId) => {
  try {
    const user = await User.findByPk(userId);
    const package = await Package.findByPk(packId);

    if (!user || !package) {
      throw new Error("User or Package not found");
    }

    const startDate = Date.parse(new Date());
    const subscription = await Subscription.create({
      userId,
      packId,
      startDate,
      duration: "yearly",
    });

    return { success: true, subscription };
  } catch (error) {
    throw new Error(`Subscription failed: ${error.message}`);
  }
};

exports.subscribeAddon = async (userId, packId) => {
  try {
    const user = await User.findByPk(userId);
    const package = await Package.findByPk(packId);
console.log(package)
    if (!user || !package) {
      throw new Error("User or Package not found");
    }
    const startDate = Date.parse(new Date());
    const subscription = await Subscription.create({
      userId,
      packId,
      startDate,
      duration: "monthly",
    });

    return { success: true, subscription };
  } catch (error) {
    throw new Error(`Subscription failed: ${error}`);
  }
};

exports.checkExpireSubscriptions = async () => {
  try {
    
    const milliseconds = Date.parse(new Date());
    const oneMonthDuration = 1 * 30 * 24 * 60 * 60 * 1000;
    const oneYearDuration = 1 * 365 * 24 * 60 * 60 * 1000;
    const oneMinuteDuration = 1 * 60 * 1000; //for testing purpose
   
    const expiredYearlySubscriptions = await Subscription.findAll({
      where: {
        duration: "yearly",
        startDate: {
          [Op.lt]: Date.parse(new Date(milliseconds - oneYearDuration)),
        },
      },
    });
    if (!expiredYearlySubscriptions) {
    } else {
      expiredYearlySubscriptions.map(async (expiredSubscription) => {
        await Subscription.destroy({
          where: {
            id: expiredSubscription.id,
          },
        });
      });
    }

    const expiredMonthlySubscriptions = await Subscription.findAll({
      where: {
        duration: "monthly",
        startDate: {
          [Op.lt]: Date.parse(new Date(milliseconds - oneMonthDuration)),
        },
      },
    });
    if (!expiredMonthlySubscriptions) {
    } else {
      expiredMonthlySubscriptions.map(async (expiredSubscription) => {
        await Subscription.destroy({
          where: {
            id: expiredSubscription.id,
          },
        });
      });
    }

    return { success: true };
  } catch (error) {
    console.error(`Failed to check and expire subscriptions: ${error}`);
  }
};
