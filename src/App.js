import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Main from "./views/Main";
import Map from "./views/maps/Map";
import SignIn from "./views/SignIn"

import "./scss/main.scss";
import Reply from "./views/Reply";
import Kind from "./views/kind/Kind";
import SignUp from "./views/SignUp";
import KindList from "./views/kind/KindList";
import BasketRecipeList from "./views/basket/BasketRecipeList";
import InsertRecipe from "views/recipe/InsertRecipe";

function App() {
  function debug() {
    console.log("hello")
  }


  return (
    <div className="wrapper">
      <Header></Header>
      <div className="contents">
        <Routes>
          <Route path="/" element={<Main/>} exact/>
          <Route path="/map" element={<Map/>} exact/>
          {/* <Route path="/login" element={<SignIn/>} exact/> */}
          <Route path="/login" element={<SignIn/>} exact/>
          <Route path="/reply" element={<Reply/> }exact/>
          <Route path="/kind" element={<Kind/>} exact/>
          <Route path="/signup" element={<SignUp/>} exact/>
          <Route path="/kindlist" element={<KindList/>} exact/>
          <Route path="/basketrlist" element={<BasketRecipeList/>} exact/>
          <Route path="/insertRecipe" element={<InsertRecipe/>} exact/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
