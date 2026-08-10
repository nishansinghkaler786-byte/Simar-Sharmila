'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

/* ─── content ────────────────────────────────── */
const DOMAINS = [
  'Psychometrics', 'FinTech', 'Web3', 'Healthcare EMR', 'Enterprise SaaS',
  'AI / ML', 'Design Systems', 'Accessibility', 'PropTech', 'MarTech',
];

const METRICS = [
  { n: 13, suffix: '+', label: 'years designing enterprise software' },
  { n: 500, suffix: '+', label: 'organizations served, 50+ countries' },
  { n: 100, suffix: 'K+', label: 'daily active users on platforms I shaped' },
  { n: 200, suffix: '+', label: 'components in one white-label system' },
  { n: 98, suffix: '%', label: 'WCAG 2.1 AA compliance, up from 60%' },
  { n: 91, suffix: '%', label: 'fewer irreversible Web3 transaction errors' },
];

const CASES = [
  {
    slug: 'lumen',
    num: '001',
    tag: 'Consumer Crypto · iOS & Android',
    title: 'Lumen — AI-guided crypto',
    desc: 'A calm crypto app for first-timers. An AI guide explains every decision in plain language — light & dark, end to end.',
    img: '/assets/lumen/home-dark.png',
  },
  {
    slug: 'pocial',
    num: '002',
    tag: 'SaaS / MarTech · California',
    title: 'Pocial — AI marketing',
    desc: 'AI marketing-automation platform: 20+ tools organized into four color-coded hubs, plus a marketing site that routes two audiences.',
    img: '/assets/pocial-home.png',
  },
  {
    slug: 'ebinaa',
    num: '003',
    tag: 'PropTech · Oman · Bilingual RTL',
    title: 'eBinaa — design, build & buy',
    desc: 'Contractor marketplace connecting Omani homeowners with verified builders. English/Arabic RTL, bank-integrated.',
    img: '/assets/ds-01-opportunities.png',
  },
];

const EXPERIENCE = [
  {
    period: '2019 — NOW',
    org: 'Mercer | Marsh McLennan',
    role: 'Senior UI/UX Designer · Talent Enterprise',
    body: 'Lead UX for Lighthouse, a psychometric platform serving 500+ organizations across 50+ countries — influencing $2B+ in annual hiring decisions.',
    hits: [
      'White-label design system, 200+ components — client implementation cut from 6 weeks to 1',
      'Assessment completion up 28% · recruiter decisions 45% faster',
      'UX cited as key differentiator in a $300M+ acquisition',
    ],
  },
  {
    period: '2017 — 2019',
    org: 'smartData Enterprises',
    role: 'Design Team Lead · Healthcare & AI',
    body: 'Led a 5-person team shipping 30+ HIPAA-regulated healthcare, AI/ML and SaaS products used by 100K+ people daily.',
    hits: [
      'Clinical documentation errors down 67% — 50+ hours saved per practice monthly',
      'Trial enrollment accelerated 42% · explainable-AI interfaces lifted model trust 38%',
    ],
  },
  {
    period: '2013 — 2017',
    org: 'Antier Solutions',
    role: 'Web/UI-UX Team Lead · Blockchain',
    body: 'Pioneered Web3 UX before design patterns existed — 100+ enterprise projects through crypto’s first growth wave.',
    hits: [
      'Wallet onboarding drop-off cut from 73% to 12% — adoption up 85%',
      'Fail-safe confirmation flows: irreversible errors down 91%',
      'First-gen wallet & exchange patterns adopted by 15+ funded startups',
    ],
  },
];

const SERVICES = [
  { n: '01', h: 'Enterprise UX consulting', b: 'Embedded with your team to redesign a product, unblock a stalled redesign, or raise the UX bar across an org with real users and real debt.' },
  { n: '02', h: 'Design system architecture', b: 'White-label, multi-tenant, token-driven. The kind of system that cuts client implementation from weeks to days — proven across 500+ organizations.' },
  { n: '03', h: 'UX audit & strategy', b: 'A deep, honest teardown of your live product: concrete findings, a prioritized roadmap, and decisions your team can act on immediately.' },
  { n: '04', h: 'Speaking & workshops', b: 'Enterprise UX, high-stakes domains, and design systems that scale — conferences, internal workshops, and design-org coaching.' },
];

const REVIEWS = [
  { q: 'Who works with Nishan does not obtain only a good UX expert, but a really good partner for elevated results.', name: 'Sabby Singh', role: 'Enterprise Web3 solutions' },
  { q: 'With very little direction other than a few examples and what I liked, Nishan turned those into an actual product.', name: 'Patrick Spielmann', role: 'Founder, LeadMagic.io' },
  { q: 'The level of detail he puts in his work is astonishing and his work stands out from the rest of the team.', name: 'Harpreet Singh Sidhu', role: 'Product Designer · Microsoft' },
  { q: 'He delivers peace of mind to clients and supervisors alike. Nishan has met every challenge face on.', name: 'Gunjit Singh', role: 'Business Analyst & PM' },
  { q: 'Every time you can find something new and some creativity in his work — this is what makes him different.', name: 'Swati Rana', role: 'Immersive tech · AR/VR/XR' },
  { q: 'Expert in creating stunning UI designs. Very good at improving the user experience of any project.', name: 'Tarandeep Singh', role: 'Ex-Nagarro · Same team' },
];

