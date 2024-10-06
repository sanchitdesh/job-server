import express from 'express';
import {
  createExperience,
  getExperienceById,
  updateExperience,
  deleteExperience,
} from '../controllers/experienceController';

const router = express.Router();

router.post('/', createExperience);
router.get('/:id', getExperienceById);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

export default router;
