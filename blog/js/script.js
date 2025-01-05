    console.log("JS Started...")
    const navList = document.querySelector('.navbar');
    const hamBurgerIcon  = document.getElementById('hamburger'); 
    
  
    // Toggle the navigation menu when hamburger is clicked
    function toggleMenu() {
        navList.classList.toggle('active');
        hamBurgerIcon.classList.toggle('fa-bars');  // Hamburger icon (fa-bars)
        hamBurgerIcon.classList.toggle('fa-xmark');
      }