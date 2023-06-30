import { Link } from "react-router-dom";
import { path } from "../../Router";
import useSignIn from "../../hooks/services/useSignIn";
import SignForm from "../../components/SignForm";

const Signin = () => {
  const signin = useSignIn();

  return (
    <div>
      <h1>Sign In</h1>
      <SignForm onComplete={signin} />
      <Link to={path.SIGNUP} replace>
        Sign Up
      </Link>
    </div>
  );
};

export default Signin;
