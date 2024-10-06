import express from 'express';
import {
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController';

const router = express.Router();

router.post('/', createSkill);
router.get('/:id', getSkillById);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
