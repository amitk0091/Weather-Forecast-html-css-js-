
const getcity = document.getElementById("btn");
getcity.onclick= () => {
    const city = document.getElementById("city").value;
    // console.log(city);
    if (city != null) checkweather(city);
    
}
async function checkweather(city) {
    const apikey = "9c5c94af9f015966b39f8442e260a1cd";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    var data =await response.json();
    console.log(data);
    document.getElementById("temp1").innerHTML=`${Math.floor(data.main.temp)+"°c"}` 
    document.getElementById("humiddata").innerHTML=`${Math.floor(data.main.humidity)+"%"}` 
    document.getElementById("cityname").innerHTML=`${data.name}`
    document.getElementById("winddata").innerHTML=`${data.wind.speed+"km/h"}`
}