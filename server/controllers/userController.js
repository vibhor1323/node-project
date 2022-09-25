import bcrypt from "bcrypt";
import db from "../models";
import jwt from "jsonwebtoken";

const User = db.user;

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = {
      email,
      password: await bcrypt.hash(password, 10),
    };
    const user = await User.create(data);

    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);

      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIin: 1 * 24 * 60 * 60 * 1000,
        });
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);

        return res.status(201).seend(user);
      } else {
        res.status(401).send("Authentication Failed");
      }
    } else {
      res.status(401).send("Authentication Failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  signup,
  login,
};
