import Skill from '../models/Skill';

// Create a new skill
export const createSkill = async (req, res) => {
  try {
    const { name } = req.body;
    const skill = new Skill({ name });
    await skill.save();
    res.status(201).json({ message: 'Skill added successfully', skill });
  } catch (error) {
    res.status(400).json({ message: 'Error adding skill', error });
  }
};

// Get skill by ID
export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching skill', error });
  }
};

// Update skill
export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json({ message: 'Skill updated successfully', skill });
  } catch (error) {
    res.status(400).json({ message: 'Error updating skill', error });
  }
};

// Delete skill
export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting skill', error });
  }
};
