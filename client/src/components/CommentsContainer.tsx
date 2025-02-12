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
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
      </Box>
      <Box sx={{ height: '64px' }}>
        <NewCommentInput
          suggestionID={selectedSuggestionID}
          onNewComment={handleNewComment}
        />
      </Box>
    </Box>
  );
}
