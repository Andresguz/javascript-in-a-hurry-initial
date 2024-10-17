//Menu boton
document.querySelector("#open-nav-menu").addEventListener("click",function(){
   document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
 });
//saludo texto

function celsiustoFar(tempeature){
let far = (tempeature * 9/5)+32;
return far;
}

const greetingText= "Good Mornig bitch";
const weatherCondition = "sunny";
const userLocation = "Talca";
let tempeature = 25.869;
let celsiusText= `The weather is ${weatherCondition} in ${userLocation} and it's ${tempeature.toFixed(1)}°C outside.`;
let fahrText= `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiustoFar(tempeature).toFixed(1)}°F outside.`;


 document.querySelector("#greeting").innerHTML = greetingText;
 document.querySelector("p#weather").innerHTML = celsiusText;

 document.querySelector(".weather-group").addEventListener("click",function(e){
   
   if(e.target.id=="celsius"){
      document.querySelector("p#weather").innerHTML = celsiusText;
   }else if(e.target.id =="fahr"){
      document.querySelector("p#weather").innerHTML = fahrText;

   }
   console.log(e.target.id);
   //fahr
   //celsius
 });



