import RequestedBy from "../models/requestedBy.model.js";

export const getRequestedBy = async (req, res) => {
  try {
    const request = await RequestedBy.find();
    res.status(200).json(request);
  } catch (error) {
    console.error("Error fetching request:", error);
    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};

