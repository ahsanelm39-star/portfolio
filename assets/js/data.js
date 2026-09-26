/**
 * Portfolio Data Architecture
 * ====================================================================
 * Structured project and service definitions.
 * Provides easy maintenance and localized content access.
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  projects: [
    {
      id: "automotive-service",
      slug: "automotive-service",
      featured: true,
      category: "automotive",
      industryEn: "Automotive & Luxury Care",
      industryAr: "خدمات السيارات والعناية الفارهة",
      titleEn: "Apex Performance & Auto Detailing",
      titleAr: "مركز أبيكس لخدمات وتعديل السيارات",
      locationEn: "Kuwait (Shuwaikh Hub)",
      locationAr: "الكويت (منطقة الشويخ)",
      languagesEn: "Bilingual (Arabic RTL & English LTR)",
      languagesAr: "ثنائي اللغة (عربي RTL وإنجليزي LTR)",
      platformEn: "GoHighLevel + Custom CSS",
      platformAr: "GoHighLevel + كود CSS مخصص",
      roleEn: "White-Label Website Fulfillment",
      roleAr: "تنفيذ وايت ليبل لحساب وكالة تسويق",
      shortDescEn: "Built behind the scenes for a Kuwait marketing agency managing a high-end garage. Converted raw WhatsApp briefs and service lists into an elite bilingual booking portal.",
      shortDescAr: "تم تنفيذه خلف الكواليس لوكالة تسويق في الكويت تدير عميل سيارات فارهة. تم تحويل ملفات الواتساب وقائمة الخدمات إلى موقع حجز ثنائي اللغة فائق الفخامة.",
      imagePath: "assets/images/projects/project-automotive.svg",
      caseStudyUrl: "work/automotive-service.html",
      tags: ["GoHighLevel", "Kuwait", "Bilingual", "Custom CSS", "Local Business"],
      challengeEn: "The agency closed an automotive client with 30+ custom services, high-ticket detailing packages, and demanding brand aesthetics. Their internal team was fully consumed by ad campaign launches and needed a turnkey build within 5 business days without babysitting the process.",
      challengeAr: "تعاقدت الوكالة مع مركز سيارات فاخر يقدم أكثر من 30 خدمة تفصيلية وباقات تعديل باهظة الثمن. كان الفريق الداخلي للوكالة منشغلاً بإطلاق الحملات الإعلانية، وكانوا بحاجة إلى موقع متكامل خلال 5 أيام عمل دون الحاجة لمتابعة تفاصيل التنفيذ الدقيقة.",
      approachEn: "Structured the content into clear vehicle-type funnels (Exotics, SUVs, Daily Drivers), designed high-contrast dark aesthetic with custom CSS glass cards, engineered seamless Arabic typography using IBM Plex Sans Arabic, and configured direct WhatsApp quotation triggers.",
      approachAr: "هيكلة المحتوى وفق مسارات محددة حسب نوع السيارة (فارهة، دفع رباعي، يومية)، وتصميم هوية داكنة فخمة ببطاقات زجاجية مخصصة، وضبط الخط العربي الاحترافي، وربط أزرار عروض الأسعار المباشرة بواتساب العميل.",
      keyFeaturesEn: [
        "Interactive Service Estimator with WhatsApp click-to-chat pre-filled text",
        "Full Arabic (RTL) and English (LTR) layout parity without broken elements",
        "Mobile-first responsive architecture tested across iOS Safari and Android",
        "GoHighLevel form integration with lead notification webhooks",
        "Performance tuned with zero bloat custom CSS"
      ],
      keyFeaturesAr: [
        "حاسبة تقديرية تفاعلية للخدمات مع نصوص واتساب جاهزة ومبرمجة مسبقاً",
        "توافق كامل ودقيق بين النسخة العربية (RTL) والإنجليزية (LTR)",
        "تصميم متجاوب بنظام Mobile-First مختبر على أجهزة iPhone و Android",
        "ربط نماذج GoHighLevel مع إشعارات فورية لمدير الفرع",
        "تحسين سرعة التصفح وتخفيف حجم الأكواد عبر CSS مخصص خفيف"
      ]
    },
    {
      id: "logistics-group",
      slug: "logistics-group",
      featured: true,
      category: "services",
      industryEn: "Commercial Freight & 3PL Logistics",
      industryAr: "الشحن التجاري واللوجستيات وسلاسل الإمداد",
      titleEn: "Gulf Horizon Cargo & Marine Freight",
      titleAr: "مجموعة أفق الخليج للشحن البحري والبري",
      locationEn: "Kuwait & Saudi Arabia (Cross-Border GCC)",
      locationAr: "الكويت والمملكة العربية السعودية (الخليج)",
      languagesEn: "Bilingual (Arabic & English)",
      languagesAr: "ثنائي اللغة (عربي وإنجليزي)",
      platformEn: "Responsive Web + GHL Intake Funnel",
      platformAr: "موقع ويب متجاوب + مسار استقطاب GHL",
      roleEn: "External Web Fulfillment Specialist",
      roleAr: "شريك تنفيذ ويب خارجي للوكالة",
      shortDescEn: "Delivered for a B2B agency needing a heavy-duty corporate site for a regional logistics provider. Features interactive container tracking UX and RFQ quotation flows.",
      shortDescAr: "تم إنجازه لصالح وكالة تسويق B2B لشركة شحن إقليمية كبرى. يتضمن واجهة تتبع شحنات تفاعلية ونماذج طلب عروض أسعار تجارية مخصصة.",
      imagePath: "assets/images/projects/project-logistics.svg",
      caseStudyUrl: "work/logistics-group.html",
      tags: ["Corporate", "GCC Market", "B2B Lead Gen", "Bilingual", "GHL"],
      challengeEn: "The agency needed to impress a regional logistics enterprise with complex shipping specifications, customs clearance details, and multi-country operational hubs. Internal designers struggled with corporate B2B density and bilingual RTL alignment.",
      challengeAr: "احتاجت الوكالة لإبهار شركة شحن إقليمية كبرى تعمل في عدة دول خليجية ولديها تفاصيل جمركية وشحن معقدة. واجه المصممون الداخليون صعوبة في تنظيم كثافة المحتوى المؤسسي مع توازن اللغتين.",
      approachEn: "Architected a spacious grid with prominent metric counters, trust badges for international maritime certifications, a streamlined 3-step Request For Quote (RFQ) modal, and bulletproof typography across both English and Arabic.",
      approachAr: "تصميم شبكة متوازنة بمساحات بيضاء مريحة، وأرقام إحصائية للأسطول، وإبراز شهادات الاعتماد البحرية والدولية، مع نموذج طلب تسعير (RFQ) مبسط وسريع من 3 خطوات.",
      keyFeaturesEn: [
        "Corporate B2B lead generation flow tailored for procurement managers",
        "Dedicated fleet capability guides and cold-chain temperature specifications",
        "Bilingual typography optimized for enterprise readability",
        "Clean integration with the agency's GoHighLevel CRM pipeline",
        "Fast-loading mobile layout for logistics personnel on the go"
      ],
      keyFeaturesAr: [
        "مسار تحويل مصمم خصيصاً لمدراء المشتريات والشركات",
        "أدلة مفصلة لمواصفات الشحن المبرد والأسطول البري والبحري",
        "خطوط مؤسسية رصينة ومريحة للقراءة باللغتين",
        "ربط مباشر بنظام إدارة علاقات العملاء (CRM) التابع للوكالة",
        "سرعة فائقة على الهواتف للعاملين الميدانيين في الموانئ والمستودعات"
      ]
    },
    {
      id: "medical-center",
      slug: "medical-center",
      featured: true,
      category: "services",
      industryEn: "Aesthetic Medicine & Specialized Clinic",
      industryAr: "الطب التجميلي والجلدية والعلاج التخصصي",
      titleEn: "Lumina Aesthetic Dermatology Clinic",
      titleAr: "عيادة لومينا للجلدية والليزر والتجميل",
      locationEn: "Kuwait (Salmiya Medical District)",
      locationAr: "الكويت (منطقة السالمية الطبية)",
      languagesEn: "Bilingual (Arabic RTL & English LTR)",
      languagesAr: "ثنائي اللغة (عربي وإنجليزي)",
      platformEn: "GoHighLevel Funnels & Calendar",
      platformAr: "GoHighLevel + تقويم مواعيد مدمج",
      roleEn: "White-Label Web Implementation",
      roleAr: "تنفيذ وايت ليبل لحساب وكالة إعلانية",
      shortDescEn: "Engineered for an agency driving paid Meta & Snapchat traffic. Ultra-fast mobile loading (<1.2s), intuitive doctor schedules, and high-trust aesthetic presentation.",
      shortDescAr: "صُمم لصالح وكالة تدير حملات إعلانية على سناب شات وإنستغرام. سرعة تحميل فائقة على الموبايل، وعرض موثوق لأطباء العيادة وجدول المواعيد.",
      imagePath: "assets/images/projects/project-medical.svg",
      caseStudyUrl: "work/medical-center.html",
      tags: ["Healthcare", "GoHighLevel", "Paid Ads Funnel", "Kuwait", "Bilingual"],
      challengeEn: "High ad spend on Snapchat and TikTok was getting traffic, but bounce rates were high due to slow clinic landing pages and cluttered mobile layouts. The agency needed high-converting landers built inside their client's GHL account.",
      challengeAr: "كانت الوكالة تنفق ميزانيات إعلانية كبيرة على سناب شات وتيك توك، لكن معدل الارتداد كان مرتفعاً بسبب بطء الموقع السابق وصعوبة التصفح بالموبايل. احتاجت الوكالة إلى صفحات هبوط مخصصة داخل حساب العميل في GHL.",
      approachEn: "Designed lightweight mobile-first funnels featuring verified doctor credentials, treatment duration breakdowns, clear consultation CTAs, and a sticky mobile appointment bar.",
      approachAr: "بناء صفحات هبوط سريعة وخفيفة بالتركيز الكامل على تجربة الهاتف، وإبراز ترخيص وخبرات الأطباء، وشرح خطوات الجلسات، مع شريط حجز ثابت أسفل الشاشة.",
      keyFeaturesEn: [
        "Sticky mobile bottom bar with Instant WhatsApp & Call buttons",
        "Interactive treatment selector mapping symptoms to recommended doctors",
        "Direct synchronization with GoHighLevel medical calendar slots",
        "Compliant, elegant before/after comparison tab without heavy scripts",
        "Sub-1.2s mobile loading speed on 4G networks"
      ],
      keyFeaturesAr: [
        "شريط سفلي ثابت للهواتف يوفر اتصالاً فورياً ومحادثة واتساب مباشرة",
        "محدد علاجات تفاعلي يوجه المريض للقسم والطبيب المناسب",
        "مزامنة مباشرة وفورية مع تقويم مواعيد GoHighLevel",
        "عرض متوافق وأنيق لنتائج الحالات دون إثقال سرعة التصفح",
        "سرعة تحميل ممتازة تحت 1.2 ثانية على شبكات الهاتف 4G"
      ]
    },
    {
      id: "real-estate-group",
      slug: "real-estate-group",
      featured: false,
      category: "business",
      industryEn: "Commercial Real Estate & Property Advisory",
      industryAr: "العقارات التجارية والاستثمار والتأجير",
      titleEn: "Al-Dar Prestige Commercial Realty",
      titleAr: "شركة الدار برستيج للعقارات التجارية",
      locationEn: "Kuwait City Financial Tower",
      locationAr: "مدينة الكويت (البرج التجاري)",
      languagesEn: "Bilingual (Arabic & English)",
      languagesAr: "ثنائي اللغة (عربي وإنجليزي)",
      platformEn: "GoHighLevel Custom Real Estate Funnel",
      platformAr: "منظومة عقارية مخصصة على GoHighLevel",
      roleEn: "Subcontracted Fulfillment Specialist",
      roleAr: "متخصص تنفيذ متعاقد مع الوكالة",
      shortDescEn: "A high-conversion multi-property portfolio site enabling Kuwait investors to review floorplans, ROI projections, and schedule private viewings directly with agents.",
      shortDescAr: "موقع تفاعلي متقدم لعرض العقارات الاستثمارية، يتيح للمستثمرين في الكويت مراجعة المخططات ودراسات العائد وحجز معاينات خاصة مع الوكلاء.",
      imagePath: "assets/images/projects/project-realestate.svg",
      caseStudyUrl: "work/real-estate-group.html",
      tags: ["Real Estate", "Bilingual", "GoHighLevel", "Lead Capture"],
      challengeEn: "Agency wanted a high-end luxury feel without having to maintain a heavy custom WordPress database.",
      challengeAr: "رغبت الوكالة في موقع استثماري راقٍ دون الدخول في تعقيدات وصيانة ووردبريس الثقيلة.",
      approachEn: "Built structured property cards inside GHL with fast filtering, WhatsApp broker routing, and downloadable PDF prospectuses.",
      approachAr: "بناء بطاقات عقارية منظمة داخل GHL مع فلترة سريعة وتوجيه المستثمر مباشرة لمسؤول العقار عبر واتساب.",
      keyFeaturesEn: ["Instant broker WhatsApp routing", "Floorplan modal preview", "Downloadable investment tear-sheets", "Bilingual parity"],
      keyFeaturesAr: ["توجيه فوري للوسيط عبر واتساب", "عرض المخططات في نافذة سريعة", "تحميل نشرة الاستثمار بصيغة PDF", "تطابق كامل بين اللغتين"]
    },
    {
      id: "legal-consultancy",
      slug: "legal-consultancy",
      featured: false,
      category: "business",
      industryEn: "Corporate Advisory & Commercial Law",
      industryAr: "المحاماة والاستشارات القانونية للشركات",
      titleEn: "Sovereign Legal & Corporate Advisors",
      titleAr: "دار السيادة للاستشارات القانونية والشركات",
      locationEn: "Kuwait Financial District",
      locationAr: "العاصمة (المنطقة المالية)",
      languagesEn: "Bilingual (Arabic & English)",
      languagesAr: "ثنائي اللغة (عربي وإنجليزي)",
      platformEn: "Semantic Web Architecture + GHL CRM",
      platformAr: "هيكلية ويب حديثة + ربط بنظام GHL",
      roleEn: "White-Label Agency Partner",
      roleAr: "شريك وايت ليبل لوكالة العلاقات العامة",
      shortDescEn: "High-trust, ultra-refined bilingual website for a commercial law firm handling corporate mergers, foreign investment licensing, and commercial litigation.",
      shortDescAr: "موقع قانوني فخم يعزز الثقة لشركة استشارات تجارية متخصصة في تأسيس الشركات وتراخيص الاستثمار الأجنبي والنزاعات التجارية.",
      imagePath: "assets/images/projects/project-legal.svg",
      caseStudyUrl: "work/legal-consultancy.html",
      tags: ["Corporate Law", "Bilingual RTL", "High Trust", "White-Label"],
      challengeEn: "Establishing immediate institutional credibility for high-net-worth foreign and local business owners.",
      challengeAr: "بناء ثقة فورية مع كبار المستثمرين والشركات الأجنبية الباحثة عن تأسيس فروع بالكويت.",
      approachEn: "Subtle typography hierarchy, practice area categorization, discreet consultation booking, and complete bilingual legal terminology alignment.",
      approachAr: "هرمية خطية رصينة، تصنيف مجالات الاختصاص، ونموذج حجز استشارات سرية مع ضبط كامل للمصطلحات القانونية باللغتين.",
      keyFeaturesEn: ["Discreet consultation intake", "Practice areas directory", "GCC foreign investor guide section", "Strict data privacy structure"],
      keyFeaturesAr: ["نموذج استشارة آمن وسري", "دليل شامل لمجالات الممارسة", "قسم إرشادي للمستثمر الأجنبي في الخليج", "هيكلية حماية خصوصية صارمة"]
    },
    {
      id: "artisan-hospitality",
      slug: "artisan-hospitality",
      featured: false,
      category: "business",
      industryEn: "Specialty Hospitality & Catering",
      industryAr: "الضيافة الراقية والتموين والمطاعم",
      titleEn: "Manoir Culinary & Roastery Concept",
      titleAr: "مفهوم مانوار للقهوة المختصة والضيافة",
      locationEn: "Kuwait (Shuwaikh Arts Hub)",
      locationAr: "الكويت (حي الشويخ الإبداعي)",
      languagesEn: "Bilingual (Arabic & English)",
      languagesAr: "ثنائي اللغة (عربي وإنجليزي)",
      platformEn: "Mobile-First GHL Funnel & Menu",
      platformAr: "GoHighLevel Mobile-First + قائمة تفاعلية",
      roleEn: "Behind-The-Scenes Fulfillment",
      roleAr: "تنفيذ خلف الكواليس لوكالة تسويق مطاعم",
      shortDescEn: "Visual storytelling and interactive mobile menu system for a premier Kuwait hospitality brand. Built with high-speed asset loading and catering inquiry flows.",
      shortDescAr: "تصميم بصري جذاب وقائمة طعام تفاعلية للهواتف لعلامة ضيافة كويتية، مع مسار مخصص لطلبات البوفيه والتموين الخارجي للشركات والمناسبات.",
      imagePath: "assets/images/projects/project-restaurant.svg",
      caseStudyUrl: "work/artisan-hospitality.html",
      tags: ["Hospitality", "Mobile-First", "Catering Leads", "Kuwait"],
      challengeEn: "Agency needed a mobile menu that loads instantly without requiring users to download heavy PDF files on slow cellular connections.",
      challengeAr: "احتاجت الوكالة لقائمة طعام تفتح فوراً على الموبايل دون إجبار الزبائن على تنزيل ملفات PDF ثقيلة.",
      approachEn: "Created a lightning-fast responsive HTML/CSS menu with allergen filters, instant category jumps, and corporate catering quotation forms.",
      approachAr: "بناء منيو تفاعلي فائق الخفة مع فلترة مسببات الحساسية ونموذج حجز المناسبات والشركات.",
      keyFeaturesEn: ["Instant interactive mobile menu (no PDFs)", "Corporate event catering inquiry funnel", "Integrated location maps & branch hours", "Social media campaign alignment"],
      keyFeaturesAr: ["منيو تفاعلي بدون ملفات PDF معقدة", "مسار لطلبات تموين حفلات الشركات", "خرائط فروع وساعات عمل دقيقة", "متوافق مع حملات الإنستغرام وتيك توك"]
    }
  ],

  // Core Service Offerings
  services: [
    {
      id: "white-label-fulfillment",
      icon: "shield-check",
      titleEn: "White-Label Website Fulfillment",
      titleAr: "تنفيذ المواقع بنظام الوايت ليبل للوكالات",
      subtitleEn: "Quiet, reliable build capacity under your agency's name.",
      subtitleAr: "طاقة تنفيذية موثوقة وهادئة تعمل تماماً تحت اسم وكالتك.",
      descEn: "You bring in the client and manage the relationship. I take the brief, build the site, and hand it to you ready for client presentation. No client poaching, zero brand interference.",
      descAr: "وكالتك تستقطب العميل وتدير العلاقة التجارية. أنا أستلم الملف والمواصفات، وأبني الموقع باحترافية، وأسلمه لك جاهزاً لتقديمه لعميلك باسم وكالتك دون أي تواصل مباشر مع عميلك النهائي.",
      deliverablesEn: ["Complete website staging ready for review", "All raw assets & documentation", "Revision cycles aligned with agency turnaround", "Zero mention of my name or external credits"],
      deliverablesAr: ["رابط معاينة جاهز للمراجعة", "تسليم كافة الأصول والملفات", "جولات تعديل سريعة وفق جدول الوكالة", "عدم وجود أي إشارة لاسم أو حقوق خارجية"],
      badgeEn: "Core Agency Service",
      badgeAr: "الخدمة الأساسية للوكالات"
    },
    {
      id: "ghl-website-build",
      icon: "layers",
      titleEn: "GoHighLevel Website & Funnel Building",
      titleAr: "بناء وتطوير مواقع ومسارات GoHighLevel",
      subtitleEn: "Native GHL sites that look like bespoke custom web design.",
      subtitleAr: "مواقع GHL احترافية تبدو كتصميم خاص دون قيود القوالب الجاهزة.",
      descEn: "Most agency GHL builds look like cheap templates. I use deep platform knowledge combined with custom CSS to build premium, responsive websites and high-converting funnels directly inside your agency's client sub-accounts.",
      descAr: "معظم مواقع GHL تبدو كقوالب تقليدية متطابقة. بفضل خبرتي العملية مع كود CSS المخصص، أقوم ببناء مواقع وفانلز راقية تعزز هيبة وكالتك مباشرة داخل الحسابات الفرعية (Sub-accounts).",
      deliverablesEn: ["Full site built inside your GHL sub-account", "Custom CSS injection for bespoke UI elements", "Form, calendar, and survey integration", "Mobile responsive polish across all device views"],
      deliverablesAr: ["بناء كامل داخل الحساب الفرعي لوكالتك", "حقن كود CSS مخصص لعناصر بصرية راقية", "ربط النماذج والتقويمات والاستبيانات", "ضبط التجاوب للهواتف بدقة 100%"],
      badgeEn: "GHL Specialist",
      badgeAr: "خبرة متخصصة بـ GHL"
    },
    {
      id: "bilingual-ar-en",
      icon: "globe",
      titleEn: "Bilingual Arabic (RTL) & English Websites",
      titleAr: "مواقع ثنائية اللغة (عربي RTL وإنجليزي LTR)",
      subtitleEn: "Flawless Arabic typography and true RTL layout architecture.",
      subtitleAr: "تناغم خطي راقٍ وتصميم مخصص حقيقي للغة العربية والإنجليزية.",
      descEn: "Building in the GCC requires genuine understanding of Arabic UI. I don't just flip text alignment; I architect proper RTL layouts, select modern Arabic typography, and ensure seamless bilingual parity for Gulf clients.",
      descAr: "التنفيذ في السوق الخليجي يتطلب فهماً عميقاً لتجربة المستخدم باللغة العربية. لا أكتفي بمجرد عكس اتجاه النص، بل أهيكل التصميم بالكامل ليتناسب مع خصوصية الخطوط والقراءة العربية والإنجليزية معاً.",
      deliverablesEn: ["Proper RTL flexbox/grid layout structures", "Modern Arabic typography pairings (Tajawal, IBM Plex, Cairo)", "Directional icon adjustments and layout mirroring", "Cultural visual resonance for Kuwait & GCC businesses"],
      deliverablesAr: ["هيكلة RTL حقيقية للشبكة والمحاذاة", "اختيار خطوط عربية حديثة وعالية المقروئية", "تعديل اتجاهات الأسهم والعناصر التفاعلية", "مراعاة الذوق البصري لبيئة الأعمال الخليجية"],
      badgeEn: "GCC Market Standard",
      badgeAr: "معيار السوق الخليجي"
    },
    {
      id: "business-website-design",
      icon: "monitor",
      titleEn: "Local Business & Corporate Websites",
      titleAr: "مواقع الشركات والأعمال المحلية التجارية",
      subtitleEn: "Structured for credibility, service clarity, and trust.",
      subtitleAr: "هيكلية مدروسة لبناء المصداقية وشرح الخدمات واستقطاب العملاء.",
      descEn: "Designed specifically for service businesses, contracting, automotive, medical, legal, and local enterprises in Kuwait and the GCC. Clear value propositions, compelling section hierarchy, and prominent contact triggers.",
      descAr: "مصممة خصيصاً للشركات الخدمية، والمراكز الطبية، وورش السيارات، والمكاتب الاستشارية في الكويت والخليج. تركيز تام على وضوح القيمة وهيكلية الأقسام وسهولة التواصل.",
      deliverablesEn: ["Homepage, Services, About, and Contact architecture", "Sticky WhatsApp & phone contact triggers", "Service breakdown cards with clear visual hierarchy", "Location maps, operating hours, and trust badges"],
      deliverablesAr: ["صفحات رئيسية، خدمات، من نحن، وتواصل متكاملة", "أزرار اتصال وواتساب سريعة ومثبتة", "بطاقات خدمات بهرمية بصرية واضحة", "خرائط المواقع، وساعات العمل، وشارات الثقة"],
      badgeEn: "Turnkey Informational",
      badgeAr: "مواقع متكاملة للأعمال"
    },
    {
      id: "landing-pages-funnels",
      icon: "zap",
      titleEn: "Conversion Landing Pages & Ad Funnels",
      titleAr: "صفحات الهبوط ومسارات الحملات الإعلانية",
      subtitleEn: "Built to maximize ad return on TikTok, Snapchat & Meta.",
      subtitleAr: "مهيأة لتحقيق أعلى عائد على ميزانيات الإعلانات الممولة.",
      descEn: "When your agency runs paid traffic, page speed and layout psychology dictate profitability. I create focused, distraction-free landing pages that guide traffic directly toward form submission or WhatsApp booking.",
      descAr: "عندما تطلق وكالتك حملات إعلانية مدفوعة، فإن سرعة الصفحة وسيكولوجية التصميم تحددان نجاح الحملة. أقدم صفحات هبوط خالية من التشتيت تقود الزائر مباشرة للطلب أو المحادثة.",
      deliverablesEn: ["Distraction-free single-goal conversion layouts", "Mobile load speeds optimized under 1.5 seconds", "Clear above-the-fold value proposition", "Direct webhook / CRM lead capture integrations"],
      deliverablesAr: ["هيكل تحويل واضح يركز على هدف واحد", "سرعة تحميل استثنائية على شبكات الهاتف", "عرض القيمة المباشرة دون الحاجة للتمرير الطويل", "ربط فوري للنماذج مع الـ CRM وحملات الإعلانات"],
      badgeEn: "High Conversion",
      badgeAr: "تحويل عالي للحملات"
    },
    {
      id: "redesign-modernization",
      icon: "refresh-cw",
      titleEn: "Website Redesign & Modernization",
      titleAr: "إعادة تصميم وتطوير المواقع القديمة",
      subtitleEn: "Transforming clunky, dated sites into high-end brand assets.",
      subtitleAr: "تحويل المواقع البطيئة والقديمة إلى واجهات حديثة راقية.",
      descEn: "When your agency signs a client with an embarrassing 2014-era website, I reconstruct it from scratch into a modern, responsive, high-performance interface that your agency can be proud to present.",
      descAr: "عندما تتعاقد وكالتك مع عميل يمتلك موقعاً قديماً وبطيئاً يضر بسمعته، أقوم بإعادة بنائه بالكامل بتصميم حديث، متجاوب، وعالي السرعة يجعل عميلك يرى القيمة المضافة لخدماتكم فوراً.",
      deliverablesEn: ["Complete aesthetic overhaul using modern UI principles", "Content cleanup and information re-structuring", "Modernization of forms, typography, and imagery", "Preservation of client domain and key contact points"],
      deliverablesAr: ["تجديد بصري شامل وفق أحدث معايير الويب", "إعادة تنظيم المحتوى وتبسيط الأقسام", "تحديث النماذج والخطوط وتوزيع الصور", "الحفاظ على الروابط الأساسية وعناوين التواصل"],
      badgeEn: "Visual Transformation",
      badgeAr: "تحديث وتطوير شامل"
    },
    {
      id: "custom-css-performance",
      icon: "code",
      titleEn: "Custom CSS & Mobile Optimization",
      titleAr: "تطوير كود CSS المخصص وتحسين الهواتف",
      subtitleEn: "The secret layer that makes platform builds feel custom-coded.",
      subtitleAr: "اللمسة البرمجية التي تمنح الموقع طابع التصميم الخاص الفاخر.",
      descEn: "Builders like GoHighLevel have layout limitations. I leverage clean, hand-crafted CSS to add glassmorphic cards, custom animations, custom form styling, and responsive micro-adjustments that standard builders cannot do out of the box.",
      descAr: "أنظمة البناء مثل GoHighLevel تفرض أحياناً قيوداً شكلية. هنا يأتي دور كود CSS المتقن لإضافة تأثيرات الزجاج، والتدرجات الراقية، وتخصيص النماذج وتفاصيل لا يمكن للمصمم العادي تحقيقها بدون كود.",
      deliverablesEn: ["Bespoke hover interactions and card depth", "Pixel-perfect mobile breakpoint overrides", "Custom form input and button styling", "Clean, organized, and commented CSS snippets"],
      deliverablesAr: ["تأثيرات حركة وتفاعل راقية عند التمرير", "تخصيص كامل للشاشات الصغيرة والمتوسطة", "تصميم فريد لحقول الإدخال والأزرار", "أكواد CSS منظمة وسهلة التعديل مستقبلاً"],
      badgeEn: "Technical Polish",
      badgeAr: "لمسة تقنية متقنة"
    }
  ],

  // Agency Comparison Matrix: Why White-Label Partner vs Full-Time Employee
  comparison: [
    {
      criteriaEn: "Monthly Fixed Overhead",
      criteriaAr: "التكاليف الثابتة الشهرية",
      inHouseEn: "High (Fixed salary, visa, workspace, insurance regardless of project flow)",
      inHouseAr: "مرتفعة (رواتب ثابتة، إقامات، تأمين، ومصاريف تشغيل سواء توفرت مشاريع أم لا)",
      partnerEn: "Zero (Pay strictly per delivered project or on active project sprints)",
      partnerAr: "صفر (دفع لكل مشروع مكتمل فقط، دون أي التزامات تشغيلية شهرية)",
    },
    {
      criteriaEn: "Operational Babysitting",
      criteriaAr: "المتابعة الإدارية والتوجيه اليومي",
      inHouseEn: "High (Requires constant task delegation, training, and creative oversight)",
      inHouseAr: "تحتاج وقتاً طويلاً (متابعة مستمرة، توجيه مهام، وتدريب متكرر)",
      partnerEn: "Zero (Give me the brief and assets; receive finished build ready to review)",
      partnerAr: "منعدمة (سلمني ملف العميل والمتطلبات، واستلم الموقع منجزاً للمراجعة)",
    },
    {
      criteriaEn: "Fluctuating Client Volume",
      criteriaAr: "تقلب حجم المشاريع خلال العام",
      inHouseEn: "Costly when quiet; overwhelmed when 4 new clients sign at once",
      inHouseAr: "خسارة مالية في فترات الركود؛ واختناق تشغيلي عند توقيع عدة عملاء معاً",
      partnerEn: "Instantly scalable (Spin up capacity when needed, zero cost when idle)",
      partnerAr: "مرونة فورية (استعن بي وقت الذروة، دون أي عبء مالي في الأوقات الهادئة)",
    },
    {
      criteriaEn: "GCC & Arabic RTL Mastery",
      criteriaAr: "إتقان السوق الخليجي واللغة العربية",
      inHouseEn: "Rare among affordable generalist designers; often broken RTL styling",
      inHouseAr: "نادر بين المصممين المستقلين؛ وكثيراً ما تظهر أخطاء ومحاذاة غير منضبطة",
      partnerEn: "Proven (Hands-on Kuwait agency background, native bilingual understanding)",
      partnerAr: "مؤكد (خبرة عملية مع وكالة تسويق كويتية وإلمام بثقافة الأعمال المحلية)",
    },
    {
      criteriaEn: "GoHighLevel & Platform Fluidity",
      criteriaAr: "الخبرة في GoHighLevel والمنصات",
      inHouseEn: "Steep learning curve or reliance on ugly out-of-the-box templates",
      inHouseAr: "يحتاج تدريباً طويلاً، أو يقتصر على استخدام قوالب رديئة وغير مخصصة",
      partnerEn: "Native execution (Expert GHL builder + custom CSS injection for custom feel)",
      partnerAr: "احتراف كامل (بناء داخل GHL مع تطويع كود CSS ليظهر الموقع كأنه مبرمج بالكامل)",
    },
    {
      criteriaEn: "Client Protection & Ethics",
      criteriaAr: "حماية العميل والسرية المهنية",
      inHouseEn: "Risk of direct client relationship leakage if junior staff interact directly",
      inHouseAr: "مخاطر اختلاط علاقات العملاء في حال حدوث خلافات داخلية",
      partnerEn: "100% Guaranteed (Invisible fulfillment layer; your agency is the sole hero)",
      partnerAr: "حماية تامة 100% (أنا طبقة تنفيذية خلف الكواليس؛ وكالتك هي البطل الوحيد)",
    }
  ],

  // Frequently Asked Questions by Agency Owners & Ops Managers
  faqs: [
    {
      qEn: "Do you communicate directly with my agency's client?",
      qAr: "هل تتواصل مباشرة مع عميل وكالتنا؟",
      aEn: "No. My preferred and default workflow is strictly white-label. Your agency remains the single point of contact. You send me the brief, I execute the build, and you present the finished work to your client under your agency's name.",
      aAr: "لا على الإطلاق. أسلوب العمل الأساسي والمعتمد هو الوايت ليبل تماماً. وكالتك هي الواجهة الوحيدة للعميل دائماً. أنت ترسل لي المتطلبات والمحتوى، وأنا أنفذ الموقع خلف الكواليس، ثم تقدم أنت العمل النهائي لعميلك تحت علامتك التجارية."
    },
    {
      qEn: "Can you build directly inside our agency's GoHighLevel sub-account?",
      qAr: "هل يمكنك بناء المواقع مباشرة داخل حساب GoHighLevel التابع لوكالتنا؟",
      aEn: "Yes. You simply invite my email to the specific client sub-account with builder permissions. I do the build, inject custom CSS, configure forms/calendars, and notify your project manager once the staging preview is ready for internal review.",
      aAr: "نعم بالتأكيد. يكفي إضافة بريدي الإلكتروني إلى الحساب الفرعي (Sub-account) الخاص بالعميل بصلاحية مصمم. أقوم ببناء الموقع وإضافة أكواد الـ CSS وربط النماذج، ثم أبلغ مدير المشروع عند جاهزية رابط المعاينة لمراجعتكم."
    },
    {
      qEn: "How do you handle Arabic (RTL) and English bilingual sites?",
      qAr: "كيف تتعامل مع المواقع ثنائية اللغة (عربي وإنجليزي)؟",
      aEn: "I build native RTL layouts using proper CSS direction, modern Arabic typography (such as IBM Plex Sans Arabic or Tajawal), and mirrored navigational flows. Both language versions receive the same attention to detail and layout balance.",
      aAr: "أبني النسخة العربية بهيكلية RTL حقيقية، مع اختيار خطوط عربية حديثة مثل IBM Plex Sans Arabic أو Tajawal، ومراعاة اتجاهات التصفح وقراءة العين. كلا النسختين تحظيان بنفس المستوى الرفيع من الجودة دون أي تشوه بصري."
    },
    {
      qEn: "What information do you need from my agency to start a project?",
      qAr: "ما هي المعلومات التي تحتاجها من الوكالة للبدء في المشروع؟",
      aEn: "A raw project brief: client logo/branding assets, list of services/products, target audience/market, any sample websites the client liked, and access to the builder/hosting environment. If copy is missing, I can structure standard conversion sections based on raw bullet points.",
      aAr: "ملف المشروع الأساسي: شعار وألوان العميل، قائمة الخدمات أو المنتجات، فئة الجمهور المستهدف، أمثلة لمواقع يفضلها العميل، وصلاحية الدخول على بيئة العمل. وإذا لم تكن النصوص مكتوبة بالكامل، يمكنني صياغة هيكلية الأقسام بالاعتماد على النقاط التوضيحية للعميل."
    },
    {
      qEn: "What is your typical turnaround time per website?",
      qAr: "ما هي المدة المعتادة لتسليم الموقع؟",
      aEn: "Standard 4–6 page business websites or conversion funnels are typically delivered ready for agency review within 3 to 7 business days from receiving complete assets and brief. Rush turnarounds can be coordinated based on capacity.",
      aAr: "المواقع التجارية القياسية المكونة من 4 إلى 6 صفحات أو صفحات الهبوط تستغرق عادة من 3 إلى 7 أيام عمل لتكون جاهزة لمراجعة الوكالة، وذلك فور استلام المتطلبات والملفات. يمكن أيضاً التنسيق لتسليمات أسرع في الحالات العاجلة."
    },
    {
      qEn: "How does the pricing and payment structure work for agencies?",
      qAr: "كيف يعمل نظام التسعير والدفع للوكالات؟",
      aEn: "I work strictly on a flat, project-based fee or recurring monthly sprint model. You get an exact quote upfront for each brief so your agency can maintain predictable margins. Payment is typically structured with a project deposit and final balance upon delivery.",
      aAr: "أعمل بنظام السعر الثابت لكل مشروع أو بنظام الاشتراكات الشهرية المحددة. تحصل الوكالة على تسعير مسبق وواضح لكل مشروع قبل البدء لتضمن هامش ربحك بكل دقة. الدفع يتم عادة بدفعة أولى عند البدء والمتبقي عند اعتماد التسليم النهائي."
    },
    {
      qEn: "What if the agency or the client requests revisions?",
      qAr: "ماذا لو طلبت الوكالة أو عميلها تعديلات بعد التسليم؟",
      aEn: "Every project includes standard revision rounds to polish design, copy adjustments, and mobile responsiveness based on your agency's feedback until your team is 100% confident presenting it to the client.",
      aAr: "يتضمن كل مشروع جولات مراجعة مخصصة لضبط التفاصيل الدقيقة، وتعديل النصوص، ومراجعة التجاوب على الهواتف وفق ملاحظات وكالتكم حتى تشعروا بالثقة الكاملة في تسليمه لعميلكم النهائي."
    },
    {
      qEn: "Are you willing to sign a Non-Disclosure Agreement (NDA)?",
      qAr: "هل أنت مستعد لتوقيع اتفاقية سرية وعدم إفصاح (NDA)؟",
      aEn: "Absolutely. Protecting your agency's client relationships, proprietary workflows, and white-label confidentiality is central to this business model.",
      aAr: "نعم بالتأكيد وبكل سرور. الحفاظ على سرية عملاء وكالتك وحماية علاقتك التجارية وحقوق الوايت ليبل هو الركيزة الأساسية لهذا النموذج التعاوني."
    }
  ]
};

// Export globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
