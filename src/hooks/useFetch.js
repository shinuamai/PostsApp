
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request Cancelled");
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  const handleRequest = async (method, id, body) => {
    const abortController = new AbortController();

    try {
      const response = await fetch(`${url}/${id}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: abortController.signal,
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request Cancelled");
      } else {
        throw error;
      }
    } finally {
      abortController.abort();
    }
  };

  return { data, setData, loading, error, handleRequest };
}
