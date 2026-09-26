/**
 * Motion & Interactive Animations Controller
 * ====================================================================
 * Lightweight, performant interactions:
 * - Scroll reveals via IntersectionObserver
 * - Interactive Agency Fulfillment Pipeline simulator
 * - FAQ accordion controller
 * - Work filter manager
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initPipelineSimulator();
    initFaqAccordions();
    initProjectFilters();
});

/**
 * Scroll Reveal via IntersectionObserver
 */
function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal-init');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Interactive Agency Fulfillment Pipeline Simulator
 */
function initPipelineSimulator() {
    const steps = document.querySelectorAll('.pipeline-step-item');
    const previewContainer = document.getElementById('pipeline-preview-stage');
    const progressBar = document.getElementById('pipeline-progress-bar');
    if (!steps.length || !previewContainer) return;

    let currentStep = 1;
    let autoPlayInterval = null;
    const totalSteps = steps.length;

    const stageData = {
        1: {
            tag: "STEP 01 — CLIENT BRIEF RECEIVED",
            tagAr: "الخطوة 01 — استلام متطلبات العميل",
            title: "Raw Agency Intake Document",
            titleAr: "ملخص ومتطلبات العميل الأولية",
            desc: "Client logos, 30+ services list, WhatsApp branding guidelines, and preferred competitor references received from your account manager.",
            descAr: "شعار العميل، قائمة الخدمات والمنتجات، ألوان الهوية، ونماذج المواقع المفضلة المستلمة من مدير حسابات وكالتكم.",
            graphic: `
        <div class="bg-[#111622] p-5 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
          <div class="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2">
            <span>INTAKE_DOC_V1.pdf</span>
            <span class="text-sky-400 font-bold">STATUS: READY FOR FULFILLMENT</span>
          </div>
          <div class="space-y-1.5 text-slate-300">
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Client: Shuwaikh Exotic Auto Care Center</div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Market: Kuwait (Bilingual Arabic/English Required)</div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Primary Goal: High-ticket PPF Leads via WhatsApp</div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-sky-400"></span> Platform: Agency GoHighLevel Sub-Account</div>
          </div>
          <div class="p-3 bg-sky-950/40 border border-sky-500/20 rounded-lg text-sky-300 text-[11px]">
            ⚡ Agency Note: "Ahmed, handle the complete build. We need a preview link by Tuesday for the client call."
          </div>
        </div>
      `
        },
        2: {
            tag: "STEP 02 — ARCHITECTURE & STRUCTURE",
            tagAr: "الخطوة 02 — هندسة وتوزيع الأقسام",
            title: "Conversion-Focused Information Wireframe",
            titleAr: "هيكلية أقسام مصممة لمضاعفة التحويل",
            desc: "Translating raw bullet points into an intuitive user journey: hero positioning, vehicle type tabs, social proof cues, and bilingual RTL layout logic.",
            descAr: "تحويل الملاحظات إلى رحلة تصفح متكاملة: ترويسة رئيسية مقنعة، تصنيف خدمات السيارات، شارات الثقة، وتنسيق دقيق لواجهة الـ RTL.",
            graphic: `
        <div class="bg-[#111622] p-5 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
          <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div class="p-2 bg-slate-800/80 rounded border border-white/10 text-slate-300">[1] Hero + Value Prop</div>
            <div class="p-2 bg-slate-800/80 rounded border border-white/10 text-slate-300">[2] WhatsApp Estimator</div>
            <div class="p-2 bg-slate-800/80 rounded border border-white/10 text-slate-300">[3] Service Pillars</div>
          </div>
          <div class="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div class="p-2 bg-slate-800/80 rounded border border-white/10 text-slate-300">[4] Arabic/English Parity</div>
            <div class="p-2 bg-sky-950/60 rounded border border-sky-400/40 text-sky-300">[5] Mobile Sticky CTA Bar</div>
          </div>
          <div class="flex items-center justify-between text-slate-400 text-[11px] pt-1">
            <span>Desktop: 12-Col Responsive Grid</span>
            <span class="text-emerald-400">Mobile UX: Sub-1.5s Load Plan</span>
          </div>
        </div>
      `
        },
        3: {
            tag: "STEP 03 — GHL & CUSTOM CSS BUILD",
            tagAr: "الخطوة 03 — البناء البرمجي وكود CSS",
            title: "Clean Implementation & Bespoke Styling",
            titleAr: "بناء المنظومة وحقن أكواد CSS المخصصة",
            desc: "Executing the design inside GoHighLevel with custom CSS glass cards, smooth transitions, mobile responsive overrides, and custom form styling.",
            descAr: "تنفيذ الموقع داخل حساب العميل في GHL مع حقن كود CSS مخصص لمنح الموقع طابع التصميم الخاص الفاخر وضبط كامل لشاشات الهواتف.",
            graphic: `
        <div class="bg-[#0b0e17] p-4 rounded-xl border border-sky-500/30 space-y-2 font-mono text-[11px]">
          <div class="text-slate-400 flex justify-between border-b border-white/5 pb-1">
            <span>ghl-custom-styles.css</span>
            <span class="text-sky-400">INJECTED &amp; ACTIVE</span>
          </div>
          <div class="text-sky-300 leading-relaxed overflow-x-auto">
            <span class="text-purple-400">.exotic-service-card</span> {<br>
            &nbsp;&nbsp;background: <span class="text-emerald-400">rgba(18, 24, 38, 0.75)</span>;<br>
            &nbsp;&nbsp;backdrop-filter: <span class="text-emerald-400">blur(14px)</span>;<br>
            &nbsp;&nbsp;border: <span class="text-emerald-400">1px solid rgba(56, 189, 248, 0.25)</span>;<br>
            &nbsp;&nbsp;transition: <span class="text-emerald-400">transform 0.25s ease</span>;<br>
            }<br>
            <span class="text-purple-400">[dir="rtl"] .whatsapp-direct-btn</span> {<br>
            &nbsp;&nbsp;flex-direction: <span class="text-emerald-400">row-reverse</span>;<br>
            }
          </div>
        </div>
      `
        },
        4: {
            tag: "STEP 04 — AGENCY REVIEW & REFINEMENT",
            tagAr: "الخطوة 04 — مراجعة وتدقيق الوكالة",
            title: "Private Staging Link Sent to Your Team",
            titleAr: "رابط معاينة خاص جاهز لملاحظات فريقكم",
            desc: "Your account manager tests the interactive link, verifies mobile view, and requests any minor copy tweaks before presenting it to the client.",
            descAr: "يختبر مدير الحسابات الرابط التفاعلي على هاتفه وحاسوبه، ويتأكد من تطابق الشروط ويطلب أي تعديلات سريعة قبل اجتماع العميل النهائي.",
            graphic: `
        <div class="bg-[#111622] p-4 rounded-xl border border-white/10 space-y-2.5 font-mono text-xs">
          <div class="flex items-center justify-between text-slate-300 border-b border-white/5 pb-1.5">
            <span class="text-emerald-400 font-bold">✓ QA CHECKLIST COMPLETED</span>
            <span class="text-slate-400">100% PASS</span>
          </div>
          <div class="space-y-1 text-slate-300 text-[11px]">
            <div>[✓] Arabic (RTL) typography &amp; layout checked</div>
            <div>[✓] WhatsApp form triggers tested &amp; verified</div>
            <div>[✓] Mobile navigation &amp; responsive breakpoints verified</div>
            <div>[✓] Agency white-label standards: No freelancer credits</div>
          </div>
        </div>
      `
        },
        5: {
            tag: "STEP 05 — WHITE-LABEL CLIENT DELIVERY",
            tagAr: "الخطوة 05 — التسليم النهائي باسم وكالتك",
            title: "Your Agency Takes the Credit & Invoices Client",
            titleAr: "وكالتك تقدم العمل النهائي وتفخر به أمام عميلها",
            desc: "You deliver the finished website under your agency's name and brand. Your client relationship is strengthened, and your internal team stays fresh for the next campaign.",
            descAr: "تسلم وكالتك الموقع النهائي للعميل تحت اسمكم الكامل. تتعزز ثقة العميل في قدراتكم، ويبقى فريقكم الداخلي مرتاحاً لإدارة الحملات والمبيعات.",
            graphic: `
        <div class="bg-gradient-to-br from-emerald-950/60 to-slate-900 p-5 rounded-xl border border-emerald-500/40 text-center space-y-3">
          <div class="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">✓</div>
          <div class="font-bold text-slate-100 text-sm">READY FOR CLIENT PRESENTATION</div>
          <p class="text-xs text-slate-300">"Website live under agency domain. Client approved on first presentation round."</p>
          <div class="text-[11px] text-emerald-400 font-mono">100% White-Label • Agency Protected</div>
        </div>
      `
        }
    };

    function updateStage(stepNumber) {
        currentStep = stepNumber;
        const isAr = document.documentElement.lang === 'ar';
        const data = stageData[stepNumber];

        steps.forEach((btn, index) => {
            const stepIdx = index + 1;
            if (stepIdx === stepNumber) {
                btn.classList.add('active', 'border-sky-400/50', 'bg-slate-800/80');
                btn.classList.remove('border-white/5');
            } else {
                btn.classList.remove('active', 'border-sky-400/50', 'bg-slate-800/80');
                btn.classList.add('border-white/5');
            }
        });

        if (progressBar) {
            progressBar.style.width = `${(stepNumber / totalSteps) * 100}%`;
        }

        if (previewContainer && data) {
            previewContainer.innerHTML = `
        <div class="space-y-4 animate-fadeIn">
          <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 font-mono">
              ${isAr ? data.tagAr : data.tag}
            </span>
            <span class="text-xs text-slate-500 font-mono">${stepNumber} / 5</span>
          </div>
          <div>
            <h4 class="text-xl font-bold text-white mb-1.5">${isAr ? data.titleAr : data.title}</h4>
            <p class="text-sm text-slate-400 leading-relaxed">${isAr ? data.descAr : data.desc}</p>
          </div>
          <div class="pt-2">
            ${data.graphic}
          </div>
        </div>
      `;
        }
    }

    // Bind click handlers to steps
    steps.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            stopAutoPlay();
            updateStage(index + 1);
        });
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            let next = currentStep + 1;
            if (next > totalSteps) next = 1;
            updateStage(next);
        }, 4500);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    // Listen to language changes to update live stage text
    window.addEventListener('languageChanged', () => {
        updateStage(currentStep);
    });

    // Initial render
    updateStage(1);
    startAutoPlay();
}

/**
 * FAQ Accordion Controller
 */
function initFaqAccordions() {
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
            const isOpen = !content.classList.contains('hidden');

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.faq-content');
                const otherIcon = otherItem.querySelector('.faq-icon');
                if (otherContent && otherContent !== content) {
                    otherContent.classList.add('hidden');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (isOpen) {
                content.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

/**
 * Project Filters on Work Page
 */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.work-filter-btn');
    const projectCards = document.querySelectorAll('.project-grid-card');
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');

            // Update active state on buttons
            filterBtns.forEach(b => {
                b.classList.remove('bg-sky-400', 'text-slate-950', 'font-bold');
                b.classList.add('bg-white/5', 'text-slate-300');
            });
            btn.classList.add('bg-sky-400', 'text-slate-950', 'font-bold');
            btn.classList.remove('bg-white/5', 'text-slate-300');

            // Filter cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const tags = (card.getAttribute('data-tags') || '').toLowerCase();

                if (filter === 'all' || category === filter || tags.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}