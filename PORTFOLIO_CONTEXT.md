# A Generative Slice — Website Portfolio & Products Context Engine

> **Document Type**: Single Shared Context File (Always swapped / updated in place)  
> **Location**: `/sdcard/A-Generative-Slice/A-generative-slice/PORTFOLIO_CONTEXT.md`  
> **Target Domain**: `agenerativeslice.com` / `A-Generative-Slice`  
> **Founder / Lead**: Mohammed Hussain (`smdhussain06` • `s.m.d.hussainjoe@gmail.com`)  
> **Last Synchronized**: September 24, 2026  
> **Live Local Preview**: **`http://localhost:3000`**  
> **Live Wi-Fi LAN Preview**: **`http://192.168.125.199:3000`**  

---

## 1. Local & Wi-Fi Network Access

The preview server is bound to `0.0.0.0:3000` with SPA routing and cache-invalidation headers. It is accessible across your entire Wi-Fi / Local Area Network.

### Across Wi-Fi (Any Device on the same Network - Laptop, PC, Tablet, Phone):
- 🌐 **Home / Main Site**: **`http://192.168.125.199:3000`**
- 🚀 **Dedicated ProdX / In-House Products**: **`http://192.168.125.199:3000/products`**
- 🏛️ **Client Case Studies & Projects**: **`http://192.168.125.199:3000/projects`**
- 💼 **Services**: **`http://192.168.125.199:3000/services`**
- ℹ️ **About Us**: **`http://192.168.125.199:3000/about`**

### On Host Device (Localhost):
- 📱 **Local**: **`http://localhost:3000`**
- 📱 **Products**: **`http://localhost:3000/products`**
- 📱 **Projects**: **`http://localhost:3000/projects`**

---

## 2. Brand Identity & Design System Alignment

| Element | Specification | Implementation in Code |
| :--- | :--- | :--- |
| **Primary Brand Orange** | `#FF5C00` / `#FF8C1A` | Applied via Tailwind `--color-brand-orange: #FF5C00`, `--color-brand-orange-light: #FF8C1A`, and custom gradient utility classes. |
| **Dark Header / Slate** | `#0F172A` / `#111111` | Header navigation, hero card backgrounds, and contrast borders. |
| **Backgrounds** | Dark `#0A0A0A` / Light `#FAFAFA` & Soft Slate `#F8FAFC` | Smooth dual-theme background tokens with glassmorphism overlays. |
| **Typography (Headings)** | **Montserrat** (Bold / Black, weights 700, 800, 900) | Loaded in `index.html` via Google Fonts; configured as primary font family in `index.css`. |
| **Typography (Body / Accents)** | **Poppins** & **Inter** (Medium / Regular, weights 400, 500, 600) | Loaded in `index.html`; body text and UI labels utilize Poppins/Inter. |
| **Hero Background Bug Fix** | Absolute path eliminated | Line 26 in `Hero.tsx` changed from local `/home/smdhussain/...` to relative `/brand-bg.svg` with high-contrast architectural vector backdrop. |

---

## 3. Structural Divide: "Projects" vs "ProdX"

We have eliminated the generic "₹100 tools shop" concept. The portfolio is strictly divided into two distinct tiers:

```
A GENERATIVE SLICE PLATFORM
│
├── A. CLIENT CASE STUDIES & BESPOKE DELIVERABLES (/projects & Homepage Showcase)
│   ├── Hospitality & F&B: Sree Ambal Catering, Your Huckleberry, Arusuvai Arasu
│   ├── Architecture & Real Estate: NAS Design & Construction, NAS Internationals
│   ├── Luxury E-Commerce & Retail: Velvet Trunk, Rose Chemicals, Project Mald
│   └── Haute Couture: H. Pooja Wardrobes, Najeema Afrin Atelier
│
└── B. PRODX: PROPRIETARY IN-HOUSE ENGINES (/products)
    ├── 1. AGS Spatial 3D Studio (Real-time Three.js / Spline 3D canvas)
    ├── 2. AGS Omnichannel Outreach Engine (Automated B2B prospecting agent)
    ├── 3. Executive AI Drafter (Zoho Mail eWidget Extension)
    ├── 4. LiteLab AI Chief of Staff (Inbox intelligence protocol)
    └── 5. LiteRight Academy (Interactive EdTech LMS)
```

---

## 4. Comprehensive Catalog Specifications

### Tier A: Real Client Deliverables (`/projects` & Homepage Featured Section)

