import Nav from "./Nav";
import Promo from "./Promo";

const Home = () => {
  return (
    <>
      <Promo />
      <div className="max-w-screen-xl m-auto">
        <Nav />
        <main>Content</main>
      </div>
    </>
  );
};

export default Home;
