import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { useState } from 'react';

interface LoginDialogProps {
  open: boolean;
  onClose: (username: string, shouldUpdate: boolean) => void;
}

export default function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [name, setName] = useState('');

  // shouldUpdate determines whether the dialog was closed by intentionally pressing Login vs simply closing the dialog
  function handleClose(username: string, shouldUpdate: boolean) {
    onClose(username, shouldUpdate);
    setName('');
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleClose('', false)}
    >
      <DialogTitle sx={{ paddingBottom: '1rem' }}>Who are you?</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          sx={{ width: '20rem' }}
        />
        <DialogActions>
          <Button onClick={() => handleClose('', false)}>Cancel</Button>
          <Button onClick={() => handleClose(name, true)}>Login</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
