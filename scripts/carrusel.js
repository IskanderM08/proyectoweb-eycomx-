document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-outer');

    carousels.forEach((carousel, index) => {
        let currentIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        const prevButton = carousel.querySelector('.carousel-control.prev');
        const nextButton = carousel.querySelector('.carousel-control.next');

        function showSlide(index) {
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }

            const offset = -currentIndex * 100;
            carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        }

        nextButton.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        prevButton.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        showSlide(currentIndex);
    });
});
