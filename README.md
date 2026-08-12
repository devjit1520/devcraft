<div align="center">

<img src="./docs/devcraft-cover.svg" width="100%" alt="DevCraft — Web Design and Frontend Development Services" />

<br/>

# DevCraft

### Web Design & Frontend Development Services Website

A modern React service website built to present web design, frontend development, redesign, responsive UI and maintenance services through a polished, conversion-focused experience.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_DevCraft-111111?style=for-the-badge&logo=vercel&logoColor=ffffff)](https://devcraft-peach.vercel.app/)
[![React](https://img.shields.io/badge/React-19-111111?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-111111?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-111111?style=for-the-badge&logo=gmail&logoColor=EA4335)](https://www.emailjs.com/)

</div>

---

## Overview

**DevCraft** is a frontend-focused service website designed to present web development services in a professional and business-friendly format.

The project combines responsive UI design, reusable React components, conversion-oriented content, animated interactions, service discovery, featured work, an interactive process section, FAQ content and a working EmailJS enquiry form.

From an engineering perspective, the homepage keeps critical content such as the navigation and hero immediately available while lazy-loading several below-the-fold sections with React `lazy()` and `Suspense` to reduce the initial JavaScript workload.

---

## Live Application

**Production:** https://devcraft-peach.vercel.app/

---

## Core Experience

### Hero & Navigation

- Responsive navigation experience
- Strong service-focused hero messaging
- Primary calls to action
- Professional visual hierarchy
- Mobile-friendly interaction patterns

### Service Presentation

DevCraft presents multiple web-development service categories, including:

- Landing Page Development
- React Frontend Development
- Business Websites
- WordPress Websites
- Website Redesign
- Responsive Development
- Performance Optimization
- Website Maintenance

Each service is presented with clear positioning, deliverables and supporting technology or business tags.

### Why DevCraft

A dedicated section communicates the value proposition behind the service offering and helps visitors understand what differentiates the development approach.

### Featured Work

The website includes a project showcase designed to connect service claims with practical frontend work.

### Interactive Process

A visual process timeline explains the workflow visitors can expect when starting a project.

### About

The About section adds personal and professional context to the service brand.

### FAQ

Frequently asked questions reduce uncertainty before a visitor submits an enquiry.

### Contact & Enquiries

- EmailJS-powered enquiry form
- Name and email validation
- Service selection
- Optional company information
- Budget-range selection
- Minimum project-message validation
- Loading state while sending
- Success and error feedback
- First-invalid-field focus handling
- Environment-based EmailJS configuration

### Additional Conversion Features

- Floating WhatsApp contact button
- Service marquee
- Responsive calls to action
- Social and professional contact paths

---

## Performance Architecture

DevCraft uses React code splitting for multiple below-the-fold sections.

```text
Critical initial content
├── Navbar
├── Hero
├── Service Marquee
└── Interactive Process dependency

Lazy-loaded sections
├── Services
├── Why DevCraft
├── Featured Work
├── About
├── FAQ
├── Contact
└── Footer
```

Each lazy section is wrapped in `Suspense` with a lightweight visual fallback so users do not see an empty page area while the chunk is loading.

This structure demonstrates practical use of:

- `React.lazy()`
- `Suspense`
- Vite code splitting
- Loading-state UX
- Separation of page sections into independent feature components

---

## SEO Foundation

The project contains an SEO-focused document head with:

- Search-friendly page title
- Meta description
- Search keywords
- Robots indexing directive
- Canonical URL configuration
- Open Graph metadata
- Twitter/X card metadata
- Social preview image support
- Theme-color metadata
- Google Search Console verification slot
- Structured data using JSON-LD

Structured data describes the project as a website and professional service and includes web design and frontend-development service information.

> When using a different production domain, update the canonical URL, Open Graph URL, social preview URLs and Search Console verification value in `index.html` so they match the final deployment.

---

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Language | JavaScript ES6+ |
| Build Tool | Vite 8 |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Contact | EmailJS Browser SDK |
| Deployment | Vercel |
| SEO | Meta tags, Open Graph, JSON-LD |

---

## Project Structure

```text
devcraft/
├── public/
├── docs/
│   └── devcraft-cover.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── process/
│   │   ├── projects/
│   │   ├── services/
│   │   └── why/
│   ├── data/
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## Component Architecture

```text
App
└── HomePage
    ├── Navbar
    ├── Hero
    ├── ServiceMarquee
    ├── Services
    ├── WhyDevCraft
    ├── FeaturedWork
    ├── InteractiveProcessTimeline
    ├── About
    ├── FAQ
    ├── Contact
    ├── WhatsAppFloatingButton
    └── Footer
```

The page is organized by feature responsibility rather than placing the full site into one large React component.

---

## Contact Form Flow

```text
Visitor completes enquiry form
        ↓
Client-side validation
        ↓
Focus first invalid field when needed
        ↓
Validate EmailJS environment configuration
        ↓
Create template parameters
        ↓
EmailJS sends enquiry
        ↓
Success or error UI feedback
        ↓
Reset form after successful submission
```

The submitted data can include the visitor's name, email, company, requested service, budget range, project message, submission time and current page URL.

---

## Environment Variables

Create a local environment file before using the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Do not commit real environment files to the repository.

---

## Run Locally

```bash
git clone https://github.com/devjit1520/devcraft.git
cd devcraft
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Engineering Highlights

- Feature-based React component organization
- Responsive layout system
- Conversion-focused service presentation
- Reusable service data structures
- Motion-based UI interactions
- EmailJS integration with validation
- React lazy loading and Suspense
- Lightweight section-loading fallbacks
- SEO and social metadata foundation
- JSON-LD structured data
- Responsive contact and CTA flows
- Vercel-ready deployment setup

---

## What This Project Demonstrates

DevCraft demonstrates my ability to build a frontend project for a **business objective**, not only a technical demo.

The project combines UI implementation with service positioning, responsive design, interactive components, lead-generation flows, performance-minded code splitting, SEO foundations and deployment considerations.

---

## Future Improvements

- Connect enquiry submissions to a CRM or backend
- Add automated form spam protection
- Add real client case studies and measurable results
- Expand accessibility testing
- Add automated performance monitoring
- Add analytics and conversion-event tracking
- Add dedicated service-detail routes
- Add a CMS for service and project content

---

## Author

**Devjit Mondal**  
Frontend Developer

- Portfolio: https://portfolio-devjit.vercel.app/
- GitHub: https://github.com/devjit1520
- LinkedIn: https://www.linkedin.com/in/devjit-mondal-b68947233/

---

<div align="center">

Built with React, Tailwind CSS, Framer Motion and EmailJS.

</div>
