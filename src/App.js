import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  //return JSX -> return ()
  //New commit
  return (
    <div className="root__wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
