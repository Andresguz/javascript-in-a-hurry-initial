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

//mensaje buenos dias 
let currentHour = new Date().getHours();
let greetingText;

if(currentHour<12){
    greetingText = "Good Mornig bitch";

}else if(currentHour<19){
   greetingText = "Good Afternoon bitch";

}else if(currentHour<24){
   greetingText = "Good evening bitch";
}else{
   greetingText="Welcome to the jungle";
}
const weatherCondition = "sunny";
const userLocation = "Talca";
let tempeature = 25.869;

let celsiusText= `The weather is ${weatherCondition} in ${userLocation} and it's ${tempeature.toFixed(1)}°C outside.`;
let fahrText= `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiustoFar(tempeature).toFixed(1)}°F outside.`;
//weather c f

 document.querySelector("#greeting").innerHTML = greetingText;
 document.querySelector("p#weather").innerHTML = celsiusText;

 document.querySelector(".weather-group").addEventListener("click",function(e){
   
   if(e.target.id=="celsius"){
      document.querySelector("p#weather").innerHTML = celsiusText;
   }else if(e.target.id =="fahr"){
      document.querySelector("p#weather").innerHTML = fahrText;
   }
 });
//timer

 setInterval(function(){
   let localtime = new Date();
   document.querySelector("span[data-time=hours]").textContent= localtime.getHours().toString().padStart(2,"0");
   document.querySelector("span[data-time=minutes]").textContent= localtime.getMinutes().toString().padStart(2,"0");
   document.querySelector("span[data-time=seconds]").textContent= localtime.getSeconds().toString().padStart(2,"0");
  
 },1000);

for(let a = 0; a<10;a++){
}

//Galery section a;adir imagenes al array
const galleryImages = [
{
   "src":"./assets/gallery/image1.jpg",
   "alt":"Tumbnail Image 1"
},
{
   "src":"./assets/gallery/image2.jpg",
   "alt":"Tumbnail Image 2"
},
{
   "src":"./assets/gallery/image3.jpg",
   "alt":"Tumbnail Image 3"
},

];


let mainImage= document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;


galleryImages.forEach(function(image,index){
   let thumb = document.createElement("img");
   thumb.src = image.src;
   thumb.alt = image.alt;
   thumb.dataset.arrayIndex=index;
   //condicional nueva
   thumb.dataset.selected = index === 0 ? true : false;

   thumb.addEventListener("click",function(e){
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      thumbnails.querySelectorAll("img").forEach(function(img){
         img.dataset.selected= false;
      });
      e.target.dataset.selected = true;
   });

   thumbnails.appendChild(thumb);
   });