| # | Client Brand | Industry Vertical | Deliverable / Architecture | Challenge & Business Solution |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **Sree Ambal Catering** | Hospitality & F&B | Offline PWA + Firestore; multilingual Tamil/English catalog | Solved distributed banquet stock discrepancies and kitchen dispatch delays across wedding venues without stable internet. |
| 2 | **Your Huckleberry** | Hospitality & F&B | Artisanal Bakery & Cloud Kitchen; interactive cake customizer | Transitioned a boutique Thousand Lights artisanal cake kitchen into an automated digital checkout and custom order hub. |
| 3 | **Arusuvai Arasu** | Hospitality & F&B | 60-Second Automated Banquet Quote Generator | Replaced 48-hour manual estimation delays with an instant menu calculator and dynamic PDF contract generator. |
| 4 | **NAS Design & Construction** | Architecture & Real Estate | Interactive 3D Architectural Portfolio; GSAP animations | Elevated luxury brand perception for high-net-worth real estate buyers and institutional development contracts. |
| 5 | **NAS Internationals** | Architecture & Real Estate | Luxury Travel Booking, Supabase, AI visa verification | Streamlined multi-country visa applications with automated document validation and applicant status tracking. |
| 6 | **Velvet Trunk** | Luxury E-Commerce & Retail | Interactive Exhibition Floorplan & Stall Booking Engine | Eliminated double-booking friction for luxury pop-up expos with real-time SVG stall selection and automated invoicing. |
| 7 | **Rose Chemicals** | Luxury E-Commerce & Retail | B2B Industrial Catalog; Sarvam AI WhatsApp ordering | Replaced manual phone/email orders with 24/7 conversational ordering and automated PDF tax invoice reconciliation. |
| 8 | **Project Mald** | Luxury E-Commerce & Retail | Enterprise Trading ERP, Tesseract OCR, Gemini Invoice Parser | End-to-end multi-godown inventory synchronization automating physical paper waybill capture with zero human entry error. |
| 9 | **H. Pooja** | Haute Couture | Film Costume Design & Celebrity Bridal Styling Portfolio | High-fashion digital lookbook presenting cinema wardrobe archives to Kollywood directors and celebrity bridal clients. |
| 10 | **Najeema Afrin** | Haute Couture | Haute Couture Lookbook & Atelier Consultation Engine | Exclusive bridal showcase for bespoke Victorian Glam and hand embroidery, driving direct atelier bookings. |

---

### Tier B: ProdX — Proprietary In-House Engines (`/products`)

| # | Engine Name | Category & Status | Core Capabilities & Architecture | Repository / License |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **AGS Spatial 3D Studio** | Real-time 3D Engine • Live Alpha | Headless Blender 3D spatial computing engine; procedural MCP bridge; automated GLTF/GLB web asset generation; Three.js / Spline viewport. | [`spatial-3d-studio`](file:///sdcard/A-Generative-Slice/spatial-3d-studio) • Enterprise API |
| 2 | **AGS Omnichannel Outreach Engine** | Autonomous Agent • Production Ready | 4-tier pipeline: Playwright Google Maps lead extraction, RFC 5321 SMTP mailbox auditing, headless WhatsApp dispatch, Instagram Direct DM queue. | [`lead-generation`](file:///sdcard/A-Generative-Slice/lead-generation) • Growth Retainers |
| 3 | **Executive AI Drafter** | Productivity Extension • Live v1.2 | Zoho Mail eWidget right-sidebar extension; BYOK Google Gemini API architecture; auto-drafts contextual replies and extracts action items. | [`zohoMailEditor`](file:///sdcard/A-Generative-Slice/zohoMailEditor) • Annual SaaS / BYOK |
| 4 | **LiteLab AI Chief of Staff** | Protocol & Ops Hub • Live v2.0 | FastMCP workspace triaging 4 corporate Zoho Mail channels; automated categorization, draft generation, and team routing. | [`litelabmailbox`](file:///sdcard/A-Generative-Slice/litelabmailbox) • Enterprise Internal Ops |
| 5 | **LiteRight Academy** | EdTech LMS • Enterprise Deployed | Monochromatic security-first LMS, OTP phone authentication, 16:9 studio video streaming, course progress tracking. | [`literight`](file:///sdcard/A-Generative-Slice/literight) • Corporate Licensing |

---

## 5. Form & Data Contract (Zoho CRM + Supabase Integration)

All client brief and product inquiry forms are bound to `src/utils/formSubmit.ts`. The schema strictly adheres to the enterprise Web-to-Lead standard:

```typescript
export interface LeadFormData {
  fullName: string;      // First & Last Name
  email: string;         // Business or Personal Email
  phone: string;         // Mobile / WhatsApp with Country Code
  company: string;       // Client Business / Brand Name
  category: string;      // Dropdown selection (Hospitality & F&B | 3D & Architecture | Enterprise Systems | AI & Automation)
  message: string;       // Project Scope / Inquiry Details
  attachment?: File | null; // Optional File (Briefs, Spec Sheets, RFPs)
}
```

The submission pipeline automatically detects Supabase/Zoho CRM environment endpoints:
- When configured: Sends multipart `FormData` payload to the lead ingestion webhook.
- Development / Offline Fallback: Gracefully caches submissions in `localStorage` (`ags_leads_backup`), emits structured console logs, and displays immediate success notifications to users.

---

## 6. Git Synchronization & Author Guidelines

- **Primary Git User**: `smdhussain06`
- **Primary Git Email**: `s.m.d.hussainjoe@gmail.com`
- **Global PAT**: Saved in `~/.git-credentials` (`store` helper)
- **All 20 Organization Repositories**: Up to date and clean under `/sdcard/A-Generative-Slice/`

---

## 7. Change Log & Verification Milestones

- **2026-09-24 (Update 7 - Brand & Structural Directives Completed)**:
  - **Fixed `Hero.tsx`**: Replaced absolute disk path with relative `/brand-bg.svg`.
  - **Brand Typography**: Integrated Montserrat for bold headers and Poppins/Inter for body.
  - **Color Palette**: Locked Brand Orange (`#FF5C00` / `#FF8C1A`) and Dark Slate (`#0F172A`).
  - **Strict Divide**: Replaced generic shop with rich Client Case Studies (`/projects`) and ProdX Proprietary Engines (`/products`).
  - **Data Contract**: Integrated standardized 7-field Zoho CRM / Supabase Web-to-Lead submission handler.
  - **Build Verification**: Clean production build via Vite 7.3 (`tsc -b && vite build`) with zero lint/type errors.
  - **Live Preview**: Running on `0.0.0.0:3000`, accessible on `http://localhost:3000` and Wi-Fi LAN `http://192.168.125.199:3000`.