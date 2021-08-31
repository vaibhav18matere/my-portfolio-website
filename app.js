// sticky navbar
window.addEventListener('scroll', function () {
    let navbar = document.getElementById("stickyNavbar");
    if (window.pageYOffset >= 183) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
});