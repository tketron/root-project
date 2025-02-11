import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

interface NewCommentInputProps {
  suggestionID: number;
}

export default function NewCommentInput({
  suggestionID,
}: NewCommentInputProps) {
  const [comment, setComment] = useState('');
  return (
    <Box>
      <OutlinedInput
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
