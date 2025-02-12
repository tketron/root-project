import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import usePostComment from '../../hooks/queries/usePostComment';
import { Comment } from '../../../../server/src/models/comment';

interface NewCommentInputProps {
  suggestionID: number;
  onNewComment: (comment: Comment) => void;
}

export default function NewCommentInput({
  suggestionID,
  onNewComment,
}: NewCommentInputProps) {
  const [comment, setComment] = useState('');
  const { user } = useUserContext();
  const { postComment } = usePostComment();

  async function handleCommentSubmission() {
    const result = await postComment({
      content: comment,
      author: user,
      suggestionID,
    });
    if (result && result.status === 201) {
      onNewComment(result.data);
    }
    setComment('');
  }

  return (
    <Box>
      <OutlinedInput
        disabled={!user || suggestionID === 0}
        value={comment}
        fullWidth
        onChange={(e) => setComment(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleCommentSubmission}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
