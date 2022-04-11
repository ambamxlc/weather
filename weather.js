let weather = {
  apiKey: "d921a0596ffd6304abe53e1e25706439",
  searchFunction: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
  fetchWeather: function (zipcode) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zipcode +
        ",us&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp } = data.main;
    const { temp_max } = data.main;
    const { temp_min } = data.main;
    const timezone = new Date();
    console.log(name, icon, description, temp_max, temp_min, timezone);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".condition").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".temp_max").innerText = "High " + temp_max;
    document.querySelector(".temp_min").innerText = "Low " + temp_min;
    document.querySelector(".date").innerText = timezone;
  },
};
document.querySelector(".button").addEventListener("click", function () {
  weather.searchFunction();
});
