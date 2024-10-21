let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Scroll functionality for highlighting active navbar link
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove('active');
        // Corrected the selector to target the correct link
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// Toggle the menu icon and the navbar visibility on smaller screens
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.classList.add('hide');
  } else {
    // Scrolling up
    header.classList.remove('hide');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
// Additional logic for responsive behavior (if needed)
function handleResponsiveBehavior() {
  // ... (implement logic based on screen size) ...
}

window.addEventListener('resize', handleResponsiveBehavior);

