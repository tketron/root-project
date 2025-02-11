import { Box } from '@mui/material';
import SuggestionsSideBar from './components/SuggestionsSideBar';
import CommentsContainer from './components/CommentsContainer';
import { useState } from 'react';
import SuggestionBoardAppBar from './components/SuggestionBoardAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <CssBaseline />
      <Box>
        <SuggestionBoardAppBar />
        <Box sx={{ display: 'flex' }}>
          <SuggestionsSideBar
            selectedSuggestionID={selectedSuggestionID}
            onSuggestionSelection={handleSelectedSuggestionChange}
          />
          <CommentsContainer selectedSuggestionID={selectedSuggestionID} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
