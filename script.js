/* =========================================
   Animación de entrada (Scroll Observer)
   ========================================= */
.fade {
    opacity: 0;
    transform: translateY(40px); /* Empieza un poco más abajo */
    transition: opacity 1s ease-out, transform 1s ease-out;
}

/* La clase que inyecta JavaScript cuando haces scroll */
.fade.show {
    opacity: 1;
    transform: translateY(0); /* Vuelve a su posición original */
}

/* =========================================
   Corazones Flotantes (Desde JS)
   ========================================= */
.heart {
    position: fixed;
    bottom: -50px; /* Nacen desde abajo de la pantalla */
    color: #ff4d6d;
    pointer-events: none; /* Para que los corazones no estorben al hacer click en botones */
    z-index: 5;
    animation: floatUp linear forwards;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh) rotate(360deg); /* Flotan hacia arriba y giran */
        opacity: 0; /* Desaparecen poco a poco */
    }
}
