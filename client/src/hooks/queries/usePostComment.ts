import axios from 'axios';

const API = 'http://localhost:3000/suggestions';

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
      const result = await axios.post(`${API}/${suggestionID}/comments`, {
        content,
        author,
      });
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  return { postComment };
}
