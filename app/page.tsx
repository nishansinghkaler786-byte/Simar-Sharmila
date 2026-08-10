'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const DotField = dynamic(() => import('@/components/DotField'), { ssr: false });

/* ─── content — from Simranjeet's resume ───────── */
const FOCUS = [
  {
    n: 'I',
    h: 'Design systems that scale',
    b: 'Atomic Design methodology, pattern libraries, and reusable component systems built on Material Design and Ant Design — style guides that speed teams up instead of slowing them down.',
  },
  {
    n: 'II',
    h: 'Accessibility as a baseline',
    b: 'WCAG 2.2 standards implemented across enterprise assessment platforms — accessibility audits, compliant component design, and inclusive flows for candidates and recruiters alike.',
  },
  {
    n: 'III',
    h: 'Research-driven decisions',
    b: 'Usability testing, heuristic evaluations, journey mapping, A/B tests, and analytics with Hotjar and Google Analytics — design choices validated by users, not assumptions.',
  },
  {
    n: 'IV',
    h: 'AI-augmented workflow',
    b: 'AI-powered prototyping, generative AI for design, prompt engineering, and AI-assisted user research — a modern toolkit applied with judgement, certified across multiple programs.',
  },
];

const EXPERIENCE = [
  {
    period: 'OCT 2024 — PRESENT',
    org: 'Mercer Talent Enterprises',
    role: 'Sr. UX/UI Designer · Dubai',
    body: 'Leading end-to-end UX/UI for the Mercer Talent Enterprises assessment platform.',
    hits: [
      'Mobile-first design system with WCAG 2.2 compliance across candidate and recruiter portals',
      'Partnered with senior leadership to align UX/UI strategy with business objectives',
      'Facilitated design-thinking workshops and cross-functional product discovery sessions',
    ],
  },
  {
    period: 'FEB 2022 — SEP 2024',
    org: 'Taqtics.co',
    role: 'UX/UI Designer · Bangalore',
    body: 'Designed the Taqtics retail & restaurant operations management suite end to end.',
    hits: [
      'Modular, scalable workflows and components in Figma and Adobe XD',
      'Evolved the design system with Atomic Design — pattern libraries that accelerated design velocity',
      'IA, storyboards, wireframes and hi-fi mockups focused on cutting task-completion friction',
      'Trusted design consultant and advisor to product and leadership teams',
    ],
  },
  {
    period: 'JUL 2021 — FEB 2022',
    org: 'Uptics.io',
    role: 'UX/UI Designer · USA (remote)',
    body: 'Spearheaded UI/UX architecture for a sales-automation CRM.',
    hits: [
      'Intuitive dashboards and simplified lead-management workflows to lift conversion',
      'Personas from user research; solutions validated through iterative usability testing',
      'A/B-tested email campaigns using click-through and open-rate data',
    ],
  },
  {
    period: 'JAN 2020 — MAY 2021',
    org: 'FotograK Enterprises',
    role: 'Sr. Artist & UI Designer · Chandigarh',
    body: 'Responsive web and mobile design for B2B and e-commerce clients.',
    hits: [
      'Peer-to-peer fundraising platform designed for a confidential client',
      'Full production pipeline: photography, editing, and marketing design for digital and print',
    ],
  },
];

const PROJECTS = [
  {
    tag: 'Retail & Restaurant SaaS · 2022—2024',
    title: 'Taqtics — operations management, made manageable',
    desc: 'Led UI/UX and rapid prototyping for a retail & restaurant operations platform. Built and maintained a scalable design system with style guides, pattern libraries and reusable components. Validated every major decision with usability tests, heuristic evaluations and A/B testing — and mentored cross-functional teams through design critique and workshops.',
    chips: ['Design system', 'Web + mobile', 'Usability testing', 'Design workshops'],
  },
  {
    tag: 'EdTech · UX/UI Case Study',
    title: 'Praccel Read Aloud — literacy, by design',
    desc: 'Sole product designer across the entire lifecycle — discovery, user research, information architecture, UI design, design systems, and developer handoff across three platforms. Designed a feedback loop where teachers assign passages and students submit voice recordings, measurably improving literacy outcomes for K-8 learners.',
    chips: ['Solo end-to-end', '3 platforms', 'K-8 education', 'Accessibility-first'],
  },
];

