import mongoose, {model} from "mongoose";

const companySchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
  },
  Organization: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

export default companySchema;
export const Company = mongoose.models.companies ||  mongoose.model("companies", companySchema);
