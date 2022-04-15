import User from "./User";
import Msg from "./Msg";

class Db {
  constructor() {
    this.msgs = [new Msg()];
    this.users = [];
  }

  signUp(name, password, email) {
    const user = new User(name, password, email);
    this.users.push(user);
    return user;
  }
  getUserById(id) {
    const user = this.users.find((u) => u.id == id);
    return user;
  }

  sendMsg(text, senderId, receiverId) {
    const msg = new Msg(text, senderId, receiverId);
    this.msgs.push(msg);
  }
  getMsgById(id) {
    const msg = this.msgs.find((m) => m.id == id);
    return msg;
  }

  deleteMsg(id) {
    const index = this.msgs.findIndex((m) => m.id == id);
    const [msg] = this.msgs.splice(index, 1);
    return msg;
  }
  updateMsg(id, newMsg) {
    const msg = this.msgs.find((m) => m.id == id);
  }
}
