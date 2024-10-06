import JobCategory from '../models/JobCategory';

// Create a new job category
export const createJobCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const jobCategory = new JobCategory({ name });
    await jobCategory.save();
    res.status(201).json({ message: 'Job category created successfully', jobCategory });
  } catch (error) {
    res.status(400).json({ message: 'Error creating job category', error });
  }
};

// Get job category by ID
export const getJobCategoryById = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findById(req.params.id);
    if (!jobCategory) return res.status(404).json({ message: 'Job category not found' });
    res.status(200).json(jobCategory);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching job category', error });
  }
};

// Update job category
export const updateJobCategory = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobCategory) return res.status(404).json({ message: 'Job category not found' });
    res.status(200).json({ message: 'Job category updated successfully', jobCategory });
  } catch (error) {
    res.status(400).json({ message: 'Error updating job category', error });
  }
};

// Delete job category
export const deleteJobCategory = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findByIdAndDelete(req.params.id);
    if (!jobCategory) return res.status(404).json({ message: 'Job category not found' });
    res.status(200).json({ message: 'Job category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting job category', error });
  }
};
