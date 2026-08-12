import { useState, useRef, useEffect } from "react";
import { FaArrowDown, FaExternalLinkAlt, FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaLightbulb, FaCode, FaRocket, FaPlay, FaTimes, FaSearch, FaPlus, FaCalendarAlt } from "react-icons/fa";
import eventPlanner from "./eventplanner.png";
import studentManagement from "./studentmanagement.png";
import jobfinder from "./jobfinder.png";
import { isSupabaseConfigured } from "./lib/supabase";


const projects = [
  {
    number: "01",
    title: "Student Management Dashboard",
    description: "A clear, practical dashboard for organizing student records and academic information.",
    image: studentManagement,
    stack: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://student-mangement-dash-board-react-rust.vercel.app/",
  },
  {
    number: "02",
    title: "Event Planner",
    description: "A responsive planning tool that keeps events, details, and schedules in one place.",
    image: eventPlanner,
    stack: ["React", "CSS", "JavaScript"],
    demoUrl: "https://event-planner-react-app-jdmw.vercel.app",
  },
  {
    number: "03",
    title: "Job Finder",
    description: "A job-search platform that helps candidates discover relevant openings, filter roles by what matters to them, and save opportunities to revisit later.",
    image: jobfinder,
    stack: ["React", "JavaScript", "CSS"],
    demoUrl: "https://job-finder-wqp9.vercel.app/",
  },
];

const placeholders = [
  { number: "04" },
  { number: "05" },
];

