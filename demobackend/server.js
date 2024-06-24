const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const UserModel = require("./model/Users");
const dotenv = require("dotenv");
const { query } = require("express-validator");
dotenv.config();

//App config

const app = express();
const port = process.env.PORT || 8000;
const connectionURL = process.env.MONGO_URI;
//middleware
//convert to json
app.use(express.json());

app.use(Cors()); //dùng để chia sẻ tài nguyên giữa nhưng trang có cùng tên miền với nhau, đồng thời ngăn chặn việc truy cập tài nguyên từ những trang có tên miền khác nhau
//db Config
mongoose
  .connect(connectionURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Running on port: ${port},${connectionURL}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//API endpoint

//Get todo list
app.get("/", (req, res) => {
  UserModel.find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
//create a new Todo
app.post("/createUser", (req, res) => {
  console.log("req.body: ", req.body);
  UserModel.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log("bạn đang gặp lỗi");
      res.json(err);
    });
});
//Update a Todo
// app.put("/todos/:id", updateTodo);
app.put("/updateUser/:id", async (req, res) => {
  try {
    const userId = req.params.id; // Lấy ID từ URL
    const updatedData = req.body;

    // Tìm và thay thế toàn bộ tài liệu người dùng
    const user = await UserModel.findOneAndUpdate({ id: userId }, updatedData, {
      new: true,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Delete a Todo
app.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findOneAndDelete({ id: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send("User deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
