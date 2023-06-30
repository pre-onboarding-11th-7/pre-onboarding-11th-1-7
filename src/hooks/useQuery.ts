import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { HttpFailed } from "http";

interface QueryParams<T> {
  queryFunc: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError<HttpFailed>) => void;
}

const useQuery = <T>({ queryFunc, onSuccess, onError }: QueryParams<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const newData = await queryFunc();
      setData(newData);

      if (onSuccess) {
        onSuccess(newData);
      }
    } catch (error: unknown) {
      if (onError && axios.isAxiosError(error)) {
        onError(error as AxiosError<HttpFailed>);
      }
    } finally {
      setIsLoading(false);
    }
  }, [onError, onSuccess, queryFunc]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, refetch: fetch };
};

export default useQuery;
