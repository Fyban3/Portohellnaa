document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, header');
  const contactForm = document.getElementById('contactForm');

  /* ==========================================================================
     STICKY NAVBAR ON SCROLL
     ========================================================================== */
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  /* ==========================================================================
     ACTIVE LINK HIGHLIGHTER (SCROLLSPY)
     ========================================================================== */
  const handleScrollspy = () => {
    let currentSectionId = 'home';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Offset for sticky nav height
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  /* ==========================================================================
     CONTACT FORM HANDLER
     ========================================================================== */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Basic local validation
      if (!name || !email || !message) {
        alert('Semua kolom form harus diisi.');
        return;
      }

      // Visual loading feedback
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = 'Mengirim...';

      // Simulate sending API request (1.5 seconds delay)
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success state
        submitButton.innerHTML = 'Terkirim! <i data-lucide="check"></i>';
        submitButton.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)'; // Emerald gradient
        if (window.lucide) {
          window.lucide.createIcons();
        }
        
        // Restore button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.innerHTML = originalBtnText;
          submitButton.style.background = ''; // Restore CSS variable gradient
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }, 3000);

        alert(`Halo ${name}, pesan Anda berhasil dikirim secara simulasi!`);
      }, 1500);
    });
  }

  /* ==========================================================================
     EVENT LISTENERS & INITS
     ========================================================================== */
  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleScrollspy();
  });

  // Run initial state check
  handleNavbarScroll();
  handleScrollspy();
});
