import mongoose from 'mongoose'

const itemMasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  itemCode: {
    type: String,
    required: true,
    unique: true,
  },
  uom: {
    type: String,
    required: true,
  },
});

const ItemMaster = mongoose.model('ItemMaster', itemMasterSchema);
export default ItemMaster;