const SKILLS = [
  { h: 'Design & Strategy', items: ['UX/UI Design', 'Product Design', 'Design Systems', 'Information Architecture', 'Interaction Design', 'Visual Design', 'Design Thinking', 'Service Design', 'DesignOps'] },
  { h: 'Research & Testing', items: ['User Research', 'Usability Testing', 'Heuristic Evaluation', 'Journey Mapping', 'A/B Testing', 'User Interviews', 'Hotjar / GA', 'CRO'] },
  { h: 'Web & Mobile', items: ['Responsive Design', 'Mobile-first', 'WCAG Accessibility', 'Micro-interactions', 'Motion Design', 'Interactive Prototyping', 'Design Handoff & QA', 'SVG & Lottie'] },
  { h: 'Tools & AI', items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Material Design', 'Ant Design', 'AI-powered Prototyping', 'Generative AI for Design', 'Prompt Engineering'] },
];

const CERTS = [
  ['Interaction Design Certification', 'Interaction Design Foundation · 2021'],
  ['UI/UX Designing Course', 'Interaction Design Foundation'],
  ['Claude.AI Design Expert', 'Outskills'],
  ['User Experience Growth School', 'Growth School'],
  ['AI Design & User Research Expert', 'Design for Change'],
  ['Web Designing Training', 'DH Universal Group'],
];

const EDUCATION = [
  ['PGDCA — Computer Applications', 'Panjab Technical University · Jalandhar · 2023'],
  ['Bachelor of Arts', 'Panjab University · Chandigarh · 2020'],
];

/* ─── reveal hook ────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv');
    const ob = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);
}

/* ─── page ─────────────────────────────── */
export default function HomePage() {
  useReveal();

  return (
    <div>
      {/* HERO */}
      <section className="pf-hero" id="top">
        <DotField />
        <div className="pf-hero__wash" aria-hidden="true" />
        <div className="pf-hero__in">
          <p className="pf-hero__eyebrow rv"><i />Senior UX/UI Designer · Bengaluru, India</p>
          <h1 className="pf-hero__h1 rv" style={{ transitionDelay: '.08s' }}>
            Design that feels<br /><em>effortless.</em>
          </h1>
          <p className="pf-hero__sub rv" style={{ transitionDelay: '.16s' }}>
            I&apos;m Simranjeet Singh — 6+ years architecting scalable design systems and
            leading user-centered design across web and mobile. WCAG 2.2 accessibility,
            design-thinking workshops, and research-driven decisions at enterprise scale.
          </p>
          <div className="pf-hero__act rv" style={{ transitionDelay: '.24s' }}>
            <a href="mailto:simarramgarhia03@gmail.com" className="pf-btn">Get in touch</a>
            <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn--line">LinkedIn ↗</a>
            <a href="https://dribbble.com/ux-designer-simranjeet" target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn--line">Dribbble ↗</a>
          </div>
        </div>
        <div className="pf-hero__stats rv" style={{ transitionDelay: '.3s' }}>
          {[['6+', 'years in UX/UI'], ['WCAG 2.2', 'accessibility'], ['4', 'companies · 3 countries'], ['3', 'languages']].map(([v, l]) => (
            <div key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FOCUS */}
      <section className="pf-sec" id="focus">
        <div className="pf-inner">
          <p className="pf-label rv">What I bring</p>
          <h2 className="pf-h2 rv">Craft, <em>systemized.</em></h2>
          <div className="pf-focus">
            {FOCUS.map((f, i) => (
              <div key={f.n} className="pf-focus__row rv" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="pf-focus__num">{f.n}</span>
                <h3>{f.h}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pf-sec pf-sec--tint pf-sec--rule" id="work">
        <div className="pf-inner">
          <p className="pf-label rv">Selected work</p>
          <h2 className="pf-h2 rv">Two projects, <em>end to end.</em></h2>
          <div className="pf-proj">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className="pf-proj__card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div>
                  <p className="pf-proj__tag">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <div className="pf-chips">
                    {p.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                </div>
                <p className="pf-proj__desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="pf-sec pf-sec--rule" id="experience">
        <div className="pf-inner">
          <p className="pf-label rv">Experience</p>
          <h2 className="pf-h2 rv">Six years, <em>four chapters.</em></h2>
          <div className="pf-xp">
            {EXPERIENCE.map((x, i) => (
              <div key={x.org} className="pf-xp__item rv" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="pf-xp__period">{x.period}</span>
                <h3>{x.org}</h3>
                <p className="pf-xp__role">{x.role}</p>
                <p className="pf-xp__body">{x.body}</p>
                <ul>
                  {x.hits.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="pf-sec pf-sec--tint pf-sec--rule" id="skills">
        <div className="pf-inner">
          <p className="pf-label rv">Skills &amp; tools</p>
          <h2 className="pf-h2 rv">The <em>toolkit.</em></h2>
          <div className="pf-skills">
            {SKILLS.map((g, i) => (
              <div key={g.h} className="pf-skills__group rv" style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{g.h}</h3>
                <div className="pf-chips">
                  {g.items.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTS */}
      <section className="pf-sec pf-sec--rule" id="education">
        <div className="pf-inner">
          <p className="pf-label rv">Education &amp; certifications</p>
          <h2 className="pf-h2 rv">Always <em>learning.</em></h2>
          <div className="pf-edu">
            <div className="rv">
              <h3>Education</h3>
              <ul>
                {EDUCATION.map(([t, sub]) => (
                  <li key={t}><b>{t}</b><span>{sub}</span></li>
                ))}
              </ul>
              <h3 style={{ marginTop: 36 }}>Languages</h3>
              <div className="pf-chips">
                {['English — fluent', 'Hindi — native', 'Punjabi — native'].map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>
            <div className="rv" style={{ transitionDelay: '.08s' }}>
              <h3>Certifications</h3>
              <ul>
                {CERTS.map(([t, sub]) => (
                  <li key={t}><b>{t}</b><span>{sub}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND WORK */}
      <section className="pf-sec pf-sec--tint pf-sec--rule" id="beyond">
        <div className="pf-inner">
          <p className="pf-label rv">Beyond work</p>
          <h2 className="pf-h2 rv">Empathy, <em>practiced.</em></h2>
          <div className="pf-give">
            <div className="pf-give__card rv">
              <p className="pf-give__since">SINCE 2019</p>
              <h3>Volunteer teacher — Anganwadi</h3>
              <p>7+ years teaching moral values and life lessons to young children at a government child-care center in Patiala — supporting early-childhood education and character building for underprivileged kids.</p>
            </div>
            <div className="pf-give__card rv" style={{ transitionDelay: '.07s' }}>
              <p className="pf-give__since">SINCE 2024</p>
              <h3>Volunteer — PGI Hospital, Chandigarh</h3>
              <p>Food, medication and clothing support for underprivileged patients and their families — with 10% of salary consistently going to charitable initiatives for over four years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta">
        <p className="pf-label rv">Next</p>
        <h2 className="rv">Let&apos;s make it<br /><em>effortless.</em></h2>
        <div className="pf-cta__act rv" style={{ transitionDelay: '.12s' }}>
          <a href="mailto:simarramgarhia03@gmail.com" className="pf-btn">simarramgarhia03@gmail.com</a>
          <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn--line">LinkedIn ↗</a>
        </div>
      </section>
    </div>
  );
}
