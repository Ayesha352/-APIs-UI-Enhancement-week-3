

const apiKey = "07c99704e95d3eaded9bfe9cc41de412"

function getWeather(){
    let city = document.getElementById("cityInput").value

    if(city == ""){
        document.getElementById("errorMsg").innerText = "please enter a city name"
        return
    }

    document.getElementById("errorMsg").innerText = ""

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric"

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        if(data.cod == 404){
            document.getElementById("errorMsg").innerText = "city not found"
            document.getElementById("weatherResult").style.display = "none"
            return
        }

        document.getElementById("cityName").innerText = data.name + ", " + data.sys.country
        document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + " °C"
        document.getElementById("description").innerText = "Weather: " + data.weather[0].description
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%"
        document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s"

        document.getElementById("weatherResult").style.display = "block"

    })
    .catch(function(error){
        document.getElementById("errorMsg").innerText = "something went wrong"
        console.log(error)
    })
}
