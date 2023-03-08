//Don't show ur api key
const API_KEY = `fc3d3ae9791eb4f8a8fcd378da9b949d`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const cityName = document.getElementById('city-name');
    console.log(data.name);
    cityName.innerText = data.name;
    const weather = document.getElementById('weather');
    console.log(data.weather[0].main);
    weather.innerText = data.weather[0].main;

}
document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
        searchField.value = '';
});

// loadTemperature('delhi');