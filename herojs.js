"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
    navToggle.classList.toggle("rotate");
})

document.querySelectorAll('.image-container').forEach(image => {
    image.addEventListener('mouseenter', () => {
        document.querySelectorAll('.image-container img').forEach(img => {
            if (img !== image.querySelector('img')) {
                img.style.filter = 'grayscale(100%) brightness(0)';
                img.style.border = '2px solid white';
            }
        });
    });

    image.addEventListener('mouseleave', () => {
        document.querySelectorAll('.image-container img').forEach(img => {
            img.style.filter = 'none';
            img.style.border = 'none';
        });
    });

    image.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth - 0.5;
        let y = e.clientY / window.innerHeight - 0.5;

        image.style.transform = `translate(${x * 30}px, ${y * 30}px) scale(1.2)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0) scale(1)';
    });
});
