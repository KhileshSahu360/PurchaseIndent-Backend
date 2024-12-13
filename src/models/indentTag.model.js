import mongoose from 'mongoose'

const indentTagSchema = new mongoose.Schema({
    tag: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  const IndentTag = mongoose.model('IndentTag', indentTagSchema);
  export default IndentTag;
  
