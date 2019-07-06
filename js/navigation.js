/* 
Hide header on scroll Down, 
Show header on scroll Up */

setTimeout

var prevScrollpos = window.pageYOffset;
var header = document.getElementById("myHeader");

function stickyHeader() {

    if (window.isNavigationOpen) {
        header.classList.add("sticky");
        //prevScrollpos = currentScrollPos;
    } 
    else {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
        header.classList.add("sticky");
        header.style.top = "0px";
        } 
        else {
        header.classList.remove("sticky");
        header.style.top = "-50px";
        }

        prevScrollpos = currentScrollPos;
    }

}

window.onscroll = function() {stickyHeader()};






/* toggle mobile navigation */

window.isNavigationOpen = false;

function openNavigation () {
    window.isNavigationOpen = true;
    document.body.classList.add("menu-is-open");
}

function closeNavigation () {
    window.isNavigationOpen = false;
    document.body.classList.remove("menu-is-open");
}

function toggleNavigation () {
    if (window.isNavigationOpen) {
        closeNavigation()
    } else {
        openNavigation()
    }
}

function showContent (event) {
    event.preventDefault();
    closeNavigation();
    window.location.href = event.target.href;
}

document.getElementById("nav-menu-toggle").addEventListener('click', toggleNavigation)

var mobileNavigationLinks = document.getElementsByClassName('navigation-link');

for (var i = 0; i < mobileNavigationLinks.length; i++) {
    mobileNavigationLinks[i].addEventListener('click', showContent);
}
