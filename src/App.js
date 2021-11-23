import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Main from "./views/Main";
import Map from "./views/maps/Map";
import SignIn from "./views/SignIn"

import "./scss/main.scss";
import PriceInfo from "./views/maps/PriceInfo";
import Reply from "./views/Reply";
import Kind from "./views/Kind";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="contents">
        <Routes>
          <Route path="/" element={<Main/>} exact/>
          <Route path="/map" element={<Map/>} exact/>
          <Route path="/login" element={<SignIn/>} exact/>
          <Route path="/price" element={<PriceInfo/> }exact/>
          <Route path="/reply" element={<Reply/> }exact/>
          <Route path="/kind" element={<Kind/>} exact/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
