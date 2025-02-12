import { Box, Button, IconButton, List, Typography } from '@mui/material';
import useGetSuggestions from '../hooks/queries/useGetSuggestions';
import SuggestionListItem from './SuggestionListItem';
import usePostSuggestion from '../hooks/queries/usePostSuggestion';
import { useState } from 'react';
import { useUserContext } from '../hooks/context/useUserContext';
import AddSuggestionDialog from './AddSuggestionDialog';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import generateRandomSuggestion from '../utils/randomSuggestion';

interface SuggestionsSideBarProps {
  selectedSuggestionID: number;
  onSuggestionSelection: (suggestionID: number) => void;
}

export default function SuggestionsSideBar({
  selectedSuggestionID,
  onSuggestionSelection,
}: SuggestionsSideBarProps) {
  const { suggestions, fetchSuggestions } = useGetSuggestions();
  const { postSuggestion } = usePostSuggestion();
  const { user } = useUserContext();
  const [addSuggestionOpen, setAddSuggestionOpen] = useState(false);
  console.log('SuggestionSideBar rendering', suggestions);

  function handleAddSuggestionDialogClose(
    suggestion: string,
    shouldUpdate: boolean,
  ) {
    setAddSuggestionOpen(false);
    if (suggestion && shouldUpdate) {
      postSuggestion({ content: suggestion, author: user });
      fetchSuggestions();
    }
  }

  return (
    // <Box sx={{ border: '1px solid black', width: '20rem', overflowY: 'auto' }}>
    <Box sx={{ width: '40rem', overflowY: 'auto' }}>
      <Box>
        <Button onClick={() => console.log(generateRandomSuggestion())}>
          Generate random suggestion
        </Button>
        <Typography>Add a new suggestion</Typography>
        <IconButton
          disabled={!user}
          onClick={() => setAddSuggestionOpen(true)}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <AddSuggestionDialog
        open={addSuggestionOpen}
        onClose={handleAddSuggestionDialogClose}
      />
      <List>
        {suggestions.map((suggestion) => {
          return (
            <SuggestionListItem
              key={suggestion.suggestion_id}
              suggestion={suggestion}
              selectedSuggestionID={selectedSuggestionID}
              onSuggestionSelection={onSuggestionSelection}
            />
          );
        })}
      </List>
    </Box>
    // </Box>
  );
}
