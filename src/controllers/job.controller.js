import Job from '../models/Job';

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary, jobType, categories, postedBy } = req.body;
    const job = new Job({ title, description, company, location, salary, jobType, categories, postedBy });
    await job.save();
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(400).json({ message: 'Error creating job', error });
  }
};

// Get job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('company categories postedBy');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching job', error });
  }
};

// Update job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job updated successfully', job });
  } catch (error) {
    res.status(400).json({ message: 'Error updating job', error });
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting job', error });
  }
};
