import mongoose, {model} from "mongoose";

const courseSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Authors: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
  },
});

export default courseSchema;
export const Course = mongoose.models.courses || mongoose.model("courses", courseSchema);
