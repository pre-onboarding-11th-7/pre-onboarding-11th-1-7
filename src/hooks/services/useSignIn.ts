import { useNavigate } from "react-router-dom";
import useMutation from "../useMutation";
import { signIn } from "../../api/auth";

type SignInRequest = Parameters<typeof signIn>[0];
type SignInResponse = Awaited<ReturnType<typeof signIn>>;

const useSignIn = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation<SignInResponse, SignInRequest>({
    mutationFunc: async ({ email, password }) => {
      return signIn({ email, password });
    },

    // 로그인 성공 시, 로컬 스토리지 토큰 추가 및 페이지 이동
    onSuccess: ({ access_token }) => {
      window.localStorage.setItem("auth", access_token);
      navigate("/todo");
    },

    onError: (error) => {
      const errorData = error.response?.data;
      if (errorData) {
        errorData.statusCode === 401
          ? alert("이메일 또는 비밀번호를 잘못 입력했습니다.")
          : alert(errorData.message);
      }
    },
  });

  return mutate;
};

export default useSignIn;
