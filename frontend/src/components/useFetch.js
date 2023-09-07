import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((data) => setData(data))
      .catch(() => {
        setError(false);
      })
      .finally(() => setLoading(false));
  }, [url]);
  
  return [ data, loading, error ];
};
export default useFetch;