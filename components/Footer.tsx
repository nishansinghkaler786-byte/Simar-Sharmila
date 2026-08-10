export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sft">
      <div className="sft__in">
        <div>
          <p className="sft__name">Simranjeet Singh</p>
          <p className="sft__tag">Senior UX/UI Designer · Bengaluru, India</p>
        </div>
        <div className="sft__links">
          <a href="mailto:simarramgarhia03@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ux-designer-simranjeet/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://dribbble.com/ux-designer-simranjeet" target="_blank" rel="noopener noreferrer">Dribbble</a>
        </div>
      </div>
      <p className="sft__c">© {year} Simranjeet Singh. Designed with care — accessible by default.</p>
    </footer>
  );
}
