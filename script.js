const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('primary-navigation');
const header = document.querySelector('header');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('full-name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const subject = encodeURIComponent('Project Inquiry - 4Force Developers');
      window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
      document.getElementById('success-message').classList.remove('hidden');
      contactForm.reset();
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks) {
    navLinks.classList.remove('active');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
});
