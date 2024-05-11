function toggleMenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector (".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
})
sr.reveal('.logo', {delay:200, origin: 'left'});
sr.reveal('.nav-links', {delay:350, origin: 'top'});
sr.reveal('.hamburger-icon', {delay:350, origin: 'right'});
sr.reveal('.menu-links', {delay:350, origin: 'right'});
sr.reveal('.profilepic', {delay:450, origin: 'left'});
sr.reveal('.section_text', {delay:450, origin: 'right'});

sr.reveal('.abt-pic', {delay:450, origin: 'left'});
sr.reveal('.one', {delay:450, origin: 'right'});
sr.reveal('.two', {delay:480, origin: 'right'});
sr.reveal('.text-container', {delay:540, origin: 'right'});

sr.reveal('.ppp1', {delay:450, origin: 'left'});
sr.reveal('.ppp2', {delay:450, origin: 'right'});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}