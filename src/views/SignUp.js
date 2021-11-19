import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
           
            <div>
            <Header/>
            <h3>회원가입</h3>
            <form>
                <input type="text" placeholder="아이디*"></input>
                <p hidden="true">아이디를 확인해 주세요</p>
                <input type="password" placeholder="비밀번호*"></input>
                <input type="password" placeholder="비밀번호확인*"></input>
                <p hidden="true">비밀번호를 확인해 주세요</p>
                <input type="text" placeholder="주소*"></input>
                <p hidden="true">주소를 확인해 주세요</p>
                <button type="button">주소검색</button>
                <input type="text" placeholder="상세주소*"></input>
                <p hidden="true">상세주소를 확인해 주세요</p>

            <div className="thombnail"></div>
            <p className="profilePath"></p>
            <button>파일선택</button>
            <div className="promotionCheckbox"></div>
            <p>이벤트,프로모션 메일 수신 동의</p>
            <button type="submit">회원가입</button>
        
            </form>
            <Footer/>
            </div>
        );
    }
}

SignUp.propTypes = {

};

export default SignUp;