import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment } from '../../../../server/src/models/comment';

const API = 'http://localhost:3000/suggestions';

interface PostCommentParams {
  suggestionID: number;
  content: string;
  author: string;
}

export default function usePostComment() {
  const [data, setData] = useState<Comment | null>(null);

  console.log();

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
      console.log(result);
      // setData(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  return { data, postComment };
}
