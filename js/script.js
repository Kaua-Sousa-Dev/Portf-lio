/* --- NavBar Function Scroll --- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header-id");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
  } else {
    navHeader.style.boxShadow = "none";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Junior", "FrontEnd", "BackEnd", "Designer 3D"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/* -- HOME -- */
sr.reveal(".title-card", {});
sr.reveal(".dev-card", { delay: 100 });
sr.reveal(".content-card", { delay: 200 });
sr.reveal(".btn-content", { delay: 200 });
sr.reveal("#social-media-js", { delay: 200 });
sr.reveal(".sect-img", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".card-projects", { interval: 200 });
/* -- HEADINGS -- */
sr.reveal(".title-about", {});
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".content-about", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

window.addEventListener("scroll", scrollActive);