let num = 0; // 위도 경도 기반 areaDetail 변수
let clickNumber = 0; // cilckAreaDetail 변수
let userInput = ""; // 검색창에 사용자 입력값

const isProduction = window.location.hostname === "baeksiyoon.github.io";
const baseUrl = isProduction
  ? "https://github.com/BaekSiyoon/weatherHomePage"
  : "http://127.0.0.1:5500/areaDetail.html";

let targetUrl = `${baseUrl}/areaDetail.html`;
// window.location.href = targetUrl;

init = () => {
  askForCoords();
};

//사용자 위치 물어보고 사용자가 거부시 메인 화면으로 이동
if (num == 0 && window.location.href == targetUrl) {
  askForCoords = () => {
    if (
      confirm(
        "사용자 위치를 허용하시겠습니까? 취소 시 메인페이지로 이동합니다."
      )
    ) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      location.href = "index.html";
    }
  };

  //좌표를 얻는데 성공했을 때 쓰이는 함수
  handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
  };
  //좌표를 얻는데 실패했을 때 쓰이는 함수
  handleError = () => {
    console.log("실패");
  };
}

if (clickNumber == 0 && window.location.href != targetUrl) {
  clickAreaDetailPage = (area_name) => {
    let areaName_ = area_name.value;
    location.href = `areaDetail.html?areaName=${areaName_}`;
  };

  // url 에서 파라미터 가져오는 정규 표현식
  getParameterByName = (areaName) => {
    areaName = areaName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + areaName + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  let areaName = getParameterByName("areaName");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${areaName}&appid=2ef89e773508ac1bce70326ca4dd74e1&units=metric`;

  if (window.location.href != targetUrl) {
    // 상세 페이지에서만 실행
    let lat = "";
    let lon = "";
    promiseGet = (url) => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // HTTP  객체 생성
        xhr.open("GET", url); // HTTP 요청 초기화
        xhr.send(); // 요청 전송
        xhr.onload = () => {
          // 요청 성공시
          if (xhr.status === 200) {
            // 응답 코드
            resolve(JSON.parse(xhr.response));
          } else {
            reject(new Error(xhr.status));
          }
        };
      });
    };
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
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=2ef89e773508ac1bce70326ca4dd74e1&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log("json.current.weather[0].icon :: " + JSON.stringify(json));
      //온도, 위치, 날씨묘사, 날씨아이콘을 받는다.
      const Icon = json.current.weather[0].icon; // 아이콘 뽑는 공식
      const temperature = Math.floor(json.current.temp); // 온도
      const description = json.current.weather[0].description; // 날씨상태
      const sunrise = new Date(json.current.sunrise * 1000); // 일출시간
      const sunrise_time = `${sunrise.getHours()}시${sunrise.getMinutes()}분`; // 시간 변환
      const sunset = new Date(json.current.sunset * 1000); // 일몰시간
      const sunset_time = `${sunset.getHours()}시${sunset.getMinutes()}분`; // 시간 변환
      const humidity = Math.floor(json.current.humidity); //습도
      const uvi = Math.floor(json.current.uvi); // 자외선 지수
      document.querySelector(
        "#currentWeather_img"
      ).src = `http://openweathermap.org/img/wn/${Icon}@2x.png`;
      document.querySelector("#temperature").innerHTML = `${temperature}°C`;
      document.querySelector("#description").innerHTML = `${description}`;
      document.querySelector("#sunrise_time").innerHTML = ` ${sunrise_time}`;
      document.querySelector("#sunset_time").innerHTML = ` ${sunset_time}`;
      document.querySelector("#humidity").innerHTML = ` ${humidity}%`;
      document.querySelector("#uvi").innerHTML = ` ${uvi}`;

      // 시간별
      for (i = 0; i <= 7; i++) {
        document.querySelector(
          "#hourly_icon_" + `${i}`
        ).src = `http://openweathermap.org/img/wn/${json.hourly[i].weather[0].icon}@2x.png`;
        document.querySelector("#hourly_dt_" + `${i}`).innerHTML = `${
          new Date(json.hourly[i].dt * 1000).getHours() + "시"
        }`;
        document.querySelector(
          "#hourly_temp_" + `${i}`
        ).innerHTML = `${Math.floor(json.hourly[i].temp)}°C`;
        document.querySelector(
          "#hourly_humidity_" + `${i}`
        ).innerHTML = ` ${Math.floor(json.hourly[i].humidity)}%`;
        document.querySelector(
          "#hourly_uvi_" + `${i}`
        ).innerHTML = ` ${Math.floor(json.hourly[i].uvi)}`;

        // 요일별
        let today = new Date(json.daily[i].dt * 1000).getDay();
        const weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        let todayLabel = weekday[today];
        document.querySelector(
          "#daily_icon_" + `${i}`
        ).src = `http://openweathermap.org/img/wn/${json.daily[i].weather[0].icon}@2x.png`;
        document.querySelector(
          "#daily_dt_" + `${i}`
        ).innerHTML = `${todayLabel}`;
        document.querySelector(
          "#daily_tempMin_" + `${i}`
        ).innerHTML = ` ${Math.floor(json.daily[i].temp.min)}°C`;
        document.querySelector(
          "#daily_tempMax_" + `${i}`
        ).innerHTML = ` ${Math.floor(json.daily[i].temp.max)}°C`;
        document.querySelector(
          "#daily_humidity_" + `${i}`
        ).innerHTML = ` ${Math.floor(json.daily[i].humidity)}%`;
      }
    })
    .catch((error) => console.log("error:", error));
};

init();

function hourlyShow() {
  document.querySelector("#hourlyArticle").style.display = "";
  document.querySelector("#dailyArticle").style.display = "none";
}
function dailyShow() {
  document.querySelector("#hourlyArticle").style.display = "none";
  document.querySelector("#dailyArticle").style.display = "";
}
// 사용자 검색시
function userSearch(e) {
  inputLanguageChange();
  if (e.keyCode == 13 && userInput != "") {
    location.href = `areaDetail.html?areaName=${userInput}`;
  } else if (e.keyCode == 13 && userInput == "") {
    alert("지역을 입력해주세요.");
    document.getElementById("userInput").value = "";
  }
}
// 사용자 검색 버튼 클릭시
function clickSearch() {
  inputLanguageChange();
  if (userInput != "") {
    location.href = `areaDetail.html?areaName=${userInput}`;
  } else {
    alert("지역을 입력해주세요.");
    document.getElementById("userInput").value = "";
  }
}
// 사용자 검색 언어 > 데이터로 보낼 언어 변경
function inputLanguageChange() {
  let language = document.getElementById("userInput").value;
  if (language == "서울") {
    userInput = "seoul";
  } else if (language == "춘천") {
    userInput = "chuncheon";
  } else if (language == "강릉") {
    userInput = "gangneung";
  } else if (language == "청주") {
    userInput = "cheongju";
  } else if (language == "수원") {
    userInput = "suwon";
  } else if (language == "안동") {
    userInput = "andong";
  } else if (language == "대전") {
    userInput = "daejeon";
  } else if (language == "전주") {
    userInput = "jeonju";
  } else if (language == "대구") {
    userInput = "daegu";
  } else if (language == "광주") {
    userInput = "gwangju";
  } else if (language == "부산") {
    userInput = "busan";
  } else if (language == "여수") {
    userInput = "yeosu";
  } else if (language == "목포") {
    userInput = "mokpo";
  } else if (language == "울산") {
    userInput = "ulsan";
  } else if (language == "제주") {
    userInput = "jeju";
  }
}
