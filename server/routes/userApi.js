import express from "express";
import User from "../models/User.js";
import MSGS from "../../msgs/msgs.js";
import checkUserAvailability from "../../services/checkUserAvailability.js";
import authByUsernameAndPassword from "../../services/authByUsernameAndPassword.js";
import auth from "../../services/Auth.js";
const router = express.Router();

// create

router.post("/register", async function (req, res) {
  try {
    const signUpForm = req.body;
    const doesExist = await checkUserAvailability(signUpForm); // this function checks if the email or username in taken
    if (doesExist.email)
      return res.status(MSGS.EMAIL_EXISTS.code).send(MSGS.EMAIL_EXISTS);
    if (doesExist.username)
      return res.status(MSGS.EMAIL_EXISTS.code).send(MSGS.USERNAME_EXISTS);

    signUpForm.lastLogIn = Date.now();
    signUpForm.isLoggedIn = true;

    const user = new User(signUpForm);
    const { _id, name, email, username, isLoggedIn, friends, lastLogIn } =
      await user.save();
    res.send({ _id, name, email, username, isLoggedIn, friends, lastLogIn });
  } catch (error) {
    res.send({ msg: MSGS.BAD_REQUEST, error });
    console.log(error);
  }
});

// update
router.put("/signin", async function (req, res) {
  try {
    const { username, password } = req.body;
    const dbRes = await authByUsernameAndPassword(username, password);  // (dbRes) means database respond 
    res.send(dbRes);
  } catch (error) {
    res.status(400).send({ error, ...MSGS.BAD_REQUEST }); // the ... means that it combined two objects together
  }
});

// delete 

router.delete("/deactivate", auth, async function (req, res) { // this goes through the auth function before continuing the request
  try {
    const { user } = req; // check the auth function to know why did we use req instead of  req.user
    user.isActive = false;
    await user.save();
    res.send(MSGS.ACCOUNT_DEACTIVATED);
  } catch (error) {
    res.status(400).send({ ...error, ...MSGS.BAD_REQUEST });

  }
});

export default router;
