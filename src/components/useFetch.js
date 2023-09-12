import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .then((data) => setData(data))
    //   .catch(() => {
    //     setError(false);
    //   })
    //   .finally(() => setLoading(false));

    const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      // console.log(json);
      console.log(json);
      console.log(json);
      console.log(typeof res.data)
      setData(json);
      setLoading(true);
    } catch (error) {
      setError(error);
    }
  };
  fetchData();    
  }, [url]);
  
  
  return { data, loading, error };
};

export default useFetch;