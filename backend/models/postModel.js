import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  describedQuestion: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  isPosted: { type: Boolean, default: true },
});

const postModel = mongoose.models.post || mongoose.model("post", postSchema);
export default postModel;
