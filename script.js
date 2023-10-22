
document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        updateIndicators();
        stopAutoPlay();
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        updateIndicators();
        stopAutoPlay();
    }

    function startAutoPlay() {
        intervalId = setInterval(goToNext, 3000); // Auto-advance every 3 seconds
    }

    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    prevButton.addEventListener('click', () => {
        goToPrev();
        stopAutoPlay();
    });
    nextButton.addEventListener('click', () => {
        goToNext();
        stopAutoPlay();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            updateIndicators();
            stopAutoPlay();
        });
    });

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    startAutoPlay();
});