const menuIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const githubBtn = document.querySelector(".visit-btn");

githubBtn.addEventListener("click", () => {
    window.open("https://github.com/Sukaina-Virani", "_blank");
});

const githubIcon = document.querySelector(".socials .fa-github");
const linkedinIcon = document.querySelector(".socials .fa-linkedin");

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/Sukaina-Virani", "_blank");
});

linkedinIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/sukaina-virani-253988383", "_blank");
});

const submitBtn = document.querySelector(".contact .btn");
const emailInput = document.querySelector(".input-box input");

// Typed.js animation
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Graphic Designer', 'Photographer', 'Video Editor'],
    typeSpeed: 60,
    backSpeed: 40, // speed to delete text
    loop: true     // keeps looping the animation
});

submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter an email address.");
    } else {
        alert("Email sent successfully!");
        emailInput.value = "";
    }
});
