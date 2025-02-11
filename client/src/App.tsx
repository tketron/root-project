import { Box } from '@mui/material';
import SuggestionsSideBar from './components/SuggestionsSideBar';
import CommentsContainer from './components/CommentsContainer';
import { useState } from 'react';

function App() {
  const [selectedSuggestionID, setSelectedSuggestionID] = useState<number>(0);

  console.log(selectedSuggestionID);

  function handleSelectedSuggestionChange(suggestionID: number) {
    setSelectedSuggestionID(suggestionID);
  }

  return (
    <Box>
      <SuggestionsSideBar
        selectedSuggestionID={selectedSuggestionID}
        onSuggestionSelection={handleSelectedSuggestionChange}
      />
      <CommentsContainer selectedSuggestionID={selectedSuggestionID} />
    </Box>
  );
}

export default App;
