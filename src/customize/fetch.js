import axios from 'axios';
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [Data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const response = await axios.get(url);
            setData(response.data.data);
            setLoading(false)
            console.log(response.data.data)
          } catch (error) {
            console.error('Error fetching COVID-19 data:', error);
          }
        };
    
        fetchData();
      }, [url]);

      return {
            Data, loading
      }
    
}
export default useFetch