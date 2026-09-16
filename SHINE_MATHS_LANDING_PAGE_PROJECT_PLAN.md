# Shine Tuition Academy — Class 11 & 12 Maths Landing Page
## Complete Project Plan

## 1. Project Overview

Build a focused, high-conversion landing page for **Shine Tuition Academy** promoting its:

> **Class 11 & 12 Maths Board Exam Special**

The page should use the existing Shine Tuition Academy website as the **brand/design reference** and the supplied landing-page copy PDF as the **primary content and conversion reference**.

The landing page is intentionally narrower than the main academy website. It should focus on one offer, one audience, and one primary action:

> **Parents of Class 11 & 12 students → Check available Maths batch**

### Primary Goal

Generate enquiries from parents/students interested in Class 11 & 12 Maths coaching.

### Primary CTA

**CHECK AVAILABLE BATCH**

### Secondary CTAs

- WhatsApp enquiry
- Call the academy

---

# 2. Source References

## Existing Shine Tuition Academy Website

Reference website:

https://shinetuitionacademy.lovable.app/

Use it for:

- Brand identity
- Existing visual language
- Existing academy positioning
- Existing classroom/teacher presentation
- Existing trust signals
- Existing contact/CTA patterns
- Existing image direction

Do not blindly copy the complete website. The new page should be a dedicated campaign/landing page.

## Landing Page Copy PDF

The supplied PDF contains the dedicated Class 11 & 12 Maths landing-page messaging and section structure.

Important source content includes:

- Class 11 & 12 Maths Board Exam Special
- CBSE / State Board / ICSE
- Maximum 30 students per batch
- 15-year experienced PhD Professor
- Direct doubt support
- Weekly mock tests
- Class recordings
- Concept-focused teaching
- Step-by-step problem solving
- Regular practice
- Board exam preparation
- Lead form
- Limited-seat positioning

---

# 3. Technology Stack

## Required

### Next.js

Use Next.js as the frontend framework.

Recommended:

- Next.js with App Router
- TypeScript
- React
- Static/server-rendered page where appropriate

### Tailwind CSS

Use Tailwind CSS for:

- Layout
- Responsive design
- Typography
- Spacing
- Cards
- Buttons
- Form styling
- Responsive breakpoints
- Component states

### TypeScript

Use TypeScript throughout the project.

Avoid unnecessary `any` types.

---

# 4. Architecture

This project does NOT require:

- Backend
- Database
- Authentication
- User accounts
- Admin panel
- CMS
- API server
- Server-side database queries
- Payment system

The landing page should be a lightweight frontend application.

## Data Flow

User
→ Landing Page
→ CTA / Lead Form
→ WhatsApp or Phone

No internal database is required.

---

# 5. Form Strategy

The lead form should collect:

- Parent Name
- WhatsApp Number
- Student's Class
- Board

Optional:

- Additional message

The primary action is:

**CHECK BATCH AVAILABILITY**

The form does not need a database.

Recommended implementation:

1. Validate the form client-side.
2. Build a WhatsApp enquiry message.
3. Open WhatsApp with the prefilled enquiry.
4. Keep a direct phone CTA available.

Do not claim that an enquiry has been stored in a database.

---

# 6. Page Architecture

Recommended component structure:

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

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
├── FinalCTA.tsx
├── LeadForm.tsx
├── FAQ.tsx
└── Footer.tsx

