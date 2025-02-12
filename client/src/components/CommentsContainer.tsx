import { Box } from '@mui/material';
import useGetCommentsBySuggestionID from '../hooks/queries/useGetCommentsBySuggestionID';
import CommentItem from './CommentItem';
import NewCommentInput from './NewCommentInput';
import { Comment } from '../../../server/src/models/comment';

interface CommentsContainerProps {
  selectedSuggestionID: number;
}

export default function CommentsContainer({
  selectedSuggestionID,
}: CommentsContainerProps) {
  const { comments, setComments } =
    useGetCommentsBySuggestionID(selectedSuggestionID);

  function handleNewComment(comment: Comment) {
    setComments((previousComments) => [...previousComments, comment]);
  }

  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <Box sx={{ overflow: 'auto' }}>
        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </Box>
      <NewCommentInput
        suggestionID={selectedSuggestionID}
        onNewComment={handleNewComment}
      />
    </Box>
  );
}
