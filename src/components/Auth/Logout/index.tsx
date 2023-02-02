import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, useNavigate, Link } from "react-router-dom";

const Logout = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="absolute w-full text-center shadow-lg flex-col rounded hidden">
      <span className="p-1 hover:bg-slate-100">Edit info</span>
      <Link to="/" className="p-1 hover:bg-slate-100">
        <span onClick={() => auth.signOut()}>Logout</span>
      </Link>
    </div>
  );
};

export default Logout;
