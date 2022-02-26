const mongoose = require("mongoose");
const IlotSchema = new mongoose.Schema(
  {
    IlotName: {
      type: String,
      required: true,
    },
    MainDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    IlotManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ilotType:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ilot", IlotSchema);
