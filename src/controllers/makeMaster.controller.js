import MakeMaster from "../models/make.model.js";

// Controller to add a new MakeMaster
const addNewMake = async (req, res) => {
  const { makeName } = req.body;

  try {
    // Create a new MakeMaster entry
    const newMake = new MakeMaster({ makeName });
    const result = await newMake.save();

    // Send success response
    if (result) {
      res.status(200).json({
        status: true,
        msg: "New MakeMaster created successfully",
        newMake: result,
      });
    }
  } catch (error) {
    // Handle error (e.g., duplicate makeName)
    res.status(500).json({
      error,
      msg: "Error while creating new MakeMaster",
    });
  }
};

// Controller to fetch all MakeMaster entries
const getMakes = async (req, res) => {
  try {
    // Fetch all MakeMaster entries
    const makes = await MakeMaster.find();

    // Send success response
    if (makes) {
      res.status(200).json(makes);
    }
  } catch (error) {
    // Handle error
    res.status(500).json({
      error,
      msg: "Error while getting MakeMaster entries",
    });
  }
};

// Controller to update a MakeMaster entry
const updateMake = async (req, res) => {
  const { id } = req.params;
  const { makeName } = req.body;

  try {
    // Update MakeMaster entry by ID
    const updatedMake = await MakeMaster.findByIdAndUpdate(
      id,
      { makeName },
      { new: true, runValidators: true }
    );

    if (updatedMake) {
      res.status(200).json({
        status: true,
        msg: "MakeMaster updated successfully",
        updatedMake,
      });
    } else {
      res.status(404).json({ msg: "MakeMaster not found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while updating MakeMaster",
    });
  }
};

// Controller to delete a MakeMaster entry
const deleteMake = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete MakeMaster entry by ID
    const deletedMake = await MakeMaster.findByIdAndDelete(id);

    if (deletedMake) {
      res.status(200).json({
        status: true,
        msg: "MakeMaster deleted successfully",
        deletedMake,
      });
    } else {
      res.status(404).json({ msg: "MakeMaster not found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Error while deleting MakeMaster",
    });
  }
};

export { addNewMake, getMakes, updateMake, deleteMake };

