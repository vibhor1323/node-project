import express from "express";
import db from "../models/index.js";

const User = db.users;

const saveUser = async (req, res, next) => {
  try {
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailcheck) {
      return res.json(409).send("Authentication Failed");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default saveUser;
