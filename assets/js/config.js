/**
 * Global Configuration File
 * ====================================================================
 * Update your contact information, social links, and availability here.
 * Changes here will reflect across all pages.
 * ====================================================================
 */

const CONFIG = {
    // Personal & Brand Information
    author: {
        name: "Ahmed",
        roleEn: "White-Label Web Designer & GoHighLevel Specialist",
        roleAr: "مصمم مواقع ومطور GoHighLevel بنظام White-Label للوكالات",
        locationEn: "Kuwait / GCC Remote Partner",
        locationAr: "الكويت / شريك تنفيذي لدول الخليج",
        experienceYears: "4+",
        websitesDelivered: "30+",
    },

    // Contact Channels (Replace with your actual contact details)
    contact: {
        email: "ahmed.whitelabel.design@gmail.com", // <-- REPLACE with your professional email
        whatsappNumber: "+96500000000", // <-- REPLACE with your WhatsApp number (e.g. +965XXXXXXXX)
        whatsappDisplay: "+965 (Direct Line)", // <-- Display text for WhatsApp
        whatsappUrl: "https://wa.me/96500000000?text=Hello%20Ahmed,%20we%20are%20an%20agency%20interested%20in%20white-label%20fulfillment.", // <-- REPLACE WhatsApp link
        linkedinUrl: "https://linkedin.com/in/your-profile", // <-- REPLACE with your LinkedIn URL
        calendarBookingUrl: "#contact-form", // <-- Optional Calendly or direct form link
    },

    // Availability & Operational Status
    status: {
        isAvailable: true,
        badgeEn: "Available for Agency Partnerships & Sprints",
        badgeAr: "متاح حالياً لشراكات الوكالات والمشاريع الجديدة",
        typicalTurnaroundEn: "3–7 business days per standard website",
        typicalTurnaroundAr: "3 إلى 7 أيام عمل للموقع القياسي",
    },

    // Agency Protection Guarantees
    guarantees: {
        whiteLabelEn: "100% White-Label Fulfillment (Your Brand, Behind the Scenes)",
        whiteLabelAr: "تنفيذ بنظام الوايت ليبل 100% (باسم وكالتك وخلف الكواليس)",
        clientProtectionEn: "Strict Non-Circumvention: You Own 100% of the Client Relationship",
        clientProtectionAr: "حماية تامة لعلاقة العميل: وكالتك هي الواجهة الوحيدة دائماً",
    }
};

// Export to window for global access
window.PORTFOLIO_CONFIG = CONFIG;