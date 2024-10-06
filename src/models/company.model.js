import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    description: { type: String },

    website: { type: String, trim: true },

    location: { type: String },
    
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
