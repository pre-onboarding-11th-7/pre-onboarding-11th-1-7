import { useState } from "react";
import axios, { AxiosError } from "axios";
import { HttpFailed } from "http";

interface MutationParams<TData, TVariables> {
  mutationFunc: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: AxiosError<HttpFailed>) => void;
}

const useMutation = <TData, TVariables>({
  mutationFunc,
  onSuccess,
  onError,
}: MutationParams<TData, TVariables>) => {
  const [isLoading, setIsLoading] = useState(true);

  const mutate = async (variables: TVariables) => {
    setIsLoading(true);

    try {
      const data = await mutationFunc(variables);
      if (onSuccess) {
        onSuccess(data);
      }
      return data;
    } catch (error) {
      if (onError && axios.isAxiosError(error)) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading };
};

export default useMutation;
