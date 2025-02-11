import { AppBar, Box, Toolbar } from '@mui/material';
import BackgroundLetterAvatar from './common/BackgroundLetterAvatar';

export default function SuggestionBoardAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <BackgroundLetterAvatar name="Tyler Ketron" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
