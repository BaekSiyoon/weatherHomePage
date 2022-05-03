// test 
const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // HTTP  객체 생성 
        xhr.open('GET', url); // HTTP 요청 초기화
        xhr.send(); // 요청 전송 
        xhr.onload = () => { // 요청 성공시 
            if (xhr.status === 200) {// 응답 코드 
              resolve(JSON.parse(xhr.response));
                console.log(JSON.parse(xhr.response).main.temp);
               // let a = JSON.parse(xhr.response).main.temp;
               // map_name.innerHTML = `온도 ${a} `;

            } else {
                reject(new Error(xhr.status));
                console.log(new Error(xhr.status));
            }
        }
    })
}
  

// promiseGet 함수는 프로미스를 반환 
// 백령 이랑 울릉도 독도 없음 

// 이미지 구하는 url 
 //let iconurl = "http://openweathermap.org/img/w/" + Icon + ".png";
// <img src={iconurl}/>

// 서울 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const seoul_temperature = response.main.temp; 
    console.log(response.weather[0].icon); // 아이콘 뽑는 공식 
    const seoul_weather=  response.weather[0].icon; // 아이콘 뽑는 공식 
    document.getElementById("seoul_img").src=`img/${seoul_weather}.png`; //이미지 src 에 주소 넣기 
 // const seoul_place = response.name;
    document.querySelector('.seoul').innerHTML = `온도 ${seoul_temperature}°C`;
  }); 
  
// 춘천 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=chuncheon&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const chuncheon_temperature = response.main.temp; 
    document.querySelector('.chuncheon').innerHTML = `온도 ${chuncheon_temperature}°C`;
  }); 
// 강릉 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=gangneung&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const gangneung_temperature = response.main.temp; 
    document.querySelector('.gangneung').innerHTML = `온도 ${gangneung_temperature}°C`;
  }); 
// 수원 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=cheongju-si&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const cheongjuSi_temperature = response.main.temp; 
    document.querySelector('.cheongjuSi').innerHTML = `온도 ${cheongjuSi_temperature}°C`;
  }); 
// 청주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Suwon-si&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const suwonSi_temperature = response.main.temp; 
    document.querySelector('.suwonSi').innerHTML = `온도 ${suwonSi_temperature}°C`;
  }); 
// 안동 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Andong&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const andong_temperature = response.main.temp; 
    document.querySelector('.andong').innerHTML = `온도 ${andong_temperature}°C`;
  }); 
// 대전 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const daejeon_temperature = response.main.temp; 
    document.querySelector('.daejeon').innerHTML = `온도 ${daejeon_temperature}°C`;
  }); 
// 전주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Jeonju&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const jeonju_temperature = response.main.temp; 
    document.querySelector('.jeonju').innerHTML = `온도 ${jeonju_temperature}°C`;
  }); 
// 대구 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=daegu&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const daegu_temperature = response.main.temp; 
    document.querySelector('.daegu').innerHTML = `온도 ${daegu_temperature}°C`;
  }); 
// 광주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=gwangju&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const gwangju_temperature = response.main.temp; 
    document.querySelector('.gwangju').innerHTML = `온도 ${gwangju_temperature}°C`;
  }); 
// 부산 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=busan&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const busan_temperature = response.main.temp; 
    document.querySelector('.busan').innerHTML = `온도 ${busan_temperature}°C`;
  }); 
// 여수 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=yeosu&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const yeosu_temperature = response.main.temp; 
    document.querySelector('.yeosu').innerHTML = `온도 ${yeosu_temperature}°C`;
  }); 
// 목포 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=mokpo&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const mokpo_temperature = response.main.temp; 
    document.querySelector('.mokpo').innerHTML = `온도 ${mokpo_temperature}°C`;
  }); 
// 울산 날씨 
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=ulsan&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const ulsan_temperature = response.main.temp; 
    document.querySelector('.ulsan').innerHTML = `온도 ${ulsan_temperature}°C`;
  }); 
// 제주 날씨 
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=853899f51609807cba760241d3c22b50&units=metric')
.then(function (response) { // .then = fetch가 완료 된 후 실행됨
    console.log(response);
    const jeju_temperature = response.main.temp; 
    document.querySelector('.jeju').innerHTML = `온도 ${jeju_temperature}°C`;
  }); 
