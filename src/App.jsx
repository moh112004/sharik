import { useState, useEffect, useRef } from "react";
import mneLogo from './assets/logos/MNE.jpg';
import smrcLogo from './assets/logos/smrc.jpeg';
import unicefLogo from './assets/logos/unicef.png';
import modaLogo from './assets/logos/moda.PNG';
import saifLogo from './assets/logos/saif_aldawla.jpg';
import kingSalmanLogo from './assets/logos/king_salman.jpeg';
import primeLogo from './assets/logos/prime_disel.PNG';
import oneSudanLogo from './assets/logos/one_sudan.jpg';
import sharikLogo from './assets/logos/sharik.png';
import khalidDagashLogo from './assets/logos/khalid_dagash.jpeg';

function App() {
  const [isArabic, setIsArabic] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center"
  ];

  const partnerLogos = [
    mneLogo,
    smrcLogo,
    unicefLogo,
    modaLogo,
    saifLogo,
    kingSalmanLogo,
    primeLogo,
    oneSudanLogo,
    khalidDagashLogo,
  ];

  const marqueeLogos = [...partnerLogos, ...partnerLogos];

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const content = {
    en: {
      nav: {
        about: "About",
        services: "Services",
        partners: "Partners",
        work: "Work",
        contact: "Contact",
      },
      hero: {
        title: "Sharik Creatives",
        subtitle: "Media crafted for influence and growth",
        year: "2026",
        caption: "Company Portfolio",
      },
      about: {
        title: "About Us",
        text: "At Sharik Creatives, we believe creativity is not decoration, it is a strategic tool that shapes perception, builds trust, and supports brands and corporate goals.",
      },
      whyChoose: {
        title: "Why choose us as your growth partner?",
        features: [
          "Strategic thinking before design",
          "Data-driven creativity",
          "Hands-on market experience",
          "Structured workflows",
          "Large-scale campaigns",
        ],
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Digital Solutions",
            list: ["Social media strategy & management", "Content creation"],
          },
          {
            title: "Creative & Design",
            list: [
              "Branding",
              "Video production",
              "Social media designs",
              "Motion Graphics",
            ],
          },
          {
            title: "Marketing & Campaign Execution",
            list: [
              "Integrated marketing campaigns",
              "Public awareness campaigns",
            ],
          },
        ],
      },
      partners: {
        title: "Our Valued Partners",
        list: [
          "Ministry of National Education",
          "Sudanese Mineral Resources Company",
          "UNICEF",
          "Moda Steel Factory",
          "Saif Al-Dawla Food Industries",
          "King Salman Humanitarian Aid Centre",
          "Prime Diesel",
          "One Sudan",
          "Khalid Dagash",
        ],
      },
      work: {
        title: "A Glimpse of Our Work",
        projects: [
          {
            title:
              "Ministry of National Education - Madrasati Awlan campaign - 2026",
            desc: "Sharik Creatives ran and executed a full campaign for the ministry of education, starting from launching the ministry’s social media platforms to producing all digital products, videos, statics, and news.",
            meta: ["Campaign Films", "Graphic Assets", "Launch Strategy"],
          },
          {
            title:
              "Sudanese Mineral Resources Company Limited - Documentary Film – Corporate Social Responsibility 2024",
            desc: "A comprehensive documentary highlighting social responsibility initiatives across the Eastern, Northern, and Central sectors, delivered as a full end-to-end production including filming, editing, and directing.",
            meta: ["Documentary"],
          },
          {
            title: "UNICEF – E-Learning Project",
            desc: "Comprehensive media coverage of the Regional Director’s visit to the E-Learning Center in Al-Iskan, Port Sudan, highlighting key educational initiatives through professional filming, editing, and full production execution.",
            meta: ["Educational Video"],
          },
          {
            title:
              "King Salman Humanitarian Aid & Relief Centre – Food Security Support Project 2024",
            desc: "Production of an official launch video for the Food Security Support Project in Sudan, highlighting the initiative’s goals and impact through professional filming and editing.",
            meta: ["Launch Video"],
          },
          {
            title: "Moda Steel Factory – Brand Identity & Digital Presence",
            desc: "Building a strong and consistent digital presence for the brand through a strategic branding campaign and a visually driven branding advertisement that reflects the brand’s identity and values.",
            meta: ["Brand Video", "Visual Identity"],
          },
          {
            title:
              "Saif Al-Dawla Food Industries – Social Media Management & Advertising Campaigns",
            desc: "Comprehensive management of social media platforms and execution of targeted advertising campaigns to enhance brand awareness and engage the audience effectively.",
            meta: ["Campaign Content"],
          },
          {
            title: "Prime Diesel – Corporate Interviews",
            desc: "Production of a series of professional interviews with company directors, showcasing their roles, responsibilities, and contributions to the organization through high-quality filming and editing.",
            meta: ["Interview Series"],
          },
          {
            title: "Econect – Official Company Advertisement",
            desc: "Execution of a polished official advertisement for the company, designed to effectively communicate its brand message and values through high-quality visuals and storytelling.",
            meta: ["Brand Advertisement"],
          },
          {
            title:
              "Khalid Daqash Medical Company - Brand Identity & Digital Presence",
            desc: "Developing a comprehensive brand identity and digital presence for the medical company, including strategic branding campaigns and visually compelling advertisements that reflect the company's commitment to healthcare excellence.",
            meta: ["Brand Video", "Visual Identity"],
          },
        ],
      },
      process: {
        title: "Our Process",
        steps: [
          "Understanding & Research",
          "Strategy Development",
          "Creative Concepting",
          "Design & Content Production",
          "Review & Alignment",
          "Launch & Evaluation",
        ],
      },
      vision: {
        title: "Vision",
        text: "Long-term contribution to corporate & private sector branding",
      },
      mission: {
        title: "Mission",
        text: "Delivering creative solutions aligned with strategic objectives",
      },
      values: {
        title: "Core Values",
        list: [
          "Integrity - Accountability",
          "Cultural awareness - Professionalism",
        ],
      },
      contact: {
        title: "Contact Us",
        getInTouch: "Get In Touch",
        followUs: "Follow Us",
      },
    },
    ar: {
      nav: {
        about: "من نحن",
        services: "خدماتنا",
        partners: "شركاؤنا",
        work: "أعمالنا",
        contact: "تواصل معنا",
      },
      hero: {
        title: "شارك كريتفز",
        subtitle: "وسائط مصممة للتأثير والنمو",
        year: "2026",
        caption: "محفظة الشركة",
      },
      about: {
        title: "من نحن",
        text: "في شارك كريتفز، نؤمن أن الإبداع ليس مجرد زخرفة، بل أداة استراتيجية تشكل الإدراك، تبني الثقة، وتدعم أهداف العلامات التجارية والشركات.",
      },
      whyChoose: {
        title: "لماذا تختارنا كشريك نموك؟",
        features: [
          "التفكير الاستراتيجي قبل التصميم",
          "الإبداع المبني على البيانات",
          "خبرة عملية في السوق",
          "سير عمل منظم",
          "حملات واسعة النطاق",
        ],
      },
      services: {
        title: "خدماتنا",
        items: [
          {
            title: "الحلول الرقمية",
            list: [
              "استراتيجية وسائل التواصل الاجتماعي وإدارتها",
              "إنشاء المحتوى",
            ],
          },
          {
            title: "الإبداع والتصميم",
            list: [
              "العلامات التجارية",
              "إنتاج الفيديو",
              "تصاميم وسائل التواصل",
              "الرسوم المتحركة",
            ],
          },
          {
            title: "التسويق وتنفيذ الحملات",
            list: ["حملات تسويق متكاملة", "حملات التوعية العامة"],
          },
        ],
      },
      partners: {
        title: "شركاؤنا الكرام",
        list: [
          "وزارة التعليم والتربية الوطنية",
          "الشركة السودانية للموارد المعدنية",
          "اليونسيف",
          "مصنع مودا للصلب",
          "صناعات سيف الدولة الغذائية",
          "مركز الملك سلمان للإغاثة",
          "برايم ديزل",
          "وان سودان",
        ],
      },
      work: {
        title: "نظرة على أعمالنا",
        projects: [
          {
            title: "وزارة التعليم الوطني - حملة مدرستي أولان - 2026",
            desc: "قامت شارك كريتفز بتشغيل وتنفيذ حملة كاملة لوزارة التعليم، بدءاً من إطلاق منصات التواصل الاجتماعي للوزارة وإنتاج جميع المنتجات الرقمية والفيديوهات والصور الثابتة والأخبار.",
            meta: ["أفلام الحملة", "الأصول الجرافيكية", "استراتيجية الإطلاق"],
          },
          {
            title:
              "الشركة السودانية للموارد المعدنية - فيلم وثائقي - المسؤولية الاجتماعية للشركات 2024",
            desc: "فيلم وثائقي شامل يبرز مبادرات المسؤولية الاجتماعية عبر القطاعات الشرقية والشمالية والوسطى، تم تسليمه كإنتاج شامل من البداية إلى النهاية بما في ذلك التصوير والتحرير والإخراج.",
            meta: ["الفيلم الوثائقي"],
          },
          {
            title: "اليونسيف - مشروع التعلم الإلكتروني",
            desc: "تغطية إعلامية شاملة لزيارة المدير الإقليمي لمركز التعلم الإلكتروني في الإسكان، بورتسودان، مع تسليط الضوء على المبادرات التعليمية من خلال التصوير والتحرير والإنتاج المهني الكامل.",
            meta: ["الفيديو التعليمي"],
          },
          {
            title:
              "مركز الملك سلمان للإغاثة والمساعدات الإنسانية - مشروع دعم الأمن الغذائي 2024",
            desc: "إنتاج فيديو إطلاق رسمي لمشروع دعم الأمن الغذائي في السودان، مع تسليط الضوء على أهداف المشروع وتأثيره من خلال التصوير والتحرير المهني.",
            meta: ["فيديو الإطلاق"],
          },
          {
            title: "مصنع مودا للصلب - الهوية التجارية والحضور الرقمي",
            desc: "بناء حضور رقمي قوي ومتسق للعلامة التجارية من خلال حملة علامة تجارية استراتيجية وإعلان علامة تجارية مدفوع بصرياً يعكس هوية العلامة وقيمها.",
            meta: ["فيديو العلامة التجارية", "الهوية البصرية"],
          },
          {
            title:
              "صناعات سيف الدولة الغذائية - إدارة وسائل التواصل الاجتماعي وحملات الإعلان",
            desc: "إدارة شاملة لمنصات وسائل التواصل الاجتماعي وتنفيذ حملات إعلانية مستهدفة لتعزيز الوعي بالعلامة التجارية وجذب الجمهور بشكل فعال.",
            meta: ["محتوى الحملة"],
          },
          {
            title: "برايم ديزل - مقابلات شركات",
            desc: "إنتاج سلسلة من المقابلات المهنية مع مديري الشركة، مع عرض أدوارهم ومسؤولياتهم ومساهماتهم في المنظمة من خلال التصوير والتحرير عالي الجودة.",
            meta: ["سلسلة المقابلات"],
          },
          {
            title: "إيكونيكت - إعلان رسمي للشركة",
            desc: "تنفيذ إعلان رسمي مصقول للشركة، مصمم لنقل رسالة العلامة التجارية وقيمها بشكل فعال من خلال التصورات عالية الجودة والسرد.",
            meta: ["إعلان العلامة التجارية"],
          },
          {
            title: "شركة خالد دقاش الطبية - الهوية التجارية والحضور الرقمي",
            desc: "تطوير هوية تجارية شاملة وحضور رقمي للشركة الطبية، بما في ذلك حملات العلامات التجارية الاستراتيجية والإعلانات المقنعة بصرياً التي تعكس التزام الشركة بالتميز في الرعاية الصحية.",
            meta: ["فيديو العلامة التجارية", "الهوية البصرية"],
          },
        ],
      },
      process: {
        title: "عمليتنا",
        steps: [
          "الفهم والبحث",
          "تطوير الاستراتيجية",
          "التصور الإبداعي",
          "التصميم وإنتاج المحتوى",
          "المراجعة والتوافق",
          "الإطلاق والتقييم",
        ],
      },
      vision: {
        title: "الرؤية",
        text: "المساهمة طويلة الأمد في العلامات التجارية للقطاعين العام والخاص",
      },
      mission: {
        title: "الرسالة",
        text: "تقديم حلول إبداعية تتماشى مع الأهداف الاستراتيجية",
      },
      values: {
        title: "القيم الأساسية",
        list: ["النزاهة - المساءلة", "الوعي الثقافي - المهنية"],
      },
      contact: {
        title: "تواصل معنا",
        getInTouch: "تواصل معنا",
        followUs: "تابعنا",
      },
    },
  };

  const currentContent = isArabic ? content.ar : content.en;

  return (
    <div className={`app ${isArabic ? "rtl" : "ltr"}`}>
      <nav className="navbar" ref={navRef}>
        <img src={sharikLogo} alt="Sharik Logo" className="nav-logo-img" />
        <div className="nav-right">
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              {currentContent.nav.about}
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              {currentContent.nav.services}
            </a>
          </li>
          <li>
            <a href="#partners" onClick={() => setMenuOpen(false)}>
              {currentContent.nav.partners}
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              {currentContent.nav.work}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {currentContent.nav.contact}
            </a>
          </li>
          <li className="lang-li">
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language">
              <i className="fas fa-globe"></i>
              <span>{isArabic ? "عر" : "EN"}</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className="section section-hero">
        <div className="hero-slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
              />
          ))}
        </div>
      </section>
              <section className="section">
        <div className="container hero-content">
          <h1 className="hero-title text-primary">
            {currentContent.hero.title}
          </h1>
          <p className="hero-text">{currentContent.hero.subtitle}</p>
        </div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container text-center">
          <h2 className="section-title">{currentContent.about.title}</h2>
          <p className="section-copy">{currentContent.about.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.whyChoose.title}
          </h2>
          <div className="feature-grid">
            {currentContent.whyChoose.features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="icon-circle">
                  <i
                    className={`fas fa-${["brain", "chart-line", "users", "cogs", "rocket"][index]}`}></i>
                </div>
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="services">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.services.title}
          </h2>
          <div className="service-grid">
            {currentContent.services.items.map((service, index) => (
              <article key={index} className="service-card">
                <div className="icon-circle">
                  <i
                    className={`fas fa-${["share-alt", "palette", "bullhorn"][index]}`}></i>
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.partners.title}
          </h2>
          <div className="partner-grid">
            <div className="partner-track">
              {marqueeLogos.map((logo, index) => (
                <div key={index} className="partner-slide">
                  <img
                    src={logo}
                    alt={currentContent.partners.list[index % partnerLogos.length]}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="work">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.work.title}
          </h2>
          <div className="project-list">
            {currentContent.work.projects.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-meta">
                  {project.meta.map((meta, i) => (
                    <span key={i}>
                      <i
                        className={`fas fa-${["play", "film", "play", "play", "play", "play", "play", "play"][index]}`}></i>
                      {meta}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.process.title}
          </h2>
          <div className="process-grid">
            {currentContent.process.steps.map((step, index) => (
              <article key={index} className="process-card">
                <div className="icon-circle">
                  <i
                    className={`fas fa-${["search", "lightbulb", "pencil-alt", "tools", "check-circle", "rocket"][index]}`}></i>
                </div>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="vision-grid">
            <article className="vision-card">
              <h2 className="section-title">{currentContent.vision.title}</h2>
              <p>{currentContent.vision.text}</p>
            </article>
            <article className="vision-card">
              <h2 className="section-title">{currentContent.mission.title}</h2>
              <p>{currentContent.mission.text}</p>
            </article>
            <article className="vision-card">
              <h2 className="section-title">{currentContent.values.title}</h2>
              <ul>
                {currentContent.values.list.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title centered">
            {currentContent.contact.title}
          </h2>
          <div className="contact-grid">
            <article className="contact-panel">
              <h3>{currentContent.contact.getInTouch}</h3>
              <p>
                <i className="fas fa-phone"></i> +249 123 456 789
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@sharikmedia.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Khartoum, Sudan
              </p>
            </article>
            <article className="contact-panel">
              <h3>{currentContent.contact.followUs}</h3>
              <div className="social-links">
                <a href="#">
                  <div className="icon-circle">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="icon-circle">
                    <i className="fab fa-twitter"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="icon-circle">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="icon-circle">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
