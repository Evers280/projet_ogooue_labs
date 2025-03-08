document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate counter
    function animateCounter(element, end, duration = 2000) {
        let startTimestamp = null;
        const start = parseInt(element.innerText.replace(/[^\d]/g, '')) || 0;
        const prefix = element.dataset.prefix || '';
        const suffix = element.dataset.suffix || '';
        
        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing function for smoother animation
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentCount = Math.floor(start + (end - start) * easedProgress);
            element.innerText = `${prefix}${currentCount}${suffix}`;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        
        window.requestAnimationFrame(step);
    }
    
    // Function to start animation when element is in viewport
    function handleScroll() {
        statNumbers.forEach(statNumber => {
            if (isInViewport(statNumber) && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                const end = parseInt(statNumber.dataset.count);
                const prefix = statNumber.dataset.prefix || '';
                const suffix = statNumber.dataset.suffix || '';
                animateCounter(statNumber, end);
            }
        });
    }
    
    // Initial check and scroll event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
