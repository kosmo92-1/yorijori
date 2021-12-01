import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {PaginationItem, PaginationLink, Table } from 'reactstrap';
import {} from "react-router-dom"
import { useNavigate } from "react-router" 

function NoticeList(props) {
    const [noticeList, setNoticeList] = useState({
        list:[{notice_id:0,notice_head:"",notice_title:"",notice_content:"",notice_regdate:""}],
        "pageMaker":{"totalCount":16,"startPage":1,"endPage":2,"prev":false,"next":false,"displayPageNum":10,"cri":{"page":1,"pageNum":10,"rowStart":1,"rowEnd":10,"pageStart":0}}
    })
    const noticeComponent = noticeList.list.map((item)=>(<tr><td>{item.notice_id}</td><td>{item.notice_head}</td><td onClick={()=>actionRead(item.notice_id)}>{item.notice_title}</td></tr>))

    const navigate = useNavigate();
    const actionRead =  (notice_id) =>{
        let path = `/readnotice/${notice_id}`
        navigate(path)
    }
    useEffect(()=>{
        axios.get('/listNotice.do')
        // 값을가져와 넣어줍니다.
        .then(res => {
        console.log(res.data);
        setNoticeList(res.data)
        })
        .catch(err =>{alert(err)})
    },[])
    
    return (
        <div>
            <Table>
                <thead>
                    <tr><th>#</th><th>유형</th><th>제목</th></tr>
                </thead>
                <tbody>
                    {noticeComponent}
                </tbody>
            </Table>
        </div>
    );
}
export default NoticeList;