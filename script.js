let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
    setTimeout(showSlides, 2000); // Mude as imagens a cada 2 segundos (2000ms)
}

showSlides();
