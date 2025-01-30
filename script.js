// Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


const slides = document.querySelectorAll(".slide");
const typedTextElements = document.querySelectorAll(".typed-text");
const cursorElements = document.querySelectorAll(".cursor");
const typewriterTexts = [
"Web Development",
"UI/UX Design",
"SEO Optimization",
"E-Commerce Solutions",
"Social Media Marketing",
"Cloud Hosting",
"Mobile App Development",
"Digital Marketing",
"Custom Solutions",
"Business Automation"
];
let textIndex = 0;
let charIndex = 0;
let currentSlideIndex = 0;
function typeText() {
const currentTypedText = typedTextElements[currentSlideIndex];
const currentCursor = cursorElements[currentSlideIndex];
const currentText = typewriterTexts[textIndex % typewriterTexts.length];
if (charIndex < currentText.length) {
currentTypedText.textContent += currentText.charAt(charIndex);
charIndex++;
setTimeout(typeText, 100);
} else {
setTimeout(() => eraseText(currentTypedText), 2000);
}
}
function eraseText(element) {
if (charIndex > 0) {
element.textContent = element.textContent.slice(0, charIndex - 1);
charIndex--;
setTimeout(() => eraseText(element), 50);
} else {
textIndex++;
setTimeout(typeText, 1000);
}
}
function changeSlide() {
currentSlideIndex = (currentSlideIndex + 1) % slides.length;
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
setTimeout(() => {
charIndex = 0;
typeText();
}, 500);
}
document.addEventListener("DOMContentLoaded", () => {
typeText();
setInterval(changeSlide, 7000); // Slide changes every 7 seconds
});


document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the email entered by the user
    const email = document.getElementById("email").value;
    // Prepare the email content
    const subject = encodeURIComponent("New Newsletter Subscription");
    const body = encodeURIComponent(`Hello, \n\nYou have a new newsletter subscriber:
    \nEmail: ${email}\n\nBest regards, \nYour Website`);
    // Open email client (Gmail) with pre-filled details
    window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
    // Show success message
    document.getElementById("success-message").classList.remove("hidden");
    // Clear the input field after submission
    document.getElementById("email").value = "";
    });


    
