const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema(
  {
    DepartmentName: {
      type: String,
      required: true,
    },
    MainService: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
    DepartmentManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", DepartmentSchema);
