import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const User = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("login");
  }, []);
  console.log(user);
  return <p>Uses info</p>;
};
export default User;
