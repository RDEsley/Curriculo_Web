/**
 * Curriculo Web - Richard Oliveira
 * Script principal: tema, i18n, navegação, animações
 */

// ===== i18n - Traduções PT/EN =====
const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educação',
    'nav.resources': 'Recursos',
    'hero.greeting': 'Olá, eu sou',
    'hero.subtitle': 'Desenvolvedor Full Stack & UI/UX Focus',
    'hero.tagline': 'Bacharel em Ciência da Computação • Fundador Fate Eight Tech • Proativo • Autodidata',
    'hero.cta': 'Conheça mais',
    'section.about': 'Sobre',
    'section.experience': 'Experiências',
    'section.projects': 'Projetos em Destaque',
    'section.skills': 'Habilidades',
    'section.education': 'Educação',
    'section.resources': 'Recursos',
    'about.text': 'Desenvolvedor Full Stack com foco em UI/UX e construção de produtos digitais. Bacharel em Ciência da Computação (CEUB) e Técnico em Informática, com experiência prática em <strong>React, Node.js, JavaScript e Python</strong>. Perfil autodidata, proativo e orientado a entregas — com mais de 40 repositórios no GitHub. Fundador da Fate Eight Tech. Fluente em inglês técnico. Busco posição Full Stack Jr ou estágio onde possa contribuir com desenvolvimento de produto e experiência do usuário.',
    'exp0.present': 'Presente',
    'exp0.title': 'Fundador & Desenvolvedor',
    'exp0.desc': 'Fundei e lidero startup de tecnologia focada no desenvolvimento de produtos digitais e soluções web. Responsável por arquitetura de sistemas, decisões de produto, UI/UX e gestão de projetos. Prospecto clientes e conduzo o ciclo completo de desenvolvimento — do levantamento de requisitos à entrega.',
    'exp0.link': 'Conhecer o site →',
    'exp1.title': 'Líder Técnico de Equipe (Projeto Acadêmico)',
    'exp1.desc': 'Liderança de equipe no desenvolvimento de plataforma web responsiva para gestão de controle de pragas. Coordenei divisão de tarefas, cronogramas e garanti entrega com qualidade e pontualidade. Apoiei colegas com dificuldades técnicas e colaborei com professores no suporte em sala.',
    'exp2.title': 'Assistente Administrativo',
    'exp2.desc': 'Automatizei relatórios e planilhas com Microsoft Office, reduzindo tempo de resposta da equipe. Gerenciei controle de estoque, emissão de relatórios financeiros e atendimento ao cliente.',
    'exp4.title': 'Líder de Equipe — Projeto Integrador I (Insta Analytics)',
    'exp4.desc': 'Lidero equipe de 3 integrantes no Projeto Integrador, desenvolvendo o InstaAnalytics — plataforma de análise de perfis do Instagram para influenciadores e empresas. Defino funções, metas e cronogramas. Organizo sprints com Scrum/Kanban e garanto integração frontend/backend.',
    'exp4.link': 'Ver projeto no GitHub →',
    'exp3.link': 'Ver projeto no GitHub →',
    'exp5.title': 'Líder de Equipe — Projeto Integrador II e III (GMC)',
    'exp5.desc': 'Lidero equipe de 5 integrantes no desenvolvimento do Granja Mult Core — sistema focado na digitalização da gestão avícola, automatizando o controle de lotes, estoque, despesas e análise financeira detalhada.',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.backend': 'Backend',
    'skills.database': 'Banco de Dados',
    'skills.tools': 'DevOps & Ferramentas',
    'skills.methodologies': 'Metodologias',
    'skills.spokenLang': 'Idiomas',
    'skills.fluentEnglish': 'Português (Nativo) • Inglês (Fluente)',
    'edu1.title': 'Bacharel em Ciência da Computação',
    'edu1.preview': 'Previsão de conclusão: Dezembro de 2026',
    'edu2.title': 'Inglês Avançado',
    'edu3.title': 'Técnico em Informática',
    'proj1.title': 'Portfólio Pessoal',
    'proj1.desc': 'Site bilíngue (PT/EN) com modo claro/escuro, projetos, certificados e GitHub stats. HTML, CSS, JS • Vercel',
    'proj2.title': 'App WhatsApp',
    'proj2.desc': 'App clone do WhatsApp com Android Studio, java, Kotlin, Firebase, Firebase Auth e Firebase Storage',
    'proj3.title': 'Insta Analytics',
    'proj3.desc': 'Análises detalhadas de perfis do Instagram com ML, Scraping e APIs. React, TypeScript, Tailwind, Supabase',
    'proj4.title': 'GMC - Granja Mult Core',
    'proj4.desc': 'Sistema de gestão de granja avícola com controle de lotes, estoque, despesas e análise financeira. Java, Spring Boot, MySQL, React, TypeScript, Tailwind, Supabase',
    'cta.certificates': 'Portfólio e Certificados',
    'cta.certificatesDesc': 'Veja meu portfólio e certificações',
    'cta.pdfPt': 'Currículo PDF (PT)',
    'cta.pdfPtDesc': 'Download em português',
    'cta.pdfEn': 'Currículo PDF (EN)',
    'cta.pdfEnDesc': 'Download em inglês',
    'aviso.privateTitle': 'Repositório privado',
    'aviso.privateText': 'O repositório GMC - Granja Mult Core está privado no momento.',
    'footer.madeWith': 'Desenvolvido com paixão'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.resources': 'Resources',
    'hero.greeting': "Hi, I'm",
    'hero.subtitle': 'Full Stack Developer & UI/UX Focus',
    'hero.tagline': 'B.S. in Computer Science • Fate Eight Tech Founder • Proactive • Self-taught',
    'hero.cta': 'Learn more',
    'section.about': 'About',
    'section.experience': 'Experience',
    'section.projects': 'Featured Projects',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.resources': 'Resources',
    'about.text': 'Full Stack Developer focused on UI/UX and digital product building. Bachelor\'s in Computer Science (CEUB) and IT Technician, with hands-on experience in <strong>React, Node.js, JavaScript and Python</strong>. Self-taught, proactive, delivery-oriented — with 40+ GitHub repositories. Founder of Fate Eight Tech. Fluent in technical English. Seeking Full Stack Jr or internship position to contribute to product development and user experience.',
    'exp0.present': 'Present',
    'exp0.title': 'Founder & Developer',
    'exp0.desc': 'Founded and lead a technology startup focused on digital products and web solutions. Responsible for system architecture, product decisions, UI/UX and project management. Prospect clients and lead the full development cycle — from requirements gathering to delivery.',
    'exp0.link': 'Visit the site →',
    'exp1.title': 'Technical Team Leader (Academic Project)',
    'exp1.desc': 'Led team in developing a responsive web platform for pest management control. Coordinated task division, schedules and ensured quality, on-time delivery. Supported peers with technical difficulties and collaborated with teachers in classroom support.',
    'exp2.title': 'Administrative Assistant',
    'exp2.desc': 'Automated reports and spreadsheets with Microsoft Office, reducing team response time. Managed inventory control, financial reports and customer service.',
    'exp4.title': 'Team Leader — Integrator Project I (Insta Analytics)',
    'exp4.desc': 'Lead a 3-member team in the Integrator Project, developing InstaAnalytics — Instagram profile analytics platform for influencers and businesses. Define roles, goals and schedules. Organize sprints with Scrum/Kanban and ensure frontend/backend integration.',
    'exp4.link': 'View project on GitHub →',
    'exp3.link': 'View project on GitHub →',
    'exp5.title': 'Team Leader — Integrator Project II & III (GMC)',
    'exp5.desc': 'Lead a 5-member team in developing Granja Mult Core — system for poultry farm management digitization, automating batch, inventory, expense and financial analysis control.',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'DevOps & Tools',
    'skills.methodologies': 'Methodologies',
    'skills.spokenLang': 'Languages',
    'skills.fluentEnglish': 'Portuguese (Native) • English (Fluent)',
    'edu1.title': "Bachelor's in Computer Science",
    'edu1.preview': 'Expected completion: December 2026',
    'edu2.title': 'Advanced English',
    'edu3.title': 'IT Technician',
    'proj1.title': 'Personal Portfolio',
    'proj1.desc': 'Bilingual site (PT/EN) with light/dark mode, projects, certificates and GitHub stats. HTML, CSS, JS • Vercel',
    'proj2.title': 'WhatsApp',
    'proj2.desc': 'WhatsApp clone app with Android Studio • Java • Kotlin • Firebase',
    'proj3.title': 'Insta Analytics',
    'proj3.desc': 'Detailed Instagram profile analytics with ML, Scraping and APIs. React, TypeScript, Tailwind, Supabase',
    'proj4.title': 'GMC - Granja Mult Core',
    'proj4.desc': 'Poultry farm management system with batch, inventory, expense and financial analysis control. Java, Spring Boot, MySQL, React, TypeScript, Tailwind, Supabase',
    'cta.certificates': 'Portfolio & Certificates',
    'cta.certificatesDesc': 'View my portfolio and certifications',
    'cta.pdfPt': 'Resume PDF (PT)',
    'cta.pdfPtDesc': 'Download in Portuguese',
    'cta.pdfEn': 'Resume PDF (EN)',
    'cta.pdfEnDesc': 'Download in English',
    'aviso.privateTitle': 'Private repository',
    'aviso.privateText': 'The GMC - Granja Mult Core repository is currently private.',
    'footer.madeWith': 'Made with passion'
  }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations.pt;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.title = lang === 'en'
    ? 'Richard Oliveira | Full Stack Developer & UI/UX Focus'
    : 'Richard Oliveira | Desenvolvedor Full Stack & UI/UX Focus';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key]) el.innerHTML = t[key];
  });
}