const skillGroups = [
  ["Frontend", "React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  ["Backend", "Node.js", "Express.js", "MongoDB", "MySQL"],
  ["Workflow", "Git & GitHub", "Figma", "VS Code", "UX thinking"],
];

const emailAddress = "seanbiningu6@gmail.com";
const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent("Portfolio enquiry")}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const [startConvOpen, setStartConvOpen] = useState(false);
  const [getInTouchOpen, setGetInTouchOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);
  const [studentQuery, setStudentQuery] = useState("");
  const [attendance, setAttendance] = useState({ Amara: "Present", Tawanda: "Present", Nyasha: "Absent" });
  const [events, setEvents] = useState([
    { title: "Design review", date: "Today, 14:00", type: "Meeting" },
    { title: "Portfolio launch", date: "Friday, 10:30", type: "Launch" },
  ]);
  const [eventTitle, setEventTitle] = useState("");
  const [jobSearch, setJobSearch] = useState("");
  const [jobType, setJobType] = useState("All roles");
  const [savedJobs, setSavedJobs] = useState([]);
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

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") setActiveDemo(null);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const students = [
    { name: "Amara Ncube", course: "Software Engineering", grade: "A" },
    { name: "Tawanda Moyo", course: "Data Structures", grade: "B+" },
    { name: "Nyasha Dube", course: "Web Development", grade: "A-" },
  ];
  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(studentQuery.toLowerCase()));
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Nova Labs", location: "Remote", type: "Full-time" },
    { id: 2, title: "React Developer", company: "Bright Studio", location: "Harare", type: "Contract" },
    { id: 3, title: "Junior Software Engineer", company: "Buildable", location: "Remote", type: "Full-time" },
  ];
  const visibleJobs = jobs.filter((job) => (job.title + job.company).toLowerCase().includes(jobSearch.toLowerCase()) && (jobType === "All roles" || job.type === jobType));

  function addEvent(event) {
    event.preventDefault();
    const title = eventTitle.trim();
    if (!title) return;
    setEvents((currentEvents) => [...currentEvents, { title, date: "Just added", type: "New" }]);
    setEventTitle("");
  }

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
                        href={emailHref}
                        className="contact-dropdown-item"
                        role="menuitem"
                        onClick={() => setGetInTouchOpen(false)}
                      >
                        <FaEnvelope className="contact-dropdown-icon" />
                        <span>
                          <strong>Email</strong>
                          <small>{emailAddress}</small>
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
                {project.demoUrl ? (
                  <a className="project-image project-image-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                    <img src={project.image} alt={project.title} />
                    <span className="project-image-overlay">Open live demo <FaExternalLinkAlt /></span>
                  </a>
                ) : (
                  <div className="project-image"><img src={project.image} alt={project.title} /></div>
                )}
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <div className="project-stack">
                      {project.stack.slice(0, 3).map((s) => <span className="stack-chip" key={s}>{s}</span>)}
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link text-link">Live demo <FaPlay /></a>
                    ) : project.demo ? (
                      <button type="button" className="project-link text-link project-demo-button" onClick={() => setActiveDemo(project.demo)}>Live demo <FaPlay /></button>
                    ) : null}
                    <a href="https://github.com/SeanBiningu" target="_blank" rel="noreferrer" className="project-link text-link">Source <FaExternalLinkAlt /></a>
                  </div>
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

        {activeDemo && (
          <div className="demo-overlay" role="presentation" onMouseDown={() => setActiveDemo(null)}>
            <section className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onMouseDown={(event) => event.stopPropagation()}>
              <header className="demo-modal-header">
                <div><p className="eyebrow">Interactive preview</p><h2 id="demo-title">{activeDemo === "students" ? "Student Management Dashboard" : activeDemo === "jobs" ? "Job Finder" : "Event Planner"}</h2></div>
                <button type="button" className="demo-close" onClick={() => setActiveDemo(null)} aria-label="Close live demo"><FaTimes /></button>
              </header>

              {activeDemo === "students" ? (
                <div className="demo-app student-demo">
                  <aside className="demo-sidebar"><strong>Campus</strong><span className="demo-nav-active">Overview</span><span>Students</span><span>Attendance</span></aside>
                  <div className="demo-main">
                    <div className="demo-toolbar"><div><p>Good afternoon</p><h3>Student overview</h3></div><label className="demo-search"><FaSearch /><input value={studentQuery} onChange={(event) => setStudentQuery(event.target.value)} placeholder="Search students" aria-label="Search students" /></label></div>
                    <div className="metric-grid"><div><span>Enrolled</span><strong>248</strong></div><div><span>Attendance</span><strong>94%</strong></div><div><span>Average grade</span><strong>B+</strong></div></div>
                    <div className="demo-panel"><div className="demo-panel-heading"><h4>Today&apos;s attendance</h4><span>{filteredStudents.length} students</span></div>{filteredStudents.map((student) => (<div className="student-row" key={student.name}><div><strong>{student.name}</strong><span>{student.course} · Grade {student.grade}</span></div><button type="button" className={attendance[student.name.split(" ")[0]] === "Present" ? "attendance-status present" : "attendance-status"} onClick={() => { const key = student.name.split(" ")[0]; setAttendance((current) => ({ ...current, [key]: current[key] === "Present" ? "Absent" : "Present" })); }}>{attendance[student.name.split(" ")[0]]}</button></div>))}</div>
                  </div>
                </div>
              ) : activeDemo === "jobs" ? (
                <div className="demo-app job-demo">
                  <div className="job-demo-topbar"><div><p>Job Finder</p><h3>Find work you&apos;ll love</h3></div><span>{savedJobs.length} saved</span></div>
                  <div className="job-demo-filters"><label><FaSearch /><input value={jobSearch} onChange={(event) => setJobSearch(event.target.value)} placeholder="Search jobs or companies" aria-label="Search jobs" /></label><select value={jobType} onChange={(event) => setJobType(event.target.value)} aria-label="Filter by job type"><option>All roles</option><option>Full-time</option><option>Contract</option></select></div>
                  <div className="job-demo-results"><div className="job-demo-results-header"><h4>Open roles</h4><small>{visibleJobs.length} matches {isSupabaseConfigured ? "· synced with Supabase" : "· demo data"}</small></div>{visibleJobs.map((job) => <article className="job-demo-card" key={job.id}><div><strong>{job.title}</strong><span>{job.company} · {job.location}</span><small>{job.type}</small></div><button type="button" onClick={() => setSavedJobs((current) => current.includes(job.id) ? current.filter((id) => id !== job.id) : [...current, job.id])}>{savedJobs.includes(job.id) ? "Saved" : "Save job"}</button></article>)}{visibleJobs.length === 0 && <p className="job-demo-empty">No roles match that search yet.</p>}</div>
                </div>
              ) : (
                <div className="demo-app event-demo">
                  <div className="event-topbar"><div><p>August 2026</p><h3>Your events</h3></div><span><FaCalendarAlt /> 2 upcoming</span></div>
                  <div className="event-content"><div className="event-calendar"><div className="calendar-week">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div><div className="calendar-days">{Array.from({ length: 21 }, (_, index) => <button type="button" key={index} className={index === 11 ? "selected-day" : ""}>{index + 3}{index === 11 && <i />}</button>)}</div></div><div className="event-list"><h4>Upcoming</h4>{events.map((item, index) => <div className="event-row" key={`${item.title}-${index}`}><span className="event-marker" /><div><strong>{item.title}</strong><small>{item.date} · {item.type}</small></div></div>)}<form className="add-event" onSubmit={addEvent}><input value={eventTitle} onChange={(event) => setEventTitle(event.target.value)} placeholder="Add an event" aria-label="New event title" /><button type="submit" aria-label="Add event"><FaPlus /></button></form></div></div>
                </div>
              )}
              <p className="demo-note">This interactive preview is built into the portfolio. Try searching, updating attendance, selecting a date, or adding an event.</p>
            </section>
          </div>
        )}

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
          <a className="email-link" href={emailHref} aria-label={`Send an email to ${emailAddress}`}>{emailAddress} <FaExternalLinkAlt aria-hidden="true" /></a>
          <div className="social-links"><a href="https://github.com/SeanBiningu" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://www.linkedin.com/in/sean-biningu-960b233aa" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href={emailHref} aria-label={`Send an email to ${emailAddress}`}><FaEnvelope aria-hidden="true" /> Email</a></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Sean Biningu</span><span>Designed & built with intention</span></footer>
    </div>
  );
}

export default App;
