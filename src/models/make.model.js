import mongoose from 'mongoose'

const makeMasterSchema = new mongoose.Schema({
  makeName: {
    type: String,
    required: true,
    unique: true,
  },
});

const MakeMaster = mongoose.model('MakeMaster', makeMasterSchema);
export default MakeMaster;
