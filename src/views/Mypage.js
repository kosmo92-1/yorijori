import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mypage extends Component {
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
                 <>
               <div className="mypageBanner">
                   <div><button>회원정보 수정</button></div>
                   <div><button>My Channel</button></div>
                   <div><button>공지사항</button></div>
                   <div><button>회원탈퇴</button></div>
               </div> 
               <form>
                   <label>아이디</label>
                   <input></input>
               </form>
               </>
            </div>
        );
    }
}

Mypage.propTypes = {

};

export default Mypage;