import mongoose, {model} from "mongoose";

const simulationToolSchema = new mongoose.Schema({
  Name: {
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

export default simulationToolSchema;
export const SimulationTool = mongoose.models.simulationTools || mongoose.model("simulationTools", simulationToolSchema);
