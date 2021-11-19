import Footer from "./components/Footer";
import Header from "./components/Header";

import Main from "./views/Main";

import "./scss/main.scss";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="contents">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
