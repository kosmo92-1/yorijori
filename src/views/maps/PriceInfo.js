import axios from 'axios';
import React from 'react';
// yarn add request
// yarn add xml-js
// 상품정보 읽어오기
function PriceInfo(props) {
    const baseURL = "http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/";
    const storeInfo = "getStoreInfoSvc.do?"
    const serviceKey ="ServiceKey=gLgYF6DaTBRAIHgh6gJmwEq0zdyWPV1yDfBkNLFgrXmKrPF7WujJoPtDOtlO9mfDxvkr3h7%2BwUVI%2BLhLL4Zi9A%3D%3D&";
    const storeInfoURL =baseURL+storeInfo+serviceKey+"entpId=115"
    const action=()=>{
        axios.get(storeInfoURL)
        .then((response)=>{  
            console.log('')
           })
        .catch()
    }
    return (
        <div>
            <button onClick={action}>클릭</button>
        </div>
    );
}

export default PriceInfo;