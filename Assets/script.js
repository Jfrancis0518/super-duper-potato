const apiKey = 'YOUR_API_KEY';
const baseUrl ='https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';


const fetchWeatherData = async (cityname) => {
    const response = await fetch(url);
    const data = await response.json();
}