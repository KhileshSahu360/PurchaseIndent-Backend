import mongoose from 'mongoose'

const indentTypeSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  const IndentType = mongoose.model('IndentType', indentTypeSchema);
  export default IndentType;
  