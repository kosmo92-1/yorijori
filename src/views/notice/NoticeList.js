import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import {} from "react-router-dom"
import { useNavigate } from "react-router" 

function NoticeList(props) {
    const [noticeList, setNoticeList] = useState({
        list:[{notice_id:0,notice_head:"",notice_title:"",notice_content:"",notice_regdate:""}]
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
            <nav aria-label="Page navigation example">
                <Pagination>
                <PaginationItem>
                    <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                    Previous
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                    1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                    3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                    Next
                    </PaginationLink>
                </PaginationItem>
                </Pagination>
            </nav>

        </div>
    );
}


export default NoticeList;