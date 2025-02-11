import { Box } from '@mui/material';
import useGetCommentsBySuggestionID from '../hooks/queries/useGetCommentsBySuggestionID';
import CommentItem from './CommentItem';
import NewCommentInput from './NewCommentInput';

interface CommentsContainerProps {
  selectedSuggestionID: number;
}

export default function CommentsContainer({
  selectedSuggestionID,
}: CommentsContainerProps) {
  const { comments } = useGetCommentsBySuggestionID(selectedSuggestionID);
  console.log(comments);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </Box>
      <NewCommentInput suggestionID={selectedSuggestionID} />
    </Box>
  );
}
