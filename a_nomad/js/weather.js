
const weather = document.querySelector(".js-weather");

const API_KEY = "71922718a637ab462406a66d14d54997"

function onGeoOk(position) {
  // 위도와 경도 받기
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // 날씨 API 활용
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")

    city.innerHTML = data.name
    weather.innerText = `${data.weather[0].main}  / ${data.main.temp}`
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

// 위치를 받을 수 있음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)