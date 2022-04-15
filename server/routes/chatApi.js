import express from "express";
const router = express.Router();
const msgs = [];

// Create in Databases
router.post("/:user/", function (req, res) {
  const msg = req.body;
  msg.id = Date.now();
  msgs.push(msg);
  res.send({ msg: "your msg has been saved" });
});
// Retreive
router.get("/:user/",  function (req, res) {
  res.send(msgs);
});
// Delete
router.delete("/:user/", function (req, res) {
  const { id } = req.body;
  const index = msgs.findIndex((msg) => msg.id == id);
  if (msgs[index]) {
    const [msg] = msgs.splice(index, 1);
    res.send({ msg: "msg with id: " + msg.id + "  has been deleted" });
    return;
  }
  res.send({ err: true, msg: "wrong id" });
});

//update
router.put("/:user/", function (req, res) {
  const { id, newMsg } = req.body;
  const msg = msgs.find((m) => m.id == id);
  if (msg) {
    msg.msg = newMsg;
    res.send({ msg: "done" });
  }
});

export default router;
