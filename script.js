 // ==================== HEADER SCROLL EFFECT ====================
        const header = document.querySelector('.header');
        let lastScrollY = 0;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            lastScrollY = currentScrollY;
        });

        // ==================== MOBILE MENU TOGGLE ====================
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // ==================== CAROUSEL SCROLL FUNCTION ====================
        function scrollCarousel(carouselId, scrollAmount) {
            const carousel = document.getElementById(carouselId);
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        // ==================== ADD TO LIST BUTTONS ====================
        document.querySelectorAll('.add-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                button.textContent = button.textContent === '+' ? '✓' : '+';
                setTimeout(() => {
                    button.textContent = '+';
                }, 2000);
            });
        });

        // ==================== PLAY BUTTONS ====================
        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                alert('Playing content...');
            });
        });