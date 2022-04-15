import MSGS from "../msgs/msgs.js";
import User from "../server/models/User.js";

export default async function authByUsernameAndPassword(identifier, password) {
  const user = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });
  if (!user) return MSGS.WRONG_USERNAME;
  if (password !== user.password) return MSGS.WRONG_PASSWORD;
  user.isLoggedIn = true;
  user.lastLogIn = Date.now();
  user.save();
  const {_id, email, name, username, lastLogIn, friends } = user;
  return { _id,email, name, username, lastLogIn, friends };
}
