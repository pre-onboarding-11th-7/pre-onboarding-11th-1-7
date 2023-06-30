import { useNavigate } from "react-router-dom";
import useMutation from "../useMutation";
import { signUp } from "../../api/auth";

type SignUpRequest = Parameters<typeof signUp>[0];

const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation<void, SignUpRequest>({
    mutationFunc: async ({ email, password }) => {
      return signUp({ email, password });
    },

    onSuccess: () => {
      navigate("/signin");
    },

    onError: (error) => {
      const errorData = error.response?.data;
      if (errorData) {
        alert(errorData.message);
      }
    },
  });

  return mutate;
};

export default useSignUp;
