document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, header');
  const contactForm = document.getElementById('contactForm');

  /* ==========================================================================
     PROJECTS DATA STORAGE
     ========================================================================== */
  const projectsData = {
    pizzaazura: {
      title: 'PizzaAzura',
      tag: 'MSME Digitalization',
      desc: 'Ini merupakan website pemesanan pizza dengan integrasi WhatsApp sebagai komunikasi dengan UMKM. Tujuan website ini murni membantu UMKM dalam efisiensi waktu dan tenaga. Kami juga membuat halaman admin untuk memantau pesanan pizza, memantau selling (penjualan), memantau stok bahan, dan merekap pengeluaran serta pemasukan pada UMKM. Proyek ini kami buat dengan kombinasi frontend dan backend yaitu PHP murni dan Node.js dengan integrasi database SQL, lalu kami deploy di pizzaazura.my.id untuk diberikan pada UMKM.',
      tech: ['PHP Murni', 'Node.js', 'SQL Database', 'WhatsApp API', 'Admin Dashboard', 'Financial Recording'],
      images: [
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.37.34.jpeg',
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.37.25.jpeg',
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.37.47.jpeg',
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.39.17.jpeg',
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.39.58.jpeg',
        'Asset%20Pizza%20azura/WhatsApp%20Image%202026-06-25%20at%2022.40.07.jpeg'
      ],
      codeLink: 'https://github.com/Fyban3/Portohellnaa',
      demoLink: 'https://pizzaazura.my.id'
    },
    animehype: {
      title: 'Anime Hype',
      tag: 'Mobile App / Flutter',
      desc: 'Yaitu Aplikasi mobile untuk melihat list-list anime terbaru, anime yang akan datang, dan jadwal anime lainnya. Juga tempat mencari informasi tentang anime, manga, dan character pada anime ataupun manga. Aplikasi ini saya deploy dengan bahasa pemrograman Flutter dengan berbasis API dari opensource API.',
      tech: ['Flutter', 'Dart', 'REST API', 'JSON Parsing', 'State Management'],
      images: [
        'Asset%20HypeNime/WhatsApp%20Image%202026-06-25%20at%2021.45.36%20(1).jpeg',
        'Asset%20HypeNime/WhatsApp%20Image%202026-06-25%20at%2021.45.35.jpeg',
        'Asset%20HypeNime/WhatsApp%20Image%202026-06-25%20at%2021.45.35%20(1).jpeg',
        'Asset%20HypeNime/WhatsApp%20Image%202026-06-25%20at%2021.45.36.jpeg',
        'Asset%20HypeNime/WhatsApp%20Image%202026-06-25%20at%2021.45.36%20(2).jpeg'
      ],
      codeLink: 'https://github.com/Fyban3/Portohellnaa',
      demoLink: '#'
    },
    jejakbintan: {
      title: 'Jejak Pulau Bintan web',
      tag: 'Web / Sistem Informasi',
      desc: 'Ini merupakan aplikasi web pertama saya yang menggunakan PHP atau hanya mengintegrasikan HTML, CSS, dan JavaScript pada proyek ini. Website ini membantu untuk wisatawan mendapatkan informasi tentang tempat wisata yang berada di Pulau Bintan, melihat rating-rating tempat wisata tersebut, dan melihat lokasi tempat wisata tersebut dari Google Maps.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP Native', 'Google Maps API'],
      images: [
        'Asset%20Jejak%20Pulau%20Bintan%20Web/WhatsApp%20Image%202026-06-25%20at%2021.50.24.jpeg',
        'Asset%20Jejak%20Pulau%20Bintan%20Web/WhatsApp%20Image%202026-06-25%20at%2021.50.42.jpeg',
        'Asset%20Jejak%20Pulau%20Bintan%20Web/WhatsApp%20Image%202026-06-25%20at%2021.51.03.jpeg',
        'Asset%20Jejak%20Pulau%20Bintan%20Web/WhatsApp%20Image%202026-06-25%20at%2021.51.33.jpeg',
        'Asset%20Jejak%20Pulau%20Bintan%20Web/WhatsApp%20Image%202026-06-25%20at%2021.51.55.jpeg'
      ],
      codeLink: 'https://github.com/Fyban3/Portohellnaa',
      demoLink: 'https://shdyt13.github.io/Sistem-Pariwisata-Lokal/index.html'
    },
    xplorepinang: {
      title: 'XplorePinang Web',
      tag: 'Web Blog / Tourism',
      desc: 'Merupakan website blog untuk melihat tempat wisata kuliner, wisata religi, wisata alam, dan lain-lain yang berada di Pulau Bintan terkhusus di Tanjungpinang. Website ini terkhususkan untuk para wisatawan asing yang ingin mengunjungi Tanjungpinang. Website ini terintegrasikan PHP murni dan kami deploy dengan Vercel. Website ini lumayan memakan banyak waktu untuk riset wisata lokal, entah itu wisata alam, religi, atau wisata kuliner.',
      tech: ['PHP Murni', 'Vercel Deploy', 'Blog System', 'Field Research', 'Multi-category Attractions'],
      images: [
        'Asset%20XplorePinang/WhatsApp%20Image%202026-06-25%20at%2022.11.59.jpeg',
        'Asset%20XplorePinang/WhatsApp%20Image%202026-06-25%20at%2022.13.24.jpeg',
        'Asset%20XplorePinang/WhatsApp%20Image%202026-06-25%20at%2022.15.59.jpeg',
        'Asset%20XplorePinang/WhatsApp%20Image%202026-06-25%20at%2022.16.54.jpeg',
        'Asset%20XplorePinang/WhatsApp%20Image%202026-06-25%20at%2022.17.04.jpeg'
      ],
      codeLink: 'https://github.com/Fyban3/Portohellnaa',
      demoLink: '#'
    }
  };

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
      const sectionTop = section.offsetTop - 150; // Offset for navbar
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
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
        alert('Semua kolom form harus diisi.');
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = 'Mengirim...';

      setTimeout(() => {
        contactForm.reset();
        submitButton.innerHTML = 'Terkirim! <i data-lucide="check"></i>';
        submitButton.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)'; 
        if (window.lucide) window.lucide.createIcons();
        
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.innerHTML = originalBtnText;
          submitButton.style.background = ''; 
          if (window.lucide) window.lucide.createIcons();
        }, 3000);

        alert(`Terima kasih ${name}, pesan Anda berhasil dikirim secara simulasi!`);
      }, 1500);
    });
  }

  /* ==========================================================================
     INTERACTIVE MODAL & CAROUSEL LOGIC
     ========================================================================== */
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const projectCards = document.querySelectorAll('.project-card');
  
  const carouselTrack = document.getElementById('modalCarouselTrack');
  const carouselDotsContainer = document.getElementById('modalCarouselDots');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  
  const modalTag = document.getElementById('modalProjectTag');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalSkills = document.getElementById('modalProjectSkills');
  const modalCode = document.getElementById('modalCodeLink');
  const modalDemo = document.getElementById('modalDemoLink');

  let currentSlideIndex = 0;
  let totalSlides = 0;

  // Open Modal function
  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    // Inject data
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML = data.desc;
    modalCode.href = data.codeLink;
    
    // Hide or show demo link based on fallback
    if (data.demoLink === '#') {
      modalDemo.style.display = 'none';
    } else {
      modalDemo.style.display = 'inline-flex';
      modalDemo.href = data.demoLink;
    }

    // Render tech stack tags
    modalSkills.innerHTML = '';
    data.tech.forEach(techName => {
      const tag = document.createElement('span');
      tag.textContent = techName;
      modalSkills.appendChild(tag);
    });

    // Render carousel images
    carouselTrack.innerHTML = '';
    carouselDotsContainer.innerHTML = '';
    
    data.images.forEach((imgUrl, index) => {
      // Create slide
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = `${data.title} Screenshot ${index + 1}`;
      slide.appendChild(img);
      carouselTrack.appendChild(slide);

      // Create dot
      const dot = document.createElement('div');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToSlide(index));
      carouselDotsContainer.appendChild(dot);
    });

    currentSlideIndex = 0;
    totalSlides = data.images.length;
    updateCarousel();

    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // Close Modal function
  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Unlock background scroll
  };

  // Carousel slider operations
  const updateCarousel = () => {
    carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const goToSlide = (index) => {
    currentSlideIndex = index;
    updateCarousel();
  };

  const nextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
  };

  const prevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  };

  // Attach card event listeners
  projectCards.forEach(card => {
    const viewButtons = card.querySelectorAll('.view-details-btn');
    const projectId = card.getAttribute('data-project');
    
    viewButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop card bubbling
        openModal(projectId);
      });
    });
  });

  // Attach carousel listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Close triggers
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard accessibility for modal
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('open')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    }
  });

  /* ==========================================================================
     EVENT LISTENERS & INITS
     ========================================================================== */
  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleScrollspy();
  });

  handleNavbarScroll();
  handleScrollspy();
});