public/
├── images/
├── icons/
└── ...
```

Keep components section-oriented and reusable.

---

# 7. Complete Landing Page Structure

## Section 01 — Top Bar

Purpose:

Immediately communicate the programme and scarcity.

Content:

**CLASS 11 & 12 MATHS | CBSE • STATE BOARD • ICSE**

Supporting message:

**Only 30 Students Per Batch**

CTA can remain visible depending on desktop/mobile design.

---

# 8. Section 02 — Hero

### Primary Headline

**CLASS 11 & 12 MATHS BOARD EXAM SPECIAL**

### Main message

**We Help Your Child Understand Maths, Solve Questions Independently & Score Higher — Without Blindly Memorising Formulas.**

### Supporting copy

A small-batch online Maths coaching program for Class 11 & 12 students, taught by a 15-year experienced PhD Professor — with only 30 students per batch, direct doubt support, and weekly mock tests.

The copy should also address the key pain point:

Students may understand Maths during class but still struggle when solving questions independently.

### Primary CTA

**CHECK AVAILABLE BATCH**

### Scarcity line

**Only 30 Students Per Batch • Limited Seats Available**

Hero design should immediately communicate:

- Maths
- Class 11/12
- Board exam
- Professor-led teaching
- Small batches
- Limited seats

---

# 9. Section 03 — Problem

### Heading

**Does Your Child Understand Maths… But Still Struggle When Solving Questions?**

Explain the common situation:

- They attend Maths class.
- They understand the teacher.
- They may say they understood everything.
- But when solving independently, they get stuck.

Common difficulties:

- Don't know which formula to use.
- Don't know how to start.
- Struggle to complete questions.
- Study for hours without enough improvement.

Core insight:

> Understanding a concept is only the first step.

The student must also learn how to apply the concept to different question types.

---

# 10. Section 04 — Shine Method

### Heading

**We Don't Just Teach Your Child What To Study. Teach Them How To Solve.**

Introduce the three-part method.

## 01 — Understand The Concept

Students should understand:

- Why a concept works
- How it works
- How it connects to questions

Avoid positioning the programme as formula memorisation.

## 02 — Learn How To Solve

Students are guided through different problem types.

Focus:

- How to approach a question
- Step-by-step solving
- Independent problem solving

Desired transition:

> “I understood the teacher.”

to:

> “I can solve this question myself.”

## 03 — Practice & Improve

Use:

- Regular practice
- Weekly mock tests
- Mistake identification
- Targeted improvement

---

# 11. Section 05 — Introduce Shine

### Heading

**Your Child Doesn't Need Just Another Online Maths Class.**

Message:

They need the right environment to actually learn.

Position Shine as a small-batch online Maths coaching environment.

### Core features

- 15-Year Experienced PhD Professor
- Maximum 30 Students
- Direct Doubt Support
- Weekly Mock Tests
- Class Recordings

Explain that small batches allow students to interact, ask doubts and receive proper attention.

---

# 12. Section 06 — Professor

### Heading

**Who Is Actually Teaching Your Child?**

This section should build trust.

Ask the parent to consider who is actually teaching the student.

### Core claim

**A PhD Professor With 15 Years Of Experience Teaches Class 11 & 12 Maths Directly.**

Clearly differentiate:

- Not a junior teacher.
- Not simply a pre-recorded course.

### CTA

**CHECK BATCH AVAILABILITY**

Use a professional professor image if an approved image is available.

Do not fabricate credentials, awards, institutions, qualifications, or achievements that are not supplied by the source material.

---

# 13. Section 07 — Small Batch

### Heading

**30 Students. Not 100.**

Explain the problem with huge online batches:

- Students may hesitate to ask questions.
- Questions can be missed.
- Doubts can continue into the next chapter.

### Core statement

**ONLY 30 STUDENTS**

Explain that the smaller class is designed for:

- Interaction
- Doubt clearing
- Proper attention

This should be a visually strong section because the 30-student limit is a major differentiator.

---

# 14. Section 08 — Weekly Mock Tests

### Heading

**Don't Wait Until The Board Exam To Find Out What Your Child Doesn't Know.**

Explain weekly mock tests.

They help identify:

- Clear concepts
- Difficult questions
- Chapters needing more practice

Core message:

> Saying “I understood” is not enough.

Desired outcome:

> **“I can solve it.”**

Use a visual treatment that communicates testing, progress and preparation.

---

# 15. Section 09 — What Your Child Will Get

### Heading

**What Your Child Will Get**

Feature list:

- Live online Maths classes
- Small batches limited to 30 students
- Teaching by a 15-year experienced PhD Professor
- Concept-focused teaching
- Step-by-step problem solving
- Direct doubt support
- Weekly mock tests
- Regular practice
- Board exam-focused preparation
- Structured Maths learning

Present these as clean cards/list items rather than a dense paragraph.

---

# 16. Section 10 — Who Is This Programme For?

### Heading

**Who Is This Maths Program For?**

Ideal for students who:

- Understand concepts but struggle to solve independently
- Find Maths difficult or confusing
- Depend heavily on memorising formulas
- Need structured Maths preparation
- Want to improve problem-solving ability
- Need regular practice and testing
- Are preparing for Class 11 or 12 board exams

## Who It May NOT Be For

Students who:

- Don't want to attend consistently
- Aren't willing to practise questions
- Want shortcuts without studying

The purpose is not to shame students. Keep the tone direct but supportive.

Core philosophy:

> Understand Maths well enough to solve it themselves.

---

# 17. Section 11 — CTA

### Heading

**Give Your Child More Than Just An Online Maths Class.**

Supporting message:

Give them an environment where they can:

- Understand the concept.
- Ask their doubts.
- Practise questions.
- Test their preparation.
- Improve with proper attention.

### Offer summary

**Class 11 & 12 Maths Online Tuition**

**15-Year Experienced PhD Professor | Maximum 30 Students | Weekly Mock Tests**

### CTA

**CHECK AVAILABLE BATCH**

### Scarcity

**Limited seats in each batch.**

---

# 18. Section 12 — Lead Form

### Heading

**Check The Available Maths Batch**

Supporting copy:

Fill in your details and our team will contact you with the relevant batch information.

### Fields

**Parent Name**

Placeholder:

Enter Your Name

**WhatsApp Number**

Placeholder:

Enter WhatsApp Number

**Student's Class**

Options:

- Class 11
- Class 12

**Board**

Options:

- CBSE
- State Board
- ICSE

### Submit

**CHECK BATCH AVAILABILITY**

Supporting message:

**We'll contact you on WhatsApp with the batch details.**

Implementation should open a prefilled WhatsApp message using the submitted details.

---

# 19. Section 13 — Final CTA

### Heading

**Your Child Deserves To Be More Than Just Another Student In An Online Class.**

Highlights:

- Only 30 Students Per Batch
- 15-Year Experienced PhD Professor
- Direct Doubt Support
- Weekly Mock Tests

CTA:

**CHECK AVAILABLE BATCH**

Supporting urgency:

**Book your enquiry before the batch is filled.**

---

# 20. Header

Keep the header simple.

Recommended desktop:

```text
SHINE
                           How It Works   Why Shine   FAQ   [CHECK BATCH]
