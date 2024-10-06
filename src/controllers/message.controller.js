import Message from '../models/Message';

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;
    const message = new Message({ sender, recipient, content });
    await message.save();
    res.status(201).json({ message: 'Message sent successfully', message });
  } catch (error) {
    res.status(400).json({ message: 'Error sending message', error });
  }
};

// Get messages for a user
export const getMessagesForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const messages = await Message.find({
      $or: [{ sender: userId }, { recipient: userId }],
    }).populate('sender recipient', 'name email');
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching messages', error });
  }
};

// Get a single message by ID
export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id).populate('sender recipient', 'name email');
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching message', error });
  }
};

// Mark a message as read
export const markMessageAsRead = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.status(200).json({ message: 'Message marked as read', message });
  } catch (error) {
    res.status(400).json({ message: 'Error marking message as read', error });
  }
};

// Delete a message
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting message', error });
  }
};
