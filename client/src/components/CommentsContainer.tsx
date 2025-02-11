import { Box } from '@mui/material';
import useGetCommentsBySuggestionID from '../queries/useGetCommentsBySuggestionID';
import CommentItem from './CommentItem';

interface CommentsContainerProps {
  selectedSuggestionID: number;
}

export default function CommentsContainer({
  selectedSuggestionID,
}: CommentsContainerProps) {
  const { comments } = useGetCommentsBySuggestionID(selectedSuggestionID);
  console.log(comments);
  return (
    <Box sx={{ border: '1px solid black', flexGrow: 1 }}>
      {comments.map((comment) => {
        return (
          <CommentItem
            key={comment.comment_id}
            comment={comment}
          />
        );
      })}
    </Box>
  );
}
