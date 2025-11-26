
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x'); // changes bars to X
  navbar.classList.toggle('active'); // show/hide navbar
};


