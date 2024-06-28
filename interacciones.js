document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('animate'); // Asume que 'animate' es la clase que activa la animación
    });

    icon.addEventListener('mouseout', () => {
        icon.classList.remove('animate');
    });
});

// Selecciona todos los botones con la clase 'button'
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID objetivo del atributo href
        document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta la sección
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var sectionTop = $('#section-move').offset().top;
        var sectionBottom = sectionTop + $('#section-move').outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (viewportBottom >= sectionTop && viewportTop <= sectionBottom) {
            $('.text-container').addClass('slideFadeInFromLeft');
        } else {
            $('.text-container').removeClass('slideFadeInFromLeft');
        }
    });
});