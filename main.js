document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    
    if (mobileMenuToggle && navMobile) {
        mobileMenuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Mobile dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle-mobile');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const parent = this.parentElement;
            const dropdownMenu = parent.querySelector('.dropdown-menu-mobile');
            const icon = this.querySelector('i');
            
            dropdownMenu.classList.toggle('active');
            
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Create placeholder images if needed
    const placeholderImages = document.querySelectorAll('img[src*="placeholder.svg"]');
    placeholderImages.forEach(img => {
        if (!img.src.includes('http')) {
            // Create a simple placeholder with the dimensions from the image
            const width = img.width || 300;
            const height = img.height || 200;
            img.src = `https://via.placeholder.com/${width}x${height}/CCCCCC/666666?text=Ogooué+Labs`;
        }
    });
});