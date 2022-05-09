let num = 0; // 위도 경도 기반 areaDetail 변수 
let clickNumber = 0; // cilckAreaDetail 변수 


 init = () => {
    askForCoords();
}

//사용자 위치 물어보고 사용자가 거부시 메인 화면으로 이동 
if (num == 0 && window.location.href == "http://127.0.0.1:5500/areaDetail.html") {
     askForCoords = () => {
        if (confirm("사용자 위치를 허용하시겠습니까? 취소 시 메인페이지로 이동합니다.")) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        } else {
            location.href = "index.html";
        }
    }

    //좌표를 얻는데 성공했을 때 쓰이는 함수 
     handleSuccess = position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
    }
    //좌표를 얻는데 실패했을 때 쓰이는 함수 
     handleError = () => {
        console.log("실패");
    }
}

if (clickNumber == 0 && window.location.href != "http://127.0.0.1:5500/areaDetail.html" ) {
     clickAreaDetailPage = area_name => {
        let areaName_ = area_name.value;
        location.href = `areaDetail.html?areaName=${areaName_}`;
    };

    // url 에서 파라미터 가져오는 정규 표현식
     getParameterByName = areaName => {
        areaName = areaName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + areaName + "=([^&#]*)"), results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    let areaName = getParameterByName('areaName');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${areaName}&appid=853899f51609807cba760241d3c22b50&units=metric`;
    
       if ( window.location.href != "http://127.0.0.1:5500/index.html") { // 상세 페이지에서만 실행 
            let lat = "";
            let lon = "";
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
            promiseGet(url) // 해당 지역의 위도와 경도 알아내서 getWeather 로 보내준다
                .then(function (response) {
                    lat = response.coord.lat;
                    lon = response.coord.lon;
                    getWeather(lat, lon);
                });
      }
    
}

//날씨 api를 통해 날씨에 관련된 정보들을 받아온다.
 getWeather = (lat, lon) => {
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

            // 시간별 
            for (i = 0; i <= 7; i++) {
                document.querySelector('#hourly_icon_' + `${i}`).src = `http://openweathermap.org/img/wn/${json.hourly[i].weather[0].icon}@2x.png`;
                document.querySelector('#hourly_dt_' + `${i}`).innerHTML = `${new Date(json.hourly[i].dt * 1000).getHours() + "시"}`;
                document.querySelector('#hourly_temp_' + `${i}`).innerHTML = `${Math.floor(json.hourly[i].temp)}°C`;
                document.querySelector('#hourly_humidity_' + `${i}`).innerHTML = `습도 ${Math.floor(json.hourly[i].humidity)}%`;
                document.querySelector('#hourly_uvi_' + `${i}`).innerHTML = `자외선지수 ${Math.floor(json.hourly[i].uvi)}`;

                // 요일별 
                let today = new Date(json.daily[i].dt * 1000).getDay();
                const weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

                let todayLabel = weekday[today];
                document.querySelector('#daily_icon_' + `${i}`).src = `http://openweathermap.org/img/wn/${json.daily[i].weather[0].icon}@2x.png`;
                document.querySelector('#daily_dt_' + `${i}`).innerHTML = `${todayLabel}`;
                document.querySelector('#daily_tempMin_' + `${i}`).innerHTML = `최소 ${Math.floor(json.daily[i].temp.min)}°C`;
                document.querySelector('#daily_tempMax_' + `${i}`).innerHTML = `최대 ${Math.floor(json.daily[i].temp.max)}°C`;
                document.querySelector('#daily_humidity_' + `${i}`).innerHTML = `습도 ${Math.floor(json.daily[i].humidity)}%`;
            }

        })
        .catch((error) => console.log("error:", error));
}

init();

 hourlyShow = () => {
    document.querySelector("#hourlyArticle").style.display = "";
    document.querySelector("#dailyArticle").style.display = "none";
}
 dailyShow = () =>{
    document.querySelector("#hourlyArticle").style.display = "none";
    document.querySelector("#dailyArticle").style.display = "";
}

userSearch = (e) => {
    var userInput = document.getElementById("userInput").value;
    if(e.keyCode == 13){
        console.log(userInput);
    };
}