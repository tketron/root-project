import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Suggestion } from '../../../../server/src/models/suggestion';
import endpoints from '../../config/endpoints';

export default function useGetSuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      const result = await axios.get(`${endpoints.base}`);
      setSuggestions(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return { suggestions, fetchSuggestions };
}
