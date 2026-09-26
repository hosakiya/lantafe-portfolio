# Mikaela Ysabel Lantafe — Portfolio Website

A modern, elegant, and professional personal portfolio website designed for **Mikaela Ysabel Lantafe**, a 4th-year **Bachelor of Science in Information Technology** student at **De La Salle Lipa** specializing in **UI/UX Design**, **Front-End Web Development**, and **Graphic Design**.

Built with **React 19**, **Vite**, and **Tailwind CSS v4**, this portfolio is tailored for tech recruiters, design managers, and engineering teams evaluating candidates for **OJT / Internship** and entry-level IT positions.

---

## 🌟 Key Features

- **Minimalist, High-Craft Aesthetic**: Clean typography, generous whitespace, rounded cards, subtle shadows, and zero visual clutter.
- **Light & Dark Mode**: Persistent theme toggle remembering user preference and matching OS color scheme.
- **Sticky Navigation**: Smooth scrolling with active section indicator (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Contact`) and mobile responsive drawer.
- **Hero Spotlight**: Strong introduction highlighting Mikaela's multidisciplinary skill set, direct CTAs, social profiles, and a customizable profile photo container.
- **iskoMats Primary Capstone Spotlight**:
  - Detailed showcase of the *Smart Scholarship Matching and Application Management System* developed for Lipa City government scholarship programs.
  - Complete, structured **Case Study modal** covering: *Overview → Problem → Goals → My Role → Design Process → Technologies → Key Features → Challenges & Solutions → Results → What I Learned*.
- **Secondary Project Cards**: Responsive cards for *Pet Grooming Services Booking System*, *UI/UX Design Projects*, and *Graphic Design Portfolio*.
- **Category-Based Skills (No Fake Percentage Bars)**: Grouped into *Front-End Development*, *Backend & Database*, *UI/UX & Design*, and *Other Skills & Tools* with recognizable technology icons.
- **Interactive Graphic Design Gallery**: Filterable showcase (*All*, *Branding*, *Social Media*, *Web Design*, *UI/UX*, *Other*) with clean lightbox modals.
- **Experience Timeline**: Highlights freelance web & graphic design work alongside clearly designated upcoming *OJT / IT Internship* placement space.
- **Academic Background**: Education card for De La Salle Lipa with coursework, academic achievements, and graduation timelines.
- **Certifications Grid**: Responsive credential cards with verification links and modal viewer.
- **Contact Form & Direct Channels**: Fully validated contact form (name, email, subject, message) with submission feedback and direct links.
- **Curriculum Vitae / Resume Modal**: Interactive printable and exportable CV view.
- **Custom 404 Fallback**: Dedicated 404 screen (testable via `/#404`).

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+) is installed.

### 2. Development Server
Run the local Vite development server:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Build optimized production assets:
```bash
npm run build
```
Preview the built production output:
```bash
npm run preview
```

---

## 📁 Project Structure

```
PORTF/
├── public/
│   ├── favicon.svg             # Custom monogram SVG favicon
│   └── og-image.png            # Open Graph social preview placeholder
├── src/
│   ├── assets/                 # Profile photos and static assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with active scroll spy & theme toggle
│   │   ├── Hero.jsx            # Hero banner & profile photo container
│   │   ├── About.jsx           # Bio narrative & snapshot card
│   │   ├── Skills.jsx          # Clean categorized competencies
│   │   ├── Projects.jsx        # Project showcase container
│   │   ├── ProjectCard.jsx     # Featured & secondary card layouts
│   │   ├── ProjectMockups.jsx  # High-fidelity UI mockups (iskoMats, Pet Grooming, etc.)
│   │   ├── CaseStudyModal.jsx  # In-depth case study modal
│   │   ├── Experience.jsx      # Clean career & OJT timeline
│   │   ├── Education.jsx       # De La Salle Lipa degree details & coursework
│   │   ├── Certifications.jsx  # Certification grid & verification viewer
│   │   ├── GraphicGallery.jsx  # Filterable design portfolio
│   │   ├── GalleryVisuals.jsx  # Visual representations of design works
│   │   ├── GalleryLightbox.jsx # Lightbox modal for design pieces
│   │   ├── Contact.jsx         # Validated contact form & direct channels
│   │   ├── Footer.jsx          # Copyright, social icons & back-to-top
│   │   ├── ResumeModal.jsx     # Printable CV / Resume view
│   │   ├── NotFound.jsx        # Polite 404 page
│   │   └── Icons.jsx           # Clean SVG brand icons (LinkedIn, GitHub, Figma)
│   ├── context/
│   │   └── ThemeContext.jsx    # Light / Dark mode state management
│   ├── data/
│   │   ├── profile.js          # Personal details, bios, social links
│   │   ├── skills.js           # Tech categories and proficiencies
│   │   ├── projects.js         # iskoMats case study & project entries
│   │   ├── experience.js       # Freelance and OJT timeline entries
│   │   ├── education.js        # De La Salle Lipa academic records
│   │   ├── certifications.js   # Training credentials & certificates
│   │   └── gallery.js          # Graphic design pieces and categories
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React root mount
│   └── index.css               # Tailwind CSS & theme tokens
├── index.html                  # SEO, meta tags, Google Fonts
└── package.json
```

---

## 🛠️ How to Customize Your Information

All data is separated into clean, modular files inside `src/data/`:

| What to Update | File to Edit | Notes |
| :--- | :--- | :--- |
| **Social Links & Bio** | `src/data/profile.js` | Change LinkedIn, GitHub, email, and bio text |
| **Profile Photo** | `src/components/Hero.jsx` | Add `profile.jpg` in `src/assets/` and reference `src={profileImg}` |
| **iskoMats & Projects** | `src/data/projects.js` | Update live demo links, repository URLs, and case study points |
| **Skills & Tools** | `src/data/skills.js` | Add or reorder skills per category |
| **Job & OJT History** | `src/data/experience.js` | Update dates, roles, bullet points, and new positions |
| **Certifications** | `src/data/certifications.js` | Add credential IDs and verification URLs |
| **Graphic Design Gallery** | `src/data/gallery.js` | Add new design projects and categories |

---

## 📄 License & Attribution

Designed and developed for **Mikaela Ysabel Lantafe**.  
© 2026 Mikaela Ysabel Lantafe. All rights reserved.
