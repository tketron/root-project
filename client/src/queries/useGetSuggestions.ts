import axios from 'axios';
import { useEffect, useState } from 'react';

const API = 'http://localhost:3000/suggestions';

export default function useGetSuggestions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API}`);
      setData(result.data);
    };

    fetchData();
  }, []);

  return { suggestions: data };
}
