import Application from '../models/Application';

// Create a new application
export const createApplication = async (req, res) => {
  try {
    const { job, applicant, resume, coverLetter } = req.body;
    const application = new Application({ job, applicant, resume, coverLetter });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting application', error });
  }
};

// Get application by ID
export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('job applicant');
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching application', error });
  }
};



// Get all applications for a job
export const getApplicationsForJob = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId }).populate('applicant', 'name email');
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching applications', error });
  }
};

// Get all applications for a user
export const getApplicationsForUser = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.params.userId }).populate('job', 'title');
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching applications', error });
  }
};



// Update application status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json({ message: 'Application status updated successfully', application });
  } catch (error) {
    res.status(400).json({ message: 'Error updating application status', error });
  }
};

// Delete application
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting application', error });
  }
};
