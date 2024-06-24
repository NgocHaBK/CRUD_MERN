const mongoose = require("mongoose");
//Schema được dùng để định nghĩa cấu trúc của một document trong collection.
const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  startDate: Date,
  department: String,
  endDate: Date,
  height: Number,
});
const UserModel = mongoose.model("Users", UserSchema); //tạo ra một collection hay còn gọi là mô hình User.

module.exports = UserModel;

// const newUser = new UserModel({
//   name: "Trần Ngọc Hà",
//   startDate: 16 / 8 / 2004,
//   endDate: 16 / 8 / 2074,
//   department: "Software Engineer",
//   height: 165,
// }); //Tạo ra một đối tượng của mô hình User, cách làm này để document có thể được kiểm tra tính hợp lệ với schema hay không trước khi được lưu vào db.

// newUser.save((err) => {
//   //gọi hàm save trên chính document để lưu document vào database
//   if (err) return console.log(err);
//   console.log("User saved successfully!");
// });
