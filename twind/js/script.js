       // Toggle the mobile menu visibility
       function toggleMenu() {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    }

        // Get the modal and buttons
        const searchModal = document.getElementById('searchModal');
        const openSearchModal = document.getElementById('openSearchModal');
        const closeSearchModal = document.getElementById('closeSearchModal');
    
        // Open search modal when the search button is clicked
        openSearchModal.addEventListener('click', () => {
          searchModal.classList.remove('hidden');
        });
    
        // Close search modal when the close button is clicked
        closeSearchModal.addEventListener('click', () => {
          searchModal.classList.add('hidden');
        });
    
        // Close the search modal if clicked outside of the modal
        searchModal.addEventListener('click', (event) => {
          if (event.target === searchModal) {
            searchModal.classList.add('hidden');
          }
        });