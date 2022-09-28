const db = require("../models/index.js");

const User = db.users;

const saveUser = async (req, res, next) => {
  try {
    const emailcheck = await User.findOne({
      where: {
        email: req.query["email"],
      },
    });
    if (emailcheck) {
      return res.status(409).send("Authentication Failed");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
};
