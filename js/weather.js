// // const BASEURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
// const BASEURL = "https://api.openweathermap.org/data/2.5/weather/";
// const URL = `${BASEURL}/${lat}${lon}${APIkey}`;
// let response = fetch(URL);
// let data = response.json();
// const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=1d9f60594fcf3902a2553f6e0dd3ec16&units=metric";
// const BASEURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
// const APIkey = "1d9f60594fcf3902a2553f6e0dd3ec16&"; // Example latitude (San Francisco)
// const cityname = "delhi"
// const URL = `${BASEURL}?q=${cityname}&appid=${APIkey}`;

// fetch(URL)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })

//     .catch(error => {
//         console.error("There was a problem with the fetch operation:", error);
//     });
const apiKey = '1d9f60594fcf3902a2553f6e0dd3ec16';
const units = 'metric';
const searchbtn = document.querySelector("#button")


searchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.querySelector("#inputbox");
    let city = input.value;
    if (city === "") {
        console.error("City name cannot be empty");
        return;
    }
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const temperature = data.main.temp;
            const sunriseTimestamp = data.sys.sunrise;
            const sunsetTimestamp = data.sys.sunset;
            feels_like.innerHTML = data.main.feels_like
            temp.innerHTML = data.main.temp
            humidity.innerHTML = data.main.humidity
            temp_max.innerHTML = data.main.temp_max
            temp_min.innerHTML = data.main.temp_min
            deg.innerHTML = data.wind.deg
            document.querySelector("#speed").innerHTML = data.wind.speed;
            document.querySelector("#description").innerHTML = data.weather[0].description;
            changeBackground(data.weather[0].description, temperature, sunriseTimestamp, sunsetTimestamp);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        document.querySelector("#city").innerHTML = city;
})
function changeBackground(description, temp) {
    const body = document.body;
  

    let backgroundImage;
    switch(description) {
        case 'clear sky':
            backgroundImage = 'images/clear_sky.jpg';
            break;
        case 'few clouds':
            backgroundImage = 'images/cloudy.jpg';
            break;
        case 'scattered clouds':
            backgroundImage = 'images/scattered_clouds.jpg';
            break;
        case 'broken clouds':
            backgroundImage = 'images/scattered_clouds.jpg';
            break;
        case 'shower rain':
            backgroundImage = 'images/shower_rain.jpg';
            break;
        case 'rain':
            backgroundImage = 'images/rain.jpg';
            break;
        case 'thunderstorm':
            backgroundImage = 'images/thunderstorm.jpg';
            break;
        case 'snow':
            backgroundImage = 'images/snow.jpg';
            break;
        case 'mist':
            backgroundImage = 'images/mist.jpg';
            break;
        case 'haze':
            backgroundImage = 'images/haze.jpg';
            break;
        case 'smoke':
            backgroundImage = 'images/haze.jpg';
            break;
        default:
            backgroundImage = 'images/clear_sky.jpg';
            break;
    }

    body.style.backgroundImage = `url(${backgroundImage})`;

    

    // Optionally, you can also change background color based on temperature
    if (temp < 0) {
        body.style.backgroundColor = 'rgba(202, 192, 192, 0.5)'; // Cold
    } else if (temp >= 0 && temp < 15) {
        body.style.backgroundColor = 'rgba(75, 139, 192, 0.5)'; // Cool
    } else if (temp >= 15 && temp < 30) {
        body.style.backgroundColor = 'rgba(224, 191, 0, 0.5)'; // Warm
    } else {
        body.style.backgroundColor = 'rgba(223, 136, 6, 0.5)'; // Hot
    }
}

// function changeBackground(temp) {
//     const body = document.body;

//     if (temp < 0) {
//         body.style.backgroundColor = 'rgb(202, 192, 192)'; // Cold
//     } else if (temp >= 0 && temp < 15) {
//         body.style.backgroundColor = 'rgb(75, 139, 192)'; // Cool
//     } else if (temp >= 15 && temp < 30) {
//         body.style.backgroundColor = 'rgb(224, 191, 0)'; // Warm
//     } else {
//         body.style.backgroundColor = 'rgb(223, 136, 6)'; // Hot
//     }
// }
// const dropdowns = document.querySelectorAll(".dropdown-item");
// dropdowns.addEventListener("click",(e)=>{
//     commoncity = dropdowns.value;
//     console.log(commoncity)
