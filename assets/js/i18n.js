/**
 * Bilingual Engine (English & Arabic)
 * ====================================================================
 * Manages full site localization, RTL/LTR document direction,
 * font class toggling, and localStorage persistence.
 * ====================================================================
 */

const I18N = {
    currentLang: localStorage.getItem('agency_portfolio_lang') || 'en',

    translations: {
        en: {
            // Navigation
            navHome: "Home",
            navWork: "Work",
            navServices: "Services",
            navAbout: "About",
            navContact: "Contact",
            navCta: "Discuss a Partnership",
            navLangToggle: "العربية",

            // Status Badges & Trust
            badgeAvailable: "Available for Agency Fulfillment Sprints",
            badgeWhiteLabel: "100% White-Label Partner",
            badgeGhl: "GoHighLevel Specialist",
            badgeGcc: "Kuwait & GCC Experience",
            badgeBilingual: "Arabic + English Web Mastery",

            // Hero Section
            heroEyebrow: "White-Label Web Fulfillment for Agencies",
            heroHeadlineStart: "Your Clients Need Great Websites.",
            heroHeadlineGradient: "You Don't Need Another Full-Time Web Designer.",
            heroSubtext: "I help digital marketing, GHL, and lead-gen agencies turn raw client briefs into polished, high-converting business websites — delivered quietly behind the scenes, under your workflow and your brand.",
            heroPrimaryCta: "Discuss a Partnership",
            heroSecondaryCta: "Explore My Work",
            heroTrustSummary: "30+ Business Websites Delivered • Kuwait & GCC Market • Arabic & English • GoHighLevel Native",

            // Interactive Pipeline Widget
            pipelineTitle: "How I Fit Into Your Agency Workflow",
            pipelineSubtitle: "From Raw Brief to Delivered Asset",
            pipelineStep1Title: "1. Brief Received",
            pipelineStep1Desc: "You send raw client assets, services, and requirements.",
            pipelineStep2Title: "2. Architecture",
            pipelineStep2Desc: "I structure conversion sections, pages, and UX layout.",
            pipelineStep3Title: "3. Build & Polish",
            pipelineStep3Desc: "Clean implementation in GHL / Web with custom CSS.",
            pipelineStep4Title: "4. Agency Review",
            pipelineStep4Desc: "Your project manager reviews the staging preview.",
            pipelineStep5Title: "5. Client Delivery",
            pipelineStep5Desc: "You present the finished site under your agency's name.",

            // Trust Strip
            statWebsites: "30+ Websites",
            statWebsitesSub: "Delivered across GCC verticals",
            statGhl: "GoHighLevel",
            statGhlSub: "Funnels, sub-accounts & custom CSS",
            statBilingual: "Arabic + English",
            statBilingualSub: "True RTL & bilingual parity",
            statWhiteLabel: "100% White-Label",
            statWhiteLabelSub: "Your agency keeps full client ownership",

            // Problem / Pain Section
            painEyebrow: "The Agency Dilemma",
            painHeadline: "More Clients Shouldn't Mean More Delivery Headaches.",
            painLead: "When your sales pipeline works, your delivery team pays the price. Internal bottlenecks create friction, delayed launches, and stressful client calls.",
            painCard1Title: "The Delivery Bottleneck",
            painCard1Bullet1: "Account managers forced to chase website tweaks.",
            painCard1Bullet2: "Internal designers overloaded with ad creatives.",
            painCard1Bullet3: "Struggling with Arabic RTL and platform bugs.",
            painCard1Bullet4: "Reluctance to add fixed monthly payroll for seasonal project surges.",
            painCard2Title: "The White-Label Solution",
            painCard2Bullet1: "Send the brief; get back a ready-to-review staging site.",
            painCard2Bullet2: "Zero babysitting: I turn raw notes into conversion layouts.",
            painCard2Bullet3: "Flawless bilingual execution tailored for Kuwait & the GCC.",
            painCard2Bullet4: "Flexible, project-based pricing that protects your margins.",

            // Workflow & Brand Protection
            workflowEyebrow: "Operational Discretion",
            workflowHeadline: "You Keep the Client. I Handle the Build.",
            workflowSubtext: "I am not here to own your client. I am here to make your agency look exceptional while protecting your client relationships and brand identity.",
            workflowPillar1Title: "Strict Non-Circumvention",
            workflowPillar1Desc: "Your agency is the only client-facing entity. I operate strictly behind the scenes with zero direct client contact.",
            workflowPillar2Title: "No Brand Interference",
            workflowPillar2Desc: "No personal branding, no credits in the code footer, no portfolios claiming your agency's clients without consent.",
            workflowPillar3Title: "Plug-and-Play Integration",
            workflowPillar3Desc: "Invite me to your Slack, ClickUp, or GHL sub-account. I adopt your existing communication style effortlessly.",

            // Featured Work
            workEyebrow: "Selected Agency Fulfillment Projects",
            workHeadline: "Real Business Websites. Real Market Context.",
            workSubtext: "Every project below was delivered through agency collaboration — turning client briefs into clean, high-converting digital assets.",
            viewAllProjects: "Explore All Projects",
            viewCaseStudy: "View Case Study",

            // Featured Spotlight
            spotlightEyebrow: "Featured Case Study",
            spotlightChallenge: "The Agency Challenge",
            spotlightApproach: "My Fulfillment Approach",
            spotlightDelivered: "What Was Delivered",

            // Process
            processEyebrow: "Predictable Delivery",
            processHeadline: "A Frictionless 5-Step Process",
            processSubtext: "Engineered specifically to minimize back-and-forth for busy agency founders and project managers.",
            step1Num: "01",
            step1Name: "Send the Brief",
            step1Text: "Forward your client's information, branding assets, and project goals via email or project board.",
            step2Num: "02",
            step2Name: "Structure & Flow",
            step2Text: "I map the information architecture, conversion funnels, CTA placements, and bilingual copy layout.",
            step3Num: "03",
            step3Name: "Build & Style",
            step3Text: "Execution inside your chosen platform (GoHighLevel, Web) with tailored responsive design and custom CSS.",
            step4Num: "04",
            step4Name: "Agency Review",
            step4Text: "You receive a staging link. You review and request any revisions to match your agency's standards.",
            step5Num: "05",
            step5Name: "Client Hand-off",
            step5Text: "You deliver the completed website to your client, take the credit, and invoice them under your brand.",

            // Why Agencies Work With Me
            whyEyebrow: "Why Agencies Choose This Model",
            whyHeadline: "An External Execution Layer for Your Agency",
            whySubtext: "Designed to give agency owners the agility of a freelancer with the reliability of a senior full-time builder.",
            whyPillar1Title: "Flexible Capacity",
            whyPillar1Desc: "Scale your web fulfillment instantly during client surges without adding permanent fixed payroll overhead.",
            whyPillar2Title: "GoHighLevel Fluent",
            whyPillar2Desc: "No need to explain GHL forms, snapshots, or funnels. I work natively inside your client sub-accounts.",
            whyPillar3Title: "GCC Market Awareness",
            whyPillar3Desc: "Deep understanding of Kuwait and Gulf business culture, WhatsApp-centric conversion flows, and localized trust cues.",
            whyPillar4Title: "Arabic RTL Expertise",
            whyPillar4Desc: "Bilingual websites that look equally refined in Arabic and English, with proper typography and layout direction.",

            // About Preview
            aboutEyebrow: "About Ahmed",
            aboutHeadline: "I Understand How Agencies Actually Deliver Websites.",
            aboutStory1: "My background was forged inside a boutique digital marketing company in Kuwait. The agency focused on client acquisition, brand strategy, and account management, while I operated behind the scenes as their dedicated website fulfillment specialist.",
            aboutStory2: "Working directly with client briefs across 30+ businesses taught me what agencies really care about: predictable timelines, clean execution, zero drama, and absolute respect for the client relationship.",
            aboutStory3: "Today, I provide that exact fulfillment layer to forward-thinking marketing and GHL agencies that want to deliver premium websites without overloading their core team.",
            aboutCta: "Learn More About My Background",

            // Final CTA
            ctaEyebrow: "Ready to Scale Your Agency's Fulfillment?",
            ctaHeadline: "Your Next Website Project Doesn't Need to Become Your Next Delivery Bottleneck.",
            ctaSubtext: "Have an incoming website client or an overloaded build queue? Let's discuss how I can quietly handle the execution under your brand.",
            ctaPrimaryBtn: "Discuss a Partnership",
            ctaSecondaryBtn: "Explore My Work",
            ctaNote: "Confidentiality guaranteed • Available for project sprints & ongoing fulfillment",

            // Footer
            footerDesc: "White-label website design and GoHighLevel fulfillment specialist partnering with digital marketing agencies across Kuwait, the GCC, and internationally.",
            footerQuickLinks: "Navigation",
            footerServices: "Core Services",
            footerLegalNote: "All client projects delivered under strict agency white-label agreements.",
            footerCopyright: "Ahmed. All rights reserved. White-Label Fulfillment Specialist.",
            footerDirectContact: "Direct Inquiries",

            // Filter Labels (Work page)
            filterAll: "All Projects",
            filterAutomotive: "Automotive & Services",
            filterBusiness: "Corporate & Commercial",
            filterGhl: "GoHighLevel",
            filterBilingual: "Arabic / English",

            // Contact Page
            contactHeroHeadline: "Have a Website Project in the Pipeline?",
            contactHeroSubtext: "Send me the brief or book a short intro conversation. Let's see how I can integrate into your agency's delivery workflow.",
            contactFormTitle: "Agency Project Intake",
            formNameLabel: "Your Name",
            formNamePlaceholder: "e.g. Faisal Al-Sabah",
            formAgencyLabel: "Agency Name",
            formAgencyPlaceholder: "e.g. Apex Marketing Studio",
            formEmailLabel: "Work Email",
            formEmailPlaceholder: "director@apexagency.com",
            formWhatsappLabel: "WhatsApp / Phone (Optional)",
            formWhatsappPlaceholder: "+965 XXXXXXXX",
            formTypeLabel: "Project Type",
            formTypeOpt1: "New Client Website Build",
            formTypeOpt2: "GoHighLevel Funnel / Sub-account",
            formTypeOpt3: "Bilingual (Arabic & English) Redesign",
            formTypeOpt4: "Ongoing Agency White-Label Partnership",
            formVolumeLabel: "Estimated Monthly Website Volume",
            formVolumeOpt1: "1 Project (Immediate Need)",
            formVolumeOpt2: "2–4 Projects / Quarter",
            formVolumeOpt3: "5+ Projects / Ongoing Capacity",
            formMessageLabel: "Project Brief & Notes",
            formMessagePlaceholder: "Tell me about the client industry, platform preference (GHL, Web), and ideal delivery timeframe...",
            formSubmitBtn: "Submit Project Brief",
            formSubmitting: "Validating...",
            formSuccessTitle: "Brief Received Successfully",
            formSuccessMsg: "Thank you for reaching out! Since this is a portfolio demonstration, your form inputs are validated locally. For real inquiries, please reach out directly via WhatsApp or Email below.",

            // FAQs Header
            faqEyebrow: "Frequently Asked Questions",
            faqHeadline: "Everything Agencies Ask Before Partnering",
        },

        ar: {
            // Navigation
            navHome: "الرئيسية",
            navWork: "أعمالي",
            navServices: "الخدمات",
            navAbout: "نبذة عني",
            navContact: "تواصل معي",
            navCta: "ابدأ شراكة عمل",
            navLangToggle: "English",

            // Status Badges & Trust
            badgeAvailable: "متاح حالياً لشراكات الوكالات والمشاريع الجديدة",
            badgeWhiteLabel: "شريك وايت ليبل 100%",
            badgeGhl: "متخصص في منصة GoHighLevel",
            badgeGcc: "خبرة عملية في السوق الخليجي والكويتي",
            badgeBilingual: "إتقان كامل للمواقع العربية والإنجليزية",

            // Hero Section
            heroEyebrow: "تنفيذ المواقع بنظام الوايت ليبل للوكالات",
            heroHeadlineStart: "عملاؤك بحاجة لمواقع استثنائية.",
            heroHeadlineGradient: "وأنت لا تحتاج لتوظيف مصمم بدوام كامل.",
            heroSubtext: "أساعد وكالات التسويق الرقمي وإعلانات الأداء وشركاء GoHighLevel على تحويل متطلبات العملاء إلى مواقع أعمال احترافية عالية التحويل — أنفذها بهدوء خلف الكواليس، وفق أسلوب عملكم وتحت علامتكم التجارية.",
            heroPrimaryCta: "ابدأ شراكة عمل",
            heroSecondaryCta: "استعرض أعمالي",
            heroTrustSummary: "أكثر من 20 موقعاً منجزاً • خبرة في سوق الكويت والخليج • لغة عربية وإنجليزية متكاملة • تخصص GoHighLevel",

            // Interactive Pipeline Widget
            pipelineTitle: "كيف أندمج بسلاسة في أسلوب عمل وكالتكم",
            pipelineSubtitle: "من استلام المتطلبات إلى تسليم الموقع النهائي",
            pipelineStep1Title: "1. استلام الملف",
            pipelineStep1Desc: "ترسل لي ملخص العميل وشعاره وقائمة خدماته.",
            pipelineStep2Title: "2. الهيكلة وتجربة المستخدم",
            pipelineStep2Desc: "أقوم بهندسة مسارات التحويل وتوزيع الأقسام.",
            pipelineStep3Title: "3. البناء والتنسيق",
            pipelineStep3Desc: "تنفيذ نظيف وسريع في GHL مع كود CSS مخصص.",
            pipelineStep4Title: "4. مراجعة الوكالة",
            pipelineStep4Desc: "يراجع مدير المشروع رابط المعاينة قبل اعتماده.",
            pipelineStep5Title: "5. التسليم للعميل",
            pipelineStep5Desc: "تقدم وكالتك الموقع النهائي لعميلها تحت اسمها.",

            // Trust Strip
            statWebsites: "+20 موقعاً إلكترونياً",
            statWebsitesSub: "تم تسليمها في قطاعات متنوعة بالخليج",
            statGhl: "منصة GoHighLevel",
            statGhlSub: "مسارات، وحسابات فرعية، وكود مخصص",
            statBilingual: "عربي + إنجليزي",
            statBilingualSub: "هيكلية RTL حقيقية وتطابق تام",
            statWhiteLabel: "وايت ليبل 100%",
            statWhiteLabelSub: "وكالتك تحتفظ بكامل علاقة العميل",

            // Problem / Pain Section
            painEyebrow: "معضلة وكالات التسويق",
            painHeadline: "زيادة العملاء لا ينبغي أن تعني زيادة الضغوط التشغيلية.",
            painLead: "عندما ينجح فريق المبيعات في إغلاق صفقات جديدة، يدفع فريق التنفيذ الثمن. وتؤدي الاختناقات الداخلية إلى تأخير التسليم، وإرهاق الموظفين، واتصالات متوترة مع العملاء.",
            painCard1Title: "اختناق التنفيذ التقليدي",
            painCard1Bullet1: "مدراء الحسابات يضيعون أوقاتهم في متابعة تفاصيل التصميم الدقيقة.",
            painCard1Bullet2: "المصممون الداخليون مستنزفون بالكامل في إعداد الحملات الإعلانية.",
            painCard1Bullet3: "صعوبات في محاذاة اللغة العربية RTL ومشاكل المنصات التقنية.",
            painCard1Bullet4: "التردد في إضافة رواتب ومصاريف ثابتة لمشاريع موسمية متقلبة.",
            painCard2Title: "حل الوايت ليبل المرن",
            painCard2Bullet1: "ترسل المتطلبات؛ وتستلم موقعاً كاملاً جاهزاً لمراجعة وكالتكم.",
            painCard2Bullet2: "بدون إشراف يومي: أحول النقاط الأولية إلى مسار تحويل متكامل.",
            painCard2Bullet3: "إتقان تام للغة العربية والإنجليزية بما يناسب السوق الكويتي والخليجي.",
            painCard2Bullet4: "تسعير واضح لكل مشروع يضمن هوامش ربح وكالتكم بدقة.",

            // Workflow & Brand Protection
            workflowEyebrow: "السرية والاحترافية",
            workflowHeadline: "أنت تملك علاقة العميل. وأنا أتولى بناء الموقع.",
            workflowSubtext: "لست هنا لمنافسة وكالتك أو التواصل مع عميلك. هدفي هو جعل وكالتكم تبدو بأعلى درجات الاحترافية مع حماية هويتكم وعلاقتكم التجارية بالكامل.",
            workflowPillar1Title: "حظر التواصل المباشر مع العميل",
            workflowPillar1Desc: "وكالتكم هي الواجهة الوحيدة للعميل دائماً. أعمل بالكامل خلف الكواليس دون أي تواصل مباشر مع عميلكم النهائي.",
            workflowPillar2Title: "بدون أي إشارة لاسمي",
            workflowPillar2Desc: "لا أضع اسمي أو روابط خاصة بي في تذييل الموقع أو كود الصفحة، ولا أنشر أعمال عملاء وكالتكم دون إذنكم المسبق.",
            workflowPillar3Title: "اندماج فوري في نظامكم",
            workflowPillar3Desc: "يمكنكم إضافتي لمنصات التواصل الخاصة بكم (Slack، ClickUp، أو GHL). أتكيف بسرعة مع طريقة عمل فريقكم.",

            // Featured Work
            workEyebrow: "نماذج من مشاريع تم تنفيذها للوكالات",
            workHeadline: "مواقع أعمال واقعية. مصممة لبيئة السوق الفعلي.",
            workSubtext: "كل مشروع أدناه تم إنجازه عبر شراكة مع وكالات تسويق — حيث قمت بتحويل متطلبات العميل إلى واجهة رقمية راقية تعزز المبيعات.",
            viewAllProjects: "استعرض جميع المشاريع",
            viewCaseStudy: "عرض دراسة الحالة",

            // Featured Spotlight
            spotlightEyebrow: "دراسة حالة مختارة",
            spotlightChallenge: "تحدي الوكالة",
            spotlightApproach: "أسلوب التنفيذ",
            spotlightDelivered: "ما تم تسليمه للوكالة",

            // Process
            processEyebrow: "تنفيذ يعتمد عليه",
            processHeadline: "منظومة عمل سلسة من 5 خطوات",
            processSubtext: "مبنية خصيصاً لتقليل المراسلات الزائدة وتوفير وقت مؤسسي ومدراء مشاريع الوكالات.",
            step1Num: "01",
            step1Name: "إرسال المتطلبات",
            step1Text: "ترسل لي ملف العميل، شعاره، ألوانه، وقائمة خدماته ورغباته عبر البريد أو منصة المهام.",
            step2Num: "02",
            step2Name: "الهيكلة وتوزيع المحتوى",
            step2Text: "أقوم بهندسة أقسام الصفحة، ومسار الإقناع، وتوزيع أزرار الحجز، وصياغة المحتوى ثنائي اللغة.",
            step3Num: "03",
            step3Name: "التنفيذ والبناء الفعلي",
            step3Text: "البناء الفعلي داخل المنصة المختارة (GoHighLevel أو الويب) مع ضبط التجاوب وأكواد الـ CSS.",
            step4Num: "04",
            step4Name: "مراجعة الوكالة",
            step4Text: "أزودكم برابط المعاينة؛ يراجعه فريقكم ويطلب أي تعديلات مطلوبة لتطابق معاييركم العالية.",
            step5Num: "05",
            step5Name: "التسليم للعميل",
            step5Text: "تسلمون الموقع المكتمل لعميلكم النهائي وتفخرون بالنتيجة تحت اسم وشعار وكالتكم بالكامل.",

            // Why Agencies Work With Me
            whyEyebrow: "لماذا تختارني الوكالات كشريك تنفيذ؟",
            whyHeadline: "طبقة إنجاز خارجية متخصصة تدعم وكالتك",
            whySubtext: "صُمم هذا النموذج ليمنح وكالتكم مرونة المستقلين المالي، مع انضباط وجودة المطور الأول المحترف.",
            whyPillar1Title: "طاقة تشغيلية مرنة",
            whyPillar1Desc: "توسع في قبول مشاريع المواقع وقت ازدهار المبيعات، دون أن تتحمل رواتب موظفين ثابتة في أوقات الهدوء.",
            whyPillar2Title: "خبرة متأصلة في GoHighLevel",
            whyPillar2Desc: "لست بحاجة لشرح كيفية عمل النماذج والتقويمات والحسابات الفرعية. أعمل باحترافية داخل بيئة GHL مباشرة.",
            whyPillar3Title: "فهم عميق للسوق الخليجي",
            whyPillar3Desc: "إدراك دقيق لثقافة الأعمال في الكويت والخليج، وتفضيل التواصل عبر واتساب، وعناصر بناء الثقة المحلية.",
            whyPillar4Title: "احترافية حقيقية باللغة العربية",
            whyPillar4Desc: "مواقع تظهر بذات الفخامة والانسيابية في اللغتين العربية والإنجليزية دون أي تشوهات في التنسيق والمحاذاة.",

            // About Preview
            aboutEyebrow: "نبذة عن أحمد",
            aboutHeadline: "أفهم تماماً كيف تدار مشاريع المواقع داخل الوكالات.",
            aboutStory1: "بدأت مسيرتي العملية خلف الكواليس داخل شركة تسويق رقمي في الكويت. كانت الشركة مسؤولة عن استقطاب العملاء والمبيعات والعلاقات العامة، بينما كنت أنا مسؤول التنفيذ الفعلي لجميع مشاريع المواقع.",
            aboutStory2: "من خلال التعامل المباشر مع أكثر من 20 مشروعاً في قطاعات تجارية متعددة، تعلمت ما يهم الوكالات حقاً: الالتزام بالمواعيد، جودة التنفيذ دون الحاجة للمتابعة اليومية، والاحترام المطلق لملكية العميل.",
            aboutStory3: "واليوم، أقدم هذه الطاقة التنفيذية الموثوقة كشريك خارجي مستقل للوكالات التي ترغب في التوسع وزيادة أرباحها دون الدخول في أعباء التوظيف المكتبي.",
            aboutCta: "اقرأ المزيد عن تجربتي وأسلوب عملي",

            // Final CTA
            ctaEyebrow: "هل ترغب في توسيع طاقة وكالتك التنفيذية؟",
            ctaHeadline: "مشروع عميلك القادم لا يجب أن يكون مصدر ضغط أو تأخير لوكالتك.",
            ctaSubtext: "هل لديك عميل جاهز لبناء موقعه أو ضغط في جدول التسليم؟ دعنا نتحدث لنرى كيف يمكنني إنجاز العمل بهدوء تحت علامتكم.",
            ctaPrimaryBtn: "ابدأ شراكة عمل",
            ctaSecondaryBtn: "استعرض أعمالي",
            ctaNote: "نلتزم باتفاقيات عدم الإفصاح والسرية • متاح للمشاريع الفردية والشراكات المستمرة",

            // Footer
            footerDesc: "متخصص في تصميم وتنفيذ المواقع بنظام الوايت ليبل ومنصة GoHighLevel، شريك موثوق لوكالات التسويق في الكويت ودول الخليج ودولياً.",
            footerQuickLinks: "روابط سريعة",
            footerServices: "الخدمات الرئيسية",
            footerLegalNote: "كافة المشاريع تنفذ وفق التزام تام باتفاقيات الوايت ليبل وحماية خصوصية الوكالات.",
            footerCopyright: "أحمد. جميع الحقوق محفوظة. شريك تنفيذ الوايت ليبل للوكالات.",
            footerDirectContact: "قنوات التواصل المباشر",

            // Filter Labels (Work page)
            filterAll: "كافة المشاريع",
            filterAutomotive: "السيارات والخدمات",
            filterBusiness: "الشركات والأعمال",
            filterGhl: "منصة GoHighLevel",
            filterBilingual: "عربي / إنجليزي",

            // Contact Page
            contactHeroHeadline: "هل لديك مشروع موقع في خطتك الحالية؟",
            contactHeroSubtext: "أرسل لي متطلبات العميل أو احجز محادثة استكشافية سريعة لنرى كيف يمكنني الاندماج في أسلوب تسليم وكالتك.",
            contactFormTitle: "بيانات متطلبات مشروع الوكالة",
            formNameLabel: "اسمك الكريم",
            formNamePlaceholder: "مثال: فيصل الصباح",
            formAgencyLabel: "اسم الوكالة",
            formAgencyPlaceholder: "مثال: وكالة آفاق للتسويق",
            formEmailLabel: "البريد الإلكتروني للعمل",
            formEmailPlaceholder: "director@agency.com",
            formWhatsappLabel: "رقم الواتساب / الهاتف (اختياري)",
            formWhatsappPlaceholder: "+965 XXXXXXXX",
            formTypeLabel: "نوع المشروع المطلوب",
            formTypeOpt1: "بناء موقع جديد بالكامل لعميل",
            formTypeOpt2: "بناء مسار أو قمع تسويقي داخل GoHighLevel",
            formTypeOpt3: "إعادة تصميم موقع قديم وتطويره باللغتين",
            formTypeOpt4: "شراكة تنفيذ مستمرة بنظام الوايت ليبل",
            formVolumeLabel: "حجم مشاريع المواقع المتوقع شهرياً",
            formVolumeOpt1: "مشروع واحد (حاجة فورية)",
            formVolumeOpt2: "من 2 إلى 4 مشاريع فصلياً",
            formVolumeOpt3: "أكثر من 5 مشاريع / شراكة مستمرة",
            formMessageLabel: "تفاصيل وملخص المشروع",
            formMessagePlaceholder: "حدثني عن مجال عمل العميل، المنصة المفضلة، والموعد المأمول للتسليم...",
            formSubmitBtn: "إرسال متطلبات المشروع",
            formSubmitting: "جارٍ التحقق...",
            formSuccessTitle: "تم استلام المتطلبات بنجاح",
            formSuccessMsg: "شكراً لتواصلك! نظراً لأن هذا الموقع نموذج للعرض، تم التحقق من البيانات محلياً. للتواصل الفعلي المباشر، يُرجى مراسلتي عبر الواتساب أو البريد الموضح أدناه.",

            // FAQs Header
            faqEyebrow: "الأسئلة الشائعة للوكالات",
            faqHeadline: "كل ما يسأل عنه أصحاب الوكالات قبل بدء الشراكة",
        }
    },

    init() {
        this.applyLanguage(this.currentLang);
        this.bindEvents();
    },

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('agency_portfolio_lang', lang);

        const isAr = lang === 'ar';
        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? 'rtl' : 'ltr';

        // Toggle typography classes
        if (isAr) {
            document.body.classList.add('font-arabic');
            document.body.classList.remove('font-sans');
        } else {
            document.body.classList.add('font-sans');
            document.body.classList.remove('font-arabic');
        }

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                el.textContent = this.translations[lang][key];
            }
        });

        // Update all elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (this.translations[lang] && this.translations[lang][key]) {
                el.setAttribute('placeholder', this.translations[lang][key]);
            }
        });

        // Update buttons/toggles text
        document.querySelectorAll('.lang-switcher-text').forEach(el => {
            el.textContent = isAr ? 'EN' : 'عربي';
        });

        // Dispatch event for components that need re-rendering or animation recalculation
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, isAr } }));
    },

    toggleLanguage() {
        const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.applyLanguage(nextLang);
    },

    bindEvents() {
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
            });
        });
    }
};

// Expose globally
window.I18N = I18N;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});