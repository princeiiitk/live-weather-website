// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// key=7d071fbe0ce859f38fc52421fe538ec8
const btnele=document.querySelector(".btn");

btnele.addEventListener('click' , ()=>{
    const inputElement = document.querySelector('.input');
 let city = inputElement.value;
  
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;
const key = '7d071fbe0ce859f38fc52421fe538ec8';

fetch(url+key)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ');
    }
    return response.json();
  })
  .then(data => {
    
    // console.log(data);
    
    const temp=document.querySelector(".temp");
    temp.innerHTML=Math.floor(data.main.temp-273)+'°C';
    const humidity=document.querySelector(".humidity");
    humidity.innerHTML=data.main.humidity+'%'
    const wind=document.querySelector(".wind");
    wind.innerHTML=data.wind.speed+'m/s';
    const cityele=document.querySelector(".city")
    console.log(data.name)
    cityele.innerHTML=data.name
    const weather=document.querySelector(".weather");
   
    weather.style.display='block'

    const wethericonele=document.querySelector(".weather-icon")
    if(data.weather[0].main=='Rain'){
       wethericonele.src="rain.png";
      }

       else if(data.weather[0].main=='Clouds'){
         wethericonele.src='clouds.png'
       }
       else if(data.weather[0].main=='Clear'){
        wethericonele.src='clear.png'
      }
      else if(data.weather[0].main=='Drizzle'){
        wethericonele.src='drizzle'
      }
      else if(data.weather[0].main=='Mist'){
        wethericonele.src='mist.png'
      }
    
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

})


