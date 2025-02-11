import { Box } from '@mui/material';
import useGetCommentsBySuggestionID from '../queries/useGetCommentsBySuggestionID';

interface CommentsContainerProps {
  selectedSuggestionID: number;
}

export default function CommentsContainer({
  selectedSuggestionID,
}: CommentsContainerProps) {
  const { comments } = useGetCommentsBySuggestionID(selectedSuggestionID);
  console.log(comments);
  return (
    <Box sx={{ border: '1px solid black' }}>
      <ul>
        {comments.map((comment) => {
          return <li>{comment.content}</li>;
        })}
      </ul>
    </Box>
  );
}
