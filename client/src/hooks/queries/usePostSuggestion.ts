import axios from 'axios';

const API = 'http://localhost:3000/suggestions';

interface PostSuggestionParams {
  content: string;
  author: string;
}

export default function usePostSuggestion() {
  async function postSuggestion({ content, author }: PostSuggestionParams) {
    try {
      const result = await axios.post(API, {
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
