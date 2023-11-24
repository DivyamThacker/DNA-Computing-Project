import mongoose, {model} from "mongoose";

const blogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Organization: {
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

export const Blog = mongoose.models.blogs ||  mongoose.model("blogs", blogSchema);
