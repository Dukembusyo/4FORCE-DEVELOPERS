// Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");
    const textArray = [
    "Web Development",
    "UI/UX Design",
    "Domain Hosting",
    "Digital Marketing",
    "Maintenance & Support",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function type() {
    if (charIndex < textArray[textIndex].length && !isDeleting) {
    typedText.textContent += textArray[textIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, 50);
    } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
    textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(type, 500);
    }
    }
    type();
    });


    // Typewriter Effect
document.querySelectorAll('.typewriter h2').forEach(element => {
    const text = element.textContent;
    element.textContent = "";
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };

    type();
});

document.querySelectorAll('.slider-container').forEach(container => {
    const slides = container.querySelectorAll('img');
    let currentIndex = 0;
    const showSlide = () => {
    slides.forEach((slide, index) => {
    slide.style.opacity = '0'; // Hide all slides
    slide.style.animation = 'none'; // Reset animation
    slide.style.transform = 'translateX(0)'; // Reset transform
    });
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[(currentIndex + 1) % slides.length];
    // Assign animations for the two slides
    currentSlide.style.animation = 'slideLeft 1s ease-in-out forwards';
    nextSlide.style.animation = 'slideRight 1s ease-in-out forwards';
    currentSlide.style.opacity = '1'; // Show the current slide
    nextSlide.style.opacity = '1'; // Show the next slide
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    };
    setInterval(showSlide, 3000);
    showSlide(); // Show the first slide
    });



    // List of services with their IDs
const services = [
    { name: "web development", id: "web-development" },
    { name: "ui/ux design", id: "ui-ux" },
    { name: "mobile app development", id: "mobile-app" },
    { name: "digital marketing", id: "digital-marketing" },
    { name: "hosting & domain management", id: "hosting" },
    { name: "training & workshops", id: "training" },
    { name: "identity & branding", id: "branding" },
    { name: "mentainance & support", id: "mentainance" },
    { name: "E-commerce solutions", id: "e-commerce" },
    { name: "cloud solutions", id: "Cloud" },
    { name: "Creative consulting", id: "Creative-consulting" },
    { name: "it Support", id: "it-Support" },
    { name: "content writing", id: "content" },
    { name: "Creative consulting", id: "Creative-consulting" }
    ];
    // Navigate to section on Enter key press
    function navigateOnEnter(event) {
    if (event.key === "Enter") {
    const query = document.getElementById("search-bar").value.toLowerCase().trim();
    // Find the matching service
    const service = services.find(s =>
    s.name.toLowerCase().includes(query) || s.name[0] === query[0]
    );
    if (service) {
    // Scroll to the section
    document.getElementById(service.id).scrollIntoView({ behavior: "smooth" });
    } else {
    alert("No matching service found. Please try again!");
    }
    }
    }

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
    

    