```

Alternative if the existing brand header is stronger:

Use the existing Shine branding while keeping navigation minimal.

Mobile:

- Logo
- Menu
- Primary CTA

Avoid a large multi-level navigation because this is a focused landing page.

---

# 21. Footer

Keep the footer lightweight.

Include only verified academy information available from the reference.

Potential items:

- Shine Tuition Academy
- Class 11 & 12 Maths
- WhatsApp/contact CTA
- Phone number if confirmed for this campaign
- Existing website link if required

Do not add fake:

- Address
- Email
- Registration information
- Social links
- Legal information

unless supplied/verified.

---

# 22. Design Direction

## Overall Style

The page should feel:

- Premium
- Academic
- Trustworthy
- Modern
- Clean
- Parent-focused
- Conversion-focused

Avoid:

- Overly childish school graphics
- Excessive gradients
- Excessive animations
- Cartoon-style education illustrations
- Generic stock-photo-heavy design
- Clutter
- Huge amounts of text in one block

---

# 23. Typography

Use a modern, highly readable font system.

Recommended:

- Inter
- Geist
- Another clean sans-serif available through Next.js/font

Use a clear hierarchy:

```text
H1 → strong and large
H2 → strong section heading
H3 → feature/card heading
Body → comfortable reading size
Caption → supporting information
```

Avoid using too many font families.

---

# 24. Color System

The exact brand colors should be taken from the existing Shine website/reference rather than inventing an unrelated palette.

Create design tokens so colors can be changed globally.

Example:

```css
--background
--foreground
--primary
--primary-foreground
--secondary
--muted
--border
--accent
```

Use the brand's existing visual identity consistently.

---

# 25. Responsive Design

The page must be designed mobile-first.

Breakpoints should cover:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Pay special attention to:

- Hero heading wrapping
- CTA width
- Form fields
- Feature cards
- Professor section
- 30-student visual
- Sticky/mobile CTA
- Spacing between sections

On mobile, important CTAs should remain easy to reach.

---

# 26. Animation

Use animation sparingly.

Recommended:

- Fade/slide section entrance
- Subtle card hover
- CTA hover
- FAQ expand/collapse
- Smooth scrolling

Avoid:

- Heavy parallax
- Continuous animated backgrounds
- Large distracting transitions
- Animation that slows page loading

If an animation library is needed, use a lightweight option such as Framer Motion/Motion. Do not add it unless it provides clear value.

---

# 27. Icons

Use a lightweight icon library such as:

- Lucide React

Do not use random icon styles from different libraries.

Icons should support the content, not dominate it.

---

# 28. Images

Use only approved/reference images.

Potential image categories:

- Professor
- Classroom
- Maths/learning environment
- Students
- Testing/problem solving

Do not invent fake student results or use misleading imagery.

Optimise images using Next.js `Image`.

Use appropriate:

- Width/height
- `sizes`
- Lazy loading where appropriate
- Compression
- Meaningful alt text

---

# 29. WhatsApp Flow

The form should create a message similar to:

```text
Hello Shine Tuition Academy,

