// Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('primary-navigation');
const chatSupport = document.getElementById('chat-support');
const chatHeader = document.getElementById('chat-header');
const chatBox = document.getElementById('chat-box');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('active');
});

chatHeader.addEventListener('click', () => {
  const isOpen = chatBox.style.display === 'flex';
  chatBox.style.display = isOpen ? 'none' : 'flex';
});

// Search highlighting
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;
  removeHighlights();
  const elements = document.querySelectorAll('main *:not(script):not(style)');
  elements.forEach((element) => {
    if (element.children.length === 0 && element.textContent.toLowerCase().includes(query)) {
      const html = element.innerHTML.replace(new RegExp(`(${query})`, 'gi'), '<span class="highlight">$1</span>');
      element.innerHTML = html;
    }
  });
});

function removeHighlights() {
  document.querySelectorAll('.highlight').forEach((el) => {
    el.outerHTML = el.innerHTML;
  });
}

// Hero slider and typewriter animation
const slides = document.querySelectorAll('.slide');
const typedTextElements = document.querySelectorAll('.typed-text');
const cursorElements = document.querySelectorAll('.cursor');
const typewriterTexts = [
  'Web Development',
  'UI/UX Design',
  'SEO Optimization',
  'E-Commerce Solutions',
  'Social Media Marketing',
  'Cloud Hosting',
  'Mobile App Development',
  'Digital Marketing',
  'Custom Solutions',
  'Business Automation'
];
let textIndex = 0;
let charIndex = 0;
let currentSlideIndex = 0;

function typeText() {
  const currentTypedText = typedTextElements[currentSlideIndex];
  const currentText = typewriterTexts[textIndex % typewriterTexts.length];
  if (!currentTypedText) return;

  if (charIndex < currentText.length) {
    currentTypedText.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 90);
  } else {
    setTimeout(() => eraseText(currentTypedText), 1800);
  }
}

function eraseText(element) {
  if (charIndex > 0) {
    element.textContent = element.textContent.slice(0, charIndex - 1);
    charIndex--;
    setTimeout(() => eraseText(element), 45);
  } else {
    textIndex++;
    setTimeout(typeText, 600);
  }
}

function changeSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  charIndex = 0;
  typedTextElements.forEach((element) => (element.textContent = ''));
  setTimeout(typeText, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  typeText();
  setInterval(changeSlide, 7000);
  if (window.innerWidth <= 768) {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  
  // Set current year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  if (!email) return;

  const subject = encodeURIComponent('New Newsletter Subscription');
  const body = encodeURIComponent(`Hello,\n\nYou have a new newsletter subscriber:\nEmail: ${email}\n\nBest regards,\n4Force Developers`);
  window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('success-message').classList.remove('hidden');
  document.getElementById('email').value = '';
});
