let areaName ="";

// 메인 페이지에서 지역을 클릭하면 해당 지역 상세 페이지로 이동 
function clickAreaDetailPage(area_name) {
    console.log("성공 ");
    areaName = area_name.value;
    console.log(areaName);
    location.href = "clickAreaDetail.html";
};

/**
 * 
 promiseGet = url => {
     return new Promise((resolve, reject) => {
         const xhr = new XMLHttpRequest(); // HTTP  객체 생성 
         xhr.open('GET', url); // HTTP 요청 초기화
         xhr.send(); // 요청 전송 
         xhr.onload = () => { // 요청 성공시 
            if (xhr.status === 200) {// 응답 코드 
                resolve(JSON.parse(xhr.response));
                console.log(JSON.parse(xhr.response).main.temp);
            } else {
                reject(new Error(xhr.status));
                console.log(new Error(xhr.status));
            }
        }
    })
}


// 서울 날씨
promiseGet(`https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=853899f51609807cba760241d3c22b50&units=metric`)
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const seoul_temperature = Math.floor(response.main.temp);
    const seoul_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#seoul_img').src = `http://openweathermap.org/img/wn/${seoul_Icon}@2x.png`;
    document.querySelector('.seoul').innerHTML = ` ${seoul_temperature}°C`;
});

*/