"use strict";

var mainId = document.getElementById("card");
var mainDes = document.getElementById("desc");
var temperatuere = document.getElementById("temperature");
var mainIcon = document.getElementById("iconDesc");

var currentLocation = function currentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      return CallingApi(position.coords.latitude, position.coords.longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
currentLocation();

var CallingApi = function CallingApi(latitude, longitude) {
  fetch("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude).then(function (response) {
    return response.json();
  }).then(function (data) {
    return appendingData(data);
  }).catch(function (error) {
    return console.log("error", error);
  });
};

var appendingData = function appendingData(data) {
  var weabtherObj = data.weather[0];
  var iconUrl = weabtherObj.icon;
  mainDes.innerHTML = weabtherObj.description;
  temperatuere.innerHTML = Math.round(data.main.temp * 10) / 10 + temperatuere.innerHTML;
  mainIcon.setAttribute("title", weabtherObj.description);
  mainIcon.src = weabtherObj.icon;
  console.log(mainIcon);
  console.log("waether value", data.weather, weabtherObj.icon);
};
//# sourceMappingURL=main.js.map