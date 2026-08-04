import { useState, useRef, useEffect } from "react";
import { FaArrowDown, FaExternalLinkAlt, FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";
import eventPlanner from "./eventplanner.png";
import studentManagement from "./studentmanagement.png";

const projects = [
  {
    number: "01",
    title: "Student Management Dashboard",
    description: "A clear, practical dashboard for organizing student records and academic information.",
    image: studentManagement,
    stack: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Event Planner",
    description: "A responsive planning tool that keeps events, details, and schedules in one place.",
    image: eventPlanner,
    stack: ["React", "CSS", "JavaScript"],
  },
];

const placeholders = [
  { number: "03" },
  { number: "04" },
  { number: "05" },
];

const skillGroups = [
  ["Frontend", "React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  ["Backend", "Node.js", "Express.js", "MongoDB", "MySQL"],
  ["Workflow", "Git & GitHub", "Figma", "VS Code", "UX thinking"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const [startConvOpen, setStartConvOpen] = useState(false);
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);
  const startConvRef = useRef(null);
  const getInTouchRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (startConvRef.current && !startConvRef.current.contains(e.target)) {
        setStartConvOpen(false);
      }
      if (getInTouchRef.current && !getInTouchRef.current.contains(e.target)) {
        setGetInTouchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>SB<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {[["About", "#about"], ["Story", "#story"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-laptop" aria-hidden="true">
            <div className="laptop-glow" />
            <div className="laptop-screen">
              <div className="laptop-camera" />
              <div className="screen-content">
                <div className="screen-topbar">
                  <span className="screen-dot screen-dot-red" />
                  <span className="screen-dot screen-dot-yellow" />
                  <span className="screen-dot screen-dot-green" />
                </div>
                <span className="screen-label">SEAN.B / PORTFOLIO</span>
                <span className="screen-line screen-line-wide" />
                <span className="screen-line" />
                <span className="screen-code">&lt;/&gt; BUILDING USEFUL THINGS<span className="screen-cursor" /></span>
                <span className="screen-code-dim">_ full-stack developer</span>
              </div>
            </div>
            <div className="laptop-hinge" />
            <div className="laptop-base"><span /></div>
          </div>
          <div className="section-wrap hero-layout">
            <div className="hero-topline"><p className="eyebrow">Independent developer / 2026</p><p>Harare, Zimbabwe</p></div>
            <div className="hero-copy">
              <p className="hero-kicker">Sean Biningu</p>
              <h1>I build digital<br /><em>experiences with</em><br />lasting clarity.</h1>
            </div>
            <div className="hero-footer">
              <p className="hero-intro">Full-stack developer and engineering student, creating thoughtful web products that make complex things feel simple.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore my work <FaArrowDown /></a>
                <div className="contact-dropdown-wrap" ref={getInTouchRef}>
                  <button
                    className="text-link contact-dropdown-trigger"
                    onClick={() => { setGetInTouchOpen(o => !o); setStartConvOpen(false); }}
                    aria-expanded={getInTouchOpen}
                    aria-haspopup="true"
                    id="get-in-touch-btn"
                  >
                    Get in touch <FaExternalLinkAlt />
                  </button>
                  {getInTouchOpen && (
                    <div className="contact-dropdown" role="menu" aria-label="Get in touch options">
                      <a
                        href="mailto:seanbiningu6@gmail.com"
                        className="contact-dropdown-item"
                        role="menuitem"
                        onClick={() => setGetInTouchOpen(false)}
                      >
                        <FaEnvelope className="contact-dropdown-icon" />
                        <span>
                          <strong>Email</strong>
                          <small>seanbiningu6@gmail.com</small>
                        </span>
                      </a>
                      <a
                        href="https://wa.me/263710709893"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-dropdown-item"
                        role="menuitem"
                        onClick={() => setGetInTouchOpen(false)}
                      >
                        <FaWhatsapp className="contact-dropdown-icon contact-dropdown-icon--whatsapp" />
                        <span>
                          <strong>WhatsApp</strong>
                          <small>+263 71 070 9893</small>
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="availability"><i /> Open to opportunities</div>
            </div>
          </div>
        </section>

        <section className="statement" id="about">
          <div className="section-wrap split-grid">
            <p className="eyebrow">01 / About</p>
            <div>
              <h2>I turn an idea into a useful, polished digital experience.</h2>
              <p className="body-copy">My work combines a practical engineering mindset with care for the people using the product. I enjoy making interfaces that are easy to understand and systems that are built to grow.</p>
              <div className="contact-dropdown-wrap" ref={startConvRef}>
                <button
                  className="text-link contact-dropdown-trigger"
                  onClick={() => { setStartConvOpen(o => !o); setGetInTouchOpen(false); }}
                  aria-expanded={startConvOpen}
                  aria-haspopup="true"
                  id="start-conversation-btn"
                >
                  Start a conversation <FaExternalLinkAlt />
                </button>
                {startConvOpen && (
                  <div className="contact-dropdown contact-dropdown--above" role="menu" aria-label="Start conversation options">
                    <a
                      href="tel:+263710709893"
                      className="contact-dropdown-item"
                      role="menuitem"
                      onClick={() => setStartConvOpen(false)}
                    >
                      <FaPhone className="contact-dropdown-icon" />
                      <span>
                        <strong>Call me</strong>
                        <small>+263 71 070 9893</small>
                      </span>
                    </a>
                    <a
                      href="https://wa.me/263710709893"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-dropdown-item"
                      role="menuitem"
                      onClick={() => setStartConvOpen(false)}
                    >
                      <FaWhatsapp className="contact-dropdown-icon contact-dropdown-icon--whatsapp" />
                      <span>
                        <strong>WhatsApp</strong>
                        <small>+263 71 070 9893</small>
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="story" id="story">
          <div className="section-wrap">
            <p className="eyebrow">02 / My Story</p>
            <div className="story-layout">
              <div className="story-quote-col">
                <blockquote className="story-pullquote">
                  <span className="story-quote-mark">“</span>
                  Every project I build is an opportunity to write better code, improve user experiences, and grow as a software engineer.
                  <span className="story-quote-mark story-quote-mark--close">”</span>
                </blockquote>
                <div className="story-tag-row">
                  <span className="story-tag">Full-Stack Dev</span>
                  <span className="story-tag">Problem Solver</span>
                  <span className="story-tag">Lifelong Learner</span>
                </div>
              </div>
              <div className="story-chapters">
                <div className="story-chapter">
                  <div className="story-chapter-icon"><FaLightbulb /></div>
                  <div className="story-chapter-body">
                    <h3>Where it started</h3>
                    <p>My journey into software development began with a curiosity about how websites and applications work. That curiosity quickly became a passion for building solutions that solve real-world problems.</p>
                  </div>
                </div>
                <div className="story-chapter">
                  <div className="story-chapter-icon"><FaCode /></div>
                  <div className="story-chapter-body">
                    <h3>How I grow</h3>
                    <p>As a Full-Stack Software Development student, I continuously improve my skills by developing practical projects, exploring modern technologies, and following industry best practices. I enjoy learning new frameworks, solving challenging problems, and creating applications that are both functional and visually appealing.</p>
                  </div>
                </div>
                <div className="story-chapter">
                  <div className="story-chapter-icon"><FaRocket /></div>
                  <div className="story-chapter-body">
                    <h3>What drives me</h3>
                    <p>Every project I build is an opportunity to write better code, improve user experiences, and grow as a software engineer. I believe the best software is made at the intersection of clear thinking and genuine care for the people using it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">03 / Selected work</p><h2>Projects with purpose.</h2></div>
            <p>Small details, clear outcomes, and a focus on the people at the other end of the screen.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image"><img src={project.image} alt={project.title} /></div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <div className="project-stack">
                      {project.stack.slice(0, 3).map((s) => <span className="stack-chip" key={s}>{s}</span>)}
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="https://github.com/SeanBiningu" target="_blank" rel="noreferrer" className="project-link text-link">View project <FaExternalLinkAlt /></a>
                </div>
              </article>
            ))}
            {placeholders.map((slot) => (
              <article className="project-card project-card-placeholder" key={slot.number} aria-label="Upcoming project">
                <div className="project-image project-image-placeholder">
                  <span className="placeholder-icon">+</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{slot.number}</span>
                    <span className="stack-chip placeholder-chip">Coming soon</span>
                  </div>
                  <h3>Project in progress</h3>
                  <p>A new build is on the way. Check back soon for the next release.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="skills-header">
            <div className="section-wrap">
              <p className="eyebrow">04 / Capabilities</p>
              <h2>Tools are a means,<br />not the point.</h2>
              <p className="body-copy">I choose technology to make the product more useful, reliable, and enjoyable.</p>
            </div>
          </div>
          <div className="section-wrap skill-grid">
            {skillGroups.map(([title, ...skills]) => <div className="skill-group" key={title}><h3>{title}</h3>{skills.map(skill => <p key={skill}>{skill}</p>)}</div>)}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">05 / Contact</p>
          <h2>Have something in mind?<br /><em>Let’s make it happen.</em></h2>
          <a className="email-link" href="mailto:seanbiningu6@email.com">seanbiningu6@email.com <FaExternalLinkAlt /></a>
          <div className="social-links"><a href="https://github.com/SeanBiningu" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href="mailto:seanbiningu6@email.com"><FaEnvelope /> Email</a></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Sean Biningu</span><span>Designed & built with intention</span></footer>
    </div>
  );
}

export default App;
