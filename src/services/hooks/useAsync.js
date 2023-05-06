import { useState, useEffect } from "react";

//when used, sets loading to true
export default function useAsync(apiHook, moment = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(moment);
  const [error, setError] = useState(null);

  //args => arguments that apiHook function may need, sent by an anonymous arrow function as the 1st argument to useAsync hook
  const connect = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHook(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(error);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (moment) {
      connect();
    }
  }, []);

  return {
    data,
    loading,
    error,
    connect
  };
}
