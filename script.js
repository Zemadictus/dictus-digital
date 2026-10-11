/* =================================
   DICTUS DIGITAL
   Main JavaScript
================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Dictus Digital!");

  // 1. Navigation click feedback
  const navigationLinks = document.querySelectorAll(
    '.navbar nav a, .nav-cta, .hero-buttons a'
  );

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Navigation clicked:", link.textContent.trim());
    });
  });

  // 2. Service card reveal animation
  const serviceCards = document.querySelectorAll(".service-card");

  console.log("Service cards found:", serviceCards.length);

  if ("IntersectionObserver" in window && serviceCards.length > 0) {
    const serviceObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    serviceCards.forEach(function (card) {
      card.classList.add("reveal");
      serviceObserver.observe(card);
    });

    // Safety fallback: reveal every card after 2.5 seconds
    window.setTimeout(function () {
      serviceCards.forEach(function (card) {
        card.classList.add("visible");
      });
    }, 2500);
  } else {
    // Show cards immediately if IntersectionObserver is unavailable
    serviceCards.forEach(function (card) {
      card.classList.remove("reveal");
      card.classList.add("visible");
    });
  }

  // 3. Start a Project button
  const startProjectButton = document.querySelector(
    '.hero-buttons a[href="#contact"]'
  );

  if (startProjectButton) {
    startProjectButton.addEventListener("click", function () {
      console.log("A visitor clicked Start a Project.");
    });
  }

  // 4. Automatically update the copyright year
  const currentYearElement = document.getElementById("current-year");

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // 5. Log available services
  const services = [
    "Website Development",
    "Business Landing Pages",
    "Digital Presence Setup"
  ];

  services.forEach(function (service, index) {
    console.log((index + 1) + ". " + service);
  });

  // 6. Check WhatsApp link configuration
  const whatsappLink = document.querySelector(
    '.contact a[href*="wa.me"]'
  );

  if (whatsappLink) {
    const whatsappNumber = new URL(whatsappLink.href).pathname
      .replace(/\//g, "")
      .replace(/\D/g, "");

    if (!whatsappNumber || whatsappNumber === "YOURNUMBER") {
      console.warn("Please configure your WhatsApp contact link.");
    } else {
      console.log("WhatsApp contact link detected.");
    }
  }

  // 7. Confirm JavaScript is ready
  console.log("Dictus Digital JavaScript loaded successfully.");
});