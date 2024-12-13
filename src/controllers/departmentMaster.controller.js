import Department from "../models/department.model.js";

// Controller to add a new department
const addNewDepartment = async (req, res) => {
  const { department } = req.body;

  try {
    // Create a new department
    const newDepartment = new Department({ department });
    const result = await newDepartment.save();

    // Send success response
    if (result) {
      res.status(200).json({
        status: true,
        msg: "New Department created successfully",
        newDepartment: result,
      });
    }
  } catch (error) {
    // Handle error (e.g., duplicate department name)
    res.status(500).json({
      error,
      msg: "Error while creating new Department",
    });
  }
};

// Controller to fetch all departments
const getDepartments = async (req, res) => {
  try {
    // Fetch all departments
    const departments = await Department.find();

    // Send success response
    if (departments) {
      res.status(200).json(departments);
    }
  } catch (error) {
    // Handle error
    res.status(500).json({
      error,
      msg: "Error while getting the departments from DepartmentMaster",
    });
  }
};

// Controller to update a department
const updateDepartment = async (req, res) => {
  const { id } = req.params;
  const { department } = req.body;

  try {
    // Update department by ID
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      { department },
      { new: true, runValidators: true }
    );

    // Send success response
    if (updatedDepartment) {
      res.status(200).json({
        status: true,
        msg: "Department updated successfully",
        updatedDepartment,
      });
    } else {
      res.status(404).json({ msg: "Department not found" });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({
      error,
      msg: "Error while updating the department",
    });
  }
};

// Controller to delete a department
const deleteDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete department by ID
    const deletedDepartment = await Department.findByIdAndDelete(id);

    // Send success response
    if (deletedDepartment) {
      res.status(200).json({
        status: true,
        msg: "Department deleted successfully",
        deletedDepartment,
      });
    } else {
      res.status(404).json({ msg: "Department not found" });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({
      error,
      msg: "Error while deleting the department",
    });
  }
};

export { addNewDepartment, getDepartments, updateDepartment, deleteDepartment };
