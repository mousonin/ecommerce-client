import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Logout = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <span>Edit info</span>
      <span onClick={() => auth.signOut()}>Logout</span>;
    </div>
  );
};

export default Logout;
