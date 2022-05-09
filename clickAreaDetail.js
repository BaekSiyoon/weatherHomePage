
// 메인 페이지에서 지역을 클릭하면 해당 지역 상세 페이지로 이동. 클릭한 value 값 저장 
function clickAreaDetailPage(area_name) {
    console.log("성공 ");
    let areaName_ = area_name.value;
    console.log(areaName_);
    location.href = `clickAreaDetail.html?areaName=${areaName_}`;
};

// url 에서 파라미터 가져오는 정규 표현식
function getParameterByName(areaName) {
    areaName = areaName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + areaName + "=([^&#]*)"), results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let areaName = getParameterByName('areaName');
console.log(areaName);

let url = `https://api.openweathermap.org/data/2.5/weather?q=${areaName}&appid=853899f51609807cba760241d3c22b50&units=metric`;

if (window.location.href != "http://127.0.0.1:5500/index.html") { // 상세 페이지에서만 실행 
    console.log(window.location.href);
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

    promiseGet(url)
        .then(function (response) {
            const seoul_temperature = Math.floor(response.main.temp);
            const seoul_Icon = response.weather[0].icon;
            document.querySelector('#seoul_img').src = `http://openweathermap.org/img/wn/${seoul_Icon}@2x.png`;
            document.querySelector('.seoul').innerHTML = ` ${seoul_temperature}°C`;
        });
}


