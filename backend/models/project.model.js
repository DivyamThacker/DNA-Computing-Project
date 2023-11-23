import mongoose, {model} from "mongoose";

const projectSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  FundingAgency: {
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

export default projectSchema;
export const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);
