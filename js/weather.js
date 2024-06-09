// // const BASEURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
// const BASEURL = "https://api.openweathermap.org/data/2.5/weather/";
// const URL = `${BASEURL}/${lat}${lon}${APIkey}`;
// let response = fetch(URL);
// let data = response.json();
const BASEURL = "https://api.openweathermap.org/data/2.5/weather";
const lat = "37.7749"; // Example latitude (San Francisco)
const lon = "-122.4194"; // Example longitude (San Francisco)
const APIkey = "1d9f60594fcf3902a2553f6e0dd3ec16"; // Replace with your actual API key
const URL = `${BASEURL}?lat=${lat}&lon=${lon}&appid=${APIkey}`;

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Process your weather data here
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
