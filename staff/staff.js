document.querySelectorAll('nav a.scroll-in-page').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust for fixed headers
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

