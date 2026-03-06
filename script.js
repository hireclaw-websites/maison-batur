const sections = [...document.querySelectorAll('section[id]')];
const menuLinks = [...document.querySelectorAll('.service-menu a[data-link]')];
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

reveals.forEach((el) => revealObserver.observe(el));

const linkObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    menuLinks.forEach((link) => link.classList.toggle('active', link.dataset.link === entry.target.id));
  });
}, { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 });

sections.forEach((section) => linkObserver.observe(section));

document.documentElement.style.setProperty('--scroll', window.scrollY.toFixed(1));

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.scrollY.toFixed(1));
}, { passive: true });

window.addEventListener('pointermove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  document.documentElement.style.setProperty('--mx', `${x}%`);
}, { passive: true });
