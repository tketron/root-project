import { Router } from 'express';
import {
  createSuggestion,
  getSuggestions,
} from '../controllers/suggestionController.ts';

const router = Router();

// Mount routes related to suggestions
router.get('/', getSuggestions);
router.post('/', createSuggestion);

export default router;
