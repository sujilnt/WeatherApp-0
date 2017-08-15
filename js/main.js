let mainId=document.getElementById("card");
let mainDes=document.getElementById("desc");
let temperatuere=document.getElementById("temperature");
let mainIcon=document.getElementById("iconDesc");


const currentLocation=function(){
	 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>CallingApi(position.coords.latitude,position.coords.longitude));
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};
currentLocation();

const CallingApi=function(latitude,longitude){
	fetch("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude)
	.then((response)=> response.json())
.then((data)=>appendingData(data))
.catch((error)=> console.log("error",error));
};

let appendingData= function (data){
	let weabtherObj=data.weather[0];
	let iconUrl=weabtherObj.icon;
 	mainDes.innerHTML =weabtherObj.description;
 	temperatuere.innerHTML=(Math.round(data.main.temp*10)/10)+temperatuere.innerHTML;
 	mainIcon.setAttribute("title",weabtherObj.description);
 	mainIcon.src=weabtherObj.icon;
 	console.log(mainIcon);
    console.log("waether value",data.weather, weabtherObj.icon);
};
