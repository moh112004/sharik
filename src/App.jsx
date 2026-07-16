import React, { useState, useEffect, useRef } from "react";
import {
  content,
  heroImages,
  sharikLogo,
  partnerLogos,
} from "./data/content.js";
import { projectsByLang } from "./data/projects.js";
function VideoViewer({ src, title, ratio }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // استخراج معرّف الفيديو من رابط جوجل درايف باستخدام تعبير نمطي
  const videoIdMatch = src.match(/\/file\/d\/([^/]+)/) || src.match(/id=([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  const thumbnailUrl = videoId ? `https://drive.google.com/thumbnail?id=${videoId}&sz=w800` : "";

  return (
    <div className="video-example">
      <a href={thumbnailUrl}>{thumbnailUrl}</a>
      <div 
        className={`video-wrapper ${!isLoaded ? "not-loaded" : ""}`} 
        style={{ 
          aspectRatio: ratio,
          backgroundImage: !isLoaded && thumbnailUrl ? `url(${thumbnailUrl})` : "none",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          cursor: !isLoaded ? "pointer" : "default"
        }}
        onClick={() => { if (!isLoaded) setIsLoaded(true); }}
      >
        {isLoaded ? (
          <iframe
            src={`${src}${src.includes('?') ? '&' : '?'}autoplay=1`}
            title={title}
            loading="lazy"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "100%", absolute: "absolute" }}>
          </iframe>
        ) : (
          <div className="play-button-overlay" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "24px"
          }}>
            ▶
          </div>
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
}
function ProjectCard({ project, isArabic }) {
  const [expanded, setExpanded] = useState(false);
  const VIDEO_LIMIT = 5;
  const videos = project.videos || [];
  const hasMore = videos.length > VIDEO_LIMIT;
  const visible = expanded ? videos : videos.slice(0, VIDEO_LIMIT);
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      {videos.length > 0 && (
        <>
          <div className="videos-grid">
            {visible.map((v, j) => (
              <VideoViewer
                key={j}
                src={v.src}
                title={v.title}
                ratio={v.ratio || "9/16"}
              />
              
            ))}
          </div>
          {hasMore && (
            <div className="show-more-wrap">
              <button
                className={`show-more-btn ${expanded ? "expanded" : ""}`}
                onClick={() => setExpanded(!expanded)}>
                <span>
                  {expanded
                    ? isArabic
                      ? "عرض أقل"
                      : "Show less"
                    : isArabic
                      ? `عرض المزيد (${videos.length - VIDEO_LIMIT}+)`
                      : `Show more (${videos.length - VIDEO_LIMIT}+)`}
                </span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          )}
        </>
      )}
    </article>
  );
}

export default function App() {
  const [isArabic, setIsArabic] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("language");
    return saved ? saved === "ar" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("governmental");
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navRef = useRef(null);

  const marqueeLogos = [...partnerLogos, ...partnerLogos];

  useEffect(() => {
    localStorage.setItem("language", isArabic ? "ar" : "en");
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((s) => (s + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = document.querySelectorAll("section[id], footer#footer");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveSection(entry.target.id || "footer");
        });
      },
      { threshold: 0.35 },
    );
    sections.forEach((s) => sectionObserver.observe(s));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const c = isArabic ? content.ar : content.en;
  const projects = isArabic ? projectsByLang.ar : projectsByLang.en;
  const featureIcons = ["brain", "chart-line", "users", "cogs", "rocket"];
  const serviceIcons = ["share-alt", "palette", "bullhorn"];
  const processIcons = [
    "search",
    "lightbulb",
    "pencil-alt",
    "tools",
    "check-circle",
    "rocket",
  ];
  const tabKeys = ["governmental", "humanitarian", "private"];

  return (
    <div className={`app ${isArabic ? "rtl" : "ltr"}`}>
      <nav className="navbar" ref={navRef}>
        <img src={sharikLogo} alt="Sharik Logo" className="nav-logo-img" />
        <div className="nav-right">
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            { id: "about", label: c.nav.about },
            { id: "services", label: c.nav.services },
            { id: "partners", label: c.nav.partners },
            { id: "work", label: c.nav.work },
            { id: "footer", label: c.nav.contact },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection(item.id);
                }}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="lang-toggle"
              onClick={() => setIsArabic(!isArabic)}>
              <i className="fas fa-globe"></i>
              <span>{isArabic ? "EN" : "عر"}</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className="section section-hero">
        <div className="hero-bg-grid" />
        <div className="hero-blob one" />
        <div className="hero-blob two" />
        <div className="hero-slideshow">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`hero-slide ${i === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="hero-slide-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={`hero-slide-dot ${i === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
        <div className="container hero-content">
          <span className="hero-eyebrow">{c.hero.caption}</span>
          <h1 className="hero-title">
            {isArabic ? (
              <>
                إبداع <span className="accent">يصنع</span>
                <br />
                الفرق
              </>
            ) : (
              <>
                Creative work that <span className="accent">moves</span> brands
              </>
            )}
          </h1>
          <p className="hero-text">{c.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              <span>{isArabic ? "اعرض أعمالنا" : "View Our Work"}</span>
              <i
                className={`fas ${isArabic ? "fa-arrow-left" : "fa-arrow-right"}`}></i>
            </a>
            <a href="#footer" className="button button-secondary">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">
                50<span>+</span>
              </div>
              <div className="hero-stat-label">
                {isArabic ? "مشروع منجز" : "Projects delivered"}
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                13<span>+</span>
              </div>
              <div className="hero-stat-label">
                {isArabic ? "شريك استراتيجي" : "Strategic partners"}
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                100<span>%</span>
              </div>
              <div className="hero-stat-label">
                {isArabic ? "التزام بالجودة" : "Quality focus"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt animate-on-scroll" id="about">
        <div className="container text-center">
          <h2 className="section-title">{c.about.title}</h2>
          <p className="section-copy">{c.about.text}</p>
        </div>
      </section>

      <section className="section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">{c.whyChoose.title}</h2>
          <div className="feature-grid">
            {c.whyChoose.features.map((f, i) => (
              <article key={i} className="feature-card">
                <div className="icon-circle">
                  <i className={`fas fa-${featureIcons[i]}`}></i>
                </div>
                <h3>{f}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt animate-on-scroll" id="services">
        <div className="container">
          <h2 className="section-title">{c.services.title}</h2>
          <div className="service-grid">
            {c.services.items.map((s, i) => (
              <article key={i} className="service-card">
                <div className="icon-circle">
                  <i className={`fas fa-${serviceIcons[i]}`}></i>
                </div>
                <h3>{s.title}</h3>
                <ul>
                  {s.list.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section animate-on-scroll" id="partners">
        <div className="container">
          <h2 className="section-title">{c.partners.title}</h2>
        </div>
        <div className="partner-grid">
          <div className="partner-track">
            {marqueeLogos.map((logo, i) => (
              <div key={i} className="partner-slide">
                <img src={logo.src} alt={logo.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt animate-on-scroll" id="work">
        <div className="container">
          <h2 className="section-title">{c.work.title}</h2>
          <div className="tabs">
            {c.work.tabs.map((tab, i) => (
              <button
                key={i}
                className={`tab-button ${activeTab === tabKeys[i] ? "active" : ""}`}
                onClick={() => setActiveTab(tabKeys[i])}>
                {tab}
              </button>
            ))}
          </div>
          <div className="project-list">
            {projects
              .filter((p) => p.category === activeTab)
              .map((p, i) => (
                <ProjectCard key={i} project={p} isArabic={isArabic} />
              ))}
          </div>
        </div>
      </section>

      <section className="section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">{c.process.title}</h2>
          <div className="process-grid">
            {c.process.steps.map((step, i) => (
              <article key={i} className="process-card">
                <div className="icon-circle">
                  <i className={`fas fa-${processIcons[i]}`}></i>
                </div>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt animate-on-scroll">
        <div className="container">
          <div className="vision-grid">
            <article className="vision-card">
              <h2 className="section-title">{c.vision.title}</h2>
              <p>{c.vision.text}</p>
            </article>
            <article className="vision-card">
              <h2 className="section-title">{c.mission.title}</h2>
              <p>{c.mission.text}</p>
            </article>
            <article className="vision-card">
              <h2 className="section-title">{c.values.title}</h2>
              <ul>
                {c.values.list.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={sharikLogo} alt="Sharik Logo" className="footer-logo" />
            <p>{c.footer.brandLine}</p>
          </div>
          <div className="footer-contact">
            <h3>{c.contact.title}</h3>
            <div className="footer-contact-list">
              <a
                href="mailto:info@sharikmedia.com"
                className="footer-contact-item">
                <div className="icon-circle small">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>info@sharikmedia.com</span>
              </a>
              <div
                className="footer-contact-item"
                style={{ cursor: "default" }}>
                <div className="icon-circle small">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>{isArabic ? "الخرطوم، السودان" : "Khartoum, Sudan"}</span>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <h3>{c.contact.followUs}</h3>
            <div className="footer-social-list">
              <a
                href="https://www.facebook.com/share/1BU2MevDFT/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer">
                <div className="icon-circle small">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-copy">
          <p>{c.footer.copyright}</p>
        </div>
      </footer>
      <button
        type="button"
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={isArabic ? "العودة إلى الأعلى" : "Back to top"}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
