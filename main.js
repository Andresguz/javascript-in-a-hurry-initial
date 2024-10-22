const weatherAPIKey= "7f06b5aad757d2635799c80225ea5eee";
const weatherAPIURL=`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`;
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
   
const products = [
   {
     title: "AstroFiction",
     author: "John Doe",
     price: 49.9,
     image: "./assets/products/img6.png"
   },
   {
     title: "Space Odissey",
     author: "Marie Anne",
     price: 35,
     image: "./assets/products/img1.png"
   },
   {
     title: "Doomed City",
     author: "Jason Cobert",
     price: 0,
     image: "./assets/products/img2.png"
   },
   {
     title: "Black Dog",
     author: "John Doe",
     price: 85.35,
     image: "./assets/products/img3.png"
   },
   {
     title: "My Little Robot",
     author: "Pedro Paulo",
     price: 0,
     image: "./assets/products/img5.png"
   },
   {
     title: "Garden Girl",
     author: "Ankit Patel",
     price: 45,
     image: "./assets/products/img4.png"
   }
 ];  
//Menu boton section
function menuHandler(){

   document.querySelector("#open-nav-menu").addEventListener("click",function(){
      document.querySelector("header nav .wrapper").classList.add("nav-open");
   });
   
   document.querySelector("#close-nav-menu").addEventListener("click",function(){
       document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

function celsiustoFar(tempeature){
   let far = (tempeature * 9/5)+32;
   return far;
   }

//saludo texto
function greetingHandler(){
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

document.querySelector("#greeting").innerHTML = greetingText;



}

function ClockerHandler(){
//timer

setInterval(function(){
   let localtime = new Date();
   document.querySelector("span[data-time=hours]").textContent= localtime.getHours().toString().padStart(2,"0");
   document.querySelector("span[data-time=minutes]").textContent= localtime.getMinutes().toString().padStart(2,"0");
   document.querySelector("span[data-time=seconds]").textContent= localtime.getSeconds().toString().padStart(2,"0");
  
 },1000);
}

function galleryHandler(){


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
   
}

//Productos
/*<div class="product-item">
             <img src=" ./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
</div>
*/
//products section

function populateProducts(productsList){
   let productsSection = document.querySelector(".products-area");
   productsSection.textContent = "";

   //se ejecuta e bucle para crear el elemto html cremaos seccion
   productsList.forEach(function(product,index){
      //create HTML element for the individual product
      let productElm = document.createElement("div");
      productElm.classList.add("product-item");

      //create the product image
      let productImage = document.createElement("img");
      productImage.src= product.image;
      productImage.alt = "Image for " + product.title;

      //create details product
      let productDetails = document.createElement("div");
      productDetails.classList.add("product-details");
      
      //Create Titule product , author, price=title and price
      let productTitle = document.createElement("h3");
      productTitle.classList.add("product-title");
      productTitle.textContent= product.title;
      
      let productAuthor = document.createElement("p");
      productAuthor.classList.add("product-author");
      productAuthor.textContent= product.author;

      //price titule
      let priceTitle = document.createElement("p");
      priceTitle.classList.add("price-title");
      priceTitle.textContent= "Price";

      //product price
      let productPrice = document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent=product.price>0 ? "$"+ product.price.toFixed(2) : "Free";


      //appede the produc details
      productDetails.append(productTitle);
      productDetails.append(productAuthor);
      productDetails.append(priceTitle);
      productDetails.append(productPrice);



      
      //add html child elements
      productElm.append(productImage);
      productElm.append(productDetails);
      //add complete indcidual product to the section
      productsSection.append(productElm);
   });
};

function productHandler(){
   let freeProducts = products.filter( item => !item.price || item.price <=0);
  
   let paidProducts = products.filter(item => item.price > 0);

//Manejador de productos 
   populateProducts(products);

   document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
   document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
   document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

   let productsFilter = document.querySelector(".products-filter");
   productsFilter.addEventListener("click", function(e){
      if(e.target.id === "all"){
         populateProducts(products);
      }else if(e.target.id === "paid"){
         populateProducts(paidProducts);

      }else if(e.target.id ==="free"){
         populateProducts(freeProducts);

      }
   });
}

//Footer
   function footerHandler(){
   let currentYear = new Date().getFullYear();
   document.querySelector("footer").textContent = `Andres Guzman - All rights reserved ${currentYear}`;
};
function weatherHandler(){

   navigator.geolocation.getCurrentPosition(position =>{
      let latitude = position.coords.latitude;
      let longitude= position.coords.longitude;
      let url= weatherAPIURL
         .replace("{lat}",latitude)
         .replace("{lon}",longitude)
         .replace("{API key}",weatherAPIKey);

      fetch(url)
      .then(response => response.json())
      .then(data => {
         console.log(data);
         const condition = data.weather[0].description;
         const Location = data.name;
         const tempeature = data.main.temp;
         
         
         let celsiusText= `The weather is ${condition} in ${Location} and it's ${tempeature.toFixed(1)}°C outside.`;
         let fahrText= `The weather is ${condition} in ${Location} and it's ${celsiustoFar(tempeature).toFixed(1)}°F outside.`;
         //weather c f

         document.querySelector("p#weather").innerHTML = celsiusText;

         document.querySelector(".weather-group").addEventListener("click",function(e){
            
            if(e.target.id=="celsius"){
               document.querySelector("p#weather").innerHTML = celsiusText;
            }else if(e.target.id =="fahr"){
               document.querySelector("p#weather").innerHTML = fahrText;
            }
         });

      });
   });
};

  
   //Page load carga
   menuHandler();
   //mansaje
   greetingHandler();
   //timer
   ClockerHandler();
   //galeria
   galleryHandler();
   productHandler();
   footerHandler();
   weatherHandler();