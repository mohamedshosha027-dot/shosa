// ===== FORM VALIDATION =====

// Validate search form
const searchForm = document.querySelector('form[aria-label="Property Search Form"]');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location').value.trim();
    const propertyType = document.getElementById('property-type').value;
    const priceRange = document.getElementById('price-range').value;
    
    // Validation
    if (!location) {
      showAlert('Please enter a location', 'warning');
      document.getElementById('location').focus();
      return false;
    }
    
    if (propertyType === 'All Types') {
      showAlert('Please select a property type', 'warning');
      document.getElementById('property-type').focus();
      return false;
    }
    
    // If all validations pass
    showAlert('Search submitted successfully! Redirecting to results...', 'success');
    // Simulate search (in real app, this would submit to backend)
    setTimeout(() => {
      console.log('Form submitted with:', {
        location,
        propertyType,
        priceRange
      });
    }, 1000);
  });
}

// Validate contact form
const contactForm = document.querySelector('form[aria-label="Contact Form"]') || 
                    document.querySelector('.new-form-box form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[placeholder="Name"]')?.value?.trim() || '';
    const email = document.querySelector('input[placeholder="Email Address"]')?.value?.trim() || '';
    const message = document.querySelector('textarea[placeholder="Your Message"]')?.value?.trim() || '';
    
    // Validation
    if (!name) {
      showAlert('Please enter your name', 'warning');
      return false;
    }
    
    if (!email) {
      showAlert('Please enter your email address', 'warning');
      return false;
    }
    
    if (!isValidEmail(email)) {
      showAlert('Please enter a valid email address', 'warning');
      return false;
    }
    
    if (!message) {
      showAlert('Please enter a message', 'warning');
      return false;
    }
    
    // If all validations pass
    showAlert('Thank you! Your message has been sent successfully.', 'success');
    contactForm.reset();
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show alert function
function showAlert(message, type = 'info') {
  const alertClass = type === 'success' ? 'alert-success' : 
                     type === 'warning' ? 'alert-warning' : 'alert-info';
  
  const alertHTML = `
    <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  
  const container = document.querySelector('.container') || document.body;
  const alertDiv = document.createElement('div');
  alertDiv.innerHTML = alertHTML;
  container.insertBefore(alertDiv.firstElementChild, container.firstChild);
}

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default for dropdown toggles
    if (!this.classList.contains('dropdown-toggle')) {
      const target = document.querySelector(href);
      if (target) {
        // Adjust for fixed navbar
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        
        // Smooth scroll with custom offset for fixed header
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
});

// ===== FAVORITE BUTTON FUNCTIONALITY =====
document.querySelectorAll('.favorite').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const icon = this.querySelector('i');
    
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      this.style.backgroundColor = '#ffe6e6';
      showAlert('Property added to favorites!', 'success');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      this.style.backgroundColor = 'white';
      showAlert('Property removed from favorites!', 'info');
    }
  });
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '1';
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
    imageObserver.observe(img);
  });
}

// ===== INITIALIZE TOOLTIPS AND POPOVERS =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap tooltips if available
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopButton = document.getElementById('scrollTopBtn');
if (scrollTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
