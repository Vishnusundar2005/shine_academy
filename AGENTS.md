# AGENTS.md

# Shine Tuition Academy — Development Agent Instructions

## 1. Project Context

This repository contains a frontend-only landing page for:

**Shine Tuition Academy — Class 11 & 12 Maths Board Exam Special**

The page is based on:

1. The existing Shine Tuition Academy website reference.
2. The supplied Class 11 & 12 Maths landing-page copy.
3. The approved project architecture defined in `PROJECT_PLAN.md`.

The goal is a polished, responsive, conversion-focused landing page.

---

# 2. Mandatory Technology

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS

Preferred architecture:

- Next.js App Router
- Functional React components
- TypeScript
- Tailwind utility classes

Do NOT introduce a backend or database.

---

# 3. Explicitly Do NOT Build

Do not add:

- Database
- Authentication
- User accounts
- Admin dashboard
- CMS
- API server
- Payment gateway
- Course dashboard
- Student portal
- Backend form storage
- Unnecessary server actions
- External CRM unless explicitly requested

The landing page is frontend-only.

---

# 4. Primary Business Goal

Optimise the page for:

**Parent/student enquiry for Class 11 & 12 Maths coaching.**

Primary CTA:

**CHECK AVAILABLE BATCH**

The page should make this CTA clear and accessible throughout the journey.

---

# 5. Source-of-Truth Rules

There are two references.

## Existing Website

Use it for:

- Brand direction
- Visual style
- Existing academy presentation
- Existing trust language
- Existing contact patterns

## Landing Page Copy

Use it for:

- Exact campaign messaging
- Section structure
- Programme positioning
- Core claims
- Lead form fields
- CTA language

When sources conflict, do not silently invent a solution.

Prefer the dedicated landing-page copy for this specific campaign.

---

# 6. Content Integrity

Never invent facts.

Do not add unsupported:

- Results
- Rankings
- Guarantees
- Statistics
- Testimonials
- Faculty credentials
- Awards
- Affiliations
- Student counts beyond the stated 30-student batch limit
- Years of experience beyond the stated 15 years
- Fees
- Timings
- Batch dates
- Locations
- Refund policies

If information is missing, leave it out or use a clearly marked placeholder during development.

---

# 7. Core Claims Approved for the Page

The campaign can communicate:

- Class 11 & 12 Maths
- Board exam special
- CBSE
- State Board
- ICSE
- 15-year experienced PhD Professor
- Maximum 30 students per batch
- Direct doubt support
- Weekly mock tests
- Class recordings
- Concept-focused teaching
- Step-by-step problem solving
- Regular practice
- Board-focused preparation
- Structured Maths learning

---

# 8. Component Architecture

Prefer this structure:

```text
components/
├── Header.tsx
├── Hero.tsx
├── ProblemSection.tsx
├── MethodSection.tsx
├── ShineIntroSection.tsx
├── ProfessorSection.tsx
├── SmallBatchSection.tsx
├── MockTestSection.tsx
├── BenefitsSection.tsx
├── AudienceSection.tsx
├── CTASection.tsx
├── LeadForm.tsx
├── FAQ.tsx
└── Footer.tsx
```

Keep components focused.

Do not create a 1000+ line `page.tsx`.

---

# 9. Page Composition

`app/page.tsx` should primarily compose sections:

```tsx
<Header />
<main>
  <Hero />
  <ProblemSection />
  <MethodSection />
  <ShineIntroSection />
  <ProfessorSection />
  <SmallBatchSection />
  <MockTestSection />
  <BenefitsSection />
  <AudienceSection />
  <CTASection />
  <LeadForm />
  <FAQ />
</main>
<Footer />
```

The exact order may be refined during implementation if there is a strong UX reason, but the complete source content should remain represented.

---

# 10. Design Rules

The visual design must feel:

- Modern
- Premium
- Academic
- Trustworthy
- Clean
- Parent-focused
- Conversion-oriented

Avoid:

- Childish cartoon visuals
- Excessive gradients
- Excessive glassmorphism
- Huge decorative effects
- Over-animation
- Generic template appearance
- Dense walls of text

---

# 11. Brand Rules

Use the existing Shine website as the reference for the brand's:

- Colour direction
- Typography direction
- Logo treatment
- UI language
- Visual hierarchy

Do not invent an unrelated brand identity.

If exact brand tokens are unavailable, use a restrained neutral system and make it easy to replace later.

---

# 12. Tailwind Rules

Prefer Tailwind utility classes.

Use reusable component classes or CSS variables for:

- Brand colours
- Typography
- Repeated spacing
- Container widths
- Shadows
- Radii

Do not duplicate long arbitrary Tailwind class strings unnecessarily.

Use consistent max-width containers.

---

# 13. Responsive Rules

Design mobile-first.

Required considerations:

- Small phones
- Large phones
- Tablets
- Laptops
- Desktop
- Large desktop

Never allow:

- Horizontal overflow
- Text clipping
- CTA clipping
- Broken card grids
- Oversized hero typography on mobile
- Forms wider than the viewport

---

# 14. Form Rules

Required fields:

- Parent Name
- WhatsApp Number
- Student Class
- Board

Class:

- Class 11
- Class 12

Board:

- CBSE
- State Board
- ICSE

Validation should happen before the WhatsApp action.

The form should not write to a database.

---

# 15. WhatsApp Rules

Use a single configuration source for the verified academy WhatsApp number.

Example:

```ts
export const academyConfig = {
  whatsappNumber: "...",
  phoneNumber: "...",
};
```

