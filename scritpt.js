const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const weatherDiv = document.querySelector("#weather");
const city_name = document.querySelector(".city_name");
const city_temperature = document.querySelector(".city_temperature");
const city_description = document.querySelector(".city_description");
const windspeed = document.querySelector(".windspeed");
const humidity = document.querySelector(".humidity");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4caa194df4bfaf7b26917362b21ba796&units=metric&lang=vi`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperature =Math.round(data.main.temp);
      const description = data.weather[0].description;
      // weatherDiv.textContent = `Nhiệt độ ở ${city} là ${temperature}°C và ${description}.`;
      city_name.innerHTML = city
      city_temperature.innerHTML = `${temperature}°C`
      city_description.innerHTML = description
      windspeed.innerHTML =`${ (data.wind.speed * 3.6).toFixed(2)}km/h`
      humidity.innerHTML = `${data.main.humidity}%`
    })
    .catch((error) => {
      console.error(error);
      weatherDiv.textContent = "Không tìm thấy thông tin thời tiết cho thành phố này.";
    });
});