import mongoose from 'mongoose'

const requestedBySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  const RequestedBy = mongoose.model('RequestedBy', requestedBySchema);
  export default RequestedBy;
  