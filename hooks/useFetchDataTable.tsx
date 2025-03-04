import React, { useCallback, useEffect, useState } from "react";

type UseFetchDataTableProps = {
  apiFunction: any;
  params?: Record<string, any>;
};

  function useFetchDataTable({ apiFunction, params = {} }: UseFetchDataTableProps) {
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (additionalParams = {}) => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiFunction({ ...params, ...additionalParams });
        if (response?.data) {
          setData(response.data);
          setPageState({
            currentPage: response.page || 1,
            totalPage: response.totalPages || 0,
          });
        }
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    },
    []
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
}

export default useFetchDataTable;