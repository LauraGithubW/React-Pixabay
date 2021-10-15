import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        let res = await fetch(url);

        if (!res.ok) {
          let err = "Se ha producido un error",
            status = res.status,
            statusText = res.statusText;

          throw err;
        }
        let data = await res.json();
        setData(data);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    return { data, error, loader };
  }, [url]);
};
