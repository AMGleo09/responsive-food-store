

            // =============== search toggle ============

let searchForm = document.querySelector('.search-form');

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',()=>{

    searchForm.classList.toggle("active");

    shoppingCart.classList.remove("activeshopping");
    loginForm.classList.remove("active");
    menu.classList.remove("active");
    

})


                       /* shopping cart toggle */


 let shoppingCart = document.querySelector('.shopping-cart');

 let shoppingBtn = document.getElementById('cart-btn');
                       
 shoppingBtn.addEventListener('click',()=>{
                       
     shoppingCart.classList.toggle("activeshopping");


     searchForm.classList.remove("active");
     loginForm.classList.remove("active");
     menu.classList.remove("active");
 })



                /* login form toggle */





let loginForm = document.querySelector('.login-form');

 let loginBtn = document.getElementById('login-btn');
                       
 loginBtn.addEventListener('click',()=>{
                       
     loginForm.classList.toggle("active");

     searchForm.classList.remove("active");
     shoppingCart.classList.remove("activeshopping");
     menu.classList.remove("active");
 })

                /* menu bar  */





let menu = document.querySelector('.navbar');

 let menuBtn = document.getElementById('menu-btn');
                       
 menuBtn.addEventListener('click',()=>{
                       
     menu.classList.toggle("active");

     searchForm.classList.remove("active");
     shoppingCart.classList.remove("activeshopping");
     loginForm.classList.remove("active");
 })







//   for removing overlapping of divs 



 window.onscroll = () =>{

    searchForm.classList.remove("active");
    shoppingCart.classList.remove("activeshopping");
    loginForm.classList.remove("active");
    menu.classList.remove("active");
    
 }


    //    swiper js  for products

    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
        
        autoplay:{
            delay:3000,
            disableOnInteraction: false,
        },

        // centeredSlides:true,


        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });



                     //    swiper js  for reviews



                     var swiper = new Swiper(".review-slider", {
                        loop:true,
                        spaceBetween: 20,
                        
                        autoplay:{
                            delay:3000,
                            disableOnInteraction: false,
                        },
                
                        // centeredSlides:true,
                
                
                        breakpoints: {
                          0: {
                            slidesPerView: 1,
                            
                          },
                          768: {
                            slidesPerView: 2,
                            
                          },
                          1020: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                          },
                        },
                      });



                      // loader js  

let loader = document.querySelector('.loading');

function deloader(){
  loader.classList.add('deloder');
}

function dl(){
  setTimeout(deloader, 3500);
}

dl();