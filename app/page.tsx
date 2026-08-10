'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

/* ─── content — from Simranjeet's resume ───────── */
const DOMAINS = [
  'UX/UI Design', 'Design Systems', 'Accessibility', 'User Research',
  'Retail SaaS', 'Sales CRM', 'EdTech', 'AI-Assisted Design',
  'Prototyping', 'DesignOps', 'Motion & Micro-interactions',
];

const FOCUS = [
  {
    n: '01',
    h: 'Design systems that scale',
    b: 'Atomic Design methodology, pattern libraries, and reusable component systems built on Material Design and Ant Design — style guides that speed teams up instead of slowing them down.',
  },
  {
    n: '02',
    h: 'Accessibility as a baseline',
    b: 'WCAG 2.2 standards implemented across enterprise assessment platforms — accessibility audits, compliant component design, and inclusive flows for candidates and recruiters alike.',
  },
  {
    n: '03',
    h: 'Research-driven decisions',
    b: 'Usability testing, heuristic evaluations, journey mapping, A/B tests, and analytics with Hotjar and Google Analytics — design choices validated by users, not assumptions.',
  },
  {
    n: '04',
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
    num: '001',
    tag: 'Retail & Restaurant SaaS · 2022—2024',
    title: 'Taqtics — Operations management, made manageable',
    desc: 'Led UI/UX and rapid prototyping for a retail & restaurant operations platform. Built and maintained a scalable design system with style guides, pattern libraries and reusable components on Material Design and Ant Design. Validated every major decision with usability tests, heuristic evaluations and A/B testing — and mentored cross-functional teams through design critique and workshops.',
    chips: ['Design system', 'Web + mobile', 'Usability testing', 'Design workshops'],
    grad: 'a',
  },
  {
    num: '002',
    tag: 'EdTech · UX/UI Case Study',
    title: 'Praccel Read Aloud — Literacy, by design',
    desc: 'Sole product designer across the entire lifecycle — discovery, user research, information architecture, UI design, design systems, and developer handoff across three platforms. Designed a feedback loop where teachers assign passages and students submit voice recordings, measurably improving literacy outcomes for K-8 learners.',
    chips: ['Solo end-to-end', '3 platforms', 'K-8 education', 'Accessibility-first'],
    grad: 'b',
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

/* ─── hooks ──────────────────────────────── */
function useRevealFx() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fxr');
    const ob = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);
}

