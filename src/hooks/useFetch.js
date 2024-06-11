import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getApi = async (url) => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await axios.get(url);
      setApiData(res.data);
    } catch (err) {
      setHasError(true);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [apiData, getApi, isLoading, hasError];
};

export default useFetch;
