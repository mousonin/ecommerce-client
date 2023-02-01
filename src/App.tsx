import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <Promo />
      <div className="max-w-screen-xl m-auto">
        <Nav />
        <main>Content</main>
      </div>
    </>
  );
}

export default App;
