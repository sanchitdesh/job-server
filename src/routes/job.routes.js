import express from 'express';
import {
  createJob,
  getJobById,
  updateJob,
  deleteJob,
  getJobs,
} from '../controllers/jobController';

const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/:id', getJobById);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;