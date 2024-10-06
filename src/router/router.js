import express from 'express';
import userRoutes from './userRoutes';
import jobRoutes from './jobRoutes';
import companyRoutes from './companyRoutes';
import resumeRoutes from './resumeRoutes';
import educationRoutes from './educationRoutes';
import experienceRoutes from './experienceRoutes';
import skillRoutes from './skillRoutes';
import jobCategoryRoutes from './jobCategoryRoutes';
import notificationRoutes from './notificationRoutes';
import messageRoutes from './messageRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/companies', companyRoutes);
router.use('/resumes', resumeRoutes);
router.use('/educations', educationRoutes);
router.use('/experiences', experienceRoutes);
router.use('/skills', skillRoutes);
router.use('/job-categories', jobCategoryRoutes);
router.use('/notifications', notificationRoutes);
router.use('/messages', messageRoutes);
router.use('/applications', applicationRoutes); // New route

export default router;
