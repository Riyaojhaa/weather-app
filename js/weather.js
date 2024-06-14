// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = '1d9f60594fcf3902a2553f6e0dd3ec16';
//     const units = 'metric';
//     const searchbtn = document.querySelector("#button")


//     // const x = document.getElementById("demo");

//     function getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     }

//     function showPosition(position) {
//         console.log("Latitude: " + position.coords.latitude +
//             "Longitude: " + position.coords.longitude);
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         getWeatherDetails(lat , lon )
//     }

//     window.getLocation = getLocation;

//     const getWeatherDetails = (city, lat, lon) => {
//         const weather_api_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;


//         fetch(weather_api_url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 //filter  the forecasts to get only one forecast per day
//                 const uniqueforecastdays = [];
//                 const fivedaysforecast = data.list.filter(forecast => {
//                     const forecastdate = new Date(forecast.dt_txt).getDate();
//                     if (!uniqueforecastdays.includes(forecastdate)) {
//                         return uniqueforecastdays.push(forecastdate);
//                     }
//                 });
//                 // Extract and print the dates and temperatures
//                 fivedaysforecast.forEach((forecast, index) => {
//                     const forecastDate = new Date(forecast.dt_txt);
//                     const formattedDate = forecastDate.toLocaleDateString('en-US', {
//                         weekday: 'long',
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                     });
//                     const temperature = forecast.main.temp;
//                     const humidity = forecast.main.humidity;
//                     const wind = forecast.wind.speed;

//                     // Update the HTML elements for each forecast day
//                     document.querySelector(`#date${index + 1}`).innerHTML = `${formattedDate}`;
//                     document.querySelector(`#temp${index + 1}`).innerHTML = `${temperature}`;
//                     document.querySelector(`#wind${index + 1}`).innerHTML = `${wind}`;
//                     document.querySelector(`#humidity${index + 1}`).innerHTML = `${humidity}`;


//                 });
//                 console.log(fivedaysforecast);
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetching the forecasting:', error);
//             });
//     }


//     searchbtn.addEventListener("click", (e) => {
//         e.preventDefault()
//         let input = document.querySelector("#inputbox");
//         let city = input.value;
//         if (city === "") {
//             return alert("City name cannot be empty");
//             // console.error("City name cannot be empty");

//         }
//         console.log(city);
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // if(!data.length) return alert(`no coordinates are found for ${city}`);
//                 console.log(data);
//                 const temperature = data.main.temp
//                 feels_like.innerHTML = data.main.feels_like
//                 temp.innerHTML = data.main.temp
//                 humidity.innerHTML = data.main.humidity
//                 temp_max.innerHTML = data.main.temp_max
//                 temp_min.innerHTML = data.main.temp_min
//                 deg.innerHTML = data.wind.deg
//                 document.querySelector("#speed").innerHTML = data.wind.speed;
//                 document.querySelector("#description").innerHTML = data.weather[0].description;
//                 changeBackground(data.weather[0].description, temperature);
//                 const lat = data.coord.lat
//                 const lon = data.coord.lon
//                 getWeatherDetails(city, lat, lon);
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//         document.querySelector("#city").innerHTML = city;
//     })
//     function changeBackground(description, temp) {
//         const body = document.body;


//         let backgroundImage;
//         switch (description) {
//             case 'clear sky':
//                 backgroundImage = 'images/clear_sky.jpg';
//                 break;
//             case 'few clouds':
//                 backgroundImage = 'images/cloudy.jpg';
//                 break;
//             case 'scattered clouds':
//                 backgroundImage = 'images/scattered_clouds.jpg';
//                 break;
//             case 'broken clouds':
//                 backgroundImage = 'images/scattered_clouds.jpg';
//                 break;
//             case 'shower rain':
//                 backgroundImage = 'images/shower_rain.jpg';
//                 break;
//             case 'rain':
//                 backgroundImage = 'images/rain.jpg';
//                 break;
//             case 'thunderstorm':
//                 backgroundImage = 'images/thunderstorm.jpg';
//                 break;
//             case 'snow':
//                 backgroundImage = 'images/snow.jpg';
//                 break;
//             case 'mist':
//                 backgroundImage = 'images/mist.jpg';
//                 break;
//             case 'haze':
//                 backgroundImage = 'images/haze.jpg';
//                 break;
//             case 'smoke':
//                 backgroundImage = 'images/haze.jpg';
//                 break;
//             default:
//                 backgroundImage = 'images/clear_sky.jpg';
//                 break;
//         }

//         body.style.backgroundImage = `url(${backgroundImage})`;

//         // Optionally, you can also change background color based on temperature
//         if (temp < 0) {
//             body.style.backgroundColor = 'rgba(202, 192, 192, 0.5)'; // Cold
//         } else if (temp >= 0 && temp < 15) {
//             body.style.backgroundColor = 'rgba(75, 139, 192, 0.5)'; // Cool
//         } else if (temp >= 15 && temp < 30) {
//             body.style.backgroundColor = 'rgba(224, 191, 0, 0.5)'; // Warm
//         } else {
//             body.style.backgroundColor = 'rgba(223, 136, 6, 0.5)'; // Hot
//         }
//     }
// });

