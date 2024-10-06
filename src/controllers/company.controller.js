import Company from '../models/Company';

// Create a new company
export const createCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const company = new Company({ name, description, website, location });
    await company.save();
    res.status(201).json({ message: 'Company created successfully', company });
  } catch (error) {
    res.status(400).json({ message: 'Error creating company', error });
  }
};

// Get company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('jobs');
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching company', error });
  }
};

// Update company
export const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company updated successfully', company });
  } catch (error) {
    res.status(400).json({ message: 'Error updating company', error });
  }
};

// Delete company
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting company', error });
  }
};
