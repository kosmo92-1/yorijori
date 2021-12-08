import axios from "axios";
import React, { useState } from "react";
import {
	Col,
	Container,
	Input,
	Row,
	FormGroup,
	Label,
	FormText,
	Form,
} from "reactstrap";

function MyChannelInsert(props) {
	const member_id = sessionStorage.getItem("user_id");

	const [formData, setFormData] = useState({
		"channel_name": "",
		"member_id": member_id,
		"channel_content": "",
        "channel_photo": "",
        "file": null
	});

	// const [channel_name, setChannel_name] = useState('');
	// const [channel_content, setChannel_content] = useState('');
	const [channel_photo, setChannel_photo] = useState(null);

	const saveFileImage = (e) => {
		// let profile = URL.createObjectURL(e.target.files[0]);
		// setChannel_photo(profile)

		setFormData({
			...formData,
			file: e.target.files[0], // API에 요청을 날릴 Form State에 정보를 추가합니다.
		});
	};

	const imagestyle = {
		height: "150px",
		width: "150px",
		borderRadius: "50%",
	};

	const handleValueChange = (event) => {
		// API 요청에 날릴 Form state에 정보를 추가합니다.
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
		console.log(formData);
	};

	const registerSubmit = (e) => {
		e.preventDefault();

		const reqFormData = new FormData();
		reqFormData.append("channel_name", formData.channel_name);
		reqFormData.append("channel_content", formData.channel_content);
		reqFormData.append("channel_photo", formData.channel_photo);

		axios
			.post("insertChannel.do", reqFormData, {
				headers: {
					"Content-type": "multipart/form-data",
				},
			})
			.then((res) =>
				res.data === "fail"
					? alert("채널 이름이 중복 됩니다.")
					: (document.location.href = "/myChannel")
			)
			.catch((err) => alert(err));
	};

	return (
		<Container>
			<Row>
				<Col>
					<p>채널 등록</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={registerSubmit}>
						<FormGroup>
							<Label for="channel_name">채널이름</Label>
							<Input
								id="channel_name"
                                name="channel_name"
								placeholder="채널이름을입력하세요"
								type="text"
								onChange={handleValueChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="channel_content">채널소개</Label>
							<Input
								id="channel_content"
                                name="channel_content"
								type="textarea"
								onChange={handleValueChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="file">
								채널사진
								<div>
									{channel_photo && (
										<img
											alt="sample"
											className="img-rounded img-responsive"
											src={channel_photo}
											style={imagestyle}
											onChange={handleValueChange}
										/>
									)}
									<div
										style={{ alignItems: "center", justifyContent: "center" }}
									></div>
								</div>
							</Label>
							<Input
								id="channel_photo"
								name="channel_photo"
								type="file"
								accept="image/*"
								onChange={saveFileImage}
							/>
							<FormText>채널 프로필 사진입니다.</FormText>
						</FormGroup>
						<Col>
							<Input type="submit" />
						</Col>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default MyChannelInsert;
