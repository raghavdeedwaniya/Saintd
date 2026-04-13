/* shared.js — inject navbar + footer into every page */

const LOGO_IMG = 'assets/logo.jpg';
const BUILDING_IMG = 'assets/building.jpg';

function getNavHTML(activePage) {
  const pages = [
    { href: './',      label: 'Hame'      },
    { href: './about',      label: 'About'     },
    { href: './academics',  label: 'Academics' },
    { href: './results',    label: 'Results'   },
    { href: './hostel',     label: 'Hostel'    },
    { href: './gallery',    label: 'Gallery'   },
    { href: './contact',    label: 'Contact'   },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.href===activePage?'active':''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  return `
<nav>
  <a class="nav-logo" href="index.html">
    <img src="${LOGO_IMG}" alt="Logo" onerror="this.style.display='none'">
    <div class="nav-logo-text">
      <strong>Saint "D" Public School</strong>
      <small>Mandal, Rajasthan</small>
    </div>
  </a>
  <ul class="nav-links">
    ${links}
    <li><a href="contact.html" class="nav-cta">🎓 Admissions</a></li>
  </ul>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  ${mobileLinks}
  <a href="contact.html" style="color:var(--gold);font-weight:900;">🎓 Apply for Admission</a>
</div>`;
}

function getFooterHTML() {
  return `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="${LOGO_IMG}" alt="Logo" onerror="this.style.display='none'">
      <h3>Saint "D" Public School</h3>
      <p>Shaping futures with discipline, dedication & distinction. RBSE affiliated school in Mandal, Rajasthan offering Play Group to Class 10.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="academics.html">Academics</a></li>
        <li><a href="results.html">Results 2026</a></li>
        <li><a href="hostel.html">Hostel</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Academics</h4>
      <ul>
        <li><a href="academics.html">Play Group – KG</a></li>
        <li><a href="academics.html">Class 1 – 5</a></li>
        <li><a href="academics.html">Class 6 – 8</a></li>
        <li><a href="academics.html">Class 9 – 10</a></li>
        <li><a href="academics.html">Weekly Test Series</a></li>
        <li><a href="contact.html">Admissions</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact-item"><span>📞</span><a href="tel:7665267777">7665267777</a></div>
      <div class="footer-contact-item"><span>✉️</span><a href="mailto:saintdschool1@gmail.com">saintdschool1@gmail.com</a></div>
      <div class="footer-contact-item"><span>📍</span><span>Near Govt. Hospital, Dhovani Nadi Road, Mandal, Rajasthan</span></div>
      <div class="footer-contact-item"><span>🕐</span><span>Mon–Sat: 8 AM – 5 PM</span></div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 <span>Saint "D" Public School</span>, Mandal. All Rights Reserved.</span>
    <span>RBSE Affiliated | 100% Results | Excellence in Education</span>
  </div>
</footer>`;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.getElementById('navbar').innerHTML = getNavHTML(page);
  document.getElementById('footer').innerHTML = getFooterHTML();
});