// // const dropdowns = document.querySelectorAll(".dropdown-item");
// // dropdowns.addEventListener("click",(e)=>{
// //     commoncity = dropdowns.value;
// //     console.log(commoncity)
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1d9f60594fcf3902a2553f6e0dd3ec16';
    const units = 'metric';
    const searchbtn = document.querySelector("#button");
    const locationbutton = document.querySelector("#button2");

    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //         console.log("Geolocation is not supported by this browser.");
    //     }
    // }

    // function showPosition(position) {
    //     console.log("Latitude: " + position.coords.latitude +
    //         " Longitude: " + position.coords.longitude);
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;
    //     getWeatherDetailsByCoords(lat, lon);
    // }

    // window.getLocation = getLocation;

    const getWeatherDetailsByCoords = (lat, lon) => {
        const weather_api_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

        fetch(weather_api_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Filter the forecasts to get only one forecast per day
                const uniqueforecastdays = [];
                const fivedaysforecast = data.list.filter(forecast => {
                    const forecastdate = new Date(forecast.dt_txt).getDate();
                    if (!uniqueforecastdays.includes(forecastdate)) {
                        return uniqueforecastdays.push(forecastdate);
                    }
                });

                // Extract and print the dates and temperatures
                fivedaysforecast.forEach((forecast, index) => {
                    const forecastDate = new Date(forecast.dt_txt);
                    const formattedDate = forecastDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    const temperature = forecast.main.temp;
                    const humidity = forecast.main.humidity;
                    const wind = forecast.wind.speed;

                    // Update the HTML elements for each forecast day
                    document.querySelector(`#date${index + 1}`).innerHTML = `${formattedDate}`;
                    document.querySelector(`#temp${index + 1}`).innerHTML = `${temperature}`;
                    document.querySelector(`#wind${index + 1}`).innerHTML = `${wind}`;
                    document.querySelector(`#humidity${index + 1}`).innerHTML = `${humidity}`;
                });
                console.log(fivedaysforecast);
            })
            .catch(error => {
                console.error('There was a problem with the fetching the forecast:', error);
            });
    }

    const getWeatherDetailsByCity = (city) => {
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
                document.querySelector("#feels_like").innerHTML = data.main.feels_like;
                document.querySelector("#temp").innerHTML = data.main.temp;
                document.querySelector("#humidity").innerHTML = data.main.humidity;
                document.querySelector("#temp_max").innerHTML = data.main.temp_max;
                document.querySelector("#temp_min").innerHTML = data.main.temp_min;
                document.querySelector("#deg").innerHTML = data.wind.deg;
                document.querySelector("#speed").innerHTML = data.wind.speed;
                document.querySelector("#description").innerHTML = data.weather[0].description;
                changeBackground(data.weather[0].description, temperature);
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                getWeatherDetailsByCoords(lat, lon);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        document.querySelector("#city").innerHTML = city;
    }

    searchbtn.addEventListener("click", (e) => {
        e.preventDefault();
        let input = document.querySelector("#inputbox");
        let city = input.value;
        if (city === "") {
            return alert("City name cannot be empty");
        }
        console.log(city);
        getWeatherDetailsByCity(city);
    });
   

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                
                const {latitude , longitude }= position.coords;
                const REVERSE_GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`;
                fetch(REVERSE_GEOCODING_URL)
                .then(response => {
                    if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
                })
                .then(data => {
                    if (data.length > 0) {
                        const { name, state, country } = data[0];
                        console.log(`Location: ${name}, ${state}, ${country}`);
                        getWeatherDetailsByCoords(latitude, longitude);
                        getWeatherDetailsByCity(state)
                    } else {
                        console.error('No location data found');
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetching the location:', error);
                });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    // function Position(position) {
    //     console.log("Latitude: " + position.coords.latitude +
    //         " Longitude: " + position.coords.longitude);
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;
    //     getWeatherDetailsByCoords(lat, lon);
    // }

    locationbutton.addEventListener("click",getLocation);

    function changeBackground(description, temp) {
        const body = document.body;
        let backgroundImage;
        switch (description) {
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

        if (temp < 0) {
            body.style.backgroundColor = 'rgba(202, 192, 192, 0.5)';
        } else if (temp >= 0 && temp < 15) {
            body.style.backgroundColor = 'rgba(75, 139, 192, 0.5)';
        } else if (temp >= 15 && temp < 30) {
            body.style.backgroundColor = 'rgba(224, 191, 0, 0.5)';
        } else {
            body.style.backgroundColor = 'rgba(223, 136, 6, 0.5)';
        }
    }

    getLocation();
});
