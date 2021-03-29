var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var button = document.getElementById('button')
// const cityName = document.getElementById('cityName')
var inputValue = document.getElementsByClassName('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
const apiKey = '0005f3f86d450aa28699c2489b4161a4';
var currentDay = new Date();
var city_Array = [];


/*$(document).ready(() => {
    var update = function () {
        document.getElementById("updateTime")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ssa');
    }
    setInterval(update, 1000);
})*/

function handleSearchFormSubmit(event) {
    event.preventDefault();

    inputValue = document.querySelector('#inputValue').value;
    console.log(inputValue) 
        return;
    }

/*button.addEventListener('click', function () {
    var name = inputValue.value
    console.log(name);
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => console.log(data))  // this is a problem
})*/

// get current city weather data

var searchInputValue = document.querySelector('#searchCity').value;
console.log(searchInputValue)
 //   return;

var queryString = "#current-city"
currentDay.textContent = searchInputValue
location.assign(queryString);

name.onclick= function(event) {
    event.preventDefault()
    var cityInput = $('#city').val();
    console.log('City = ' + cityInput);
    var  locQueryUrl = `https://api.openweathermap.org/data/2.5/find?q=${inputValue}&appid=${apiKey}&units=imperial`;
fetch(locQueryUrl, { method: "GET" })
    .then(function (data) {
        return data.json()
    })
    .then(function (response) {
        console.log(response)
    })


    .then(function (currentdata) {
        console.log(currentdata)
        console.log(currentdata.main.temp)
        console.log(currentdata.main.humidity)
        console.log(currentdata.wind.speed)
        var curentDayweather = document.querySelector('#current-dayweather');
        var curentDaytemp = document.querySelector('#current-daytemp');
        var curentDayFeelsLike = document.querySelector('#current-dayfeelslike');
        var curentDayhumid = document.querySelector('#current-dayhumid');
        var curentDaywind = document.querySelector('#current-daywind');
        var curentDayuv = document.querySelector('#current-dayuv');

var uvQueryUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${currentdata.coord.lat}&lon=${currentdata.coord.lon}&appid=${apiKey}&units=imperial`
fetch(uvQueryUrl)
    .then(function (res) {
        return res.json()
    })

    .then(function (uvdata) {
        console.log(uvdata);
        console.log(uvdata.value);
        currentDayuv.textContent = "Uv Index" + uvdata.value;
    })
currentDayweather.setAttribute('src' , "http://openweathermap.org/img/w/$currentdata.weather[0].icon%7D.png")
    currentDaytemp.textContent='Temperature: ' + currentdata.main.temp + 'F';
    currentDayFeelsLike.textContent='Temperature Feels Like: ' + currentdata.main.temp + 'F';
    currentDayhumid.textContent='Humidity: ' + currentdata.main.temp + '%';
    currentDaywind.textContent='Wind Speed: ' + currentdata.main.temp + 'mph';

    })

//get five day forecast

function getApi() {

    var fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}appid=${apiKey}&units=imperial`

    fetch(fiveDayForecast)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data) // this is a problem

        .then(function (forecastdata) {
            console.log(forecastdata.list[0].clouds.dt_txt);
            console.log(forecastdata.list[0].weather.icon);
            console.log(forecastdata.list[0].main.temp);
            console.log(forecastdata.list[0].main.humidity);
            console.log(forecastdata.list[0].wind.speed);

            day1Weather = document.querySelector("#day1Weather")
            day1Temp = document.querySelector("#day1temp")
            day1Humid = document.querySelector("#day1humid")
            day1Wind = document.querySelector("#day1wind")

            day0Weather.textContent = forecastdata.list[0].weather.icon;
            day0Temp.textContent = 'Temperature: ' + forecastdata.list[0].main.temp + ' F';
            day0Humid.textContent = 'Humidity: ' + forecastdata.list[0].main.humidity + ' %';
            day0Wind.textContent = 'Wind Speed: ' + forecastdata.list[0].wind.speed + 'mph';

            console.log(forecastdata.list[1].clouds.dt_txt);
            console.log(forecastdata.list[1].weather.icon);
            console.log(forecastdata.list[1].main.temp);
            console.log(forecastdata.list[1].main.humidity);
            console.log(forecastdata.list[1].wind.speed);
    
            day2Weather = document.querySelector("#day2Weather")
            day2Temp = document.querySelector("#day2temp")
            day2Humid = document.querySelector("#day2humid")
            day2Wind = document.querySelector("#day2wind")
    
            day1Weather.textContent = forecastdata.list[1].weather.icon;
            day1Temp.textContent = 'Temperature: ' + forecastdata.list[1].main.temp + ' F';
            day1Humid.textContent = 'Humidity: ' + forecastdata.list[1].main.humidity + ' %';
            day1Wind.textContent = 'Wind Speed: ' + forecastdata.list[1].wind.speed + 'mph';

            console.log(forecastdata.list[2].clouds.dt_txt);
            console.log(forecastdata.list[2].weather.icon);
            console.log(forecastdata.list[2].main.temp);
            console.log(forecastdata.list[2].main.humidity);
            console.log(forecastdata.list[2].wind.speed);
        
            day3Weather = document.querySelector("#day3Weather")
            day3Temp = document.querySelector("#day3temp")
            day3Humid = document.querySelector("#day3humid")
            day3Wind = document.querySelector("#day3wind")
        
            day2Weather.textContent = forecastdata.list[2].weather.icon;
            day2Temp.textContent = 'Temperature: ' + forecastdata.list[2].main.temp + ' F';
            day2Humid.textContent = 'Humidity: ' + forecastdata.list[2].main.humidity + ' %';
            day2Wind.textContent = 'Wind Speed: ' + forecastdata.list[2].wind.speed + 'mph';

            console.log(forecastdata.list[3].clouds.dt_txt);
            console.log(forecastdata.list[3].weather.icon);
            console.log(forecastdata.list[3].main.temp);
            console.log(forecastdata.list[3].main.humidity);
            console.log(forecastdata.list[3].wind.speed);
            
            day4Weather = document.querySelector("#day4Weather")
            day4Temp = document.querySelector("#day4temp")
            day4Humid = document.querySelector("#day4humid")
            day4Wind = document.querySelector("#day4wind")
            
            day3Weather.textContent = forecastdata.list[3].weather.icon;
            day3Temp.textContent = 'Temperature: ' + forecastdata.list[3].main.temp + ' F';
            day3Humid.textContent = 'Humidity: ' + forecastdata.list[3].main.humidity + ' %';
            day3Wind.textContent = 'Wind Speed: ' + forecastdata.list[3].wind.speed + 'mph';

            console.log(forecastdata.list[4].clouds.dt_txt);
            console.log(forecastdata.list[4].weather.icon);
            console.log(forecastdata.list[4].main.temp);
            console.log(forecastdata.list[4].main.humidity);
            console.log(forecastdata.list[4].wind.speed);                                
                
            day5Weather = document.querySelector("#day5Weather")
            day5Temp = document.querySelector("#day5temp")
            day5Humid = document.querySelector("#day5humid")
            day5Wind = document.querySelector("#day5wind")                
                
            day1Weather.textContent = forecastdata.list[4].weather.icon;
            day1Temp.textContent = 'Temperature: ' + forecastdata.list[4].main.temp + ' F';
            day1Humid.textContent = 'Humidity: ' + forecastdata.list[4].main.humidity + ' %';
            day1Wind.textContent = 'Wind Speed: ' + forecastdata.list[4].wind.speed + 'mph';

        })

            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
        });
}

fetchButton.addEventListener('click', getApi)

}
