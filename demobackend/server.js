const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");
const router = require("./dbRequest/Routers/users");
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
app.use(router);
mongoose
  .connect(connectionURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
