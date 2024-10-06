import express from 'express';
import {
  createEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController';

const router = express.Router();

router.post('/', createEducation);
router.get('/:id', getEducationById);
router.put('/:id', updateEducation);
router.delete('/:id', deleteEducation);

export default router;
