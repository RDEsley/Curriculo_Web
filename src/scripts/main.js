/**
 * Curriculo Web - Richard Oliveira
 * Script principal: tema, i18n, navegação, animações
 */

// ===== i18n - Traduções PT/EN =====
const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educação',
    'nav.resources': 'Recursos',
    'hero.greeting': 'Olá, eu sou',
    'hero.subtitle': 'Desenvolvedor Full Stack & UI/UX Focus',
    'hero.tagline': 'Estudante de Ciência da Computação • Proativo • Autodidata • Motivado',
    'hero.cta': 'Conheça mais',
    'section.about': 'Sobre',
    'section.experience': 'Experiências',
    'section.skills': 'Habilidades',
    'section.education': 'Educação',
    'section.resources': 'Recursos',
    'about.text': 'Estudante de Ciência da Computação no Centro Universitário de Brasília (CEUB) e Técnico em Informática. Possuo experiência no desenvolvimento de aplicações web utilizando <strong>React, Node.js, JavaScript e Python</strong>, além de conhecimento em APIs REST, bancos de dados e versionamento com Git. Tenho perfil autodidata, foco em resolução de problemas e experiência em projetos acadêmicos e pessoais de desenvolvimento de software. Busco oportunidade de estágio ou posição júnior em desenvolvimento de software para aplicar e expandir minhas habilidades técnicas.',
    'about.extra': 'Sou <strong>CEO e Fundador da Fate Eight Tech</strong>.',
    'exp1.title': 'Técnico em Informática',
    'exp1.desc': 'Líder de equipe no desenvolvimento de plataforma web responsiva para empresas de dedetização. Coordenei a divisão de tarefas, organizei cronogramas e garanti entregas com qualidade. Fui referência entre colegas, auxiliando em projetos paralelos e colaborando com professores no suporte em sala de aula.',
    'exp1.link': 'Ver projeto no GitHub →',
    'exp2.title': 'Assistente Administrativo',
    'exp2.desc': 'Organização de arquivos administrativos e financeiros, emissão de relatórios, controle de estoque e atendimento ao cliente. Automatizei relatórios e planilhas com Microsoft Office, otimizando o tempo de resposta da equipe.',
    'skills.languages': 'Linguagens',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Banco de Dados',
    'skills.tools': 'Ferramentas',
    'skills.methodologies': 'Metodologias',
    'skills.spokenLang': 'Idiomas',
    'skills.fluentEnglish': 'Inglês Fluente',
    'edu1.title': 'Bacharel em Ciência da Computação',
    'edu2.title': 'Inglês Avançado',
    'edu3.title': 'Técnico em Informática',
    'cta.certificates': 'Certificados',
    'cta.certificatesDesc': 'Veja minhas certificações',
    'cta.pdfPt': 'Currículo PDF (PT)',
    'cta.pdfPtDesc': 'Download em português',
    'cta.pdfEn': 'Currículo PDF (EN)',
    'cta.pdfEnDesc': 'Download em inglês',
    'footer.madeWith': 'Desenvolvido com paixão'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.resources': 'Resources',
    'hero.greeting': "Hi, I'm",
    'hero.subtitle': 'Full Stack Developer & UI/UX Focus',
    'hero.tagline': 'Computer Science Student • Proactive • Self-taught • Motivated',
    'hero.cta': 'Learn more',
    'section.about': 'About',
    'section.experience': 'Experience',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.resources': 'Resources',
    'about.text': 'Computer Science student at Centro Universitário de Brasília (CEUB) and IT Technician. I have experience in web application development using <strong>React, Node.js, JavaScript and Python</strong>, as well as knowledge in REST APIs, databases and versioning with Git. I have a self-taught profile, focus on problem-solving and experience in academic and personal software development projects. Seeking internship or junior software development position to apply and expand my technical skills.',
    'about.extra': 'I am <strong>CEO and Founder of Fate Eight Tech</strong>.',
    'exp1.title': 'IT Technician',
    'exp1.desc': 'Team leader in the development of a responsive web platform for pest control companies. Coordinated task division, organized schedules and ensured quality deliveries. Became a reference among peers, assisting in parallel projects and collaborating with teachers in classroom support.',
    'exp1.link': 'View project on GitHub →',
    'exp2.title': 'Administrative Assistant',
    'exp2.desc': 'Organization of administrative and financial files, report generation, inventory control and customer service. Automated reports and spreadsheets with Microsoft Office, optimizing team response time.',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.methodologies': 'Methodologies',
    'skills.spokenLang': 'Languages',
    'skills.fluentEnglish': 'Fluent English',
    'edu1.title': "Bachelor's in Computer Science",
    'edu2.title': 'Advanced English',
    'edu3.title': 'IT Technician',
    'cta.certificates': 'Certificates',
    'cta.certificatesDesc': 'View my certifications',
    'cta.pdfPt': 'Resume PDF (PT)',
    'cta.pdfPtDesc': 'Download in Portuguese',
    'cta.pdfEn': 'Resume PDF (EN)',
    'cta.pdfEnDesc': 'Download in English',
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

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  initScrollAnimations();
  initCurrentYear();
});
