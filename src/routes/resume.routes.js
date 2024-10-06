import express from 'express';
import {
  createResume,
  getResumeById,
  updateResume,
  deleteResume,
} from '../controllers/resumeController';

const router = express.Router();

router.post('/', createResume);
router.get('/:id', getResumeById);
router.put('/:id', updateResume);
router.delete('/:id', deleteResume);

export default router;
