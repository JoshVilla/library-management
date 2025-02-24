import React, { useCallback, useEffect, useState } from "react";

const useFetchDataTable = (api, initialParams = {}) => {
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (params = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await api({ ...initialParams, ...params });
        if (response?.data) {
          setData(response.data);
          setPageState({
            currentPage: response.pagination?.currentPage || 1,
            totalPage: response.pagination?.totalPage || 0,
          });
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    },
    [api]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    pageState,
    setData,
    setPageState,
    loading,
    data,
    error,
    refetch: fetchData,
    fetchData,
  };
};

export default useFetchDataTable;
