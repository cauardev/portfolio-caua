const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageFlag = document.querySelector("[data-language-flag]");
const languageCode = document.querySelector("[data-language-code]");
const themeColor = document.querySelector('meta[name="theme-color"]');
const pageDescription = document.querySelector("[data-page-description]");
const backToTop = document.querySelector("[data-back-to-top]");
const progressBar = document.querySelector("[data-scroll-progress]");

const translations = {
  pt: {
    "global.skip": "Ir para o conteúdo",
    "global.brandLabel": "Cauã Robson — página inicial",
    "global.navLabel": "Navegação principal",
    "global.location": "Vila Velha, ES — Brasil",
    "global.locationShort": "Vila Velha, ES",
    "global.footerNote": "Backend em construção, com o progresso publicado.",
    "nav.home": "Home",
    "nav.technologies": "Tecnologias",
    "nav.projects": "Projetos",
    "nav.career": "Carreira",
    "actions.viewProjects": "Ver projetos",
    "actions.viewJourney": "Ver trajetória",
    "actions.viewTechnologies": "Ver todas as tecnologias",
    "actions.seeApplied": "Ver aplicação nos projetos",
    "actions.openLinkedin": "Abrir LinkedIn",
    "home.heroStatement": "Construindo base técnica, projeto por projeto.",
    "home.availability": "Aberto a oportunidades",
    "home.socialLabel": "Perfis sociais",
    "home.aboutAria": "Apresentação profissional",
    "home.aboutLabel": "Sobre",
    "home.aboutTitle": "Java no centro. Projetos para mostrar o avanço.",
    "home.aboutProfile": "Curso <strong>Ciência da Computação na UVV</strong>, com foco em desenvolvimento <strong>Back-End</strong> no ecossistema <strong>Java + Spring</strong>. Mantenho uma rotina consistente de estudos através do Java Developer da IBM e do curso do Nélio Alves, aplicando o conteúdo em projetos reais. Aberto a oportunidades profissionais — presencial, remoto ou híbrido.",
    "home.focusLabel": "Foco atual",
    "home.focusTitle": "Ecossistema Java",
    "home.focusCopy": "Tecnologias que já aparecem nos projetos publicados.",
    "social.linkedin": "Abrir LinkedIn de Cauã Robson",
    "social.github": "Abrir GitHub de Cauã Robson",
    "social.instagram": "Abrir Instagram de Cauã Robson",
    "tech.eyebrow": "Tecnologias",
    "tech.title": "Ferramentas que já chegaram aos meus projetos.",
    "tech.intro": "Uma stack curta e coerente com o backend que estou construindo — sem preencher espaço com tecnologia que só vi por alto.",
    "tech.boardAria": "Tecnologias por categoria",
    "tech.backendCopy": "Linguagem, framework e construção de APIs.",
    "tech.database": "Banco de Dados",
    "tech.databaseCopy": "Modelagem e persistência relacional.",
    "tech.tools": "DevOps e Ferramentas",
    "tech.toolsCopy": "Ambiente, nuvem, versionamento e colaboração.",
    "tech.software": "Tecnologias",
    "tech.softwareCopy": "IDEs e editores usados no desenvolvimento.",
    "tech.noteTitle": "O critério é uso, não quantidade.",
    "tech.noteCopy": "Esta lista cresce quando uma tecnologia entra de verdade em estudo ou projeto — não para aumentar artificialmente a stack.",
    "projects.eyebrow": "Projetos",
    "projects.title": "Projetos com código disponível.",
    "projects.intro": "Uma seleção curta do que melhor registra meu momento técnico. O nome de cada projeto abre o repositório correspondente.",
    "projects.listAria": "Lista de projetos",
    "projects.arcaType": "Projeto acadêmico full stack",
    "projects.arcaDescription": "Plataforma de atendimento e cadastro animal com API em Spring Boot, autenticação JWT, PostgreSQL com Flyway e ambiente Docker Compose.",
    "projects.arcaStack": "Tecnologias do ARCA",
    "projects.crmType": "Java puro · Aplicação de terminal",
    "projects.crmName": "CRM de Clientes",
    "projects.crmDescription": "Aplicação de terminal em Java puro com CRUD completo, validações, persistência em arquivo, arquitetura em camadas e testes sem framework.",
    "projects.crmStack": "Tecnologias do CRM de Clientes",
    "projects.portfolioType": "Projeto autoral · Site estático",
    "projects.portfolioName": "Portfólio",
    "projects.portfolioDescription": "Portfólio estático multi-page, responsivo e sem framework JavaScript, com tema e idioma persistentes e deploy direto no GitHub Pages.",
    "projects.portfolioStack": "Tecnologias do portfólio",
    "career.eyebrow": "Trajetória",
    "career.title": "Carreira em construção.",
    "career.intro": "Ainda estou no começo profissional. Esta página registra o que já pratiquei sem transformar curso em cargo ou estudo em experiência de mercado.",
    "career.startLabel": "início prático",
    "career.cityCountry": "ES · Brasil",
    "career.focusLabel": "foco técnico",
    "career.practiceEyebrow": "Na prática",
    "career.practiceTitle": "O que já consigo demonstrar.",
    "career.practiceOneTitle": "Backend com fundamentos",
    "career.practiceOneCopy": "Orientação a objetos, validações, exceções específicas, persistência e responsabilidades separadas em camadas.",
    "career.practiceTwoTitle": "Projetos que podem ser abertos",
    "career.practiceTwoCopy": "CRM em Java puro, ARCA com Spring Boot e este portfólio — todos com código disponível no GitHub.",
    "career.practiceThreeTitle": "Rotina de evolução",
    "career.practiceThreeCopy": "Ciência da Computação na UVV, Java Developer da IBM e estudos de Java com Nélio Alves.",
    "career.educationEyebrow": "Formação",
    "career.educationTitle": "Formação e estudos em andamento.",
    "career.educationIntro": "Graduação e trilhas que sustentam meu desenvolvimento em backend, software e cloud.",
    "career.educationSummary": "Os cursos profissionais listados já ultrapassaram 50% de conclusão, com conteúdos aplicados na prática em projetos.",
    "career.degreeName": "Ciência da Computação",
    "career.degreePeriod": "2026/1 — 2029/12 (previsão)",
    "career.degreeStatus": "Em andamento",
    "career.courseStatus": "cursando",
    "career.nelioCourse": "Java + Programação Orientada a Objetos",
    "career.itaProvider": "Instituto Tecnológico de Aeronáutica (ITA)",
    "career.itaCourse": "Desenvolvimento de Software Ágil",
    "career.uspProvider": "Universidade de São Paulo (USP)",
    "career.uspCourse": "Programação Orientada a Objetos I & II",
    "career.timelineEyebrow": "Linha do tempo",
    "career.timelineTitle": "Evolução documentada.",
    "career.timeline2025Title": "Início prático",
    "career.timeline2025Copy": "Os estudos começaram a virar aplicações próprias, exercícios estruturados e os primeiros repositórios publicados.",
    "career.timeline2026Title": "Foco em backend Java",
    "career.timeline2026Copy": "Aprofundamento em Java, Spring Boot, PostgreSQL, Git, Docker e organização de projetos com responsabilidades claras.",
    "career.certEyebrow": "Base complementar",
    "career.certTitle": "Certificações e repertório de negócio.",
    "career.certListAria": "Certificações concluídas",
    "career.certFgvTitle": "Introdução ao Git e GitHub",
    "career.certCompleted": "Concluído",
    "career.certFgvAria": "Abrir certificado Introdução ao Git e GitHub",
    "career.certCourseraAria": "Abrir certificado Introduction to Software Engineering",
    "career.closingTitle": "Primeiros passos, evidências reais.",
    "career.closingCopy": "A próxima etapa é ganhar experiência dentro de um time. Até lá, meus projetos mostram como estou construindo a base.",
  },
  en: {
    "global.skip": "Skip to content",
    "global.brandLabel": "Cauã Robson — home page",
    "global.navLabel": "Main navigation",
    "global.location": "Vila Velha, ES — Brazil",
    "global.locationShort": "Vila Velha, ES",
    "global.footerNote": "Building my backend career with the progress in public.",
    "nav.home": "Home",
    "nav.technologies": "Technologies",
    "nav.projects": "Projects",
    "nav.career": "Career",
    "actions.viewProjects": "View projects",
    "actions.viewJourney": "View journey",
    "actions.viewTechnologies": "View all technologies",
    "actions.seeApplied": "See them used in projects",
    "actions.openLinkedin": "Open LinkedIn",
    "home.heroStatement": "Building technical depth, one project at a time.",
    "home.availability": "Open to opportunities",
    "home.socialLabel": "Social profiles",
    "home.aboutAria": "Professional introduction",
    "home.aboutLabel": "About",
    "home.aboutTitle": "Java at the center. Projects that show the progress.",
    "home.aboutProfile": "I study <strong>Computer Science at UVV</strong>, focusing on <strong>Back-End development</strong> within the <strong>Java + Spring</strong> ecosystem. I maintain a consistent learning routine through IBM's Java Developer program and Nélio Alves' course, applying the content to real projects. Open to professional opportunities — on-site, remote, or hybrid.",
    "home.focusLabel": "Current focus",
    "home.focusTitle": "Java ecosystem",
    "home.focusCopy": "Technologies already present in my published projects.",
    "social.linkedin": "Open Cauã Robson's LinkedIn",
    "social.github": "Open Cauã Robson's GitHub",
    "social.instagram": "Open Cauã Robson's Instagram",
    "tech.eyebrow": "Technologies",
    "tech.title": "Tools that have already made it into my projects.",
    "tech.intro": "A focused stack aligned with the backend path I am building — without filling space with technologies I have only briefly explored.",
    "tech.boardAria": "Technologies by category",
    "tech.backendCopy": "Language, framework, and API development.",
    "tech.database": "Database",
    "tech.databaseCopy": "Relational modeling and persistence.",
    "tech.tools": "DevOps & Tools",
    "tech.toolsCopy": "Environment, cloud, version control, and collaboration.",
    "tech.software": "Technologies",
    "tech.softwareCopy": "IDEs and editors used in development.",
    "tech.noteTitle": "The criterion is usage, not quantity.",
    "tech.noteCopy": "This list grows when a technology becomes part of an actual project or learning track — not to make the stack look artificially larger.",
    "projects.eyebrow": "Projects",
    "projects.title": "Projects with code you can inspect.",
    "projects.intro": "A short selection that best represents my current technical stage. Each project name opens its corresponding repository.",
    "projects.listAria": "Project list",
    "projects.arcaType": "Academic full-stack project",
    "projects.arcaDescription": "An animal services and registration platform with a Spring Boot API, JWT authentication, PostgreSQL with Flyway, and a Docker Compose environment.",
    "projects.arcaStack": "Technologies used in ARCA",
    "projects.crmType": "Pure Java · Console application",
    "projects.crmName": "Client CRM",
    "projects.crmDescription": "A pure Java console application with full CRUD operations, validation, file persistence, layered architecture, and framework-free tests.",
    "projects.crmStack": "Technologies used in Client CRM",
    "projects.portfolioType": "Independent project · Static website",
    "projects.portfolioName": "Portfolio",
    "projects.portfolioDescription": "A responsive, multi-page static portfolio without a JavaScript framework, featuring persistent theme and language settings with direct GitHub Pages deployment.",
    "projects.portfolioStack": "Technologies used in the portfolio",
    "career.eyebrow": "Journey",
    "career.title": "Career in progress.",
    "career.intro": "I am still at the beginning of my professional path. This page records what I have practiced without presenting courses as job titles or study as market experience.",
    "career.startLabel": "hands-on start",
    "career.cityCountry": "ES · Brazil",
    "career.focusLabel": "technical focus",
    "career.practiceEyebrow": "In practice",
    "career.practiceTitle": "What I can already demonstrate.",
    "career.practiceOneTitle": "Backend foundations",
    "career.practiceOneCopy": "Object-oriented programming, validation, specific exceptions, persistence, and clearly separated responsibilities across layers.",
    "career.practiceTwoTitle": "Projects you can open",
    "career.practiceTwoCopy": "A pure Java CRM, ARCA with Spring Boot, and this portfolio — all with source code available on GitHub.",
    "career.practiceThreeTitle": "A consistent learning routine",
    "career.practiceThreeCopy": "Computer Science at UVV, IBM's Java Developer program, and Java studies with Nélio Alves.",
    "career.educationEyebrow": "Education",
    "career.educationTitle": "Education and ongoing studies.",
    "career.educationIntro": "A degree and learning tracks supporting my growth in backend, software, and cloud.",
    "career.educationSummary": "The professional courses listed are already over 50% complete, with lessons applied in practice through projects.",
    "career.degreeName": "Computer Science",
    "career.degreePeriod": "Feb 2026 — Dec 2029 (expected)",
    "career.degreeStatus": "In progress",
    "career.courseStatus": "in progress",
    "career.nelioCourse": "Java + Object-Oriented Programming",
    "career.itaProvider": "Aeronautics Institute of Technology (ITA)",
    "career.itaCourse": "Agile Software Development",
    "career.uspProvider": "University of São Paulo (USP)",
    "career.uspCourse": "Object-Oriented Programming I & II",
    "career.timelineEyebrow": "Timeline",
    "career.timelineTitle": "Documented progress.",
    "career.timeline2025Title": "Hands-on start",
    "career.timeline2025Copy": "My studies began turning into independent applications, structured exercises, and my first published repositories.",
    "career.timeline2026Title": "Java backend focus",
    "career.timeline2026Copy": "Deeper work with Java, Spring Boot, PostgreSQL, Git, Docker, and project organization with clear responsibilities.",
    "career.certEyebrow": "Complementary foundation",
    "career.certTitle": "Certifications and business knowledge.",
    "career.certListAria": "Completed certifications",
    "career.certFgvTitle": "Introduction to Git and GitHub",
    "career.certCompleted": "Completed",
    "career.certFgvAria": "Open Introduction to Git and GitHub certificate",
    "career.certCourseraAria": "Open Introduction to Software Engineering certificate",
    "career.closingTitle": "Early steps, real evidence.",
    "career.closingCopy": "The next step is gaining experience within a team. Until then, my projects show how I am building the foundation.",
  },
};

