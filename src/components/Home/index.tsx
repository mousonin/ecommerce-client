import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Promo from "./Promo";

const Home = () => {
  return (
    <>
      <Promo />
      <div className="max-w-screen-xl m-auto">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
