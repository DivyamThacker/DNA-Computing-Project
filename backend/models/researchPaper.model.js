import mongoose, {model} from "mongoose";

const researchPaperSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Topics: {
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
  PublishedDate: {
    type: String,
    required: true,
  },
  Source: {
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

export default researchPaperSchema;
export const ResearchPaper = mongoose.models.researchPapers || mongoose.model("researchPapers", researchPaperSchema);
