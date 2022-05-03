
//초기화 
function init() {
    askForCoords();
}

//사용자 위치 물어보고 사용자가 거부시 메인 화면으로 이동 
function askForCoords() {
    if (confirm("사용자 위치를 허용하시겠습니까? 취소 시 메인페이지로 이동합니다.")) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
        location.href = "index.html";
    }
}

//좌표를 얻는데 성공했을 때 쓰이는 함수 
function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
}
//좌표를 얻는데 실패했을 때 쓰이는 함수 
function handleError() {
    console.log("실패");
}

//날씨 api를 통해 날씨에 관련된 정보들을 받아온다. 
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=kr&appid=853899f51609807cba760241d3c22b50&units=metric`)
        .then(function (response) {
            console.log(response.json);
            return response.json();
        })
        .then(function (json) {
            //온도, 위치, 날씨묘사, 날씨아이콘을 받는다.
            console.log(json)
            const Icon = json.current.weather[0].icon; // 아이콘 뽑는 공식          
            const temperature = Math.floor(json.current.temp); // 온도
            const description = json.current.weather[0].description; // 날씨상태
            const humidity = Math.floor(json.current.humidity); //습도
            const uvi = Math.floor(json.current.uvi); // 자외선 지수 
            const sunrise = new Date(json.current.sunrise * 1000); // 일출시간
            const sunrise_time = `${sunrise.getHours()}시${sunrise.getMinutes()}분`; // 시간 변환 
            const sunset = new Date(json.current.sunset * 1000); // 일몰시간
            const sunset_time = `${sunset.getHours()}시${sunset.getMinutes()}분`; // 시간 변환 
            document.querySelector('#currentWeather_img').src = `http://openweathermap.org/img/wn/${Icon}@2x.png`;
            document.querySelector('#temperature').innerHTML = `${temperature}°C`;
            document.querySelector('#description').innerHTML = `${description}`;
            document.querySelector('#humidity').innerHTML = `습도 ${humidity}%`;
            document.querySelector('#uvi').innerHTML = `자외선지수 ${uvi}`;
            document.querySelector('#sunrise_time').innerHTML = `일출시간 ${sunrise_time}`;
            document.querySelector('#sunset_time').innerHTML = `일몰시간 ${sunset_time}`;
        })
        .catch((error) => console.log("error:", error));
}

init();