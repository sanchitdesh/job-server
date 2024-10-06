import express from 'express';
import {
  createNotification,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from '../controllers/notificationController';

const router = express.Router();

router.post('/', createNotification);
router.get('/:id', getNotificationById);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;
