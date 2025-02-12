import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';

interface AddSuggestionDialogProps {
  open: boolean;
  onClose: (suggestion: string, shouldUpdate: boolean) => void;
}

export default function AddSuggestionDialog({
  open,
  onClose,
}: AddSuggestionDialogProps) {
  const [suggestion, setSuggestion] = useState('');

  // shouldUpdate is true only if the dialog was intentially closed by clicking 'Submit suggestion'
  function handleClose(suggestion: string, shouldUpdate: boolean) {
    onClose(suggestion, shouldUpdate);
    setSuggestion('');
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleClose('', false)}
      maxWidth="md"
    >
      <DialogTitle sx={{ paddingBottom: '1rem' }}>
        Add a new suggestion!
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          autoFocus
          sx={{ width: '40rem' }}
        />

        <DialogActions>
          <Button onClick={() => handleClose('', false)}>Cancel</Button>
          <Button onClick={() => handleClose(suggestion, true)}>
            Submit Suggestion
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
