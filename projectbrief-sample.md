# Project Brief

## Overview
Building a [type of application] that will [main purpose].

## Core Features
- Feature 1
- Feature 2
- Feature 3

## Target Users
[Describe who will use your application]

## Technical Preferences (optional)
- Any specific technologies you want to use
- Any specific requirements or constraints

---

## Template Setup

This project was bootstrapped from [nextjs-template](https://github.com/masakudamatsu/nextjs-template). The toolchain is pre-configured — do not change the following unless intentional.

### Key File Locations

| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout — `<html>`, `<body>`, site-wide metadata (robots) |
| `src/app/page.tsx` | Home page — page-level metadata (`title`, `description`) |
| `src/app/globals.css` | Tailwind entry point — `@import 'tailwindcss'` + `@theme {}` custom tokens |
| `src/app/sitemap.ts` | Generates `/sitemap.xml`; add new pages to the `PAGES` array |
| `src/app/not-found.tsx` | Custom 404 page |
| `src/app/lib/metadata.json` | Shared title/description values (keeps page code and tests in sync) |
