import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, FormGroup, FormText, Input, Label, Table } from 'reactstrap';
import Map from './Map';

function MartMap(props) {
    const address = '경기도 시흥시 능곡서로 27'
    return (
        <div>
            <Table>
                <thead>
                    <th>마트 주변 지도입니다.</th>
                </thead>
                <tbody>
                    <td>
                        <FormGroup>
                            <Label for="exampleEmail">내 주소</Label>
                            <Input
                            type="text"
                            name="email"
                            id="exampleEmail"
                            value={address}
                            />
                            <FormText color="muted">
                            프로필에 등록한 주소를 기반으로 보여집니다.
                            </FormText>
                        </FormGroup>
                        <Card style={{width: '50rem'}}>
                            <Map address={address}/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>입력하신 프로필 주소를 기반으로 위치를 잡아서 보여집니다. 지도를 움직여 마트를 확인해보세요.</CardText>
                                <Button color="primary">길찾기</Button>
                            </CardBody>
                        </Card>
                    </td>
                </tbody>
                <tfoot>
                    <td></td>
                </tfoot>
            </Table>
          
        </div>
    );
}

export default MartMap;