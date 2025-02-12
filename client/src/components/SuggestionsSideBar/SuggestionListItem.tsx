import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Suggestion } from '../../../../server/src/models/suggestion';
import BackgroundLetterAvatar from '../common/BackgroundLetterAvatar';
import { formatDateTime } from '../../utils/datetime';

interface SuggestionListItemProps {
  suggestion: Suggestion;
  selectedSuggestionID: number;
  onSuggestionSelection: (suggestionID: number) => void;
}

export default function SuggestionListItem({
  suggestion,
  selectedSuggestionID,
  onSuggestionSelection,
}: SuggestionListItemProps) {
  function handleSuggestionClick(suggestionID: number) {
    onSuggestionSelection(suggestionID);
  }

  return (
    <>
      <ListItem>
        {/* <ListItem key={suggestion.suggestion_id}> */}
        <ListItemButton
          onClick={() => handleSuggestionClick(suggestion.suggestion_id)}
          selected={suggestion.suggestion_id === selectedSuggestionID}
        >
          <ListItemAvatar>
            <BackgroundLetterAvatar name={suggestion.author} />
          </ListItemAvatar>
          <ListItemText
            primary={suggestion.content}
            secondary={`${suggestion.author}, ${formatDateTime(
              suggestion.created_at,
            )}`}
          ></ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider component="li" />
    </>
  );
}
