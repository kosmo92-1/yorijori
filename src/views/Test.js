import {useDispatch, useSelector} from "react-redux";

import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {REMOVE_BOOKMARK_TEST} from "../../reducers/test/sample";


const CheckboxSample = () => {
    const dispatch = useDispatch()

    const {posts} = useSelector(state => state.sample)
    // checked 된 것들
    const [checkItems, setCheckItems] = useState([])


    // 개별선택
    function checkHandler(checked, id) {
        if(checked) {
            setCheckItems([...checkItems, id])
        } else {
            // 체크해제
            setCheckItems(checkItems.filter(o=>o!==id))
        }

    }

    // 전체선택
    function checkAllHandler(checked) {
        if(checked) {
            const ids = []
            posts.forEach(v => ids.push(v.id))
            setCheckItems(ids)
        } else {
            setCheckItems([])
        }

    }

    function deleteHandler() {
        dispatch({
            type: REMOVE_BOOKMARK_TEST
            , data: {checkItems: checkItems}
        })
    }


    useEffect(() => {
        console.log(checkItems)
    }, [checkItems])



    return (
        <div style={{padding: "10px"}}>
            <h1>test</h1>
            <div>
                <Form.Check
                    type={"checkbox"}
                    label={"전체선택"}
                    onChange={(e) => checkAllHandler(e.target.checked)}
                    // checked={}
                >
                </Form.Check>

                <Button
                    className={"baseButton"}
                    variant={"default"}
                    size={"sm"}
                    onClick={deleteHandler}>
                    삭제
                </Button>
            </div>
            <div>
                {posts.map(o => (
                    <div key={o.id}>
                        <span>
                            <Form.Check
                                type={"checkbox"}
                                onChange={(e) => checkHandler(e.target.checked, o.id)}
                                checked={checkItems.indexOf(o.id) >= 0 ? true : false}
                            >
                            </Form.Check>
                            체크
                        </span>
                        <span>o.title</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckboxSample