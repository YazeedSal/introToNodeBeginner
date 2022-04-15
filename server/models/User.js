import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, dropDups: true },
  username: { type: String, unique: true, required: true, dropDups: true },
  isLoggedIn: Boolean,
  lastLogIn: Number,
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "user" }], // this just makes an array of these friends id 
  isActive:{ type: Boolean, default: true } 
});

const User = mongoose.model("user", userSchema);
export default User;
