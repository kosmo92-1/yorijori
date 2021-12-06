import React,{useEffect} from 'react';
/*global kakao*/ 
function Map(address) {
    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.36990223828836, 126.80971744285071), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };  
        
    
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
    
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();
    
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('경기도 시흥시 능곡서로 27', function(result, status) {
    
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
    
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                  // 장소 검색 객체를 생성합니다
                 var ps = new kakao.maps.services.Places(map); 
    
                // 카테고리로 마트를 검색합니다
                ps.categorySearch('MT1', placesSearchCB, {useMapBounds:true});     
                // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    for (var i=0; i<data.length; i++) {
                        console.log(data[i])
                        displayMarker(data[i]);    
              }       
          }
        }
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
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
    
                //==============
    
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });
      }, [])
    
    
        return (
            <div>
                <div id="map" style={{width:"50em", height:"40em"}}></div> 
            </div>
        );

}

export default Map;