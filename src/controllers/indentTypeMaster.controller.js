import IndentType from "../models/indentType.model.js";

// Controller to add a new IndentType
const addNewIndentType = async (req, res) => {
  const { type } = req.body;

  try {
    // Create a new IndentType entry
    const newIndentType = new IndentType({ type });
    const result = await newIndentType.save();

    if (result) {
      res.status(200).json({
        status: true,
        msg: "New IndentType created successfully",
        newIndentType: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while creating new IndentType",
    });
  }
};

// Controller to fetch all IndentType entries
const getIndentTypes = async (req, res) => {
  try {
    // Fetch all IndentType entries
    const indentTypes = await IndentType.find();

    if (indentTypes) {
      res.status(200).json(indentTypes);
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while getting IndentType entries",
    });
  }
};

// Controller to update an IndentType entry
const updateIndentType = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  try {
    // Update IndentType entry by ID
    const updatedIndentType = await IndentType.findByIdAndUpdate(
      id,
      { type },
      { new: true, runValidators: true }
    );

    if (updatedIndentType) {
      res.status(200).json({
        status: true,
        msg: "IndentType updated successfully",
        updatedIndentType,
      });
    } else {
      res.status(404).json({ msg: "IndentType not found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while updating IndentType",
    });
  }
};

// Controller to delete an IndentType entry
const deleteIndentType = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete IndentType entry by ID
    const deletedIndentType = await IndentType.findByIdAndDelete(id);

    if (deletedIndentType) {
      res.status(200).json({
        status: true,
        msg: "IndentType deleted successfully",
        deletedIndentType,
      });
    } else {
      res.status(404).json({ msg: "IndentType not found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while deleting IndentType",
    });
  }
};

export { addNewIndentType, getIndentTypes, updateIndentType, deleteIndentType };
