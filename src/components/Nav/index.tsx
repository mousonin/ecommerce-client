import { FcSearch } from "react-icons/fc";
import { CiBag1, CiHeart, CiUser} from "react-icons/ci"
const index = () => {
  return (
    <>
      <div className="flex mx-4 items-center justify-between">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary">
          Phimmoi.net
        </h4>
        <span className="flex items-center border-solid border rounded-xl border-slate-400 p-1">
          <input className="outline-none mx-2" placeholder="Search" type="text" />
          <FcSearch />
        </span>
        <span className="flex items-center">
        <CiUser/>
        <CiHeart/>
        <CiBag1/>
        </span>
      </div>
    </>
  );
};

export default index;
