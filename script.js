window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.volume = 0.35; 
    }

    const btnComenzar = document.querySelector("button[onclick*='amor']");
    if (btnComenzar) {
        btnComenzar.addEventListener("click", () => {
            if (musica) {
                musica.play().catch(() => console.log("El navegador bloqueó la música."));
            }
            
            // Fuerza a que la tarjeta aparezca y se empiece a escribir
            setTimeout(() => {
                const tarjeta1 = document.getElementById("tarjeta1");
                if(tarjeta1) {
                    tarjeta1.classList.add("show");
                    escribir("mensaje1", "Desde que llegaste a mi vida entendí que el verdadero amor existe. Gracias por hacer mis días más felices, por regalarme tu sonrisa, tu paciencia, tu cariño y por enseñarme que siempre vale la pena luchar por aquello que se ama.");
                }
            }, 600);
        });
    }
});

function escribir(id, texto, velocidad = 40) {
    const elemento = document.getElementById(id);
    if (!elemento) return;

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); 

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
    threshold: 0.1 
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

function crearCorazon() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const corazones = ["❤", "💕", "💖", "💗", "💘", "💝"];
    
    heart.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}
setInterval(crearCorazon, 450);

const boton = document.getElementById("inicio");
if (boton) {
    boton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.querySelectorAll(".foto-item img").forEach(img => {
    img.addEventListener("mousemove", (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        img.style.transform = `perspective(900px) rotateY(${(x - rect.width / 2) / 30}deg) rotateX(${-(y - rect.height / 2) / 30}deg) scale(1.06)`;
    });
    
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
