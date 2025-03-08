document.addEventListener("DOMContentLoaded", () => {
    // Placeholder images
    const images = document.querySelectorAll('.way-image img, .volunteer-image img, .partnership-image img, .testimonial-avatar img');
    
    images.forEach((img, index) => {
        if (!img.src.includes('http')) {
            // Set different placeholder images based on the container class
            if (img.parentElement.classList.contains('way-image')) {
                img.src = `https://via.placeholder.com/600x300/CCCCCC/666666?text=Agir+${index + 1}`;
            } else if (img.parentElement.classList.contains('volunteer-image')) {
                img.src = 'https://via.placeholder.com/800x500/CCCCCC/666666?text=Bénévoles';
            } else if (img.parentElement.classList.contains('partnership-image')) {
                img.src = 'https://via.placeholder.com/800x500/CCCCCC/666666?text=Partenaires';
            } else if (img.parentElement.classList.contains('testimonial-avatar')) {
                img.src = `https://via.placeholder.com/60x60/CCCCCC/666666?text=${index}`;
            }
        }
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
