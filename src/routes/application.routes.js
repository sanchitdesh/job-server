// routes/applicationRoutes.js
import express from 'express';
import {
  createApplication,
  getApplicationsForJob,
  getApplicationsForUser,
  updateApplicationStatus,
  deleteApplication,
} from '../controllers/applicationController';

const router = express.Router();

router.post('/', createApplication);
router.get('/job/:jobId', getApplicationsForJob);
router.get('/user/:userId', getApplicationsForUser);
router.put('/:id', updateApplicationStatus);
router.delete('/:id', deleteApplication);

export default router;
