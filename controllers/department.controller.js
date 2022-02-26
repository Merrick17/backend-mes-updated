const Department = require("../models/department.model");
const addNewDepartment = async (req, res) => {
  try {
    let { DepartmentName, DepartmentManager ,MainService} = req.body;
    let newDepartment = new Department({
      DepartmentName,
      DepartmentManager,
      MainService
    });
    let result = await newDepartment.save();
    res.status(200).json({
      succes: true,
      message: "Department created ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const GetAllDepartments = async (req, res) => {
  try {
    let result = await Department.find().populate(
      "DepartmentManager",
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

const updateDepartment = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { id } = req.params;
    const { ...updateData } = dataToUpdate;
    const result = await Department.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({
      succes: true,
      message: "Department Updated ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Department.findByIdAndDelete(id);
    res.status(200).json({
      succes: true,
      message: "Department Deleted ",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

module.exports = {
  deleteDepartment,
  addNewDepartment,
  GetAllDepartments,
  updateDepartment,
};
