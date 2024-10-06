import Experience from '../models/Experience';

// Create a new experience
export const createExperience = async (req, res) => {
  try {
    const { user, company, position, startDate, endDate, description } = req.body;
    const experience = new Experience({ user, company, position, startDate, endDate, description });
    await experience.save();
    res.status(201).json({ message: 'Experience added successfully', experience });
  } catch (error) {
    res.status(400).json({ message: 'Error adding experience', error });
  }
};

// Get experience by ID
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id).populate('user');
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json(experience);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching experience', error });
  }
};

// Update experience
export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json({ message: 'Experience updated successfully', experience });
  } catch (error) {
    res.status(400).json({ message: 'Error updating experience', error });
  }
};

// Delete experience
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting experience', error });
  }
};
