import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import BackgroundLetterAvatar from '../common/BackgroundLetterAvatar';
import { useUserContext } from '../../hooks/context/useUserContext';
import { useState } from 'react';
import LoginDialog from './LoginDialog';

export default function SuggestionBoardAppBar() {
  const { user, login, logout } = useUserContext();
  const [loginOpen, setLoginOpen] = useState(false);

  // Close the dialog, then only call login if the username is not empty and the dialog was closed intentionally
  function handleLoginDialogClose(username: string, shouldUpdate: boolean) {
    setLoginOpen(false);
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
