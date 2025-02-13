import { Box, Button, List } from '@mui/material';
import useGetSuggestions from '../../hooks/queries/useGetSuggestions';
import SuggestionListItem from './SuggestionListItem';
import usePostSuggestion from '../../hooks/queries/usePostSuggestion';
import { useState } from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import AddSuggestionDialog from './AddSuggestionDialog';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import generateRandomSuggestion from '../../utils/randomSuggestion';

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

  // Only posts a new suggestion if the text is not empty and the dialog was was closed by submitting the suggestion
  // Then refetches the list of suggestions
  async function handleAddSuggestionDialogClose(
    suggestion: string,
    shouldUpdate: boolean,
  ) {
    setAddSuggestionOpen(false);
    if (suggestion && shouldUpdate) {
      await postSuggestion({ content: suggestion, author: user });
      await fetchSuggestions();
    }
  }

  // Generates a random suggestion and then posts it
  // Then refeteches the list of suggestions
  async function handlePostRandomSuggestion() {
    const suggestion = generateRandomSuggestion();
    await postSuggestion({ content: suggestion, author: user });
    await fetchSuggestions();
  }

  return (
    <Box sx={{ width: '360px', height: 'calc(100% - 64px)' }}>
      <Box sx={{ display: 'flex' }}>
        {/* Adding new suggestions is disabled if a user is not logged in */}
        <Button
          disabled={!user}
          onClick={handlePostRandomSuggestion}
          variant="outlined"
        >
          <HelpOutlineIcon />
          Post a random suggestion
        </Button>
        <Button
          disabled={!user}
          onClick={() => setAddSuggestionOpen(true)}
          variant="outlined"
        >
          <AddCircleOutlineIcon />
          Add a new suggestion
        </Button>
        <AddSuggestionDialog
          open={addSuggestionOpen}
          onClose={handleAddSuggestionDialogClose}
        />
      </Box>

      <Box sx={{ overflow: 'auto', height: 'calc(100% - 64px)' }}>
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
    </Box>
  );
}
