const languageButton = document.querySelector('.language');
const arabic = {
  title: 'الويب يستحق أن يُصمَّم بعناية.',
  lead: 'أصمم وأطوّر تجارب رقمية فاخرة على Webflow، حيث يلتقي التصميم بالحركة والدقة التقنية.',
  work: 'أعمال مختارة', services: 'الخدمات', about: 'نبذة', contact: 'تواصل', start: 'ابدأ مشروعاً'
};
let isArabic = false;
languageButton?.addEventListener('click', () => {
  isArabic = !isArabic;
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  languageButton.textContent = isArabic ? 'EN' : 'AR';
  languageButton.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to Arabic');
  const title = document.querySelector('#hero-title');
  const lead = document.querySelector('.hero-lead');
  if (title) title.innerHTML = isArabic ? `${arabic.title}<br><em>بتفاصيلها.</em>` : 'The web should<br><em>feel</em> considered.';
  if (lead) lead.textContent = isArabic ? arabic.lead : 'I build premium Webflow experiences where design, motion, and technical precision work as one.';
  document.querySelectorAll('.desktop-nav a').forEach((link, index) => { link.textContent = isArabic ? [arabic.work, arabic.services, arabic.about, arabic.contact][index] : ['Work', 'Services', 'About', 'Contact'][index]; });
  document.querySelector('.header-cta').childNodes[0].textContent = isArabic ? `${arabic.start} ` : 'Start a project ';
});
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
document.querySelectorAll('.project, .capability-list > div, .process-grid > div').forEach((element) => { element.style.opacity = '0'; element.style.transform = 'translateY(20px)'; element.style.transition = 'opacity .7s ease, transform .7s ease'; observer.observe(element); });
const style = document.createElement('style');
style.textContent = '.is-visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
