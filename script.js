async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "cd79c7ccaeef39021856ba622a0ddaa4"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>🌥️ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;
    resultDiv.innerHTML = weatherHtml;
  } catch (error) {
    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
