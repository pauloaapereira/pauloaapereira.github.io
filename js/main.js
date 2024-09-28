// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle Mobile Menu
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
  
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    });
  });
  