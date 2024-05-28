// HAMBURGER MENU

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const verticalNav = document.querySelector('.vertical-nav');

    hamburgerMenu.addEventListener('click', function() {
        verticalNav.classList.toggle('show');
    });
});

// CAROUSEL

document.addEventListener('DOMContentLoaded', function() {
   const prevButton = document.getElementById('prev-slide');
   const nextButton = document.getElementById('next-slide');
   const carousel = document.querySelector('.carousel');
   const slides = document.querySelectorAll('.slide');
   let slideIndex = 0;

   // Function to show current slide
   function showSlide(index) {
      slides.forEach((slide, i) => {
         slide.style.transform = `translateX(-${index * 100}%)`;
      });
   }

   // Previous slide button click event
   prevButton.addEventListener('click', function() {
      slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
      showSlide(slideIndex);
   });

   // Next slide button click event
   nextButton.addEventListener('click', function() {
      slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
      showSlide(slideIndex);
   });
});

// POP UP FEATURES

const popCloseBtn = document.getElementById('pop-close-btn');
const submitNewsletter = document.getElementById('submit');
const shopBtns = document.querySelectorAll('#shop-button'); //SELECTS ALL ELEMENTS OF SHOP-BUTTON

//DISPLAYS POP-UP
function showPopUp(){
    pop.style.display = "block";
}

//CLICK SHOP-NOW BUTTON TO SHOW POP-UP
shopBtns.forEach(function(shopBtn) {
    shopBtn.addEventListener('click', function() {
        showPopUp();
    })
})
    
//POP UP NEWSLETTER SIGN UP
submitNewsletter.addEventListener('click', function(){
    event.preventDefault(); // prevent form submission
    pop.style.display = 'block';
})

//POP UP CLOSE BUTTON
popCloseBtn.addEventListener('click', function(){
    pop.style.display = 'none';
}) 