I would like to check the available Class 11/12 Maths batch.

Parent Name: [name]
WhatsApp Number: [number]
Student Class: [class]
Board: [board]

Please share the batch details.
```

Use the academy's verified WhatsApp number.

The number must be configured from a single source instead of being hardcoded in multiple components.

Example:

```ts
const academyConfig = {
  whatsappNumber: "...",
  phoneNumber: "...",
}
```

Do not expose secrets because there are no secrets required for this frontend flow.

---

# 30. SEO

Even though this is a simple landing page, implement basic SEO.

Use:

- Page title
- Meta description
- Open Graph metadata
- Proper heading hierarchy
- Canonical URL when the production domain is known
- Descriptive image alt text
- Semantic HTML

Potential title:

**Class 11 & 12 Maths Online Tuition | Shine Tuition Academy**

Potential description should be based on the supplied landing-page positioning and should not introduce unsupported claims.

---

# 31. Accessibility

Implement:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text
- Accessible buttons
- Accessible form validation
- FAQ keyboard support
- `aria-*` only when necessary

Do not make CTA buttons dependent only on hover.

---

# 32. Performance

Target a lightweight landing page.

Use:

- Next.js optimised images
- Minimal JavaScript
- Server/static rendering wherever possible
- Lazy loading for non-critical media
- Avoid unnecessary dependencies
- Avoid large animation packages unless needed
- Compress assets

The hero and primary CTA should load immediately.

---

# 33. Security

Because there is no backend:

- No database credentials
- No API secrets
- No service keys
- No private environment variables required for the basic WhatsApp flow

Validate user input before generating the WhatsApp message.

Do not collect unnecessary personal information.

---

# 34. Component Principles

Each component should have one clear responsibility.

Good:

```text
Hero
ProblemSection
MethodSection
ProfessorSection
LeadForm
FAQ
```

Avoid one huge:

```text
page.tsx
```

containing the entire UI.

The page should compose sections:

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
  <FinalCTA />
  <LeadForm />
  <FAQ />
</main>
<Footer />
```

---

# 35. Content Rules

This project has an important content constraint.

## Use source-supported claims only.

Do not add unsupported claims such as:

- Guaranteed marks
- Guaranteed board rank
- 100% results
- Number of students taught
- Number of toppers
- Specific university affiliations
- Specific professor name if not supplied
- Years of academy operation if not supplied
- Fake reviews
- Fake success percentages

The supplied PDF says:

- 15-year experienced PhD Professor
- Maximum 30 students
- Weekly mock tests
- Direct doubt support
- Class recordings
- Board-focused preparation

Those claims can be used.

---

# 36. Conversion Strategy

The page should repeatedly reinforce four differentiators:

## 1. Professor

**15-year experienced PhD Professor**

## 2. Small Batch

**Only 30 students**

## 3. Support

**Direct doubt support**

## 4. Testing

**Weekly mock tests**

The visitor should understand these within the first few seconds.

---

# 37. CTA Strategy

Primary CTA wording should remain consistent:

**CHECK AVAILABLE BATCH**

Use it at:

- Hero
- Professor section
- Main CTA section
- Lead form
- Final CTA