const pageMetadata = {
  home: {
    pt: {
      title: "Cauã Robson | Desenvolvedor Backend",
      description: "Portfólio de Cauã Robson, desenvolvedor backend focado no ecossistema Java e Spring.",
    },
    en: {
      title: "Cauã Robson | Backend Developer",
      description: "Cauã Robson's portfolio, a backend developer focused on the Java and Spring ecosystem.",
    },
  },
  technologies: {
    pt: {
      title: "Tecnologias | Cauã Robson",
      description: "Tecnologias utilizadas por Cauã Robson em projetos backend e web.",
    },
    en: {
      title: "Technologies | Cauã Robson",
      description: "Technologies used by Cauã Robson across backend and web projects.",
    },
  },
  projects: {
    pt: {
      title: "Projetos | Cauã Robson",
      description: "Projetos selecionados de Cauã Robson, com código disponível no GitHub.",
    },
    en: {
      title: "Projects | Cauã Robson",
      description: "Selected projects by Cauã Robson, with source code available on GitHub.",
    },
  },
  career: {
    pt: {
      title: "Carreira | Cauã Robson",
      description: "Trajetória de Cauã Robson: início prático, projetos e evolução no desenvolvimento backend Java.",
    },
    en: {
      title: "Career | Cauã Robson",
      description: "Cauã Robson's journey: hands-on beginnings, projects, and progress in Java backend development.",
    },
  },
};

function getStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function storeValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    // The preference still works for the current page when storage is unavailable.
  }
}

function currentLanguage() {
  return root.dataset.language === "en" ? "en" : "pt";
}

function currentTheme() {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function updateThemeControl() {
  if (!themeToggle) return;

  const language = currentLanguage();
  const nextIsLight = currentTheme() === "dark";
  const label = language === "pt"
    ? `Ativar tema ${nextIsLight ? "claro" : "escuro"}`
    : `Switch to ${nextIsLight ? "light" : "dark"} theme`;

  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeColor?.setAttribute("content", currentTheme() === "dark" ? "#050505" : "#f6f6f4");
}

function updateLanguageControl() {
  if (!languageToggle || !languageFlag || !languageCode) return;

  const language = currentLanguage();
  languageFlag.src = language === "en" ? languageFlag.dataset.srcEn : languageFlag.dataset.srcPt;
  languageCode.textContent = language === "en" ? "EN" : "PT";

  const label = language === "pt" ? "Mudar idioma para inglês" : "Switch language to Brazilian Portuguese";
  languageToggle.setAttribute("aria-label", label);
  languageToggle.setAttribute("title", label);
}

function updateBackToTopControl() {
  if (!backToTop) return;
  const label = currentLanguage() === "pt" ? "Voltar ao topo" : "Back to top";
  backToTop.setAttribute("aria-label", label);
  backToTop.setAttribute("title", label);
}

function applyLanguage(language, persist = false) {
  const normalized = language === "en" ? "en" : "pt";
  const dictionary = translations[normalized];

  root.dataset.language = normalized;
  root.lang = normalized === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key] !== undefined) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (dictionary[key] !== undefined) element.setAttribute("aria-label", dictionary[key]);
  });

  const page = document.body.dataset.page;
  const metadata = pageMetadata[page]?.[normalized];
  if (metadata) {
    document.title = metadata.title;
    pageDescription?.setAttribute("content", metadata.description);
  }

  if (persist) storeValue("portfolio-language", normalized);
  updateLanguageControl();
  updateThemeControl();
  updateBackToTopControl();
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  storeValue("portfolio-theme", nextTheme);
  updateThemeControl();
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage() === "pt" ? "en" : "pt", true);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
});

function setupRevealAnimations() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -44px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function setupScrollProgress() {
  if (!progressBar) return;

  let scheduled = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
    scheduled = false;
  };

  const requestUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };

  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate);
  update();
}

const initialLanguage = getStoredValue("portfolio-language") === "en" ? "en" : currentLanguage();
applyLanguage(initialLanguage);
updateThemeControl();
setupRevealAnimations();
setupScrollProgress();
