import mongoose, {model} from "mongoose";

const youtubeSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  channel: {
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

export default youtubeSchema;
export const Youtube = mongoose.models.youtube || mongoose.model("youtube", youtubeSchema);
