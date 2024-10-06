import express from 'express';
import {
  createJobCategory,
  getJobCategoryById,
  updateJobCategory,
  deleteJobCategory,
} from '../controllers/jobCategoryController';

const router = express.Router();

router.post('/', createJobCategory);
router.get('/:id', getJobCategoryById);
router.put('/:id', updateJobCategory);
router.delete('/:id', deleteJobCategory);

export default router;
