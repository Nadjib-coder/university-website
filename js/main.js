/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/


/*btn to show and hide menu*/
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-202px";
}