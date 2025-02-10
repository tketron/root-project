import { Router } from 'express';
import {
  createComment,
  getComments,
} from '../controllers/commentController.ts';

const router = Router();

router.get('/suggestions/:suggestionID/comments', getComments);
router.post('/suggestions/:suggestionID/comments', createComment);

export default router;
