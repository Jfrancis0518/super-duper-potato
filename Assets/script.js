/*const apiKey = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';
const baseUrl ='https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';


const fetchWeatherData = async (cityName) => {
    try {
      const url = `${baseUrl}?q=${encodeURIComponent(cityName)}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
  
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${data.main.temp}</p><p>Humidity: ${data.main.humidity}</p>`;
  
      
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const cityName = document.getElementById('city-input').value;
    fetchWeatherData(cityName);
  });
  

  const weatherContainer = document.getElementById('weather-container');
weatherContainer.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temperature}</p><p>Humidity: ${humidity}</p>`;
*/
const apiKey = 'YOUR_API_KEY_HERE';
const baseUrl ='https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

const fetchWeatherData = async (cityName) => {
  try {
    const url = `${baseUrl}?q=${encodeURIComponent(cityName)}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${data.main.temp}</p><p>Humidity: ${data.main.humidity}</p>`;
  } catch (error) {
    console.log('Error:', error);
  }
};

document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const cityName = document.getElementById('city-input').value;
  fetchWeatherData(cityName);
});



  