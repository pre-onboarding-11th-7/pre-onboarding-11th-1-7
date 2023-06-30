import { Link } from "react-router-dom";
import { path } from "../../Router";
import useSignUp from "../../hooks/services/useSignUp";
import SignForm from "../../components/SignForm";

const Signup = () => {
  const signup = useSignUp();

  return (
    <div>
      <h1>Sign Up</h1>
      <SignForm onComplete={signup} />
      <Link to={path.SIGNIN} replace>
        Sign In
      </Link>
    </div>
  );
};

export default Signup;
