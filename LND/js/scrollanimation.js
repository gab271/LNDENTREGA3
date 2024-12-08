function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para agregar la clase 'visible' a los elementos en vista
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.scroll-animation');
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    // Escuchar el evento de desplazamiento
    window.addEventListener('scroll', handleScrollAnimation);
    // Ejecutar la función al cargar la página
    window.addEventListener('load', handleScrollAnimation);