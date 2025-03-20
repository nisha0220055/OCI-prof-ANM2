// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY'; 

// Function to get weather data based on city input
function getWeather() {
    const city = document.getElementById("city").value.trim(); // Get the city name from the input field

    if (city) {
        // Build the API URL with the city and the API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Fetch weather data from OpenWeatherMap API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Check if the city is found (API returns cod=200 if found)
                if (data.cod === '404') {
                    alert('City not found. Please try again.');
                    return;
                }

                // Display weather data
                document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
                document.getElementById("humidity").inne
