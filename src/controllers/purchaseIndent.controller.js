import IndentTag from "../models/indentTag.model.js";
import Item from "../models/item.model.js";
import PurchaseIndent from "../models/purchaseIndent.model.js";
import RequestedBy from "../models/requestedBy.model.js";

const newPurchaseIndent = async (req, res) => {
  try {
    const { itemDetails, indentTag : tags, requestedBy, ...otherFields } = req.body;

    // Step 1: Save each item in the Item model
    const savedItems = await Promise.all(
      itemDetails.map(async (item) => {
        const newItem = new Item(item);
        return await newItem.save();
      })
    );

    await RequestedBy.updateOne(
      { name: requestedBy }, // Query to find the user
      { $setOnInsert: { name: requestedBy } }, // Data to insert if user doesn't exist
      { upsert: true } // If no document matches, insert a new one
    );

    const results = await Promise.all(
      tags.map(async (tag) => {
        // Check if the tag exists
        const existingTag = await IndentTag.findOne({ tag });
        if (existingTag) {
          // Update if it exists (e.g., increment a counter or update another field)
          // Example: Add a timestamp for the last updated time
          existingTag.updatedAt = new Date();
          await existingTag.save();
        } else {
          // Create if it doesn't exist
          const newTag = new IndentTag({ tag });
          await newTag.save();
        }
      })
    )

    // Step 2: Get the IDs of the saved items
    const itemIds = savedItems.map((item) => item._id);

    // Step 3: Create a PurchaseIndent with the other fields and item IDs
    const purchaseIndent = new PurchaseIndent({
      ...otherFields,
      indentTag : tags,
      requestedBy,
      items: itemIds, // Use the IDs of the saved items
    });

    const savedPurchaseIndent = await purchaseIndent.save();
    res.status(200).json(savedPurchaseIndent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPurchaseIndents = async (req, res) => {
  try {
    const purchaseIndents = await PurchaseIndent.find()
      .populate("indentType") // Populating indentType
      .populate("department") // Populating department
      .populate({
        path: "items", // Populating items field
        populate: [
          { path: "itemName", model: "ItemMaster" }, // Populating itemName under items
          { path: "make", model: "MakeMaster" }, // Populating make under items
        ],
      });
    res.status(200).json(purchaseIndents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePurchaseIndent = async (req, res) => {
  const { itemDetails, ...otherFields } = req.body;
  try {
    const { id } = req.params;

    // Step 1: Save each item in the Item model
    await Promise.all(
      itemDetails.map((item) => {
        return Item.updateOne(
          { _id: item._id }, // Find the document by its ID
          { $set: { ...item } } // Update the fields with the new data
        );
      })
    );

    // Step 2: Get the IDs of the items from `itemDetails` array
    const itemIds = itemDetails.map((item) => item._id);

    // Prepare data for updating the PurchaseIndent
    const toUpdateData = {
      ...otherFields,
      items: itemIds, // Include the item IDs
    };

    // Step 3: Update the PurchaseIndent with the new data
    const updatedPurchaseIndent = await PurchaseIndent.findByIdAndUpdate(
      id,
      toUpdateData,
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("Updated PurchaseIndent:", updatedPurchaseIndent);
    res.status(200).json(updatedPurchaseIndent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePurchaseIndent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPurchaseIndent = await PurchaseIndent.findByIdAndDelete(id);
    if (!deletedPurchaseIndent) {
      return res.status(404).json({ error: "PurchaseIndent not found" });
    }
    res.status(200).json({ message: "PurchaseIndent deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  newPurchaseIndent,
  getPurchaseIndents,
  updatePurchaseIndent,
  deletePurchaseIndent,
};
