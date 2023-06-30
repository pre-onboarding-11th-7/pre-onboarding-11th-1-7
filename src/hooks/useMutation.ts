import { useState } from "react";

interface MutationParams<TData, TVariables> {
  mutationFunc: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
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
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading };
};

export default useMutation;
