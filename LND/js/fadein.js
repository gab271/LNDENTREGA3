function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (position < viewportHeight - 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}


window.addEventListener('scroll', revealOnScroll, { passive: true });


revealOnScroll();