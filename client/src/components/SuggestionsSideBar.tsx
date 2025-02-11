import { Box, Button, Drawer, List } from '@mui/material';
import useGetSuggestions from '../queries/useGetSuggestions';
import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  return (
    <Box sx={{ border: '1px solid black' }}>
      <Button onClick={() => toggleDrawer(true)}>Toggle Sidebar</Button>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <Box onClick={() => toggleDrawer(false)}>
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
      </Drawer>
    </Box>
  );
}
