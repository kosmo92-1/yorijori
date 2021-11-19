import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Main from "./views/Main";
import Map from "./views/Map";

import "./scss/main.scss";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="contents">
        <Routes>
          <Route path="/" element={<Main/>} exact/>
          <Route path="/map" element={<Map/>} exact/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