Do not duplicate phone/WhatsApp numbers across multiple components.

Generate a clear prefilled message.

Never send secrets to the browser.

---

# 16. Images

Use Next.js `Image`.

Requirements:

- Optimised dimensions
- Appropriate `sizes`
- Descriptive alt text
- Lazy loading where appropriate
- Avoid unnecessary large source files

Do not fabricate:

- Professor images
- Student results
- Classroom results
- Testimonials

Use only approved assets.

---

# 17. Icons

Use one consistent icon library.

Recommended:

**Lucide React**

Do not mix multiple icon libraries without a reason.

---

# 18. Animation Rules

Animation must improve UX, not distract.

Allowed:

- Subtle entrance animation
- Hover transitions
- FAQ transitions
- Smooth scrolling
- CTA feedback

Avoid:

- Heavy parallax
- Constant motion
- Large animation dependencies
- Distracting background animations

Respect reduced-motion preferences.

---

# 19. Accessibility

Every implementation must consider:

- Semantic HTML
- Keyboard navigation
- Focus states
- Form labels
- Error messages
- Contrast
- Alt text
- Button semantics
- Accessible accordion behaviour

Do not use clickable `div`s when a button/link is appropriate.

---

# 20. SEO

Implement:

- Metadata
- Title
- Description
- Open Graph metadata
- Correct heading hierarchy
- Semantic sections
- Canonical URL once production URL is known

Do not keyword-stuff the page.

---

# 21. Performance

Prioritise:

- Fast first render
- Optimised images
- Minimal client-side JavaScript
- Minimal dependencies
- Static/server rendering where appropriate
- No unnecessary data fetching

Do not turn the whole page into a client component.

Only interactive components should require client-side behaviour.

Examples:

- Lead form
- FAQ
- Mobile menu if implemented

---

# 22. TypeScript

Use strict TypeScript.

Avoid:

```ts
any
```

unless there is a documented reason.

Create types for structured content where useful.

---

# 23. Configuration

Keep campaign configuration in one place.

For example:

```text
config/
└── academy.ts
```

Possible configuration:

```ts
export const academyConfig = {
  name: "Shine Tuition Academy",
  whatsappNumber: "...",
  phoneNumber: "...",
};
```

Only put public values here.

---

# 24. Environment Variables

Do not add environment variables unless genuinely necessary.

If an environment variable is needed later:

- Document it
- Add `.env.example`
- Never commit secrets
- Never expose private secrets using `NEXT_PUBLIC_`

For the basic V1 WhatsApp flow, no secret API key is required.

---

# 25. Error Handling

The page must fail gracefully.

Examples:

- Invalid phone number → show inline error
- Missing required field → show inline error
- Invalid selection → prevent submission
- Missing optional image → use a graceful fallback during development

Do not show technical stack traces to users.

---

# 26. Code Quality

Before considering work complete:

```bash
npm run lint
npm run build
```

Also run TypeScript checking if configured.

Fix all:

- Type errors
- Lint errors
- Build errors
- Broken imports
- Missing assets

---

# 27. Testing

Test manually:

### Desktop

- 1280px
- 1440px
- 1920px

### Mobile

- 320px
- 375px
- 390px
- 414px

### Tablet

- 768px
- 1024px

Check:

- Header
- Hero
- Every CTA
- Form
- FAQ
- Footer
- WhatsApp link
- Phone link
- Images
- Overflow

---

# 28. Git / Change Discipline

Make focused changes.

Do not:

- Rewrite unrelated files
- Install unnecessary packages
- Change configuration without reason
- Remove existing useful functionality
- Replace assets without approval

Keep commits logically grouped if Git is being used.

---

# 29. Implementation Order

Follow this order:

1. Inspect existing repository.
2. Confirm current Next.js/Tailwind setup.
3. Establish design tokens.
4. Add approved assets.
5. Build header.
6. Build hero.
7. Build content sections.
8. Build CTA sections.
9. Build lead form.
10. Implement WhatsApp flow.
11. Implement FAQ.
12. Add responsive behaviour.
13. Add subtle animations.
14. Add SEO.
15. Run lint/type/build.
16. Perform responsive QA.
17. Fix visual issues.
18. Final verification.

---

# 30. Do Not Ask Unnecessary Questions

If a reasonable implementation decision can be made from the project plan and references, make it.

Ask only when a missing detail materially blocks implementation, such as:

- Missing required asset
- Unknown verified WhatsApp number
- Conflicting business information
- A required claim not supported by the source

Do not stop implementation for minor design choices.

---

# 31. Final Verification Checklist

Before completion:

- [ ] Next.js used
- [ ] TypeScript used
- [ ] Tailwind CSS used
- [ ] No backend
- [ ] No database
- [ ] All main landing-page sections implemented
- [ ] Primary CTA consistent
- [ ] Lead form implemented
- [ ] WhatsApp flow implemented
- [ ] Phone CTA implemented
- [ ] FAQ implemented
- [ ] Responsive design verified
- [ ] Accessibility basics verified
- [ ] SEO metadata added
- [ ] Images optimised
- [ ] No unsupported claims
- [ ] No console errors
- [ ] Lint passes
- [ ] Build passes

---

# 32. Agent Behaviour

Act as a senior frontend engineer and product designer.

Priorities:

1. Correctness
2. Source/content fidelity
3. Conversion UX
4. Responsive quality
5. Accessibility
6. Performance
7. Maintainability

Do not over-engineer the project.

Build the simplest high-quality solution that satisfies the requirements.
