const apiKey = "e6b42b92d396fef822bfd2f4329f5319"
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const tempIcon = document.querySelector(".temp-img")

async function fatchApi(cityName) {
    const response = await fetch(baseUrl + cityName)
    const data = await response.json()

    document.querySelector(".temp-cel").innerHTML = `${Math.round(data.main.temp)} <sup>o</sup>C`
    document.querySelector(".city-name").innerHTML = data.name
    document.querySelector(".humi").innerHTML = `${data.main.humidity} %`
    document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`

    if (data.weather[0].main == "Clouds") {
        tempIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Drizzle") {
        tempIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Rain") {
        tempIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Mist") {
        tempIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Snow") {
        tempIcon.src = "images/snow.png"
    } else {
        tempIcon.src = "images/clear.png"
    }

    document.querySelector('.visible').style.display = "block"

}

searchBtn.addEventListener("click", () => {
    fatchApi(searchInput.value)
})
