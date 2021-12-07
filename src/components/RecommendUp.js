import axios from 'axios';
import { Button } from "reactstrap";

function RecommendUp(props){

    const actionRecommendUp = (e) =>{
        e.preventDefault();
        const checkRecommend ={
            member_id:props.member_id,
            recipe_id:props.recipe_id,
        }
        if(checkRecommend.member_id === null) {
            alert('로그인 해주세요.')
            document.location.href = '/login'
        } else {
        axios.post("/updateRecommend.do", checkRecommend, {
            headers: {
              // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            },
        })
          // post 보내고 나서 실행
        .then((res) => {
            console.log(res);
            if (res === "noRecommend") {
                alert("이 게시물을 추천했습니다.");
                return;
            }else {
                alert("이미 추천한 게시물 입니다.");
            }
        })
          // 실패시 실행
        .catch();
        }
    }

    return (
        <Button block type="submit" onClick={actionRecommendUp}>
            추천하기
        </Button>
    );

}
    

export default RecommendUp;