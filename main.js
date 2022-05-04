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

// promiseGet 함수는 프로미스를 반환 
// 백령 이랑 울릉도 독도 없음 

// 서울 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const seoul_temperature = Math.floor(response.main.temp);
    const seoul_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#seoul_img').src = `http://openweathermap.org/img/wn/${seoul_Icon}@2x.png`;
    document.querySelector('.seoul').innerHTML = ` ${seoul_temperature}°C`;
  });
// 춘천 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=chuncheon&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const chuncheon_temperature = Math.floor(response.main.temp);
    const chuncheon_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#chuncheon_img').src = `http://openweathermap.org/img/wn/${chuncheon_Icon}@2x.png`;
    document.querySelector('.chuncheon').innerHTML = ` ${chuncheon_temperature}°C`;
  });
// 강릉 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=gangneung&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const gangneung_temperature = Math.floor(response.main.temp);
    const gangneung_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#gangneung_img').src = `http://openweathermap.org/img/wn/${gangneung_Icon}@2x.png`;
    document.querySelector('.gangneung').innerHTML = ` ${gangneung_temperature}°C`;
  });
// 청주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=cheongju-si&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const cheongjuSi_temperature = Math.floor(response.main.temp);
    const cheongjuSi_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#cheongjuSi_img').src = `http://openweathermap.org/img/wn/${cheongjuSi_Icon}@2x.png`;
    document.querySelector('.cheongjuSi').innerHTML = ` ${cheongjuSi_temperature}°C`;
  });
// 수원 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Suwon-si&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const suwonSi_temperature = Math.floor(response.main.temp);
    const suwonSi_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#suwonSi_img').src = `http://openweathermap.org/img/wn/${suwonSi_Icon}@2x.png`;
    document.querySelector('.suwonSi').innerHTML = ` ${suwonSi_temperature}°C`;
  });
// 안동 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Andong&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const andong_temperature = Math.floor(response.main.temp);
    const andong_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#andong_img').src = `http://openweathermap.org/img/wn/${andong_Icon}@2x.png`;
    document.querySelector('.andong').innerHTML = ` ${andong_temperature}°C`;
  });
// 대전 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const daejeon_temperature = Math.floor(response.main.temp);
    const daejeon_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#daejeon_img').src = `http://openweathermap.org/img/wn/${daejeon_Icon}@2x.png`;
    document.querySelector('.daejeon').innerHTML = ` ${daejeon_temperature}°C`;
  });
// 전주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Jeonju&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const jeonju_temperature = Math.floor(response.main.temp);
    const jeonju_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#jeonju_img').src = `http://openweathermap.org/img/wn/${jeonju_Icon}@2x.png`;
    document.querySelector('.jeonju').innerHTML = ` ${jeonju_temperature}°C`;
  });
// 대구 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=daegu&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const daegu_temperature = Math.floor(response.main.temp);
    const daegu_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#daegu_img').src = `http://openweathermap.org/img/wn/${daegu_Icon}@2x.png`;
    document.querySelector('.daegu').innerHTML = ` ${daegu_temperature}°C`;
  });
// 광주 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=Gwangju&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const gwangju_temperature = Math.floor(response.main.temp);
    const gwangju_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#gwangju_img').src = `http://openweathermap.org/img/wn/${gwangju_Icon}@2x.png`;
    document.querySelector('.gwangju').innerHTML = ` ${gwangju_temperature}°C`;
  });
// 부산 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=busan&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const busan_temperature = Math.floor(response.main.temp);
    const busan_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#busan_img').src = `http://openweathermap.org/img/wn/${busan_Icon}@2x.png`;
    document.querySelector('.busan').innerHTML = ` ${busan_temperature}°C`;
  });
// 여수 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=yeosu&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const yeosu_temperature = Math.floor(response.main.temp);
    const yeosu_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#yeosu_img').src = `http://openweathermap.org/img/wn/${yeosu_Icon}@2x.png`;
    document.querySelector('.yeosu').innerHTML = ` ${yeosu_temperature}°C`;
  });
// 목포 날씨
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=mokpo&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const mokpo_temperature = Math.floor(response.main.temp);
    const mokpo_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#mokpo_img').src = `http://openweathermap.org/img/wn/${mokpo_Icon}@2x.png`;
    document.querySelector('.mokpo').innerHTML = ` ${mokpo_temperature}°C`;
  });
// 울산 날씨 
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=ulsan&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const ulsan_temperature = Math.floor(response.main.temp);
    const ulsan_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#ulsan_img').src = `http://openweathermap.org/img/wn/${ulsan_Icon}@2x.png`;
    document.querySelector('.ulsan').innerHTML = ` ${ulsan_temperature}°C`;
  });
// 제주 날씨 
promiseGet('https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=853899f51609807cba760241d3c22b50&units=metric')
  .then(function (response) { // .then = fetch가 완료 된 후 실행됨
    const jeju_temperature = Math.floor(response.main.temp);
    const jeju_Icon = response.weather[0].icon; // 아이콘 뽑는 공식 
    document.querySelector('#jeju_img').src = `http://openweathermap.org/img/wn/${jeju_Icon}@2x.png`;
    document.querySelector('.jeju').innerHTML = ` ${jeju_temperature}°C`;
  }); 