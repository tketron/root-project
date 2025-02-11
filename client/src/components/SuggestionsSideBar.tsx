import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import useGetSuggestions from '../queries/useGetSuggestions';
import { useState } from 'react';

interface SuggestionsSideBarProps {
  onSuggestionSelection: (suggestionID: number) => void;
}

export default function SuggestionsSideBar({
  onSuggestionSelection,
}: SuggestionsSideBarProps) {
  const { suggestions } = useGetSuggestions();
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  function handleSuggestionClick(suggestionID: number) {
    onSuggestionSelection(suggestionID);
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
                <ListItem key={suggestion.suggestion_id}>
                  <ListItemButton
                    onClick={() =>
                      handleSuggestionClick(suggestion.suggestion_id)
                    }
                  >
                    <ListItemText>{suggestion.content}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
