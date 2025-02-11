import axios from 'axios';
import { useEffect, useState } from 'react';
import { Suggestion } from '../../../server/src/models/suggestion';

const API = 'http://localhost:3000/suggestions';

export default function useGetSuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API}`);
      setSuggestions(result.data.data);
    };

    fetchData();
  }, []);

  return { suggestions };
}
