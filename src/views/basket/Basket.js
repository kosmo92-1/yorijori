import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  Row,
  Table,
  Col,
  Form,
  FormGroup,
} from "reactstrap";
import BasketRecipeList from "./BasketRecipeList";
const imagestyle = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
};
const partslist = {
  color: "black",
  fontFamily: "Arial",
  width: "100%",
  height: "100%",
  backgroundColor: "lightgray",
};

//장바구니
function Basket(props) {
  const [basketData, setBasketData] = useState({
    recipe_thumbnail: null,
    recipe_ing: "",
    recipe_title: "",
  });
  const [check1, setCheck1] = useState("0");
  const [check2, setCheck2] = useState("0");
  const [check3, setCheck3] = useState("0");
  const [recipe_thumbnail, setRecipe_thumbnail] = useState(null);

//   const onCheck1 = () => {
//     setCheck1() = "1";
//   };
//   const onCheck2 = () => {
//     setCheck2() = "1";
//   };
//   const onCheck3 = () => {
//     setCheck3() = "1";
//   };
//   const deletelist = () => {
//     if (check1 == "1") {
//     }
//   };

  useEffect(() => {
    if (`${sessionStorage.getItem("recipe_thumbnail")}` !== "null") {
      setRecipe_thumbnail(`${sessionStorage.getItem("recipe_thumbnail")}`);
    }
  }, []);
  return (
    <Container>
      <Row>
        {/* <Col xs="2">
          <Container>
            <h4>총 재료</h4>
            <Form style={partslist}>
              <FormGroup>
                <div>토마토</div>
                <div>토마토</div>
                <div>토마토</div>
                <div>토마토</div>
                <div>토마토</div>
                <div>토마토</div>
                <div>토마토</div>
              </FormGroup>
            </Form>
          </Container>
        </Col> */}
        <Col xs="1"/>
        <Col xs="10">
        <h3>장바구니</h3>
          <Row>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>레시피</th>
                  <th>상세정보</th>
                  <th>재료</th>
                </tr>
              </thead>
            </Table>
          </Row>
          <Row>
            <Col xs="1">
              <Input type="checkbox" className="check1" onClick={check1} />
            </Col>
            <Col xs="4">
              <div>
                {recipe_thumbnail && (
                  <img
                    alt="sample"
                    className="img-rounded img-responsive"
                    name="recipe_thumbnail"
                    src={recipe_thumbnail}
                    style={imagestyle}
                  />
                )}
              </div>
            </Col>
            <Col xs="2">
              <div>레시피 이름</div>
              <div>레시피 정보</div>
            </Col>
            <Col xs="4">
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
            </Col>
            <Col xs="1">
                <Button>삭제</Button>
            </Col>
          </Row>

          <Row>
            <Col xs="1">
              <Input type="checkbox" className="check2" />
            </Col>
            <Col xs="4">
              <div>
                {recipe_thumbnail && (
                  <img
                    alt="sample"
                    className="img-rounded img-responsive"
                    name="recipe_thumbnail"
                    src={recipe_thumbnail}
                    style={imagestyle}
                  />
                )}
              </div>
            </Col>
            <Col xs="2">
              <div>레시피 이름</div>
              <div>레시피 정보</div>
            </Col>
            <Col xs="4">
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
            </Col>
            <Col xs="1">
                <Button>삭제</Button>
            </Col>
          </Row>
          <Row hidden>
            <Col xs="1">
              <Input type="checkbox" className="check2" />
            </Col>
            <Col xs="4">
              <div>
                {recipe_thumbnail && (
                  <img
                    alt="sample"
                    className="img-rounded img-responsive"
                    name="recipe_thumbnail"
                    src={recipe_thumbnail}
                    style={imagestyle}
                  />
                )}
              </div>
            </Col>
            <Col xs="2">
              <div>레시피 이름</div>
              <div>레시피 정보</div>
            </Col>
            <Col xs="4">
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
              <div>재료</div>
            </Col>
            <Col xs="1">
                <Button>삭제</Button>
            </Col>
          </Row>
        </Col>
        <Col xs="1"/>
      </Row>
    </Container>
  );
}

export default Basket;
