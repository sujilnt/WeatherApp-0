const mainId=document.getElementById("card");
const mainDes=document.getElementById("desc");
const temperatuere=document.getElementById("temperature");
const mainIcon=document.getElementById("iconDesc");
const temperatureContainer=document.getElementById("temperatureContainer");
const unit=document.getElementById("measurement");

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

const appendingData= function (data){
	let weabtherObj=data.weather[0];
	let iconUrl=weabtherObj.icon;
 	mainDes.innerHTML =weabtherObj.description;
 	temperatuere.innerHTML=(Math.round(data.main.temp*10)/10)+temperatuere.innerHTML;
 	mainIcon.setAttribute("title",weabtherObj.description);
 	mainIcon.src=weabtherObj.icon;
 	console.log(mainIcon);
    console.log("waether value",data.weather, weabtherObj.icon);
};


temperatureContainer.addEventListener('click', ()=>{
    let convertedtemp=0;
    const convertC=unit.innerHTML==='C';
   if(convertC){
       convertedtemp= ((temperatuere.innerHTML*9)/5)+32;
       temperatuere.innerHTML=Math.round((convertedtemp*10)/10);
        unit.innerHTML='F';
   }else{
       convertedtemp= ((temperatuere.innerHTML-32)*5)/9;
       temperatuere.innerHTML=Math.round((convertedtemp*10)/10);
       unit.innerHTML='C';
   }
});