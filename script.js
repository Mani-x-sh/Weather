let city=document.getElementById("city");
let temp=document.getElementById("temp");
let climate=document.getElementById("climate");
let speed=document.getElementById("speed");
let input=document.getElementById("inp");
let Api_key="34c6bb83a317e0f5a94fac11e4659109";

const data=async function (search) 
{
let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${Api_key}&units=metric`);
    console.log(getData);
     let jsonData=await getData.json();
     console.log(jsonData);
   
    if (jsonData.cod==400)
    {
        alert("please enter location !");
        city.innerHTML="";
        temp.innerHTML="";
        climate.innerHTML="";
        speed.innerHTML="";
    }
    if(jsonData.cod==404)
    {
        alert("location not found !");
        city.innerHTML="";
        temp.innerHTML="";
        climate.innerHTML="";
        speed.innerHTML="";
    }



    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.floor(jsonData.main.temp)+" °C";
    climate.innerHTML=jsonData.weather[0].main;
    speed.innerHTML=jsonData.wind.speed+" km/hr";
    input.value="";
}  

function myFun(){
   search=input.value ;
    data(search);
}
// data();