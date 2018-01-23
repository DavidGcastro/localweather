var city = document.getElementById("city");
var temp = document.getElementById("temp");
var icon = document.getElementById("icon")
var minTemp = document.getElementById("minTemp");
var maxTemp = document.getElementById("maxTemp");
var windSpeed = document.getElementById("windSpeed");
var weatherText = document.getElementById("weatherText");


//what do we want to do, first arg is: do we want to recieve or send data, second is URL



if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        cords(position.coords.latitude, position.coords.longitude);
    })
}


function cords(latitude, longitude) {

    console.log(latitude);
    console.log(longitude);
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://fcc-weather-api.glitch.me//api/current?lon=' + longitude + '&lat=' + latitude)

    ourRequest.send();

    //when data loads
    ourRequest.onload = function () {

        var data = JSON.parse(ourRequest.responseText);
        console.log(data);

        if (data.sys.country === "US") {
            temp.innerHTML = toF(data.main.temp);
            maxTemp.innerHTML = toF(data.main.temp_max);
            minTemp.innerHTML = toF(data.main.temp_min);

        } else {
            temp.innerHTML = (data.main.temp) + " C\xB0";
            maxTemp.innerHTML = data.main.temp_max;
            minTemp.innerHTML = data.main.temp_min;
        }

        city.innerHTML = (data.name);
        weatherText.innerHTML = (data.weather[0].description);
        //NEEDS TO BE CONVERTED TO KPH MAKE A FUNCTION
        windSpeed.innerHTML = data.wind.speed + " MPH";

        //manipulating the icon

        if (data.weather[0].description == "clear sky") {
            icon.src = "images/SVG/Sun.svg";

        }
        if (data.weather[0].description == "broken clouds") {
            icon.src = "images/SVG/Cloud-Fog-Sun-Alt.svg";

        }
        if (data.weather[0].description == "light rain") {
            icon.src = "images/SVG/Cloud-Drizzle.svg";

        }

        // add more icons here: 
        //        if (data.weather[0].description == "") {
        //            icon.src = "images/SVG/.svg";
        //
        //        }
        //        if (data.weather[0].description == "") {
        //            icon.src = "images/SVG/.svg";
        //
        //        }
        //        if (data.weather[0].description == " {
        //            icon.src = "images/SVG/.svg";
        //
        //        }
        //        if (data.weather[0].description == "") {
        //            icon.src = "images/SVG/.svg";
        //
        //        }
    };




}

function toF(degs) {
    return Math.round((degs * (9 / 5)) + 32) + " F\xB0";

}
