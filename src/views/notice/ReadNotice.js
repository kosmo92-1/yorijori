import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

const ReadNotice = ( {history} ) => {
  const [title, setTitle] = useState('title')
  const [content, setContent] = useState('content')
  const [head, setHead] = useState('공지사항')
  const [id, setId] = useState(0)
  const [regdate, setRegdate] = useState(0)

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
        setRegdate(res.data.read.notice_regdate)
      })
      .catch((err) => {
        alert('실패')
      })
  }, [])

  return (
		<ListGroup>
			<ListGroupItem>
				<ListGroupItemHeading>공지상세보기</ListGroupItemHeading>
				<ListGroupItemText>공지사항 게시판입니다.</ListGroupItemText>
			</ListGroupItem>
			<ListGroupItem>
				
			</ListGroupItem>
			<ListGroupItem>
				<ListGroupItemHeading>공지유형</ListGroupItemHeading>
				<ListGroupItemText>{head}</ListGroupItemText>
			</ListGroupItem>
			<ListGroupItem>
				<ListGroupItemHeading>제목</ListGroupItemHeading>
				<ListGroupItemText>{title}</ListGroupItemText>
			</ListGroupItem>
			<ListGroupItem>
				<ListGroupItemHeading>내용</ListGroupItemHeading>
				<ListGroupItemText>{content}</ListGroupItemText>
			</ListGroupItem>
			<ListGroupItem>
				<ListGroupItemHeading>등록일</ListGroupItemHeading>
				<ListGroupItemText>
					{new Date(regdate).toLocaleDateString()}
				</ListGroupItemText>
			</ListGroupItem>
		</ListGroup>

		// <Container maxWidth="xs">

		//       <Label tag="h5">공지상세보기</Label>
		//       <Label className="mb-2 text-muted" tag="h6">
		//       공지사항 게시판입니다.
		//       </Label>
		//         <FormGroup className="mb-3 xs">
		//         <TextField
		//               id="standard-multiline-flexible"
		//               label="공지유형"
		//               multiline
		//               maxRows={4}
		//               value={head}
		//               variant="standard"
		//           />
		//         </FormGroup>
		//         <FormGroup>
		//           <TextField
		//               id="standard-multiline-flexible"
		//               label="제목"
		//               multiline
		//               maxRows={5}
		//               value={title}
		//               variant="standard"
		//           />
		//         </FormGroup>
		//         <FormGroup >
		//           <TextField
		//               id="standard-multiline-flexible"
		//               label="내용"
		//               multiline
		//               minRows={20}
		//               sx={{ minWidth: 1000 }}
		//               value={content}
		//               variant="standard"
		//     />
		//         </FormGroup>
		// </Container>
	);
}

export default ReadNotice;
