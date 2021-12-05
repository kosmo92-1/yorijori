
//카카오 로그인을 위한 
const CLIENT_ID = "0973a1f086110ef1c7c7fd731fac2d3c";
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
 