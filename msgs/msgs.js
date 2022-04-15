const MSGS = {
  FAIL_AUTH: { code: 401, msg: "You'r not autherized", err: true },
  BAD_REQUEST: { code: 400, msg: "Something went wrong!", err: true },
  EMAIL_EXISTS: { code: 400, msg: "email already exists", err: true },
  USERNAME_EXISTS: { code: 400, msg: "username already exists", err: true },
  WRONG_USERNAME: { code: 400, msg: "user doesn't exist!", err: true },
  WRONG_PASSWORD: { code: 400, msg: "wrong password!", err: true },
  ACCOUNT_DEACTIVATED: { code: 200, msg: "account deactivated", err: false },
};

export default MSGS;
