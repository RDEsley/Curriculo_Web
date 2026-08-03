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
    'about.text': 'Desenvolvedor Full Stack com foco em UI/UX e construção de produtos digitais. Bacharel em Ciência da Computação (CEUB) e Técnico em Informática, com experiência prática em <strong>React, TypeScript, Node.js e Supabase</strong>. Perfil autodidata, proativo e orientado a entregas — com mais de 40 repositórios públicos no GitHub. Fundador da Fate Eight Tech. Fluente em inglês técnico. Busco posição Full Stack Jr ou estágio onde possa contribuir com desenvolvimento de produto e experiência do usuário.',
    'about.statRepos': 'Repositórios públicos no GitHub',
    'about.statProjects': 'Aplicações web publicadas',
    'about.statTeams': 'Equipes lideradas na graduação',
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
    'exp5.title': 'Líder de Equipe — Projeto Integrador II e III (GMC)',
    'exp5.desc': 'Lidero equipe de 5 integrantes no desenvolvimento do Granja Mult Core — sistema web multi-tenant para gestão do ciclo produtivo avícola, com rastreabilidade por lote (ovos, incubação, aves, vacinação), controle de estoque e despesas e análise financeira por ciclo. Stack React 18 + TypeScript + Supabase, com isolamento de dados por granja e permissões por papel.',
    'exp5.link': 'Ver sistema ao vivo →',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.backend': 'Backend',
    'skills.database': 'Banco de Dados',
    'skills.tools': 'DevOps & Ferramentas',
    'skills.spokenLang': 'Idiomas',
    'edu1.title': 'Bacharel em Ciência da Computação',
    'edu1.preview': 'Previsão de conclusão: Dezembro de 2026',
    'edu2.title': 'Inglês Avançado',
    'edu3.title': 'Técnico em Informática',
    'skills.hint': 'Passe o mouse sobre uma habilidade para ver onde eu a apliquei.',
    'tag.wireframing': 'Wireframing & Prototipagem',
    'tag.responsive': 'Design Responsivo',
    'tag.a11y': 'Acessibilidade Web',
    'tag.restApis': 'APIs REST',
    'tag.ptNative': 'Português (Nativo)',
    'tag.enFluent': 'Inglês (Fluente)',
    'projects.lead': 'Seleção dos projetos que melhor representam meu trabalho — do produto acadêmico de maior escala às aplicações autorais publicadas.',
    'projects.otherTitle': 'Outros projetos',
    'status.wip': 'Em desenvolvimento',
    'status.live': 'v5.0.0 no ar',
    'status.prototype': 'Protótipo concluído',
    'link.live': 'Ver ao vivo',
    'link.repo': 'Código no GitHub',
    'link.privateRepo': 'Repositório privado',
    'proj.gmc.role': 'Líder de equipe (5 integrantes) • Projeto Integrador II e III — CEUB',
    'proj.gmc.desc': 'Sistema web multi-tenant para gestão do ciclo produtivo de granjas avícolas: rastreabilidade por lote (ovos → incubação → aves), vacinação, estoque, despesas e análise financeira por ciclo. Isolamento de dados por granja e permissões por papel do usuário.',
    'proj.abdoria.role': 'Projeto autoral • Desenvolvimento full stack',
    'proj.abdoria.desc': 'Aplicação web de treinos de abdômen com gamificação completa: player de treino guiado, XP e níveis, streak, conquistas, ranking global e semanal, exploração idle com loot e loja de itens. Backend próprio em Express com autenticação JWT.',
    'proj.insta.role': 'Líder de equipe (3 integrantes) • Projeto Integrador I — CEUB',
    'proj.insta.desc': 'Plataforma de análise de perfis do Instagram para influenciadores, profissionais de marketing e empresas. Coleta de dados via scraping e APIs, pipeline de tratamento e dashboard com insights de engajamento, crescimento e comportamento de audiência.',
    'proj.kaizen.title': 'Purple Kaizen',
    'proj.kaizen.desc': 'CRM para gestão comercial e acompanhamento de clientes. Next.js, TypeScript, Node.js, Express, Supabase',
    'proj.sasens.title': 'SASens',
    'proj.sasens.desc': 'Análise de sentimentos em textos e postagens, com classificação automática e dashboard temporal. Python, JavaScript',
    'proj.whatsapp.title': 'App WhatsApp',
    'proj.whatsapp.desc': 'Clone do WhatsApp para Android com mensageria em tempo real. Android Studio, Java, Kotlin, Firebase',
    'cta.certificates': 'Portfólio e Certificados',
    'cta.certificatesDesc': 'Veja meu portfólio e certificações',
    'cta.pdfPt': 'Currículo PDF (PT)',
    'cta.pdfPtDesc': 'Download em português',
    'cta.pdfEn': 'Currículo PDF (EN)',
    'cta.pdfEnDesc': 'Download em inglês',
    'cta.github': 'GitHub',
    'cta.githubDesc': 'Mais de 40 repositórios públicos',
    'aviso.privateTitle': 'Repositório privado',
    'aviso.privateText': 'O código do GMC — Granja Mult Core está privado por ser um projeto acadêmico em andamento. O sistema pode ser explorado ao vivo pelo link abaixo.',
    'footer.madeWith': 'Desenvolvido com entusiasmo'
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
    'about.text': 'Full Stack Developer focused on UI/UX and digital product building. Bachelor\'s in Computer Science (CEUB) and IT Technician, with hands-on experience in <strong>React, TypeScript, Node.js and Supabase</strong>. Self-taught, proactive, delivery-oriented — with 40+ public GitHub repositories. Founder of Fate Eight Tech. Fluent in technical English. Seeking Full Stack Jr or internship position to contribute to product development and user experience.',
    'about.statRepos': 'Public repositories on GitHub',
    'about.statProjects': 'Web applications shipped',
    'about.statTeams': 'Teams led during university',
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
    'exp5.title': 'Team Leader — Integrator Project II & III (GMC)',
    'exp5.desc': 'Lead a 5-member team building Granja Mult Core — a multi-tenant web system for poultry production management, with batch-level traceability (eggs, incubation, birds, vaccination), inventory and expense control, and per-cycle financial analysis. Built with React 18 + TypeScript + Supabase, with per-farm data isolation and role-based permissions.',
    'exp5.link': 'View the live system →',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'DevOps & Tools',
    'skills.spokenLang': 'Languages',
    'edu1.title': "Bachelor's in Computer Science",
    'edu1.preview': 'Expected completion: December 2026',
    'edu2.title': 'Advanced English',
    'edu3.title': 'IT Technician',
    'skills.hint': 'Hover over a skill to see where I put it to use.',
    'tag.wireframing': 'Wireframing & Prototyping',
    'tag.responsive': 'Responsive Design',
    'tag.a11y': 'Web Accessibility',
    'tag.restApis': 'REST APIs',
    'tag.ptNative': 'Portuguese (Native)',
    'tag.enFluent': 'English (Fluent)',
    'projects.lead': 'A selection of the work that best represents me — from the largest academic product to the personal applications I have shipped.',
    'projects.otherTitle': 'Other projects',
    'status.wip': 'In development',
    'status.live': 'v5.0.0 live',
    'status.prototype': 'Prototype completed',
    'link.live': 'View live',
    'link.repo': 'Code on GitHub',
    'link.privateRepo': 'Private repository',
    'proj.gmc.role': 'Team leader (5 members) • Integrator Project II & III — CEUB',
    'proj.gmc.desc': 'Multi-tenant web system for poultry farm production management: batch-level traceability (eggs → incubation → birds), vaccination, inventory, expenses and per-cycle financial analysis. Per-farm data isolation and role-based user permissions.',
    'proj.abdoria.role': 'Personal project • Full stack development',
    'proj.abdoria.desc': 'Gamified core-workout web app: guided workout player, XP and levels, streaks, achievements, global and weekly rankings, idle exploration with loot and an item shop. Custom Express backend with JWT authentication.',
    'proj.insta.role': 'Team leader (3 members) • Integrator Project I — CEUB',
    'proj.insta.desc': 'Instagram profile analytics platform for influencers, marketing professionals and businesses. Data collection via scraping and APIs, processing pipeline and a dashboard with engagement, growth and audience behaviour insights.',
    'proj.kaizen.title': 'Purple Kaizen',
    'proj.kaizen.desc': 'CRM for sales management and client follow-up. Next.js, TypeScript, Node.js, Express, Supabase',
    'proj.sasens.title': 'SASens',
    'proj.sasens.desc': 'Sentiment analysis for texts and posts, with automatic classification and a time-series dashboard. Python, JavaScript',
    'proj.whatsapp.title': 'WhatsApp App',
    'proj.whatsapp.desc': 'WhatsApp clone for Android with real-time messaging. Android Studio, Java, Kotlin, Firebase',
    'cta.certificates': 'Portfolio & Certificates',
    'cta.certificatesDesc': 'View my portfolio and certifications',
    'cta.pdfPt': 'Resume PDF (PT)',
    'cta.pdfPtDesc': 'Download in Portuguese',
    'cta.pdfEn': 'Resume PDF (EN)',
    'cta.pdfEnDesc': 'Download in English',
    'cta.github': 'GitHub',
    'cta.githubDesc': '40+ public repositories',
    'aviso.privateTitle': 'Private repository',
    'aviso.privateText': 'The GMC — Granja Mult Core source code is private because it is an ongoing academic project. The system can still be explored live through the link below.',
    'footer.madeWith': 'Made with enthusiasm'
  }
};

