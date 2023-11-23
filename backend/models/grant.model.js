import mongoose, {model} from "mongoose";

const grantSchema = new mongoose.Schema({
  Organization: {
    type: String,
    required: true,
  },
  Funds: {
    type: String,
    required: true,
  },
  Type: {
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

export default grantSchema;
export const Grant = mongoose.models.grants ||   mongoose.model("grants", grantSchema);
