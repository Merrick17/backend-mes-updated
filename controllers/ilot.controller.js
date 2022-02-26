const Ilot = require("../models/ilot.model"); 
const addNewIlot = async (req, res) => {
  try {
    let { IlotName, IlotManager,MainDepartment,ilotType } = req.body;
    let newIlot = new Ilot({
      IlotName,
      IlotManager,
      MainDepartment,
      ilotType
    });
    let result = await newIlot.save();
    res.status(200).json({
      succes: true,
      message: "Ilot created ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const GetAllIlots = async (req, res) => {
  try {
    let result = await Ilot.find().populate(
      "IlotManager",
      "firstName lastName"
    );
    res.status(200).json({
      succes: true,
      message: result,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const updateIlot = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { id } = req.params;
    const { ...updateData } = dataToUpdate;
    const result = await Ilot.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({
      succes: true,
      message: "Ilot Updated ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const deleteIlot = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Ilot.findByIdAndDelete(id);
    res.status(200).json({
      succes: true,
      message: "Ilot Deleted ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

module.exports = {
  deleteIlot,
  addNewIlot,
  GetAllIlots,
  updateIlot,
};