// ===== Origem de cada habilidade (tooltip ao passar o mouse) =====
const skillTips = {
  pt: {
    react: 'Base do GMC, do Abdoria e do InstaAnalytics — três aplicações completas publicadas.',
    typescript: 'Linguagem principal dos meus projetos: GMC, Abdoria, InstaAnalytics e Purple Kaizen.',
    nextjs: 'App Router e Server Components no sistema de gestão financeira da Fate Eight.',
    vite: 'Build e ambiente de desenvolvimento do GMC e do Abdoria.',
    javascript: 'Minha primeira linguagem web — sustenta este currículo e meu portfólio, sem frameworks.',
    htmlcss: 'Escrevo à mão neste currículo e no portfólio: semântica, Grid, Flexbox e temas.',
    tailwind: 'Interface do Abdoria e do InstaAnalytics.',
    mui: 'Sistema de componentes e layout das telas do GMC.',
    figma: 'Telas e fluxos desenhados antes de codar, nos projetos da Fate Eight e no GMC.',
    wireframing: 'Praticado na disciplina de IHC (protótipo de gestão clínica) e nos Projetos Integradores.',
    designsystem: 'Tokens de cor, espaçamento e componentes reutilizáveis no Abdoria e no GMC.',
    uxwriting: 'Textos de interface em PT-BR nos produtos da Fate Eight e neste currículo.',
    responsive: 'Mobile-first neste currículo, no portfólio e nos dashboards do GMC.',
    a11y: 'ARIA, foco visível, contraste e prefers-reduced-motion aplicados neste projeto.',
    node: 'Runtime da API do Abdoria e do Purple Kaizen.',
    express: 'API REST do Abdoria (Express 5), rodando como função serverless na Vercel.',
    rest: 'Do exercício em Flask (WebAPIs) à API autenticada do Abdoria.',
    python: 'SASens (análise de sentimentos), scraping do InstaAnalytics e balanceamento P2P.',
    java: 'Apps Android nativos e o analisador léxico da disciplina de Compiladores.',
    csharp: 'Fundamentos de POO e desenvolvimento desktop na formação acadêmica.',
    jwt: 'Autenticação e controle de sessão da API do Abdoria.',
    postgres: 'Modelagem, funções PL/pgSQL e regras de acesso por granja no GMC.',
    supabase: 'Auth e banco do GMC, Abdoria, InstaAnalytics e Purple Kaizen.',
    sql: 'Modelagem relacional e consultas — curso de modelagem (Alura) e todo projeto com banco.',
    mongodb: 'Banco NoSQL explorado em projetos de estudo e na graduação.',
    firebase: 'Auth, Realtime Database e Storage no clone do WhatsApp para Android.',
    git: 'Versionamento diário em mais de 40 repositórios públicos.',
    github: 'Formação de Git e GitHub (DIO) — issues, pull requests e CI nos projetos da Fate Eight.',
    vercel: 'Deploy contínuo de todos os meus projetos web a partir da branch main.',
    scrum: 'Sprints e cerimônias nos Projetos Integradores I, II e III do CEUB.',
    kanban: 'Quadro de tarefas para dividir e acompanhar as entregas das equipes que liderei.',
    pt: 'Idioma nativo — documentação e textos de interface dos meus produtos em PT-BR.',
    en: 'Cinco anos no CILB (2016–2021); leio documentação e escrevo código e docs em inglês.'
  },
  en: {
    react: 'Foundation of GMC, Abdoria and InstaAnalytics — three complete apps shipped.',
    typescript: 'The main language across my projects: GMC, Abdoria, InstaAnalytics and Purple Kaizen.',
    nextjs: 'App Router and Server Components in Fate Eight\'s financial management system.',
    vite: 'Build tooling and dev environment for GMC and Abdoria.',
    javascript: 'My first web language — it powers this résumé and my portfolio, framework-free.',
    htmlcss: 'Hand-written in this résumé and my portfolio: semantics, Grid, Flexbox and theming.',
    tailwind: 'Interface of Abdoria and InstaAnalytics.',
    mui: 'Component system and screen layout across GMC.',
    figma: 'Screens and flows designed before coding, on Fate Eight projects and GMC.',
    wireframing: 'Practised in the HCI course (clinic management prototype) and the Integrator Projects.',
    designsystem: 'Colour and spacing tokens plus reusable components in Abdoria and GMC.',
    uxwriting: 'Interface copy in PT-BR for Fate Eight products and this résumé.',
    responsive: 'Mobile-first in this résumé, my portfolio and the GMC dashboards.',
    a11y: 'ARIA, visible focus, contrast and prefers-reduced-motion applied in this project.',
    node: 'Runtime behind the Abdoria and Purple Kaizen APIs.',
    express: 'Abdoria\'s REST API (Express 5), running as a serverless function on Vercel.',
    rest: 'From the Flask exercise (WebAPIs) to Abdoria\'s authenticated API.',
    python: 'SASens (sentiment analysis), InstaAnalytics scraping and P2P load balancing.',
    java: 'Native Android apps and the lexical analyser from the Compilers course.',
    csharp: 'OOP fundamentals and desktop development during my academic training.',
    jwt: 'Authentication and session handling in the Abdoria API.',
    postgres: 'Modelling, PL/pgSQL functions and per-farm access rules in GMC.',
    supabase: 'Auth and database for GMC, Abdoria, InstaAnalytics and Purple Kaizen.',
    sql: 'Relational modelling and queries — data modelling course (Alura) and every project with a database.',
    mongodb: 'NoSQL database explored in study projects and during university.',
    firebase: 'Auth, Realtime Database and Storage in the WhatsApp clone for Android.',
    git: 'Daily version control across 40+ public repositories.',
    github: 'Git & GitHub certification (DIO) — issues, pull requests and CI on Fate Eight projects.',
    vercel: 'Continuous deployment of all my web projects from the main branch.',
    scrum: 'Sprints and ceremonies in Integrator Projects I, II and III at CEUB.',
    kanban: 'Task board used to split and track deliverables for the teams I led.',
    pt: 'Native language — documentation and interface copy for my products in PT-BR.',
    en: 'Five years at CILB (2016–2021); I read docs and write code and documentation in English.'
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

  // Por último: os chips traduzidos acima têm o textContent reescrito,
  // o que remove o balão — então ele é recriado depois das duas passadas.
  applySkillTips(lang);
}

// ===== Balão de origem nas habilidades =====
function applySkillTips(lang) {
  const tips = skillTips[lang] || skillTips.pt;

  document.querySelectorAll('.skill[data-skill]').forEach((el) => {
    const tip = tips[el.dataset.skill];
    if (!tip) return;

    let bubble = el.querySelector('.skill-tip');
    if (!bubble) {
      bubble = document.createElement('span');
      bubble.className = 'skill-tip';
      bubble.setAttribute('role', 'tooltip');
      el.appendChild(bubble);
    }
    bubble.textContent = tip;
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
  const sections = document.querySelectorAll('.section, .timeline-item, .edu-item, .cta-card, .project-card');

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
  if (!card || !aviso) return;

  const showAviso = () => {
    aviso.hidden = false;
    requestAnimationFrame(() => aviso.classList.add('visible'));
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const hideAviso = () => {
    aviso.classList.remove('visible');
    document.body.style.overflow = '';
    setTimeout(() => { aviso.hidden = true; }, 300);
    card.focus(); // devolve o foco ao gatilho (acessibilidade)
  };

  card.addEventListener('click', (e) => {
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
