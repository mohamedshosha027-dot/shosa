const searchForm = document.querySelector("#property-search-form");
const contactForm =
  document.querySelector('form[aria-label="Contact Form"]') ||
  document.querySelector(".new-form-box form");
const navbar = document.querySelector(".navbar");
const scrollTopButton = document.getElementById("scrollTopBtn");

document.addEventListener("DOMContentLoaded", () => {
  normalizeDisplayText();
  setupBootstrapTooltips();
  setupSmoothScrolling();
  setupFavorites();
  setupLazyImages();
  setupSearchForm();
  setupContactForm();
  setupScrollToTop();
  syncNavState();
});

function normalizeDisplayText() {
  document.querySelectorAll(".content-two span").forEach((span) => {
    const trimmed = span.textContent.trim();
    if (trimmed && trimmed.length <= 3 && !/[a-z0-9]/i.test(trimmed)) {
      span.innerHTML = "&bull;";
    }
  });

  const liveChatPrompt = document.querySelector(".spaaa");
  if (liveChatPrompt) {
    liveChatPrompt.textContent = "Start chatting now";
  }

  const footerText = document.querySelectorAll(".footer-section .footer-text");
  const copyrightLine = footerText[0];
  const policyLine = footerText[footerText.length - 1];

  if (copyrightLine) {
    copyrightLine.innerHTML = "&copy; 2026 EliteHomes. All rights reserved.";
  }

  if (policyLine && policyLine.querySelectorAll("a").length === 3) {
    policyLine.innerHTML = `
      <a href="#" class="footer-link">Privacy Policy</a> &bull;
      <a href="#" class="footer-link">Terms of Service</a> &bull;
      <a href="#" class="footer-link">Cookie Policy</a>
    `;
  }
}

function setupSearchForm() {
  if (!searchForm) return;

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = document.getElementById("location")?.value.trim() || "";
    const propertyType = document.getElementById("property-type")?.value || "";
    const priceRange = document.getElementById("price-range")?.value || "";

    if (!location) {
      showAlert("Please enter a location to start your search.", "warning");
      document.getElementById("location")?.focus();
      return;
    }

    showAlert(
      `Searching ${propertyType === "All Types" ? "all property types" : propertyType.toLowerCase()} in ${location}${priceRange && priceRange !== "Any Price" ? ` within ${priceRange}` : ""}.`,
      "success"
    );
  });
}

function setupContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("contact-first-name")?.value.trim() || "";
    const lastName = document.getElementById("contact-last-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!firstName) {
      showAlert("Please enter your first name.", "warning");
      document.getElementById("contact-first-name")?.focus();
      return;
    }

    if (!lastName) {
      showAlert("Please enter your last name.", "warning");
      document.getElementById("contact-last-name")?.focus();
      return;
    }

    if (!email) {
      showAlert("Please enter your email address.", "warning");
      document.getElementById("contact-email")?.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showAlert("Please enter a valid email address.", "warning");
      document.getElementById("contact-email")?.focus();
      return;
    }

    if (!message) {
      showAlert("Please share a few details about what you need.", "warning");
      document.getElementById("contact-message")?.focus();
      return;
    }

    showAlert(`Thanks, ${firstName}. Your message is on its way to the team.`, "success");
    contactForm.reset();
  });
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const navHeight = navbar?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}

function setupFavorites() {
  document.querySelectorAll(".favorite").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const icon = button.querySelector("i");
      if (!icon) return;

      const isActive = icon.classList.contains("fa-solid");
      icon.classList.toggle("fa-solid", !isActive);
      icon.classList.toggle("fa-regular", isActive);
      button.classList.toggle("is-active", !isActive);

      showAlert(
        isActive ? "Property removed from saved homes." : "Property added to saved homes.",
        isActive ? "info" : "success"
      );
    });
  });
}

function setupLazyImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.loading = "lazy";
  });

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      instance.unobserve(entry.target);
    });
  });

  images.forEach((img) => {
    img.classList.add("fade-image");
    observer.observe(img);
  });
}

function setupBootstrapTooltips() {
  if (typeof bootstrap === "undefined") return;

  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
    new bootstrap.Tooltip(element);
  });
}

function setupScrollToTop() {
  if (!scrollTopButton) return;

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", syncNavState);
}

function syncNavState() {
  const isScrolled = window.scrollY > 24;
  navbar?.classList.toggle("is-scrolled", isScrolled);

  if (scrollTopButton) {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 320);
  }
}

function showAlert(message, type = "info") {
  const host = getAlertHost();
  const alert = document.createElement("div");
  const alertClass =
    type === "success"
      ? "alert-success"
      : type === "warning"
        ? "alert-warning"
        : "alert-info";

  alert.className = `alert ${alertClass} alert-dismissible fade show shadow-sm`;
  alert.role = "alert";
  alert.innerHTML = `
    <div class="d-flex align-items-start justify-content-between gap-3">
      <span>${message}</span>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  host.prepend(alert);
  window.setTimeout(() => {
    alert.remove();
  }, 4500);
}

function getAlertHost() {
  let host = document.querySelector(".alert-stack");

  if (!host) {
    host = document.createElement("div");
    host.className = "alert-stack";
    document.body.appendChild(host);
  }

  return host;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
