import express from "express";
import auth from "./services/Auth.js";
const app = express();
const msgs = [];
app.use("/greet/:user", auth);
app.use(express.json());
app.post("/greet/:user/:msg?", function (req, res) {
  const msg = req.body;
  msg.id = Date.now();
  msgs.push(msg);
  res.send({ msg: "your msg has been saved" });
});

app.get("/greet/:user/", function (req, res) {
  res.send(msgs);
});

app.delete("/greet/:user/:id", function (req, res) {
  const { id } = req.params;
  console.log(id);
  const index = msgs.findIndex((m) => m.id == id);
  console.log(index);
  const [msg] = msgs.splice(index, 1);
  console.log(msg);
  res.send({ msg: "msg with id: " + msg.id + "  has been deleted" });
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log("Up and running on Port: " + PORT);
});

// deconstructing lesson
const user = { name: "suad", age: "12" };

const { name } = user;

const arr = [{ msg: "asdas" }];

const [msg] = arr;
