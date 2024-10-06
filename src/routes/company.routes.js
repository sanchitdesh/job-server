import express from 'express';
import {
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getCompanies,
} from '../controllers/companyController';

const router = express.Router();

router.post('/', createCompany);
router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;
