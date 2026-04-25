document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Initialize
    totalSlidesSpan.textContent = totalSlides;
    updateUI();

    // Event Listeners for Buttons
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        }
    });

    // Touch Support (Swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            goToNextSlide(); // Swipe left -> Next
        }
        if (touchEndX > touchStartX + 50) {
            goToPrevSlide(); // Swipe right -> Prev
        }
    }

    // Core Functions
    function goToNextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            closeAllNotes();
            updateUI();
        }
    }

    function goToPrevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            closeAllNotes();
            updateUI();
        }
    }
    
    function closeAllNotes() {
        document.querySelectorAll('.speaker-notes-panel').forEach(p => p.classList.remove('active'));
    }

    function updateUI() {
        // Update Slides Classes
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update Buttons State
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;

        // Update Text Counter
        currentSlideSpan.textContent = currentSlide + 1;
    }
});
