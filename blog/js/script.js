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
    delay: 5000, // Auto-slide every 5 seconds
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
    // Initialize Clipboard.js
    const clipboard = new ClipboardJS('.copy-btn');

    // Show the success alert when code is copied
    clipboard.on('success', function(e) {
        const alertBox = document.getElementById('copy-alert');
        alertBox.style.display = 'block';
        setTimeout(function() {
            alertBox.style.display = 'none';
        }, 2000);
    });

    // Optional: Add error handling for clipboard failures
    clipboard.on('error', function(e) {
        console.error('Error copying text to clipboard:', e);
    });