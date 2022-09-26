"use strict";
import Model from "sequelize";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: true }
  );
  return User;
};
