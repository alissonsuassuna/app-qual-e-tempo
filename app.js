// 7bec09a5c3d4e3ee8b662415587e646e
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=7bec09a5c3d4e3ee8b662415587e646e&units=metric

const apiKey = "7bec09a5c3d4e3ee8b662415587e646e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.querySelector('.search input')

const searchBtn = document.querySelector('.search button')
const waetherIcon = document.querySelector('.waether-icon')


async function checkWarther(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "ºc"
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

         if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "/images/clouds.png"
            } else if (data.weather[0].main == "Clear") {
                 weatherIcon.src = "/images/clear.png"
            }else if(data.weather[0].main == "Rain") {
                 weatherIcon.src = "/images/rain.png"
            }else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "/images/drizzle.png"
           }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/images/mist.png"
           }

}


searchBtn.addEventListener('click', () => {
    checkWarther(searchInput.value)
})

