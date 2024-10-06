import mongoose from "mongoose";

const jobCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: true }
);

const JobCategory = mongoose.model("JobCategory", jobCategorySchema);
export default JobCategory;
