import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Main from "./views/Main";
import SignIn from "./views/sign/SignIn"
import "./scss/main.scss";
import Reply from "./views/Reply";
import Kind from "./views/kind/Kind";
import SignUp from "./views/sign/SignUp";
import SignMypage from "views/sign/SignMypage";
import KindList from "./views/kind/KindList";
import BasketRecipeList from "./views/basket/BasketRecipeList";
import InsertRecipe from "views/recipe/InsertRecipe";
import NoticeList from "views/notice/NoticeList";
import InsertNotice from "views/notice/InsertNotice";
import ReadNotice from "views/notice/ReadNotice";
import RecipeList from "views/recipe/RecipeList";
import RecipeDetail from "views/RecipeDetail";
import Map from "views/maps/Map";
import MartMap from "views/maps/MartMap";
import ChannelList from "views/channel/ChannelList";
import SubscribeList from "views/subscribe/SubscribeList";

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
          <Route path="/recipes" element={<RecipeList/>} exact/>
          <Route path="/recipe-detail" element={<RecipeDetail />} exact />
          <Route path="/login" element={<SignIn/>} exact/>
          <Route path="/reply" element={<Reply/> }exact/>
          <Route path="/kind" element={<Kind/>} exact/>
          <Route path="/signup/:member_email/:member_name/:member_idKey" element={<SignUp/>} exact/>
          {/* <Route path="/mypage" element={<Mypage/>} exact/> */}
          <Route path="/signup" element={<SignUp/>} exact/>
          <Route path="/mypage" element={<SignMypage/>} exact/>
          <Route path="/kindlist" element={<KindList/>} exact/>
          <Route path="/basketrlist" element={<BasketRecipeList/>} exact/>
          <Route path="/insertRecipe" element={<InsertRecipe/>} exact/>
          <Route path="/notice" element={<NoticeList/>} exact/>
          <Route path="/insertnotice" element={<InsertNotice/>} exact/>
          <Route path="/readnotice/:notice_id" element={<ReadNotice/>}exact/>
          <Route path="/recipelist" element={<RecipeList/>} exact/>
          <Route path="/mart" element={<MartMap/>}exact/>
          <Route path="/subscribe" element={<SubscribeList/>}exact/>
          <Route path="/channel/:channel_id" element={<ChannelList/>}exact/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
