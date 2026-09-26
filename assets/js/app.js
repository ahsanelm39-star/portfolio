/**
 * Core Application Orchestrator
 * ====================================================================
 * Coordinates global configuration, mobile drawer, form validation,
 * active link highlighting, and dynamic year.
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initGlobalConfig();
    initMobileMenu();
    initActiveNav();
    initDynamicYear();
    initContactForm();
});

/**
 * Injects values from CONFIG into DOM elements
 */
// function initGlobalConfig() {
//   const cfg = window.PORTFOLIO_CONFIG;
//   if (!cfg) return;

//   // Contact links
//   document.querySelectorAll('.cfg-email-link').forEach(el => {
//     el.setAttribute('href', `mailto:${cfg.contact.email}`);
//     if (el.classList.contains('cfg-text')) el.textContent = cfg.contact.email;
//   });

//   document.querySelectorAll('.cfg-whatsapp-link').forEach(el => {
//     el.setAttribute('href', cfg.contact.whatsappUrl);
//     if (el.classList.contains('cfg-text')) el.textContent = cfg.contact.whatsappDisplay;
//   });

//   document.querySelectorAll('.cfg-linkedin-link').forEach(el => {
//     el.setAttribute('href', cfg.contact.linkedinUrl);
//   });
// }

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');

    if (!toggleBtn || !drawer) return;

    function openDrawer() {
        drawer.classList.remove('translate-x-full', '-translate-x-full');
        if (backdrop) backdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        const isAr = document.documentElement.lang === 'ar';
        if (isAr) {
            drawer.classList.add('-translate-x-full');
        } else {
            drawer.classList.add('translate-x-full');
        }
        if (backdrop) backdrop.classList.add('hidden');
        document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Close when clicking a link inside the drawer
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

/**
 * Active Navigation Link Highlighting
 */
function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link-item');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Check if current page matches href
        const isHome = (currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === 'index.html' || href === './' || href === '/');
        const isMatch = isHome || (href !== 'index.html' && currentPath.includes(href));

        if (isMatch) {
            link.classList.add('text-sky-400', 'font-semibold');
            link.classList.remove('text-slate-300');
        } else {
            link.classList.remove('text-sky-400', 'font-semibold');
            link.classList.add('text-slate-300');
        }
    });
}

/**
 * Dynamic Year for Copyright
 */
function initDynamicYear() {
    const yearSpans = document.querySelectorAll('.current-year');
    const year = new Date().getFullYear();
    yearSpans.forEach(el => el.textContent = year);
}

/**
 * Client-Side Form Validation & Demonstration Feedback
 */
function initContactForm() {
    const form = document.getElementById('agency-intake-form');
    const modal = document.getElementById('form-feedback-modal');
    const closeModalBtn = document.getElementById('modal-close-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('[name="name"]') ? .value.trim();
        const agency = form.querySelector('[name="agency"]') ? .value.trim();
        const email = form.querySelector('[name="email"]') ? .value.trim();
        const message = form.querySelector('[name="message"]') ? .value.trim();

        if (!name || !agency || !email || !message) {
            alert(document.documentElement.lang === 'ar' ?
                "يرجى تعبئة كافة الحقول الأساسية (الاسم، الوكالة، البريد، وتفاصيل المشروع)." :
                "Please fill in all required fields (Name, Agency, Work Email, and Brief).");
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(document.documentElement.lang === 'ar' ?
                "يرجى كتابة بريد إلكتروني صحيح للعمل." :
                "Please enter a valid work email address.");
            return;
        }

        // Show friendly modal
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        form.reset();
    });

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
}