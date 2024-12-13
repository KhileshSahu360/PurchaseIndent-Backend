import IndentTag from '../models/indentTag.model.js';

export const addNewIndentTag = async (req, res) => {
  try {
    const tags = req.body.tags; // Assume tags is an array of strings, e.g., ['urgent', 'nice']

    if (!Array.isArray(tags) || tags.length === 0) {
      return res.status(400).json({ message: "Tags array is required and cannot be empty." });
    }

    const results = await Promise.all(
      tags.map(async (tag) => {
        // Check if the tag exists
        const existingTag = await IndentTag.findOne({ tag });
        if (existingTag) {
          // Update if it exists (e.g., increment a counter or update another field)
          // Example: Add a timestamp for the last updated time
          existingTag.updatedAt = new Date();
          await existingTag.save();
          return { tag, status: "updated", data: existingTag };
        } else {
          // Create if it doesn't exist
          const newTag = new IndentTag({ tag });
          await newTag.save();
          return { tag, status: "created", data: newTag };
        }
      })
    );

    res.status(200).json({
      message: "Tags processed successfully.",
      results,
    });
  } catch (error) {
    console.error("Error processing tags:", error);
    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};

export const getIndentTags = async (req, res) => {
  try {
    const tags = await IndentTag.find();
    res.status(200).json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};

export const deleteIndentTag = async (req, res) => {
  try {
    const { tagId } = req.params;
    const deletedTag = await IndentTag.findByIdAndDelete(tagId);

    if (!deletedTag) {
      return res.status(404).json({ message: "Tag not found." });
    }

    res.status(200).json({ message: "Tag deleted successfully.", deletedTag });
  } catch (error) {
    console.error("Error deleting tag:", error);
    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};
