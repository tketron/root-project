import { Box, List } from '@mui/material';
import useGetSuggestions from '../queries/useGetSuggestions';
import SuggestionListItem from './SuggestionListItem';

interface SuggestionsSideBarProps {
  selectedSuggestionID: number;
  onSuggestionSelection: (suggestionID: number) => void;
}

export default function SuggestionsSideBar({
  selectedSuggestionID,
  onSuggestionSelection,
}: SuggestionsSideBarProps) {
  const { suggestions } = useGetSuggestions();

  return (
    <Box sx={{ border: '1px solid black', width: '20rem' }}>
      <Box sx={{ width: '20rem' }}>
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
