import axios from 'axios';
import endpoints from '../../config/endpoints';

interface PostCommentParams {
  suggestionID: number;
  content: string;
  author: string;
}

export default function usePostComment() {
  async function postComment({
    content,
    author,
    suggestionID,
  }: PostCommentParams) {
    try {
      const result = await axios.post(
        `${endpoints.base}/${suggestionID}/comments`,
        {
          content,
          author,
        },
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  return { postComment };
}
