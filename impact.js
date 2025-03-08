document.addEventListener("DOMContentLoaded", () => {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Map placeholder functionality
    // This would be replaced with actual map implementation
    const mapContainer = document.querySelector('.impact-map');
    if (mapContainer) {
        const mapImage = mapContainer.querySelector('img');
        if (mapImage && !mapImage.src.includes('http')) {
            mapImage.src = 'https://via.placeholder.com/1200x600/CCCCCC/666666?text=Carte+d%27impact+Ogooué+Labs';
        }
    }

    // Partner logos placeholder
    const partnerLogos = document.querySelectorAll('.partner-logo img');
    partnerLogos.forEach((logo, index) => {
        if (!logo.src.includes('http')) {
            logo.src = `https://via.placeholder.com/200x100/EEEEEE/999999?text=Partenaire+${index + 1}`;
        }
    });
});
