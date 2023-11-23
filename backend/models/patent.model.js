import mongoose, {model} from "mongoose";

const patentSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  type: {
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

export default patentSchema;
export const Patent = mongoose.models.patents ||  mongoose.model("patents", patentSchema);
