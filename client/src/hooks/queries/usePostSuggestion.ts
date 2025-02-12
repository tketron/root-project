import axios from 'axios';
import endpoints from '../../config/endpoints';

interface PostSuggestionParams {
  content: string;
  author: string;
}

export default function usePostSuggestion() {
  async function postSuggestion({ content, author }: PostSuggestionParams) {
    try {
      const result = await axios.post(endpoints.base, {
        content,
        author,
      });
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  return { postSuggestion };
}
