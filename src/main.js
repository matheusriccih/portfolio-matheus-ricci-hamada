import { profileData as data } from './data/profile.js?v=20261111-2';

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[char]);
const isValidUrl = (value) => { try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol); } catch { return false; } };
const setText = (selector, value) => { const target = $(selector); if (target) target.textContent = value; };

function renderPhotoSlots() {
  document.querySelectorAll('[data-photo-slot]').forEach((slot) => {
    if (isValidUrl(data.person.photo) || data.person.photo.startsWith('./')) {
      const image = document.createElement('img'); image.src = data.person.photo; image.alt = `Fotografia profissional de ${data.person.name}`; slot.append(image); slot.classList.add('has-image');
    } else slot.innerHTML = `<span class="fallback-initials" aria-label="Iniciais de ${escapeHtml(data.person.name)}">${escapeHtml(data.person.initials)}</span>`;
  });
}
function renderBrandLogos() {
  if (!data.person.logo) return;
  document.querySelectorAll('[data-brand-logo]').forEach((logo) => {
    logo.src = data.person.logo;
  });
}
function renderExperience(item, index, current) {
  const fields = [item.company, item.period].filter(Boolean).map(escapeHtml).join(' · ');
  const editable = current && (!item.company || !item.period || !item.responsibilities.length || !item.results.length);
  return `<article class="timeline-item reveal"><div class="timeline-index">0${index + 1}</div><div class="timeline-text"><h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.description)}</p>${editable ? '<p class="pending-note">Empresa, período, responsabilidades e resultados serão adicionados após confirmação.</p>' : ''}</div><div class="timeline-meta">${fields || 'Informações em atualização'}</div></article>`;
}
function renderProjects() {
  $('#projects-grid').innerHTML = data.projects.map((project, index) => {
    const links = [isValidUrl(project.url) && `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener">Ver projeto ↗</a>`, isValidUrl(project.repository) && `<a href="${escapeHtml(project.repository)}" target="_blank" rel="noopener">GitHub ↗</a>`].filter(Boolean).join('');
    const media = isValidUrl(project.image)
      ? `<div class="project-media"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt || `Prévia de ${project.name}`)}" loading="lazy" /></div>`
      : `<div class="project-media"><span>Visual do projeto disponível no link</span></div>`;
    return `<article class="project-card reveal">${media}<span class="project-number">0${index + 1} · ${escapeHtml(project.type)}</span><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)}</p><div class="stack">${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>${links ? `<div class="project-links">${links}</div>` : ''}</article>`;
  }).join('');
}
function renderContacts() {
  const list = [
    ['LinkedIn', data.contacts.linkedin, (value) => value],
    ['E-mail', data.contacts.email, (value) => `mailto:${value}`],
    ['WhatsApp', data.contacts.whatsapp, (value) => value],
  ].filter(([, value]) => value && (isValidUrl(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)));
  const actions = $('#contact-actions'); const note = $('#contact-note');
  if (!list.length) { actions.classList.add('is-hidden'); note.classList.add('is-hidden'); return; }
  actions.innerHTML = list.map(([label, value, toUrl]) => `<a href="${escapeHtml(toUrl(value))}" ${label === 'E-mail' ? '' : 'target="_blank" rel="noopener"'}>${label} ↗</a>`).join('');
  note.classList.add('is-hidden');
}
function populatePage() {
  setText('#hero-eyebrow', data.hero.eyebrow); setText('#person-short-name', data.person.name); setText('#person-role', data.person.role); setText('#hero-statement', data.hero.statement); setText('#hero-description', data.hero.description); setText('#person-location', data.person.location);
  setText('#about-title', data.about.title); $('#about-paragraphs').innerHTML = data.about.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join(''); $('#trait-list').innerHTML = data.about.traits.map((trait) => `<span>${escapeHtml(trait)}</span>`).join('');
  setText('#experience-title', data.experience.title); $('#timeline').innerHTML = [data.experience.current, data.experience.previous].map((item, index) => renderExperience(item, index, index === 0)).join('');
  setText('#degree-name', data.education.degree); setText('#degree-institution', data.education.institution); $('#learning-list').innerHTML = data.education.learning.map((item) => `<span>${escapeHtml(item)}</span>`).join('');
  $('#skills-grid').innerHTML = data.skills.map((group) => `<article class="skill-card reveal"><h3>${escapeHtml(group.title)}</h3><ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('');
  renderProjects(); setText('#venture-title', data.venture.title); setText('#venture-text', data.venture.text); const venture = $('#venture-link'); if (isValidUrl(data.venture.url)) venture.href = data.venture.url; else venture.classList.add('is-hidden'); $('#goal-list').innerHTML = data.goals.map((goal) => `<span>${escapeHtml(goal)}</span>`).join('');
  setText('#footer-role', data.person.role); setText('#footer-location', data.person.location); setText('#year', new Date().getFullYear());
  const resumeLink = $('#resume-link'); if (isValidUrl(data.person.resumeUrl) || data.person.resumeUrl.startsWith('./')) { resumeLink.href = data.person.resumeUrl; resumeLink.classList.remove('is-hidden'); }
  $('#person-schema').textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: data.person.name, jobTitle: data.person.role, address: { '@type': 'PostalAddress', addressLocality: 'Londrina', addressRegion: 'PR', addressCountry: 'BR' }, alumniOf: data.education.institution });
  renderPhotoSlots(); renderContacts();
  renderBrandLogos();
}
populatePage();

const menu = $('.menu-toggle'); const links = $('#nav-links'); menu.addEventListener('click', () => { const isOpen = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!isOpen)); links.classList.toggle('open', !isOpen); }); links.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); links.classList.remove('open'); });
const backToTop = $('.back-to-top'); window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 600), { passive: true }); backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 }); document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
