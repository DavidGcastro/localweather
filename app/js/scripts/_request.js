var city = document.getElementById("city");
var temp = document.getElementById("temp");
var icon = document.getElementById("icon")
var weatherText = document.getElementById("weatherText");


//what do we want to do, first arg is: do we want to recieve or send data, second is URL



if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        cords(position.coords.latitude, position.coords.longitude);
    })
}


function cords(latitude, longitude) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://fcc-weather-api.glitch.me//api/current?lat=' + latitude + '&lon=' + longitude)
    ourRequest.send();

    //when data loads
    ourRequest.onload = function () {

        var data = JSON.parse(ourRequest.responseText);
        console.log(data);

        if (data.sys.country === "US") {
            temp.innerHTML = toF(data.main.temp);
        } else {
            temp.innerHTML = (data.main.temp) + " C\xB0";

        }

        city.innerHTML = (data.name);
        weatherText.innerHTML = (data.weather[0].description);

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
        if (data.weather[0].description == "clear sky") {
            icon.src = "images/SVG/Sun.svg";

        }
        if (data.weather[0].description == "clear sky") {
            icon.src = "images/SVG/Sun.svg";

        }
        if (data.weather[0].description == "clear sky") {
            icon.src = "images/SVG/Sun.svg";

        }
        if (data.weather[0].description == "clear sky") {
            icon.src = "images/SVG/Sun.svg";

        }

    };




}

function toF(degs) {
    return Math.round((degs * (9 / 5)) + 32) + " F\xB0";

}
