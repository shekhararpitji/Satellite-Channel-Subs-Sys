const cron = require("cron");
const {
  checkExpireSubscriptions,
} = require("../services/subscriptionServices");

const executeSwarm = async () => {
  try {
    await checkExpireSubscriptions();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
const job = new cron.CronJob("*/59 * * * *", executeSwarm);
job.start();
