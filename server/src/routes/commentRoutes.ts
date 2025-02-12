import { Router } from 'express';
import {
  createComment,
  getComments,
} from '../controllers/commentController.ts';

const router = Router();

// Mount routes related to comments
// All comment routes require an associated suggestionID
router.get('/suggestions/:suggestionID/comments', getComments);
router.post('/suggestions/:suggestionID/comments', createComment);

export default router;
