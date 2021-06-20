// background color change
function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txtChng=document.getElementsByClassName("textChange")
    if (color == "#000000") {
        for (let elm of txtChng) {
            elm.style.color = "#ffffff";
        }
    } else {
        for (let elm of txtChng) {
            elm.style.color = "#000000";
        }
    }
}
// sticky navbar
window.addEventListener('scroll', function() {
    let navbar = document.getElementById("stickyNavbar");
    if (window.pageYOffset >= 183) {
      navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
   }
});