/**
 * FENGOO MAIN APPLET CONTROLLER (js/main.js)
 * Global modals, toast notifications, FAQ accordions, and currency formatting helpers.
 */

(function() {
  // Global Toast
  window.showToast = function(msg, duration = 3000) {
    let toast = document.querySelector('.toast-msg, #toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-msg';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = 'inline-flex';
    setTimeout(() => {
      toast.style.display = 'none';
    }, duration);
  };

  // Global Modals
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
  if (typeof globalThis !== 'undefined') {
    globalThis.openModal = openModal;
    globalThis.closeModal = closeModal;
  }

  // Close modals when clicking backdrop
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Currency Formatter (INR)
  window.formatINR = function(num) {
    if (isNaN(num) || num === null || num === undefined) return '₹0';
    return '₹' + Number(num).toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  // FAQ Accordion Handler
  function initFAQ() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        if (item) {
          const isOpen = item.classList.contains('open');
          // Close others in same list if desired or toggle
          item.classList.toggle('open', !isOpen);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initFAQ);
})();
