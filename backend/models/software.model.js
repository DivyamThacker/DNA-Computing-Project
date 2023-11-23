import mongoose, {model} from "mongoose";

const softwareSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
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

export default softwareSchema;
export const Software = mongoose.models.softwares || mongoose.model("softwares", softwareSchema);
