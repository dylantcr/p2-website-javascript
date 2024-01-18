document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
  
    getWeatherBtn.addEventListener('click', function () {
      const location = locationInput.value;
  
      if (location) {
        getWeatherData(location);
      } else {
        alert('Voer een locatie in.');
      }
    });
  
    async function getWeatherData(location) {
      try {
        const apiKey = 'f0a682ca409e7a4eedfdd291f584d6f2';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Locatie niet gevonden. Probeer opnieuw.');
        }
  
        const data = await response.json();
        displayWeatherData(data);
      } catch (error) {
        console.error('Fout bij het ophalen van weerdata:', error.message);
        alert('Er is een fout opgetreden. Probeer het later opnieuw.');
      }
    }
  
    function displayWeatherData(data) {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const description = data.weather[0].description;
  
      const weatherHtml = `
        <h2>${data.name}</h2>
        <p>Temperatuur: ${temperature}°C</p>
        <p>Luchtvochtigheid: ${humidity}%</p>
        <p>Weertype: ${description}</p>
      `;
  
      weatherInfo.innerHTML = weatherHtml;
    }
  });
  