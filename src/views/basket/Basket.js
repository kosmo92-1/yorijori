import React from "react";
import { Button, Container, Input, Row, Table, Col, Form, FormGroup } from "reactstrap";
import BasketRecipeList from "./BasketRecipeList";

const partslist = {
  color: "black",
  fontFamily: "Arial",
  width: "100%",
  height: "100%",
  backgroundColor: "lightgray",
};
//장바구니
function Basket(props) {
  return (
    <Container>
      <Row>
        <Col xs="2">
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
        </Col>
        <Col xs="10">
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
              <tbody>
                <tr>
                  <th scope="row">
                    <Input type="checkbox" />
                  </th>
                  <td>
                    <img
                      //   src={recipe}
                      alt="레시피 이미지"
                    />
                  </td>
                  <td>링크나 </td>
                  <td>재료</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Input type="checkbox" />
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@토마토 @파스타면 @새우</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Input type="checkbox" />
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Button>삭제</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Basket;
