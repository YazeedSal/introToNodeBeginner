import User from "../server/models/User.js";

export default async function checkUserAvailability(signUpForm) {
  const { email, username } = signUpForm;
  const doesExist = await User.findOne({ $or: [{ email }, { username }] });

  const result = {
    email: doesExist?.email === email,
    username: doesExist?.username === username,
  };

  return result;
}
