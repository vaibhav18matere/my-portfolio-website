// background color change
function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txtChng = document.getElementById("txt1")
    console.log(txtChng)
    if (color == "#000000") {
        txtChng.style.color = "#ffffff";
    } else {
        txtChng.style.color = "#000000";
    }
}
// sticky navbar
window.addEventListener('scroll', function () {
    let navbar = document.getElementById("stickyNavbar");
    if (window.pageYOffset >= 183) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
});