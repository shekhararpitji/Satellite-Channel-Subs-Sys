"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscription.belongsTo(models.Package, {
        foreignKey: "packageId",
        onDelete: "SET NULL",
      });
      Subscription.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      });
    }
  }
  Subscription.init(
    {
      start_date: DataTypes.STRING,
      end_date: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};