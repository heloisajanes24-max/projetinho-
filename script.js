/*SCROLL SUAVE (âncoras)*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/*ANIMAÇÃO AO ROLAR*/
const elementos = document.querySelectorAll(".card, .etapa, .sobre-card");

function aparecerScroll() {
    const windowHeight = window.innerHeight;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
        }
    });
}

window.addEventListener("scroll", aparecerScroll);
window.addEventListener("load", aparecerScroll);

/*CLIQUE NAS FRUTAS FLUTUANTES*/
const frutas = document.querySelectorAll(".fruta");

frutas.forEach(fruta => {
    fruta.addEventListener("click", () => {

        fruta.style.transform = "scale(1.5)";
        fruta.style.transition = "0.3s";

        setTimeout(() => {
            fruta.style.transform = "scale(1)";
        }, 300);

    });
});