function Arr() {
  return (
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M1 5.5H12M12 5.5L7.5 1M12 5.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── page ───────────────────────────────── */
export default function HomePage() {
  useRevealFx();

  return (
    <div className="cbx">
      {/* ── HERO ─────────────────────── */}
      <section className="cbx__hero" id="top">
        <HeroScene />
        <div className="cbx__grid" aria-hidden="true" />
        <div className="cbx__scrim" aria-hidden="true" />

        <div className="cbx__heroIn">
          <p className="cbx__eyebrow fxr">
            <span className="cbx__dot" /> SIMRANJEET SINGH — SENIOR UX/UI DESIGNER · BENGALURU, INDIA
          </p>
          <h1 className="cbx__h1 fxr" style={{ transitionDelay: '.08s' }}>
            Effortless<br />
            <em>by design.</em>
          </h1>
          <p className="cbx__sub fxr" style={{ transitionDelay: '.16s' }}>
            Senior UX/UI designer with 6+ years architecting scalable design systems
            and leading user-centered design across web and mobile — WCAG 2.2
            accessibility, design-thinking workshops, and research-driven decisions
            at enterprise scale.
          </p>
          <div className="cbx__act fxr" style={{ transitionDelay: '.24s' }}>
            <a href="mailto:simarramgarhia03@gmail.com" className="cbx__btn">Get in touch <Arr /></a>
            <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer" className="cbx__btn cbx__btn--ghost">
              LinkedIn ↗
            </a>
            <a href="https://dribbble.com/ux-designer-simranjeet" target="_blank" rel="noopener noreferrer" className="cbx__btn cbx__btn--ghost">
              Dribbble ↗
            </a>
          </div>

          <div className="cbx__strip fxr" style={{ transitionDelay: '.32s' }}>
            {[['6+', 'years in UX/UI'], ['WCAG 2.2', 'accessibility'], ['4', 'companies · 3 countries'], ['3', 'languages']].map(([v, l]) => (
              <div key={l} className="cbx__stat"><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
        </div>

        <div className="cbx__marq" aria-hidden="true">
          <div className="cbx__marqTrack">
            {[...DOMAINS, ...DOMAINS].map((d, i) => (
              <span key={i}>{d}<i>◆</i></span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOCUS ────────────────────── */}
      <section className="cbx__sec" id="focus">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 01 — WHAT I BRING ]</p>
          <h2 className="cbx__h2 fxr">Craft, systemized.</h2>
          <div className="cbx__svc">
            {FOCUS.map((s, i) => (
              <div key={s.n} className="cbx__svcCard fxr" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="cbx__svcN">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="work">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 02 — SELECTED WORK ]</p>
          <h2 className="cbx__h2 fxr">Projects.</h2>
          <div className="cbx__proj">
            {PROJECTS.map((p, i) => (
              <article key={p.num} className={`cbx__projCard fxr cbx__projCard--${p.grad}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cbx__projTop">
                  <span className="cbx__caseTag">{p.num} · {p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="cbx__projDesc">{p.desc}</p>
                <div className="cbx__chips">
                  {p.chips.map((c) => <span key={c}>{c}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────── */}
      <section className="cbx__sec cbx__sec--line" id="experience">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 03 — EXPERIENCE ]</p>
          <h2 className="cbx__h2 fxr">Six years, four chapters.</h2>
          <div className="cbx__xp">
            {EXPERIENCE.map((x, i) => (
              <div key={x.org} className="cbx__xpRow fxr" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cbx__xpMeta">
                  <span className="cbx__xpPeriod">{x.period}</span>
                  <h3>{x.org}</h3>
                  <p className="cbx__xpRole">{x.role}</p>
                </div>
                <div className="cbx__xpBody">
                  <p>{x.body}</p>
                  <ul>
                    {x.hits.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="skills">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 04 — SKILLS & TOOLS ]</p>
          <h2 className="cbx__h2 fxr">The toolkit.</h2>
          <div className="cbx__skills">
            {SKILLS.map((g, i) => (
              <div key={g.h} className="cbx__skillGroup fxr" style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{g.h}</h3>
                <div className="cbx__chips">
                  {g.items.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTS ────────────── */}
      <section className="cbx__sec cbx__sec--line" id="education">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 05 — EDUCATION & CERTIFICATIONS ]</p>
          <h2 className="cbx__h2 fxr">Always learning.</h2>
          <div className="cbx__edu">
            <div className="cbx__eduCol fxr">
              <h3>Education</h3>
              <ul>
                {EDUCATION.map(([t, sub]) => (
                  <li key={t}><b>{t}</b><span>{sub}</span></li>
                ))}
              </ul>
              <h3 style={{ marginTop: 36 }}>Languages</h3>
              <div className="cbx__chips">
                {['English — fluent', 'Hindi — native', 'Punjabi — native'].map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>
            <div className="cbx__eduCol fxr" style={{ transitionDelay: '.08s' }}>
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

      {/* ── BEYOND WORK ────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="beyond">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 06 — BEYOND WORK ]</p>
          <h2 className="cbx__h2 fxr">Design is empathy, practiced.</h2>
          <div className="cbx__svc" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="cbx__svcCard fxr">
              <span className="cbx__svcN">SINCE 2019</span>
              <h3>Volunteer teacher — Anganwadi</h3>
              <p>7+ years teaching moral values and life lessons to young children at a government child-care center in Patiala — supporting early-childhood education and character building for underprivileged kids.</p>
            </div>
            <div className="cbx__svcCard fxr" style={{ transitionDelay: '.07s' }}>
              <span className="cbx__svcN">SINCE 2024</span>
              <h3>Volunteer — PGI Hospital, Chandigarh</h3>
              <p>Food, medication and clothing support for underprivileged patients and their families — with 10% of salary consistently going to charitable initiatives for over four years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────── */}
      <section className="cbx__cta">
        <div className="cbx__ctaGlow" aria-hidden="true" />
        <p className="cbx__label fxr">[ 07 — NEXT ]</p>
        <h2 className="cbx__ctaH fxr">Let&apos;s make it<br /><em>effortless.</em></h2>
        <div className="cbx__act fxr" style={{ justifyContent: 'center', transitionDelay: '.12s' }}>
          <a href="mailto:simarramgarhia03@gmail.com" className="cbx__btn">simarramgarhia03@gmail.com <Arr /></a>
          <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer" className="cbx__btn cbx__btn--ghost">
            LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}
