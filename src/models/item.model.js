import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  itemName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemMaster', // Reference to ItemMaster
    required: true,
  },
  techSpec: {
    type: String,
    maxlength: 1000,
  },
  make: {
    type: mongoose.Schema.Types.ObjectId,
    default : null,
    ref: 'MakeMaster', // Reference to MakeMaster
  },
  uom: {
    type: String, // UOM from ItemMaster but editable
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 0,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
  },
  amount: {
    type: Number,
    default: 0,
  },
  requiredOn: {
    type: Date,
    required: true,
  },
  remarks: {
    type: String,
    maxlength: 1000,
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;