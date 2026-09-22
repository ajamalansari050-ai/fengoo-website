/**
 * FENGOO NAVIGATION & DRAWER CONTROLLER (js/navigation.js)
 */

(function() {
  function initNav() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn, #mobile-menu-btn');
    const drawer = document.querySelector('.mobile-drawer, #mobile-drawer');
    const drawerCloseBtn = document.querySelector('.drawer-close-btn, #drawer-close-btn');

    if (mobileMenuBtn && drawer) {
      mobileMenuBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (drawerCloseBtn && drawer) {
      drawerCloseBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    if (drawer) {
      drawer.addEventListener('click', (e) => {
        if (e.target === drawer) {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // Highlight current page in nav links
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '/' && href !== '#' && (currentPath.endsWith(href) || currentPath.includes(href))) {
        link.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initNav);
})();
