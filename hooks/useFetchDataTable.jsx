import { useCallback, useEffect, useState } from "react";

const useFetchDataTable = (api, initialParams = {}) => {
  const [params, setParams] = useState(initialParams);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
    pageState: {
      currentPage: 1,
      totalPage: 0,
    },
  });

  const fetchData = useCallback(
    async (newParams = {}) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const response = await api({ ...params, ...newParams });
        setState({
          data: response?.data || [],
          loading: false,
          error: null,
          pageState: {
            currentPage: response?.pagination?.currentPage || 1,
            totalPage: response?.pagination?.totalPage || 0,
          },
        });
        setParams((prev) => ({ ...prev, ...newParams })); // Update params state
      } catch (err) {
        console.error("Fetch error:", err);
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err.message || "An error occurred while fetching data.",
        }));
      }
    },
    [api]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
    setParams,
    fetchData,
  };
};

export default useFetchDataTable;
