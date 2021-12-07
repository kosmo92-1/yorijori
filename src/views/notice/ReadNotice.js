import { TextField } from '@mui/material'
import { minWidth } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState, createRef } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container, FormGroup, Input, Label, Table } from 'reactstrap'

const ReadNotice = () => {
  const [title, setTitle] = useState('title')
  const [content, setContent] = useState('content')
  const [head, setHead] = useState('공지사항')
  const [id, setId] = useState(0)

  const noticeJson = {
    notice_id: id,
    notice_title: title,
    notice_head: head,
    notice_content: content,
  }
  // 상세페이지 불러오기
  useEffect(() => {
    const toConvert = window.location.href.substr(window.location.href.indexOf('=') + 1)
    console.log(window.location.href.substr(window.location.href.indexOf('=') + 1))
    const notice_id = parseInt(toConvert, 10)
    console.log(notice_id)
    console.log('noticeDetail')
    axios
      .get(`/readNotice.do?notice_id=${notice_id}`, {
        headers: { 'Content-type': 'application/json' },
      })
      // post 보내고 나서 실행
      .then((res) => {
        console.log(res.data)
        setTitle(res.data.read.notice_title)
        setContent(res.data.read.notice_content)
        setHead(res.data.read.notice_head)
        setId(res.data.read.notice_id)
      })
      .catch((err) => {
        alert('실패')
      })
  }, [])
  return (
    <Container maxWidth="sm">

          <Label tag="h5">공지상세보기</Label>
          <Label className="mb-2 text-muted" tag="h6">
          공지사항 게시판입니다.
          </Label>
            <FormGroup className="mb-3">
            <TextField
                  id="standard-multiline-flexible"
                  label="공지유형"
                  multiline
                  maxRows={4}
                  value={head}
                  variant="standard"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                  id="standard-multiline-flexible"
                  label="제목"
                  multiline
                  maxRows={5}
                  value={title}
                  variant="standard"
              />
            </FormGroup>
            <FormGroup >
              <TextField
                  id="standard-multiline-flexible"
                  label="내용"
                  multiline
                  minRows={20}
                  sx={{ minWidth: 1000 }}
                  value={content}
                  variant="standard"
        />
            </FormGroup>
    </Container>
  )
}

export default ReadNotice;
