// ===== Música (Se activa al darle "Comenzar") =====
window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.volume = 0.35; // Volumen suave
    }

    // Buscar el botón comenzar para que encienda la música
    const btnComenzar = document.querySelector("button[onclick*='amor']");
    if (btnComenzar && musica) {
        btnComenzar.addEventListener("click", () => {
            musica.play().catch(() => console.log("El navegador bloqueó el autoplay."));
        });
    }
});

// ===== Escribir texto letra por letra =====
function escribir(id, texto, velocidad = 40) {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    // Esto evita que el texto se vuelva a escribir desde cero si ella sube y baja la pantalla
    if (elemento.dataset.escrito === "true") return;
    elemento.dataset.escrito = "true";

    elemento.innerHTML = "";
    let i = 0;

    function escribirLetra() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribirLetra, velocidad);
        }
    }
    escribirLetra();
}

// ===== Animación al hacer scroll y lanzar textos =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Hace aparecer la sección suavemente

            // Disparar la escritura SOLO cuando la tarjeta se asoma en la pantalla
            if (entry.target.id === "tarjeta1") {
                escribir("mensaje1", "Desde que llegaste a mi vida entendí que el verdadero amor existe. Gracias por hacer mis días más felices, por regalarme tu sonrisa, tu paciencia, tu cariño y por enseñarme que siempre vale la pena luchar por aquello que se ama.");
            } 
            else if (entry.target.id === "tarjeta2") {
                escribir("mensaje2", "Estoy profundamente orgulloso de la mujer que eres. Cada meta que alcanzas demuestra la fuerza que llevas dentro. Nunca dudes de ti, porque yo veo todos los días una mujer inteligente, hermosa, valiente y capaz de conquistar cualquier sueño.");
            } 
            else if (entry.target.id === "tarjeta3") {
                escribir("mensaje3", "Cuando sientas que ya no puedes más, quiero que recuerdes esto: respira, levanta la cabeza y sigue adelante. Tú eres mucho más fuerte de lo que imaginas. Confía en ti como yo confío en ti. Siempre habrá una salida y yo estaré aquí para apoyarte en cada paso.");
            }
        }
    });
}, {
    threshold: 0.4 // Se activa cuando casi la mitad de la tarjeta es visible
});

// Observar todos los elementos con la clase "fade" para que aparezcan suavemente
document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

// ===== Corazones flotando =====
function crearCorazon() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const corazones = ["❤", "💕", "💖", "💗", "💘", "💝"];
    
    heart.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
    heart.style.left = Math.
