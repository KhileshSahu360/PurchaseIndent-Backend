import mongoose from 'mongoose';

const uomSchema = new mongoose.Schema({
  unit: {
    type: String,
    required: true,
    unique: true,
  },
});

const UOM = mongoose.model('UOM', uomSchema);
export default UOM;
