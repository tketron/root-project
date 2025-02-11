import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment } from '../../../../server/src/models/comment';

const API = 'http://localhost:3000/suggestions';

export default function useGetCommentsBySuggestionID(
  suggestionID: number,
  content: string,
) {
  // created_at is assigned on the backend
  const commentToCreate: Partial<Comment> = {
    content,
    suggestion_id: suggestionID,
    author: '',
  };
  // const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`${API}/${suggestionID}/comments`);
      // setComments(result.data.data);
    };

    if (suggestionID !== 0) {
      fetchData();
    }
  }, [suggestionID]);

  return { comments };
}
