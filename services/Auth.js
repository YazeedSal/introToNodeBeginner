import MSGS from "../msgs/msgs.js";

const auth = function (req, res, next) {
    const user = req.params.user;
    if (user.toLocaleLowerCase() == "rami") {
      next();
      return
    }
    res.send({ msg: MSGS.FAIL_AUTH });
  }

  export default auth