"use strict";

const navbar = document.createElement("header");
navbar.setAttribute("id", "navbar");
navbar.innerHTML = `
        <nav class="navbar-container container">
        <a href="/" class="home-link">
        <div class="logo-holder">
            <img class="navbar-logo" src="../imgs/logo.png">
        </div>
        The Daily Smirk
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle">
        <ul class="navbar-links">
            <li class="navbar-item"><a class="navbar-link" href="/about">About</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/blog">People</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/careers">Resources</a></li>
        </ul>
        </div>
        </nav>`;

const body = document.body;
body.insertBefore(navbar, body.firstChild);


// for making hamburger button work
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = navbar.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

    const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };

    navbarToggle.addEventListener("click", toggleNavbarVisibility);

    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);
})