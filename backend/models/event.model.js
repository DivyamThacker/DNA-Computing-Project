import mongoose, {model} from "mongoose";

const eventSchema = new mongoose.Schema({
  Type:{
    type: String,
  },
  EventName: {
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

export default eventSchema;
export const Event = mongoose.models.events ||   mongoose.model("events", eventSchema);
