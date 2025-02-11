import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import BackgroundLetterAvatar from './common/BackgroundLetterAvatar';
import { useUserContext } from '../hooks/context/useUserContext';
import { useState } from 'react';

export default function SuggestionBoardAppBar() {
  const { user, login, logout } = useUserContext();
  const [loginOpen, setLoginOpen] = useState(false);

  console.log(user);

  function handleLoginDialogClose(username: string, shouldUpdate: boolean) {
    setLoginOpen(false);
    console.log(username);
    if (username && shouldUpdate) {
      login(username);
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Suggestion Board</Typography>
          {user ? (
            <Button onClick={logout}>
              <BackgroundLetterAvatar name={user} />
            </Button>
          ) : (
            <Button onClick={() => setLoginOpen(true)}>Login</Button>
          )}
          <LoginDialog
            open={loginOpen}
            onClose={handleLoginDialogClose}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

interface LoginDialogProps {
  open: boolean;
  onClose: (username: string, shouldUpdate: boolean) => void;
}

function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [name, setName] = useState('');
  return (
    <Dialog
      open={open}
      onClose={() => onClose('', false)}
    >
      <DialogTitle>Who are you?</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        ></TextField>
        <DialogActions>
          <Button onClick={() => onClose(name, true)}>Login</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
