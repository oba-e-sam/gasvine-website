let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const intervalTime = 5000; // Time in milliseconds (5 seconds)

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Initialize the slideshow
        showSlide(currentIndex);

        // Set up the automatic slide transition
        setInterval(nextSlide, intervalTime);