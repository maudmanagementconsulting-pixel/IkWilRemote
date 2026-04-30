/**
 * Ik Wil Remote - Gedeelde navigatie & footer
 * Wijzig hier één keer, geldig op alle pagina's.
 */

const NAV_HTML = `
<nav class="nav">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="assets/logo.png" alt="Ik Wil Remote" class="nav-logo-img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <span class="nav-logo-text" style="display:none;">Ik Wil Remote</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu open/sluiten">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="aanbod.html">Aanbod</a></li>
      <li><a href="reviews.html">Reviews</a></li>
      <li><a href="over-ons.html">Over ons</a></li>
      <li><a href="index.html#faq">FAQ</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="gratis.html">Download</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="https://link.systembridge.nl/widget/booking/1vrdX9j4lpqEJyB3E1Is" target="_blank" rel="noopener" class="btn btn-primary nav-cta">Ik wil remote werken</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="index.html" style="text-decoration:none;">
          <div class="footer-brand-logo">Ik Wil Remote</div>
        </a>
        <p>Wij helpen ambitieuze mensen om hun droomleven op te bouwen, locatie-onafhankelijk, op hun eigen voorwaarden.</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/ikwilremote/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com/@ikwilremote" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h5>Pagina's</h5>
        <ul class="footer-links">
          <li><a href="over-ons.html">Over ons</a></li>
          <li><a href="aanbod.html">Aanbod</a></li>
          <li><a href="reviews.html">Reviews</a></li>
        </ul>
      </div>

      <div>
        <h5>Ontdek</h5>
        <ul class="footer-links">
          <li><a href="blog.html">Blog</a></li>
          <li><a href="gratis.html">Download</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
        </ul>
      </div>

      <div>
        <h5>Extra aanbod</h5>
        <ul class="footer-links">
          <li><a href="remote-kompas.html">Remote Kompas</a></li>
          <li><a href="remote-scale-lab.html">Remote Scale Lab</a></li>
        </ul>
      </div>

      <div>
        <h5>Contact</h5>
        <ul class="footer-links">
          <li><a href="contact.html">Contactpagina</a></li>
          <li><a href="mailto:info@ikwilremote.nl">info@ikwilremote.nl</a></li>
          <li><a href="https://nl.trustpilot.com/review/ikwilremote.nl" target="_blank" rel="noopener">Trustpilot reviews</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <p>&copy; 2026 Ik Wil Remote. Alle rechten voorbehouden.</p>
        <p class="footer-kvk">KVK: 77220684 &nbsp;&middot;&nbsp; BTW: NL003165355B02</p>
      </div>
      <div style="text-align:center;font-size:.78rem;color:rgba(255,255,255,.45);">
        Realisatie: <a href="https://www.maudmanagementconsulting.nl/" target="_blank" rel="noopener" style="color:rgba(255,255,255,.55);text-decoration:underline;text-underline-offset:3px;">MMC</a>
      </div>
      <div class="footer-bottom-links">
        <a href="#">Privacybeleid</a>
        <a href="#">Algemene voorwaarden</a>
      </div>
    </div>
  </div>
</footer>`;

// Injecteer nav en footer
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Nav toggle (hamburger)
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  // Nav actieve pagina markeren
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const rawHref = a.getAttribute('href');
    if (rawHref.includes('#')) return; // anchor links zijn geen eigen pagina
    if (rawHref && rawHref !== '' && rawHref === currentPage) {
      a.classList.add('active');
    }
  });

  // Sticky nav schaduw
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(66,78,134,.15)'
      : '0 1px 4px rgba(66,78,134,.08)';
  });

});
