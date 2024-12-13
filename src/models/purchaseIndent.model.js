import mongoose from "mongoose";

const purchaseIndentSchema = new mongoose.Schema({
  documentNo: {
    type: String,
    required: true,
    maxlength: 30, // Alphanumeric
  },
  documentDate: {
    type: Date,
    required: true,
    default: Date.now, // Default to the current date
  },
  indentType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "IndentType", // Reference to IndentType model
    required: true,
  },
  isReserved: {
    type: Boolean,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department", // Reference to Department model
    required: true,
  },
  chargeType: {
    type: String,
    enum: ["Chargeable", "Non Chargeable"], // Optional field with 2 values
  },
  requestedBy: {
      type: String,
      required: true, // Ensure each tag has a `tagname`
      maxlength: 100, // Optional: Set a max length for the tag name
  },
  indentTag: [
       {
        type: String,
        required: true, // Ensure each tag has a `tagname`
        maxlength: 100, // Optional: Set a max length for the tag name
      }
  ],
  remarks: {
    type: String,
    maxlength: 1000, // Optional
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item", // Reference to Item model
    },
  ], // Embedded document for items
});

const PurchaseIndent = mongoose.model("PurchaseIndent", purchaseIndentSchema);

export default PurchaseIndent;
