import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useUserContext } from '../hooks/context/useUserContext';
import usePostComment from '../hooks/queries/usePostComment';

interface NewCommentInputProps {
  suggestionID: number;
}

export default function NewCommentInput({
  suggestionID,
}: NewCommentInputProps) {
  const [comment, setComment] = useState('');
  const { user } = useUserContext();
  const { newComment, postComment } = usePostComment();

  function handleCommentSubmission() {
    postComment({ content: comment, author: user, suggestionID });
    setComment('');
  }

  return (
    <Box>
      <OutlinedInput
        disabled={!user || suggestionID === 0}
        value={comment}
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
