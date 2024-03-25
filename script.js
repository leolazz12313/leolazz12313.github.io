function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

const sr = ScrollReveal ({
         distance: '65px',
         duration: 2600,
         delay: 450,
         reset: false
});

sr.reveal('.left', {delay:200, origin:'top'});
sr.reveal('.right', {delay:450, origin:'top'});
sr.reveal('.logo', {delay:550, origin:'left'});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }