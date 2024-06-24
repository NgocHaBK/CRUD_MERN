const UserModel = require("../model/Users");

const updateUser = (user) => {
  return UserModel.create(user);
};

module.exports = updateUser;
