import { Pagination, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState} from 'react'
import {  Container, Label, Table } from 'reactstrap'

const NoticeList = () => {
  const [noticeList, setNoticeList] = useState({
    list: [
      { notice_id: 0, notice_head: '', notice_title: '', notice_content: '', notice_regdate: '' },
    ],
    pageMaker: {
      totalCount: 0,
      startPage: 1,
      endPage: 1,
      prev: false,
      next: false,
      displayPageNum: 10,
      cri: { page: 1, pageNum: 10, rowStart: 1, rowEnd: 10, pageStart: 0 },
    },
  })

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const noticeComponent = noticeList.list.map((item) => (
    // eslint-disable-next-line react/jsx-key
    <TableRow >
      <TableCell>{item.notice_id}</TableCell>
      <TableCell>{item.notice_head}</TableCell>
      <TableCell><a href="#" onClick={(e) =>{e.preventDefault(); actionRead(item.notice_id)}}>{item.notice_title}</a></TableCell>
      <TableCell>{new Date(item.notice_regdate).toLocaleDateString()}</TableCell>
    </TableRow>
  ))

  // eslint-disable-next-line no-undef
  const actionRead = (notice_id) => {
    window.location.href = `/readnotice?notice_id=${notice_id}`
    // window.location.href = `/#/channel`
  }

  useEffect(() => {
    axios
      .get('/listNotice.do?page=' + page)
      .then((res) => {
        console.log(res.data)
        setNoticeList(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }, [page])
  

  return (
    <Container maxWidth="sm">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Label tag="h5">공지목록</Label>
          <Label className="mb-2 text-muted" tag="h6">
            공지사항 목록입니다.
          </Label>
            <TableContainer sx={{ minWidth: 650 }}> 
              <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>유형</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>등록시간</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{noticeComponent}</TableBody>
              </Table>
              <Pagination count={noticeList.pageMaker.endPage} page={page} onChange={handleChange} />
            </TableContainer>
      </Paper>
    </Container>
  )
}
export default NoticeList