Avoid changing the CTA into many unrelated phrases.

Secondary CTA:

**WhatsApp Us**

or

**Call Now**

---

# 38. FAQ Implementation

Use an accordion.

Questions should stay aligned with the actual programme.

Do not create fake answers about:

- Fees
- Timings
- Batch dates
- Refund policy
- Exact syllabus completion dates

unless those details are supplied later.

If those details become available, add them to the FAQ.

---

# 39. Suggested File Structure

```text
shine-maths-landing/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── MethodSection.tsx
│   ├── ShineIntroSection.tsx
│   ├── ProfessorSection.tsx
│   ├── SmallBatchSection.tsx
│   ├── MockTestSection.tsx
│   ├── BenefitsSection.tsx
│   ├── AudienceSection.tsx
│   ├── CTASection.tsx
│   ├── LeadForm.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
│
├── config/
│   └── academy.ts
│
├── public/
│   ├── images/
│   └── icons/
│
├── types/
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

---

# 40. Development Phases

## Phase 1 — Project Setup

- Create Next.js project
- Enable TypeScript
- Configure Tailwind CSS
- Establish global styles
- Add fonts
- Establish design tokens

## Phase 2 — Content & Assets

- Organise approved images
- Add academy configuration
- Add content constants where useful
- Verify every factual claim

## Phase 3 — Core UI

Build:

1. Header
2. Hero
3. Problem
4. Method
5. Shine introduction
6. Professor
7. Small batch
8. Weekly mock tests
9. Benefits
10. Audience
11. CTA
12. Lead form
13. FAQ
14. Footer

## Phase 4 — Interactions

- FAQ accordion
- Form validation
- WhatsApp message generation
- CTA links
- Smooth scroll
- Subtle animations

## Phase 5 — Responsive

Test:

- 320px+
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+

## Phase 6 — QA

Check:

- All buttons
- WhatsApp flow
- Phone links
- Form validation
- FAQ
- Images
- Mobile layout
- Desktop layout
- Accessibility
- SEO
- Performance
- Console errors

## Phase 7 — Production

- Production build
- Final Lighthouse/performance review
- Verify metadata
- Verify production URLs
- Deploy

---

# 41. Testing Checklist

## Functional

- [ ] CTA buttons work
- [ ] WhatsApp opens correctly
- [ ] Form validates required fields
- [ ] Class selector works
- [ ] Board selector works
- [ ] FAQ opens/closes
- [ ] Phone CTA works
- [ ] Navigation anchors work

## Visual

- [ ] Hero looks correct
- [ ] Typography consistent
- [ ] Spacing consistent
- [ ] Cards aligned
- [ ] Images cropped correctly
- [ ] Mobile layout correct
- [ ] Tablet layout correct
- [ ] Desktop layout correct

## Technical

- [ ] TypeScript passes
- [ ] Production build passes
- [ ] No console errors
- [ ] No broken links
- [ ] No missing images
- [ ] No unnecessary dependencies
- [ ] No secrets committed

---

# 42. Definition of Done

The project is complete when:

1. The landing page accurately represents the Class 11 & 12 Maths offer.
2. It follows Shine's existing brand direction.
3. All supplied landing-page copy is correctly represented.
4. The page is responsive.
5. The lead form works without a backend/database.
6. WhatsApp enquiry flow works.
7. Phone CTA works.
8. FAQ works.
9. SEO metadata exists.
10. Accessibility basics are implemented.
11. Images are optimised.
12. Production build succeeds.
13. No unsupported claims are present.
14. No unnecessary backend/database infrastructure exists.

---

# 43. Future Extensions

These are explicitly OUT OF SCOPE for V1:

- Student login
- Parent login
- Admin dashboard
- Database
- Payment gateway
- Course dashboard
- Attendance system
- Student analytics
- CRM
- Automated WhatsApp backend
- Email automation
- AI tutor integration

They can be added later without forcing them into the initial landing-page architecture.

---

# 44. Final Product Direction

The final experience should communicate this idea clearly:

> **Your child doesn't need another Maths class. They need an environment that helps them understand Maths, solve questions independently, practise consistently and prepare properly for the board exam.**

The page should feel like a focused, credible and premium education campaign — not a generic tuition website.
