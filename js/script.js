/* --- Navbar Responsive Animation --- */
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector("#myNavMenu");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

/* --- NavBar Function Scroll --- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "90px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* --- Typing Effect --- */
var typingEffect = new Typed(".typedText", {
  strings: ["Júnior", "FrontEnd", "BackEnd", "Designer 3D"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* --- Scroll Reveal --- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home
sr.reveal("#nome-id", {});
sr.reveal("#dev-id", { delay: 100 });
sr.reveal("#texto-id", { delay: 200 });
sr.reveal("#contrate-id", { delay: 200 });
sr.reveal("#social-id", { delay: 200 });
sr.reveal("#imagem-id", { delay: 300 });

// PROJECT
sr.reveal("#projects-box", { interval: 200 });
sr.reveal("#projects-card_1", { interval: 200 });
// HEADINGS
sr.reveal(".projects-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".intro-about", { delay: 100 });
srLeft.reveal(".context", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });