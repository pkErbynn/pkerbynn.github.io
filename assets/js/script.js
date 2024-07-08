let scrollCount = 0;

document.getElementById('right-arrow').addEventListener('click', function() {
    const scrollAmount = 300;
    const maxScrolls = 2;

    document.querySelector('.myrow').scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    scrollCount++;
    
    if (scrollCount >= maxScrolls) {
        this.style.display = 'none';
    }
});
