    console.log("JS Started...")
    const navList = document.querySelector('.navbar');
    const hamBurgerIcon  = document.getElementById('hamburger'); 
    
  
    // Toggle the navigation menu when hamburger is clicked
    function toggleMenu() {
        navList.classList.toggle('active');
        hamBurgerIcon.classList.toggle('fa-bars');  // Hamburger icon (fa-bars)
        hamBurgerIcon.classList.toggle('fa-xmark');
      }

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true, // Enable looping of slides
  autoplay: {
    delay: 3000, // Auto-slide every 3 seconds
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});