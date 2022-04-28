import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';

import chatApi from "./server/routes/chatApi.js";
import userApi from "./server/routes/userApi.js";
import auth from "./services/Auth.js";



dotenv.config()


const mongoUri = process.env.MONGO_URI
mongoose.connect(mongoUri,function () {
  console.log("connected");
})

const app = express();
app.use(express.json());// this does the parcing for the jsons that are coming from the body
app.use('/user',userApi)
app.use("/greet/:user", auth);
app.use('/greet',chatApi)

const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log("Up and running on Port: " + PORT);
});