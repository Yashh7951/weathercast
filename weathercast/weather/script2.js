let weather = {
  apiKey: "c454e02d3dfccf1109099e09b46a7344",
  fetchWeather: function(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" 
  + city 
  + "&units=metric&appid=" 
  + this.apiKey
  )
  .then((response) => response.json())
  .then((data) => this.displayWeather(data));
  
  },
  displayWeather: function(data){
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"; 
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"; 
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage = url("https://cdn.pixabay.com/photo/2017/02/19/15/28/winter-2080070_960_720.jpg");
  },  
  search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
  }
  }; 
  
  document.querySelector(".search button").addEventListener("click", function (){
  weather.search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event){
  if(event.key == "Enter"){
  weather.search();
  }
  });
  
  weather.fetchWeather("satna");

  function randombg(){
    var random= Math.floor(Math.random() * 20) + 0;
    var bigSize = ["url('https://cdn.pixabay.com/photo/2017/02/19/15/28/winter-2080070_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2019/02/12/09/26/birds-3991744_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2014/03/26/17/50/sunset-298850_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2019/02/01/19/28/mountain-3969664_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359471_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2018/06/14/13/04/nature-3474826_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2019/08/02/02/02/beach-4378548_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2016/11/21/15/43/beach-1846040_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2020/07/03/11/06/birds-in-flight-5366034_960_720.jpg')",
                   "url('https://cdn.pixabay.com/photo/2014/03/16/12/51/sunset-288531_960_720.jpg')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }