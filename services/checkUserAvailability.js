import User from "../server/models/User.js";

export default async function checkUserAvailability(signUpForm) {
  const { email, username } = signUpForm;
  const doesExist = await User.findOne({ $or: [{ email }, { username }] }); // the find one returns one thing an object for example instead of the find the returns an array

  const result = {
    email: doesExist?.email === email, // the ? means that it questions if the doesExist in even true before entering the .email property and if not it becomes undefined which does not equal email thus being the returned answer false if it's false
    username: doesExist?.username === username,
  };

  return result;
}
