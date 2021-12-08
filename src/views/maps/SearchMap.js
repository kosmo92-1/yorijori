import axios from 'axios';
import React,{useEffect, useLayoutEffect, useState} from 'react';
/*global kakao*/ 
function SearchMap({search}) {
    console.log({search})
    const [list,setList] =useState([
        {
            address_name: "부산 해운대구 우동 1499",
            category_group_code: "MT1",
            category_group_name: "대형마트",
            category_name: "가정,생활 > 대형마트 > 홈플러스",
            distance: "565",
            id: "8163343",
            phone: "051-709-8000",
            place_name: "홈플러스 센텀시티점",
            place_url: "http://place.map.kakao.com/8163343",
            road_address_name: "부산 해운대구 센텀동로 6",
        }
    ])
    const listComponent = list.map((item)=>(<li>{item.place_name}</li>))
    useLayoutEffect(()=>{
        console.log('넘어온주소: ')
        console.log({search})
       // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(map); 

        
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(search, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords); 
                
                // 카테고리로 편의점과 마트를 검색합니다
                ps.categorySearch('MT1', placesSearchCB, {useMapCenter:true}); 

                // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                function placesSearchCB (data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {
                        console.log('data : ')
                        console.log(data)
                        setList(data)
                        for (var i=0; i<data.length; i++) {
                            console.log(data[i])
                            displayMarker(data[i]);
                            
                        }       
                    }
                
                } 
               // 지도에 마커를 표시하는 함수입니다
                function displayMarker(place) {
                    // 마커를 생성하고 지도에 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x) 
                    });

                    // 마커에 클릭이벤트를 등록합니다
                    kakao.maps.event.addListener(marker, 'click', function() {
                        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                        infowindow.open(map, marker);
                    });
                }
                 
            }
        });
       

        
      }, [search])
    
        return (
            <div>
                <div id="map" style={{width:"45em", height:"35em"}}>
                </div> 
                <div style={{position:'absolute',width:'300px',height:'400px',color:'black',top:'10em',left:'47em'}}>
                    <h4>주변 매장이름입니다.</h4>
                    <al>
                        {listComponent}
                    </al>
                </div>
            </div>
        );

}

export default SearchMap;