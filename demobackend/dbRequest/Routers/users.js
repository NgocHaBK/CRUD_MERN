const Router = require("express");
const UserModel = require("../../model/Users");
const updateUser = require("../../service/userService");
const router = Router();

router.get("/", (req, res) => {
  UserModel.find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
//create a new Todo
router.post("/createUser", (req, res) => {
  console.log("req.body: ", req.body);
  const { startDate, endDate } = req.body;
  updateUser(dataFromServer)
    .then((user) => {
      res.status(201).json(user); // Respond with the created user
    })
    .catch((err) => {
      console.log("bạn đang gặp lỗi", err.message);
      res.json(err);
    });
});
//Update a Todo
// app.put("/todos/:id", updateTodo);
router.put("/updateUser/:id", async (req, res) => {
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
router.delete("/delete/:id", async (req, res) => {
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
module.exports = router;
