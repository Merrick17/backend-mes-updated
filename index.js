const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb://AdminSammy:01161590@13.87.70.68:27017/?authSource=admin&readPreference=primary&directConnection=true&ssl=false"
  )
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Database error", err.message);
  });

//routes
const userRouter = require("./routes/user.routes");
const departmentRouter = require("./routes/department.routes");
const serviceRouter = require("./routes/service.routes");
const ilotRouter = require("./routes/ilot.routes");

app.use("/users", userRouter);
app.use("/department", departmentRouter);
app.use("/service", serviceRouter);
app.use("/ilot", ilotRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app is running..");
});
