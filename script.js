// script.js

document.addEventListener('DOMContentLoaded', () => {
  // NAVIGATION TOGGLE
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // EMAIL FORM SUBMISSION (only on contact page)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    emailjs.init("okosunanthony@gmail.com");

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      emailjs.sendForm("service_igduds7", "template_kwljo7m", contactForm)
        .then(() => {
          alert("Message sent successfully!");
          contactForm.reset();
        }, (error) => {
          alert("Failed to send message. Please try again.");
          console.error('EmailJS error:', error);
        });
    });
  }
});
