import React, { useState, useEffect } from 'react';
import Search from './search';

const MapComponent = () => {
    
    // Map object state
    const [map, setMap] = useState(null);
    const [kakao, setKakao] = useState(null);

    //스크립트 파일 읽어오기
    const new_script = src => { 
        return new Promise((resolve, reject) => { 
        const script = document.createElement('script'); 
        script.src = src; 
        script.addEventListener('load', () => { 
            resolve(); 
        }); 
        script.addEventListener('error', e => { 
            reject(e); 
        }); 
        document.head.appendChild(script); 
        }); 
    };
    

    // Function to add two markers
    const addTwoMarkers = (kakaoInstance, createdMap, lat1, lng1, lat2, lng2) => {
        // if (!map) return; // Check if map is initialized
        createdMap.setLevel(4, {anchor: new kakaoInstance.maps.LatLng((lat1+lat2)/2, (lng1+lng2)/2)});

        const markerPosition1 = new kakaoInstance.maps.LatLng(lat1, lng1); 
        const marker1 = new kakaoInstance.maps.Marker({ position: markerPosition1 });
        marker1.setMap(createdMap); 

        const markerPosition2 = new kakaoInstance.maps.LatLng(lat2, lng2); 
        const marker2 = new kakaoInstance.maps.Marker({ position: markerPosition2 });
        marker2.setMap(createdMap); 
    }

    const handleRouteSearch = (start, end) => {
        if (!kakao) return;
        if (!map) return;
        
        var places = new kakao.maps.services.Places();

        var callback = function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                console.log(result);
            }
        };
    
        places.keywordSearch(start, callback);
        places.keywordSearch(end, callback);
    };

    useEffect(() => { 
        //카카오 초기화
        // kakaoInitialize();

        //카카오맵 스크립트 읽어오기
        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?libraries=services&autoload=false&appkey='+process.env.REACT_APP_KAKAO);
        
        //스크립트 읽기 완료 후 카카오맵 설정
        my_script.then(() => { 
        console.log('script loaded!!!');  
        // const kakao = window['kakao']; 
        const kakaoInstance = window['kakao'];
        setKakao(kakaoInstance);
        
        kakaoInstance.maps.load(() => {
            const mapContainer = document.getElementById('map');

            const options = { 
            center: new kakaoInstance.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
            level: 3 
            }; 
            const createdMap  = new kakaoInstance.maps.Map(mapContainer, options); //맵생성
            setMap(createdMap);
            console.log(createdMap);

            addTwoMarkers(kakaoInstance, createdMap, 37.56000302825312+0.0002, 126.97540593203321, 37.56000302825312, 126.97540593203321);
        
        });   
        }); 
    }, []);

    return (
        <div>
            <Search onSearch={handleRouteSearch} />
            <div id="map" style={{ width: '100%', height: '1080px' }}>
                {/* Map rendering here */}
            </div>
        </div>
    );
};

export default MapComponent;