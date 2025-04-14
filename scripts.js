document.addEventListener('DOMContentLoaded', function() {
    // Hover effects for image galleries
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1) rotate(5deg)';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Hover effects for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundImage = 'url("images/konark-wheel.png")';
            button.style.backgroundSize = 'cover';
            button.style.color = '#FFFFFF';
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundImage = 'none';
            button.style.color = '#FFFFFF';
        });
    });

    // Hover effects for navigation menu items
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.textContent = 'ଓଡ଼ିଆ';
            link.style.fontFamily = 'Noto Serif, serif';
        });
        link.addEventListener('mouseout', function() {
            link.textContent = link.getAttribute('href').substring(1);
            link.style.fontFamily = 'Arial, sans-serif';
        });
    });

    // Parallax scrolling for cultural imagery
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            let offset = window.pageYOffset;
            element.style.backgroundPositionY = offset * 0.7 + 'px';
        });
    });

    // Animated transitions for smooth section transitions
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';
    });

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
                section.style.opacity = 1;
            } else {
                section.style.opacity = 0;
            }
        });
    });

    // Form validation with real-time feedback
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestsSelect = document.getElementById('interests');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        if (nameInput.value.trim() === '') {
            valid = false;
            nameInput.style.borderColor = 'red';
        } else {
            nameInput.style.borderColor = 'green';
        }

        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            valid = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'green';
        }

        if (interestsSelect.value === '') {
            valid = false;
            interestsSelect.style.borderColor = 'red';
        } else {
            interestsSelect.style.borderColor = 'green';
        }

        if (valid) {
            // Confetti animation on successful form submission
            const confettiContainer = document.createElement('div');
            confettiContainer.classList.add('confetti-container');
            document.body.appendChild(confettiContainer);

            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confettiContainer.appendChild(confetti);
            }

            setTimeout(() => {
                confettiContainer.remove();
            }, 5000);
        }
    });
});
