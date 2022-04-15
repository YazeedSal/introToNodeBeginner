import MSGS from "../msgs/msgs.js";
import User from "../server/models/User.js";
import findUserById from "./findUserById.js";
const auth = async function (req, res, next) {
  const { token } = req.headers;
  console.log(token);
  const user = await findUserById(token);
  if (user?.isLoggedIn && user?.isActive) {
    req.user = user;
    next();
    return;
  }
  res.send({ msg: MSGS.FAIL_AUTH });
};

export default auth;
