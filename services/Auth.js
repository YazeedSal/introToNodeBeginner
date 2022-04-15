import MSGS from "../msgs/msgs.js";
import User from "../server/models/User.js";
import findUserById from "./findUserById.js";
const auth = async function (req, res, next) {
  const { token } = req.headers; // token as in the id that is being delivered throughout the header and not hte body 
  console.log(token);
  const user = await findUserById(token);
  if (user?.isLoggedIn && user?.isActive) { // this ensures that the user in logged in and is  active before deleting it 
    req.user = user; // this gives the whole user instead of what is in the body, so when using this function you can use the word req without specifying the user because the req is now the user
    next();
    return;
  }
  res.send({ msg: MSGS.FAIL_AUTH });
};

export default auth;
