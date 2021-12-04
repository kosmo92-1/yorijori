import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "assets/scss/paper-kit.scss";
<html>
<head>
{/* 네이버 */}
<script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
{/* 카카오 */}
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>Kakao.init("e03625b4bd41a78b915468e4933296bc");</script>
</head>
</html>
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
