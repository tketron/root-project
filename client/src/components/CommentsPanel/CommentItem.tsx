import { Box, Typography } from '@mui/material';
import { Comment } from '../../../../server/src/models/comment';
import BackgroundLetterAvatar from '../common/BackgroundLetterAvatar';
import { formatDateTime } from '../../utils/datetime';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Box sx={{ display: 'flex', margin: '1rem' }}>
      <BackgroundLetterAvatar name={comment.author} />
      <Box sx={{ marginLeft: '1rem' }}>
        <Typography variant="body1">{comment.content}</Typography>
        <Typography variant="subtitle2">
          {formatDateTime(comment.created_at)}
        </Typography>
      </Box>
    </Box>
  );
}
