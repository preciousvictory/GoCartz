import { useState, useEffect } from "react";

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect((url) => {
    setLoading(true);
    fetch(url)
      .then(res=>res.json())
      .then(json=>console.log(json))
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return { data, loading, error };
};
export default useFetch;