/* ─── hooks ──────────────────────────────────── */
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

function Counter({ n, suffix }: { n: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      ob.disconnect();
      const start = performance.now(), dur = 1300;
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        el.textContent = String(Math.round((1 - Math.pow(1 - t, 3)) * n));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [n]);
  return <><span ref={ref}>0</span>{suffix}</>;
}

function Arr() {
  return (
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M1 5.5H12M12 5.5L7.5 1M12 5.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── page ───────────────────────────────────── */
export default function HomePage() {
  useRevealFx();

  return (
    <div className="cbx">
      {/* ── HERO ─────────────────────────────── */}
      <section className="cbx__hero" id="top">
        <HeroScene />
        <div className="cbx__grid" aria-hidden="true" />
        <div className="cbx__scrim" aria-hidden="true" />

        <div className="cbx__heroIn">
          <p className="cbx__eyebrow fxr">
            <span className="cbx__dot" /> NISHAN SINGH — SENIOR PRODUCT DESIGNER · 13 YRS · DUBAI, UAE
          </p>
          <h1 className="cbx__h1 fxr" style={{ transitionDelay: '.08s' }}>
            Complex systems,<br />
            <em>made obvious.</em>
          </h1>
          <p className="cbx__sub fxr" style={{ transitionDelay: '.16s' }}>
            I design enterprise software people actually use — psychometric platforms
            influencing $2B+ in hiring decisions, healthcare EMRs, and Web3 products
            that cut irreversible errors 91%. Top 50 UX Designer, UAE.
          </p>
          <div className="cbx__act fxr" style={{ transitionDelay: '.24s' }}>
            <Link href="/lets-build" className="cbx__btn">Build together <Arr /></Link>
            <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cbx__btn cbx__btn--ghost">
              Resume ↗
            </a>
          </div>

          <div className="cbx__strip fxr" style={{ transitionDelay: '.32s' }}>
            {[['13+', 'years'], ['500+', 'organizations'], ['50+', 'countries'], ['$2B+', 'decisions shaped']].map(([v, l]) => (
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

      {/* ── METRICS ──────────────────────────── */}
      <section className="cbx__sec" id="proof">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 01 — PROOF ]</p>
          <h2 className="cbx__h2 fxr">Outcomes, not opinions.</h2>
          <div className="cbx__metrics">
            {METRICS.map((m, i) => (
              <div key={m.label} className="cbx__metric fxr" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="cbx__metricN"><Counter n={m.n} suffix={m.suffix} /></div>
                <p>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="work">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 02 — SELECTED WORK ]</p>
          <h2 className="cbx__h2 fxr">Case studies.</h2>
          <div className="cbx__cases">
            {CASES.map((c, i) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="cbx__case fxr" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cbx__caseShot">
                  <Image src={c.img} alt={c.title} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="cbx__caseBody">
                  <p className="cbx__caseTag">{c.num} · {c.tag}</p>
                  <h3>{c.title}</h3>
                  <p className="cbx__caseDesc">{c.desc}</p>
                  <span className="cbx__caseLink">View case study <Arr /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="experience">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 03 — TRACK RECORD ]</p>
          <h2 className="cbx__h2 fxr">Thirteen years, three frontiers.</h2>
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

      {/* ── SERVICES ─────────────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="services">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 04 — ENGAGEMENTS ]</p>
          <h2 className="cbx__h2 fxr">How we can work together.</h2>
          <div className="cbx__svc">
            {SERVICES.map((s, i) => (
              <div key={s.n} className="cbx__svcCard fxr" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="cbx__svcN">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────── */}
      <section className="cbx__sec cbx__sec--line" id="reviews">
        <div className="cbx__inner">
          <p className="cbx__label fxr">[ 05 — SIGNAL ]</p>
          <h2 className="cbx__h2 fxr">Six perspectives, thirteen years.</h2>
        </div>
        <div className="cbx__revWrap">
          <div className="cbx__revTrack">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <figure key={i} className="cbx__rev">
                <blockquote>&ldquo;{r.q}&rdquo;</blockquote>
                <figcaption><b>{r.name}</b><span>{r.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────── */}
      <section className="cbx__cta">
        <div className="cbx__ctaGlow" aria-hidden="true" />
        <p className="cbx__label fxr">[ 06 — NEXT ]</p>
        <h2 className="cbx__ctaH fxr">Quality matters.<br /><em>Let&apos;s talk.</em></h2>
        <div className="cbx__act fxr" style={{ justifyContent: 'center', transitionDelay: '.12s' }}>
          <Link href="/lets-build" className="cbx__btn">Build together <Arr /></Link>
          <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cbx__btn cbx__btn--ghost">
            Resume ↗
          </a>
        </div>
      </section>
    </div>
  );
}
