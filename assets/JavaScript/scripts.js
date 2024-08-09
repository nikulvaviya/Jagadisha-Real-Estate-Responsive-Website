"use strict";

/*

  ~ Navbar Toggle in Mobile

*/

const /* {NodeElement} */ $navbar = document.querySelector("[data-navbar]");

const /* {NodeElement} */ $navToggler =
    document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/*

  ~ Header Scroll State

*/

const /* {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/*
  ~ Add to Favourite Button Toggle
*/

const /* { NodeList } */ $toggleBtns =
    document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach(($toggleBtns) => {
  $toggleBtns.addEventListener("click", () => {
    $toggleBtns.classList.toggle("active");
  });
});
