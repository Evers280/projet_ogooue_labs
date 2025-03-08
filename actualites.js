document.addEventListener("DOMContentLoaded", () => {
    // News filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter news cards
            newsCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Placeholder images for news cards
    const newsImages = document.querySelectorAll('.news-image img');
    newsImages.forEach((img, index) => {
        if (!img.src.includes('http')) {
            img.src = `https://via.placeholder.com/600x400/CCCCCC/666666?text=Actualité+${index + 1}`;
        }
    });

    // Placeholder for featured news image
    const featuredImage = document.querySelector('.featured-news-image img');
    if (featuredImage && !featuredImage.src.includes('http')) {
        featuredImage.src = 'https://via.placeholder.com/800x500/CCCCCC/666666?text=Actualité+à+la+une';
    }

    // Placeholder for author avatars
    const authorAvatars = document.querySelectorAll('.author-avatar img');
    authorAvatars.forEach((avatar, index) => {
        if (!avatar.src.includes('http')) {
            avatar.src = `https://via.placeholder.com/40x40/CCCCCC/666666?text=${index + 1}`;
        }
    });

    // Pagination functionality (simplified for demo)
    const paginationItems = document.querySelectorAll('.pagination-item');
    
    paginationItems.forEach(item => {
        if (!item.classList.contains('disabled')) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all pagination items
                paginationItems.forEach(pItem => pItem.classList.remove('active'));
                
                // Add active class to clicked item if it's a number
                if (!item.querySelector('i')) {
                    item.classList.add('active');
                }
                
                // In a real application, this would load the next page of news
                // For this demo, we'll just scroll to the top of the news section
                const newsSection = document.querySelector('.news-section');
                if (newsSection) {
                    window.scrollTo({
                        top: newsSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});
