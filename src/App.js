import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter,Routes  } from 'react-router-dom';
import { Route,Router } from 'react-router-dom';
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
            {/* <Route path="/main" element={Main} /> */}
            <Route path="/map" element={<Map/>}/>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default App;