function initLanguage() {
  const saved = localStorage.getItem('lang') || 'pt';
  applyLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === saved);
    btn.setAttribute('aria-pressed', btn.dataset.lang === saved);
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
      localStorage.setItem('lang', lang);
      document.querySelectorAll('.lang-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.lang === lang);
        b.setAttribute('aria-pressed', b.dataset.lang === lang);
      });
    });
  });
}

// ===== Alternar Tema (Claro/Escuro) =====
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Carregar tema salvo ou preferência do sistema
  if (localStorage.getItem('tema') === 'escuro' || (!localStorage.getItem('tema') && prefersDark)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('tema', isDark ? 'escuro' : 'claro');
  });
}

// ===== Navbar: sombra ao rolar =====
function initNavbar() {
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial
}

// ===== Animações ao rolar (Intersection Observer) =====
function initScrollAnimations() {
  const sections = document.querySelectorAll('.section, .timeline-item, .edu-item, .cta-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  sections.forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ===== Ano atual (footer) =====
function initCurrentYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ===== Botão Voltar ao Topo =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const showThreshold = 400;

  const handleScroll = () => {
    if (window.scrollY > showThreshold) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ===== Aviso repositório privado GMC =====
function initGmcAviso() {
  const card = document.getElementById('gmc-project-card');
  const aviso = document.getElementById('gmc-private-aviso');
  const closeBtn = document.getElementById('gmc-aviso-close');

  const showAviso = () => {
    aviso.hidden = false;
    requestAnimationFrame(() => aviso.classList.add('visible'));
    document.body.style.overflow = 'hidden';
  };

  const hideAviso = () => {
    aviso.classList.remove('visible');
    document.body.style.overflow = '';
    setTimeout(() => { aviso.hidden = true; }, 300);
  };

  card?.addEventListener('click', (e) => {
    e.preventDefault();
    showAviso();
  });

  closeBtn?.addEventListener('click', hideAviso);
  aviso?.addEventListener('click', (e) => {
    if (e.target === aviso) hideAviso();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aviso?.classList.contains('visible')) hideAviso();
  });
}

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  initScrollAnimations();
  initCurrentYear();
  initBackToTop();
  initGmcAviso();
});
