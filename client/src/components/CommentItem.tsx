import { Box, Typography } from '@mui/material';
import { Comment } from '../../../server/src/models/comment';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Box>
      <Typography>{comment.content}</Typography>
    </Box>
  );
}
