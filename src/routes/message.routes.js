import express from 'express';
import {
  sendMessage,
  getMessagesForUser,
  getMessageById,
  markMessageAsRead,
  deleteMessage,
} from '../controllers/messageController';

const router = express.Router();

router.post('/', sendMessage);
router.get('/user/:userId', getMessagesForUser);
router.get('/:id', getMessageById);
router.put('/:id/read', markMessageAsRead);
router.delete('/:id', deleteMessage);

export default router;
