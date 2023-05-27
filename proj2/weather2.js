const apiKey="2c8c66ca75bb76fce0b3fe497b24759f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display= "Block";
        document.querySelector(".weather").style.display= "none";
    }
    else{
        var data= await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="clear-sky.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="rain (1).png"
    }
    else if(data.weather[0].main == "sunny"){
        weatherIcon.src="sun.png"
    }
    else if(data.weather[0].main == "Night"){
        weatherIcon.src="cloudy-night.png"
    }
    else if(data.weather[0].main == "thunderstorm"){
        weatherIcon.src="storm (1).png"
    }
    else if(data.weather[0].main == "Heavy Rain"){
        weatherIcon.src="storm.png"
    }
    else if(data.weather[0].main == "Night thunderstrom"){
        weatherIcon.src="storm (2).png"
    }
    document.querySelector(".weather").style.display="Block";
    document.querySelector(".error").style.display= "none";


    
}

    }
   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
