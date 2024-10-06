import Education from '../models/Education';

// Create a new education
export const createEducation = async (req, res) => {
  try {
    const { user, degree, institution, startDate, endDate } = req.body;
    const education = new Education({ user, degree, institution, startDate, endDate });
    await education.save();
    res.status(201).json({ message: 'Education added successfully', education });
  } catch (error) {
    res.status(400).json({ message: 'Error adding education', error });
  }
};

// Get education by ID
export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id).populate('user');
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching education', error });
  }
};

// Update education
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.status(200).json({ message: 'Education updated successfully', education });
  } catch (error) {
    res.status(400).json({ message: 'Error updating education', error });
  }
};

// Delete education
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.status(200).json({ message: 'Education deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting education', error });
  }
};
