    console.log("JS Started...")
    const navList = document.querySelector('.navbar');
    const navItem = document.querySelector('.nav-item');
    const dropdownIcon = document.querySelector('.nav-item i'); 
    const conceptsLink = document.querySelector('.nav-item a');
    const hamBurgerIcon  = document.getElementById('hamburger'); 
    const dropdownElement = document.querySelector('.dropdown');
    
  
    // Toggle the navigation menu when hamburger is clicked
    function toggleMenu() {
        navList.classList.toggle('active');
        hamBurgerIcon.classList.toggle('fa-bars');  // Hamburger icon (fa-bars)
        hamBurgerIcon.classList.toggle('fa-xmark');
      }

// Function to toggle the dropdown (add/remove 'selected' class)
function activateDropDown(event) {
  // Toggle the 'selected' class to show or hide the dropdown
  event.stopPropagation(); 
  // Prevent click event from propagating to the document

  // If the dropdown is already open, close it
  if (dropdownElement.classList.contains('selected')) {
    dropdownIcon.classList.remove('fa-chevron-up');  // Change icon to down
    dropdownIcon.classList.add('fa-chevron-down');
    dropdownElement.classList.remove('selected');
    console.log('Dropdown closed');
  } else {
    // Otherwise, open it
    dropdownElement.classList.add('selected');
    dropdownIcon.classList.remove('fa-chevron-down'); // Change icon to up
    dropdownIcon.classList.add('fa-chevron-up');      // Add the up icon
    console.log('Dropdown opened');
  }
}

// Close the dropdown when clicking or touching outside the Concepts dropdown
function closeDropdown(event) {
  // If the click/touch is outside the Concepts link or dropdown, close it
  if (!conceptsLink.contains(event.target) && !dropdownElement.contains(event.target)) {
    dropdownElement.classList.remove('selected');
    dropdownIcon.classList.remove('fa-chevron-up');  // Change icon to down
    dropdownIcon.classList.add('fa-chevron-down');   // Add the down icon
    console.log('Dropdown closed from outside');
  }
}
document.addEventListener('touchstart', closeDropdown);
document.addEventListener('click', closeDropdown);

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
