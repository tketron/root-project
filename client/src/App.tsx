import { Box } from '@mui/material';
import SuggestionsSideBar from './components/SuggestionsSideBar';
import CommentsContainer from './components/CommentsContainer';
import { useState } from 'react';
import SuggestionBoardAppBar from './components/SuggestionBoardAppBar';

function App() {
  const [selectedSuggestionID, setSelectedSuggestionID] = useState<number>(0);

  function handleSelectedSuggestionChange(suggestionID: number) {
    setSelectedSuggestionID(suggestionID);
  }

  return (
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
  );
}

export default App;
