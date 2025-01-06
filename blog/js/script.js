    console.log("JS Started...")
    const navList = document.querySelector('.navbar');
    const hamBurgerIcon  = document.getElementById('hamburger'); 
    
  
    // Toggle the navigation menu when hamburger is clicked
    function toggleMenu() {
        navList.classList.toggle('active');
        hamBurgerIcon.classList.toggle('fa-bars');  // Hamburger icon (fa-bars)
        hamBurgerIcon.classList.toggle('fa-xmark');
      }

      let currentSlide = 0; //setting current value as 0
      const slides = document.querySelectorAll('.slider-image'); // gettting all slides
      const totalSlides = slides.length; //length of slides
      const sliderImages = document.querySelector('.slider-images');
      
      function showSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        sliderImages.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
      }
  
      // Automatic sliding
      setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000); // Change slide every 3 seconds (3000 milliseconds)
  
      document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
      document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));