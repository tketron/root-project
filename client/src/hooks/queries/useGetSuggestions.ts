import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Suggestion } from '../../../../server/src/models/suggestion';

const API = 'http://localhost:3000/suggestions';

export default function useGetSuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      const result = await axios.get(`${API}`);
      setSuggestions(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }, [setSuggestions]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return { suggestions, fetchSuggestions };
}
