import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment } from '../../../../server/src/models/comment';
import endpoints from '../../config/endpoints';

export default function useGetCommentsBySuggestionID(suggestionID: number) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${endpoints.base}/${suggestionID}/comments`,
        );
        setComments(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (suggestionID !== 0) {
      fetchData();
    }
  }, [suggestionID]);

  return { comments, setComments };
}
