document.querySelectorAll('.floating-image').forEach(img => {
    img.addEventListener('mousemove', (event) => {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(img, {
            x: x * 1.2,
            y: y * 1.2,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".floating-image");
    const heroText = document.querySelector(".hero-text");

    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            heroText.classList.add("transparent-text");
        });

        image.addEventListener("mouseleave", () => {
            heroText.classList.remove("transparent-text");
        });
    });
});

document.querySelectorAll('.image-container').forEach(container => {
    const text = container.querySelector('.hover-text');

    container.addEventListener('mouseenter', () => {
        gsap.to(text, { opacity: 1, duration: 0.5, ease: "power2.out" });
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(text, { opacity: 0, duration: 0.5, ease: "power2.out" });
    });
});


