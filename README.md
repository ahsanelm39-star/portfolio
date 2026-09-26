# Premium White-Label Web Designer & GoHighLevel Portfolio

A high-end, conversion-focused B2B sales asset built specifically to attract digital marketing agencies, lead generation agencies, GoHighLevel agencies, and local business marketing firms across Kuwait, the GCC, and internationally.

---

## 💎 Core Positioning & Value Proposition

> **"You manage the client relationship. I handle the website execution behind the scenes."**

* **100% White-Label Fulfillment:** The agency remains the sole client-facing hero. No personal branding in footers, no client poaching, strict non-circumvention.
* **GoHighLevel Specialist:** Native GHL websites, funnels, and sub-account setups enhanced with custom CSS for an ultra-luxury bespoke aesthetic.
* **Kuwait & GCC Market Context:** Deep understanding of local Gulf business culture, WhatsApp-centric lead flows, and bilingual Arabic (RTL) & English (LTR) parity.
* **Flexible Capacity:** Enables agencies to scale delivery capacity during project surges without adding permanent monthly payroll overhead.

---

## 📁 Project File Structure

```
├── index.html                   # High-converting Homepage (B2B sales asset & interactive pipeline)
├── work.html                    # Filterable Portfolio Gallery
├── services.html                # Comprehensive Services & Agency Comparison Matrix
├── about.html                   # Agency Background, Kuwait Experience & Operational Principles
├── contact.html                 # Agency Project Intake Form, Direct Channels & FAQs
├── 404.html                     # Branded 404 Error Page with Navigation Recovery
├── README.md                    # Project Documentation & Customization Guide
│
├── work/                        # Dedicated In-Depth Case Studies
│   ├── automotive-service.html  # Apex Performance (Kuwait, Luxury Garage, GHL, Bilingual)
│   ├── logistics-group.html     # Gulf Horizon Cargo (GCC Freight, Corporate B2B, RFQ Funnel)
│   ├── medical-center.html      # Lumina Aesthetic Clinic (Salmiya, Paid Ad Lander, GHL Calendar)
│   ├── real-estate-group.html   # Al-Dar Prestige Commercial Realty (Kuwait City, Floorplans)
│   ├── legal-consultancy.html   # Sovereign Legal Advisors (Kuwait Financial Hub, M&A)
│   └── artisan-hospitality.html # Manoir Culinary & Specialty Roastery (Interactive Mobile Menu)
│
└── assets/
    ├── css/
    │   └── main.css             # Dark luxury design system, RTL helpers, custom keyframes & glow
    ├── js/
    │   ├── config.js            # Single source of truth for email, WhatsApp, phone, LinkedIn
    │   ├── data.js              # Centralized project architecture, services data, comparison matrix, FAQs
    │   ├── i18n.js              # Bilingual engine (EN / AR) with dynamic RTL/LTR switching & persistence
    │   ├── animations.js        # IntersectionObserver scroll reveals, interactive pipeline simulator, FAQ accordion
    │   └── app.js               # Application coordinator, mobile drawer, form validation & dynamic year
    └── images/
        ├── profile/
        │   └── profile-placeholder.svg  # High-end profile frame placeholder (ready for your photo)
        └── projects/
            ├── project-automotive.svg   # Luxury dark UI mockup (Apex Performance)
            ├── project-logistics.svg    # Corporate logistics interface mockup (Gulf Horizon)
            ├── project-medical.svg      # Aesthetic dermatology mobile funnel mockup (Lumina)
            ├── project-realestate.svg   # Commercial real estate interface mockup (Al-Dar)
            ├── project-legal.svg        # Corporate law firm interface mockup (Sovereign Legal)
            └── project-restaurant.svg   # Artisan hospitality mobile menu mockup (Manoir)
```

---

## 🚀 How to Run Locally

Because this project is built with clean vanilla HTML, CSS, and modern JavaScript, you do **not** need a build step or complex compiler to run it.

### Option 1: Double Click
Simply double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Safari, Firefox).

### Option 2: Live Server (Recommended)
If using VS Code, install the **Live Server** extension, right-click `index.html`, and select **"Open with Live Server"**.

### Option 3: Python Simple Server
Open your terminal in this directory and run:
```bash
# Python 3
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 4: Node.js (npx serve)
```bash
npx serve .
```

---

## ⚙️ How to Customize & Maintain

### 1. Update Contact Information & Social Profiles
Open `assets/js/config.js`. This is your single source of truth for:
* **Email:** `contact.email` (updates all `mailto:` links across the site)
* **WhatsApp Number & Link:** `contact.whatsappNumber` and `contact.whatsappUrl`
* **LinkedIn Profile:** `contact.linkedinUrl`
* **Availability Status:** `status.badgeEn` and `status.badgeAr`

### 2. Replace Project Screenshots & Headshot
All images are cleanly organized in `assets/images/`:
* **Profile Headshot:** Replace `assets/images/profile/profile-placeholder.svg` with your professional portrait (e.g. `profile.jpg` or `profile.png`), and update the `<img src="...">` path in `index.html` and `about.html`.
* **Project Screenshots:** Replace `project-automotive.svg`, `project-logistics.svg`, etc., with your actual client website screenshots in `assets/images/projects/`.

### 3. Add or Modify Projects
Open `assets/js/data.js`:
* Each project is defined as an object with `titleEn`, `titleAr`, `industryEn`, `industryAr`, `platformEn`, `platformAr`, `challengeEn`, `approachEn`, and `tags`.
* Add new projects to the `PORTFOLIO_DATA.projects` array.

### 4. Update English & Arabic Copy
Open `assets/js/i18n.js`:
* Contains complete dictionaries for both English (`en`) and Arabic (`ar`).
* Every element with a `data-i18n="key"` attribute automatically updates when the language switcher (`EN / عربي`) is toggled.
* Translations are saved to `localStorage`, preserving the visitor's language preference across page navigations.

---

## 🌐 Bilingual & RTL Engineering

* **Real RTL Switcher:** Toggling to Arabic dynamically updates `<html lang="ar" dir="rtl">`, applies modern Arabic typography (`IBM Plex Sans Arabic` and `Tajawal`), mirrors flex and grid layouts, and flips directional navigation icons.
* **Culturally Grounded Copy:** All Arabic translations are professionally crafted for the Kuwait and GCC business environment — not generic automated translations.

---

## 🔒 Confidentiality & Agency Guarantees

* **Zero Fake Metrics:** No fabricated case study metrics, fake client logos, or artificial awards.
* **Strict Non-Circumvention:** Designed specifically to assure agency owners and operations managers that their client relationships are 100% protected.
