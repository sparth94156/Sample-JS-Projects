const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search .search-box");
const searchBtn = document.querySelector(".search .search-icon");
const temp = document.querySelector(".temperature .temp");
const city = document.querySelector(".city");
const humid = document.querySelector(".humid");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-image");
const weatherContainer = document.querySelector(".weather");
const errorMsg = document.querySelector(".error");

// a7526f9d473ea5b4bc63dadf6bdb6f06 - API key
const apiKey = "a7526f9d473ea5b4bc63dadf6bdb6f06";

window.addEventListener("load", () => {
    weatherContainer.style.display = "none";
});

const checkWeather =  () => {
    searchBtn.addEventListener("click", async (event) => {
        let url = `${BASE_URL}${searchBox.value}&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        if(data.cod == 404){
            errorMsg.style.display = "block";
            weatherContainer.style.display = "none";
        }
        else{
            weatherContainer.style.display = "block";
            weatherIcon.style.marginLeft = '100px';
            errorMsg.style.display = "none";
        
        // Just to capitalize first letter
        let cityName = searchBox.value;
        let charArray = cityName.split(''); // Convert string to char array
        charArray[0] = charArray[0].toUpperCase();
        cityName = charArray.join(''); // Converts back to string

        city.innerText = cityName; 
        temp.innerText = Math.round(data.main.temp) + "°c";
        humid.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + "km/h";

        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        } 
    });

};

checkWeather();
//data.weather[0].main