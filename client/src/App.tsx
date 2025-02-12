import { Box, Container } from '@mui/material';
import SuggestionsSideBar from './components/SuggestionsSideBar';
import CommentsContainer from './components/CommentsContainer';
import { useState } from 'react';
import SuggestionBoardAppBar from './components/SuggestionBoardAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { UserProvider } from './hooks/context/useUserContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [selectedSuggestionID, setSelectedSuggestionID] = useState<number>(0);

  function handleSelectedSuggestionChange(suggestionID: number) {
    setSelectedSuggestionID(suggestionID);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <UserProvider>
        <CssBaseline />
        <Box sx={{ height: '100vh' }}>
          <SuggestionBoardAppBar />
          <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
            <Box sx={{ width: '360px', height: 'calc(100vh - 64px)' }}>
              <SuggestionsSideBar
                selectedSuggestionID={selectedSuggestionID}
                onSuggestionSelection={handleSelectedSuggestionChange}
              />
            </Box>
            <Box sx={{ flexGrow: 1, height: 'calc(100vh - 64px)' }}>
              <CommentsContainer selectedSuggestionID={selectedSuggestionID} />
            </Box>
          </Box>
        </Box>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
