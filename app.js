/* ============================================================
   ROUSHAN FIKRI EL AMNY AZRA — Portfolio Script
   app.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. SCROLL FADE-IN ─── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  fadeEls.forEach(el => fadeObserver.observe(el));


  /* ─── 2. ACTIVE NAV HIGHLIGHT ON SCROLL ─── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });


  /* ─── 3. HAMBURGER MENU (MOBILE) ─── */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-links');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');

      // Animate hamburger → X
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });
  }


  /* ─── 4. SCROLL-TO-TOP BUTTON ─── */
  const scrollBtn = document.getElementById('scrollTopBtn');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ─── 5. SMOOTH SCROLL for all anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ─── 6. TYPING EFFECT on Hero Name ─── */
  const typingEl = document.getElementById('typingText');
  if (typingEl) {
    const text    = typingEl.dataset.text || typingEl.textContent;
    typingEl.textContent = '';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        typingEl.textContent += text[i++];
        setTimeout(type, 60);
      }
    };
    // slight delay before starting
    setTimeout(type, 500);
  }


  /* ─── 7. HUD CARD PARTICLE TRAIL (hover micro-effect) ─── */
  const hudCards = document.querySelectorAll('.hud-card');

  hudCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });


  /* ─── 8. YEAR COUNTER ANIMATION ─── */
  const statNums = document.querySelectorAll('.stat-box .num[data-count]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.count, 10);
      let   cur = 0;
      const step = Math.ceil(end / 40);

      const tick = () => {
        cur = Math.min(cur + step, end);
        el.textContent = cur + (el.dataset.suffix || '');
        if (cur < end) requestAnimationFrame(tick);
      };
      tick();
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => countObserver.observe(el));


  /* ─── 9. TABLE ROW HIGHLIGHT on click ─── */
  document.querySelectorAll('.data-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      document.querySelectorAll('.data-table tbody tr.selected')
        .forEach(r => r.classList.remove('selected'));
      row.classList.toggle('selected');
    });

    // add cursor style
    row.style.cursor = 'pointer';
  });

  // inject selected-row highlight style dynamically
  const selStyle = document.createElement('style');
  selStyle.textContent = `
    .data-table tbody tr.selected td {
      background: rgba(0, 212, 255, 0.07);
      border-color: rgba(0, 212, 255, 0.25);
    }
  `;
  document.head.appendChild(selStyle);


  /* ─── 10. CONSOLE EASTER EGG ─── */
  console.log('%c ROUSHAN FIKRI EL AMNY AZRA ', 'background:#00D4FF;color:#080C18;font-family:monospace;font-size:14px;font-weight:bold;padding:6px 12px;');
  console.log('%c Teknologi Rekayasa Otomasi — Universitas Diponegoro ', 'color:#A8FF3E;font-family:monospace;font-size:11px;');
  console.log('%c NIM: 40040323650048 ', 'color:#6B82A8;font-family:monospace;font-size:11px;');

});
