import Resume from '../models/Resume';

// Create a new resume
export const createResume = async (req, res) => {
  try {
    const { user, file, originalName } = req.body;
    const resume = new Resume({ user, file, originalName });
    await resume.save();
    res.status(201).json({ message: 'Resume uploaded successfully', resume });
  } catch (error) {
    res.status(400).json({ message: 'Error uploading resume', error });
  }
};

// Get resume by ID
export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id).populate('user');
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json(resume);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching resume', error });
  }
};

// Update resume
export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json({ message: 'Resume updated successfully', resume });
  } catch (error) {
    res.status(400).json({ message: 'Error updating resume', error });
  }
};

// Delete resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting resume', error });
  }
};
