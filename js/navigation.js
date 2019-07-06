/* Hide Header on Scroll Down, show Header on Scroll Up */

setTimeout

var prevScrollpos = window.pageYOffset;
var header = document.getElementById("myHeader");

/*
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  prevScrollpos = currentScrollPos;
}
*/

function stickyHeader() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    prevScrollpos = currentScrollPos;
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
