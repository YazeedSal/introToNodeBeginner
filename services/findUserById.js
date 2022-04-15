import User from "../server/models/User.js";

export default async function findUserById(_id) {
    const user = await User.findById(_id)
    return user
}