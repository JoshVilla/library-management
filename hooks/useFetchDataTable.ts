import { useState } from "react";

interface FetchDataTableProps<T, P = any> {
  apiFunction: (params?: P) => Promise<{ data: T[] }>;
  params?: P;
}

export default function useFetchDataTable<T>({ apiFunction, params }: FetchDataTableProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiFunction(params);
      if (response?.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    setData,
    fetchData,
  };
} 