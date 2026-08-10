export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pf-foot">
      <div className="pf-foot__in">
        <div>
          <p className="pf-foot__name">Simranjeet Singh</p>
          <p className="pf-foot__tag">Senior UX/UI Designer · Bengaluru, India</p>
        </div>
        <div className="pf-foot__links">
          <a href="mailto:simarramgarhia03@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://dribbble.com/ux-designer-simranjeet" target="_blank" rel="noopener noreferrer">Dribbble</a>
        </div>
      </div>
      <p className="pf-foot__c">© {year} Simranjeet Singh · Designed with care, accessible by default.</p>
    </footer>
  );
}
