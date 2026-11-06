(function(){

const PROYECTOS = [
  {
    id: 'proyecto-alba',
    title: 'Proyecto Alba Â· Asistencia y Contacto de Emergencia',
    role: 'Desarrolladora Mobile / IntegraciÃ³n TÃ©cnica',
    status: 'Flutter & Dart Â· Guatemala',
    category: ['mobile'],
    featured: true,
    image: 'img/proyectos/alba-salud.svg',
    codePreview: {
      method: 'Flutter Â· Dart Â· SQLite Â· Firebase Â· Supabase',
      detail: 'Modo Offline-First Â· AutenticaciÃ³n Â· Scrum & Git'
    },
    summary:
      'AplicaciÃ³n mÃ³vil orientada a la asistencia y contacto de emergencia para adultos mayores, desarrollada con arquitectura limpia en Flutter/Dart. ParticipÃ© en la implementaciÃ³n de interfaces, manejo de almacenamiento local con SQLite para funcionamiento offline-first y persistencia/autenticaciÃ³n con Firebase y Supabase. Trabajo coordinado en equipo de desarrollo bajo Scrum y Git.',
    highlights: [
      'AplicaciÃ³n mÃ³vil orientada a la asistencia y contacto de emergencia para adultos mayores.',
      'Arquitectura limpia en Flutter/Dart e interfaces accesibles de alto contraste con botones de gran tamaÃ±o.',
      'Almacenamiento local con SQLite para funcionamiento offline-first y sincronizaciÃ³n de datos.',
      'Persistencia, gestiÃ³n de perfiles y autenticaciÃ³n con Firebase y Supabase.',
      'Trabajo coordinado en equipo de desarrollo bajo Scrum y control de versiones con Git.'
    ],
    techStack: [
      'Flutter',
      'Dart',
      'SQLite',
      'Firebase',
      'Supabase',
      'Git'
    ],
    links: [
      {
        label: 'Repositorio Proyecto Alba',
        url: 'https://github.com/barriosevelyn488-web/proyecto_alba_guatemala',
        primary: true
      }
    ],
    architecture: {
      pattern: 'Arquitectura limpia en Flutter/Dart estructurada por capas (models, services, providers, screens y widgets).',
      security:
        'AutenticaciÃ³n segura con Firebase Auth / Supabase, polÃ­ticas de almacenamiento y sincronizaciÃ³n offline-first con SQLite.',
      diagram: `lib/
â”œâ”€â”€ models/      # Modelos de usuario, medicamentos, expedientes y alertas SOS
â”œâ”€â”€ services/    # ConexiÃ³n Firebase, Supabase, SQLite local y notificaciones
â”œâ”€â”€ providers/   # Manejo de estado reactivo con ChangeNotifier
â””â”€â”€ screens/     # Vistas para Adulto Mayor, Cuidador y Contactos de Emergencia`,
      sampleEndpoint: `{
  "modulo": "Asistencia y Contacto de Emergencia",
  "arquitectura": "Flutter Clean Architecture",
  "offline_first": "SQLite Local Cache",
  "auth_sync": "Firebase & Supabase",
  "metodologia": "Scrum & Git"
}`
    }
  },
  {
    id: 'oms-backend',
    title: 'OMS Backend Â· Sistema de GestiÃ³n de Ã“rdenes',
    role: 'Desarrolladora Backend & CoordinaciÃ³n TÃ©cnica',
    status: 'En Desarrollo Â· Softplus',
    category: ['backend'],
    featured: true,
    image: 'img/proyectos/oms-backend.svg',
    codePreview: {
      method: 'Node.js Â· Express Â· PostgreSQL Â· Redis Â· WebSockets',
      detail: 'Base de datos normalizada Â· Validaciones Â· Docker'
    },
    summary:
      'NÃºcleo backend para un sistema de gestiÃ³n de Ã³rdenes y pedidos en tiempo real. DiseÃ±Ã© y normalicÃ© la base de datos relacional en PostgreSQL, implementÃ© el manejo centralizado de errores, validaciones y servicios con Node.js, Express, Redis y WebSockets. ApoyÃ© en la coordinaciÃ³n de sprints, flujo de trabajo en Git y pruebas de endpoints con Bruno/Postman y Docker.',
    highlights: [
      'NÃºcleo backend para un sistema de gestiÃ³n de Ã³rdenes y pedidos en tiempo real.',
      'DiseÃ±o y normalizaciÃ³n de la base de datos relacional en PostgreSQL aplicando Tercera Forma Normal (3NF).',
      'Manejo centralizado de errores, validaciones estrictas y arquitectura modular en Node.js y Express.',
      'PublicaciÃ³n de eventos y comunicaciÃ³n bidireccional en tiempo real con Redis y WebSockets.',
      'Apoyo en la coordinaciÃ³n tÃ©cnica de sprints, flujo de trabajo en Git y pruebas exhaustivas de endpoints con Bruno, Postman y Docker.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'WebSockets',
      'Docker',
      'Postman'
    ],
    links: [
      {
        label: 'Infraestructura PostgreSQL & Docker',
        url: 'https://github.com/barriosevelyn488-web/postgresql-stcns-softplus-evelyn',
        primary: true
      },
      {
        label: 'Repositorio OMS',
        url: 'https://github.com/barriosevelyn488-web/division-oms',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Arquitectura backend modular desacoplada con Node.js, Express, Redis Pub/Sub y WebSockets sobre PostgreSQL.',
      security:
        'Validaciones de esquema de entrada, middleware centralizado de errores, credenciales protegidas en variables de entorno y contenedores Docker aislados.',
      diagram: `OMS Backend Architecture
â”œâ”€â”€ API REST & Realtime (Node.js, Express, Redis Pub/Sub, WebSockets)
â”œâ”€â”€ Middleware de ValidaciÃ³n y Manejo Centralizado de Errores
â”œâ”€â”€ Base de Datos Relacional PostgreSQL (Modelado 3NF y transacciones)
â”œâ”€â”€ Contenedores Docker (PostgreSQL, Redis, Exporters)
â””â”€â”€ ColecciÃ³n de Pruebas Automatizadas en Postman y Bruno`,
      sampleEndpoint: `POST /api/orders -> ValidaciÃ³n -> TransacciÃ³n PostgreSQL -> NotificaciÃ³n WebSocket
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "realtime_channel": "orders_realtime",
  "database": "PostgreSQL (Normalizada)",
  "validation": "OK"
}`
    }
  },
  {
    id: 'campus-parking',
    title: 'Campus Parking Â· AutomatizaciÃ³n y Control Operativo',
    role: 'Desarrolladora Frontend',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: true,
    image: 'img/proyectos/campus-parking.svg',
    codePreview: {
      method: 'JavaScript (ES6+) Â· HTML5 Â· CSS3 Â· localStorage',
      detail: 'ManipulaciÃ³n del DOM Â· Control de Tarifas Â· Responsive'
    },
    summary:
      'AplicaciÃ³n web para la automatizaciÃ³n y control operativo de un estacionamiento. DiseÃ±ada con JavaScript Vanilla modular, manipulaciÃ³n eficiente del DOM, maquetaciÃ³n responsiva con HTML5/CSS3 y persistencia de datos mediante localStorage.',
    highlights: [
      'AutomatizaciÃ³n y control operativo diario de ingresos, egresos y asignaciÃ³n de espacios.',
      'LÃ³gica modular en JavaScript Vanilla (ES6+) con manipulaciÃ³n eficiente del DOM.',
      'MaquetaciÃ³n responsiva construida con HTML5 semÃ¡ntico y CSS3 moderno.',
      'Persistencia de registros de vehÃ­culos y cÃ¡lculo automÃ¡tico de tarifas por tiempo con localStorage.'
    ],
    techStack: [
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'localStorage'
    ],
    links: [
      {
        label: 'Ver Proyecto en Vivo',
        url: 'https://barriosevelyn488-web.github.io/campus_parking_proyecto/DOCSHTML/login.html',
        primary: true
      },
      {
        label: 'Repositorio GitHub',
        url: 'https://github.com/barriosevelyn488-web/campus_parking_proyecto',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Arquitectura Frontend modular basada en componentes y eventos del DOM con almacenamiento en localStorage.',
      security: 'ValidaciÃ³n estricta de formularios y tipos de datos en el cliente.',
      diagram: `campus_parking_proyecto/
â”œâ”€â”€ DOCSHTML/login.html      # Pantalla de acceso y autenticaciÃ³n local
â”œâ”€â”€ DOCSHTML/dashboard.html  # Panel operativo de control de vehÃ­culos
â””â”€â”€ js/                      # LÃ³gica de cÃ¡lculo de tarifas, DOM y persistencia localStorage`,
      sampleEndpoint: `{
  "placa": "P-482JKL",
  "categoria": "AutomÃ³vil",
  "hora_entrada": "08:15",
  "hora_salida": "11:45",
  "tarifa_calculada": "Q35.00"
}`
    }
  },
  {
    id: 'campus-shop',
    title: 'Campus Shop Â· CatÃ¡logo y GestiÃ³n de Compras',
    role: 'Desarrolladora Web',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: true,
    image: 'img/proyectos/campus-shop.svg',
    codePreview: {
      method: 'HTML5 Â· CSS3 Â· JavaScript ES6+',
      detail: 'CatÃ¡logo Interactivo Â· ValidaciÃ³n de Estados Â· Responsive'
    },
    summary:
      'CatÃ¡logo y gestiÃ³n de compras interactivo con validaciÃ³n de estados y arquitectura frontend responsiva.',
    highlights: [
      'CatÃ¡logo interactivo con filtrado dinÃ¡mico de productos por categorÃ­a y vista previa.',
      'GestiÃ³n del carrito de compras con validaciÃ³n reactiva de estados, cantidades y totales.',
      'Arquitectura frontend responsiva maquetada con CSS Grid, Flexbox y tipografÃ­a adaptable.',
      'PublicaciÃ³n y despliegue continuo a travÃ©s de GitHub Pages.'
    ],
    techStack: [
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    links: [
      {
        label: 'Ver Tienda en Vivo',
        url: 'https://barriosevelyn488-web.github.io/tienda_campus_shop/',
        primary: true
      },
      {
        label: 'Repositorio GitHub',
        url: 'https://github.com/barriosevelyn488-web/tienda_campus_shop',
        primary: false
      }
    ],
    architecture: {
      pattern: 'MaquetaciÃ³n frontend semÃ¡ntica, responsiva y orientada a la experiencia de usuario (UX/UI).',
      security: 'Sitio estÃ¡tico seguro servido mediante protocolo HTTPS en GitHub Pages.',
      diagram: `tienda_campus_shop/
â”œâ”€â”€ index.html   # Estructura semÃ¡ntica del catÃ¡logo y modal de compra
â”œâ”€â”€ css/         # Variables CSS, diseÃ±o adaptable con Grid y Flexbox
â””â”€â”€ js/          # ValidaciÃ³n de estados, catÃ¡logo y lÃ³gica del carrito`,
      sampleEndpoint: `.catalogo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}`
    }
  },
  {
    id: 'librarian',
    title: 'Librarian (ACME Store) Â· Biblioteca y Tienda Virtual',
    role: 'Desarrolladora Full-Stack Â· POO & SOLID',
    status: 'Desplegado en Vercel',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/librarian.svg',
    codePreview: {
      method: 'POST /api/sales/checkout',
      detail: 'Clean Architecture Â· SQLite 3NF Â· Node.js Â· Vanilla JS'
    },
    summary:
      'AplicaciÃ³n Full-Stack (Backend API REST + Frontend Web) para gestionar catÃ¡logo de libros con sinopsis, prÃ©stamos, devoluciones, ventas y administraciÃ³n de usuarios aplicando ProgramaciÃ³n Orientada a Objetos (POO), Principios SOLID y Clean Architecture.',
    highlights: [
      'Backend estructurado en 4 capas (Domain, Application, Infrastructure, Presentation) aplicando principios SOLID.',
      'Base de datos relacional SQLite en Tercera Forma Normal (3NF) con pruebas de integraciÃ³n.',
      'AutenticaciÃ³n con JWT en Cookies HttpOnly, cifrado con Bcrypt, control de roles y Rate Limiting.',
      'Frontend en JavaScript Vanilla orientado a objetos y Tailwind CSS, conectado a Open Library API.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'JavaScript',
      'SQLite',
      'Tailwind CSS',
      'JWT',
      'SOLID'
    ],
    links: [
      { label: 'App Frontend (Vercel)', url: 'https://acme-store-frontend.vercel.app/', primary: true },
      { label: 'API Backend (Vercel)', url: 'https://acme-store-backend.vercel.app', primary: false },
      { label: 'Repo Backend', url: 'https://github.com/barriosevelyn488-web/librarian-backend', primary: false }
    ],
    architecture: {
      pattern: 'Clean Architecture y Principios SOLID (Patrones Singleton, Strategy, Repository y Factory).',
      security: 'Consultas parametrizadas, cookies HttpOnly, Helmet y control de acceso basado en roles.',
      diagram: `src/
â”œâ”€â”€ domain/          # Entidades (Book, Loan, Sale, User) y contratos
â”œâ”€â”€ application/     # Casos de uso y lÃ³gica de aplicaciÃ³n
â”œâ”€â”€ infrastructure/  # Repositorios SQLite, JWT, Bcrypt
â””â”€â”€ presentation/    # Controladores, rutas Express y middlewares`,
      sampleEndpoint: `GET https://acme-store-backend.vercel.app/api/books
{
  "status": "success",
  "data": [{ "id": 1, "titulo": "Clean Architecture", "stock": 8, "precio": 38.50 }]
}`
    }
  },
  {
    id: 'karenflix',
    title: 'KarenFlix Â· CatÃ¡logo y ReseÃ±as de PelÃ­culas',
    role: 'Desarrolladora Backend & CoordinaciÃ³n Ãgil',
    status: 'Desplegado en Vercel',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/karenflix.svg',
    codePreview: {
      method: 'GET /api/v1/peliculas?page=1&limit=20',
      detail: 'Node.js Â· Express Â· MySQL 8 Cloud Â· Swagger UI'
    },
    summary:
      'Plataforma Full-Stack de catÃ¡logo de pelÃ­culas, reseÃ±as, reacciones y ranking. ApoyÃ© en la coordinaciÃ³n Ã¡gil del equipo y desarrollÃ© la API REST con Node.js, Express y MySQL en la nube.',
    highlights: [
      'Desarrollo de API RESTful organizada por capas (rutas, middlewares, controladores, servicios y DTOs).',
      'AutenticaciÃ³n con JWT, cookies HttpOnly, control de roles y manejo de transacciones en MySQL.',
      'DocumentaciÃ³n interactiva publicada en Swagger UI (/api-docs) y colecciÃ³n de pruebas en Bruno y Postman.',
      'CoordinaciÃ³n de historias de usuario y tablero Scrum en GitHub Projects con flujo Git.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'MySQL',
      'Swagger UI',
      'JWT',
      'Git',
      'Scrum'
    ],
    links: [
      { label: 'App en Vivo', url: 'https://karenflix-frontend.vercel.app', primary: true },
      { label: 'DocumentaciÃ³n Swagger', url: 'https://karenflix-backend.vercel.app/api-docs', primary: false },
      { label: 'Repo Backend', url: 'https://github.com/barriosevelyn488-web/Karenflix_backend', primary: false }
    ],
    architecture: {
      pattern: 'Arquitectura por capas en Node.js y Express conectada a base de datos MySQL en la nube.',
      security: 'CORS con credenciales, contraseÃ±as hasheadas con Bcrypt, Helmet y rate limiting.',
      diagram: `KarenFlix_backend/
â”œâ”€â”€ src/routes/       # Rutas v1 (/auth, /peliculas, /categorias, /resenas)
â”œâ”€â”€ src/middlewares/  # AutenticaciÃ³n, validaciÃ³n de roles y errores
â”œâ”€â”€ src/controllers/  # Controladores HTTP y DTOs
â””â”€â”€ database/         # Esquema MySQL y migraciones`,
      sampleEndpoint: `GET /api/v1/ranking?limit=10
{
  "status": "ok",
  "data": { "page": 1, "items": [{ "id": 4, "titulo": "Interstellar", "calificacion": 4.9 }] }
}`
    }
  },
  {
    id: 'ai-academy-crm',
    title: 'Campuslands CRM Â· Seguimiento de Admisiones y Kanban',
    role: 'Desarrolladora Full-Stack',
    status: 'Next.js Â· TypeScript Â· Supabase',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/ai-academy-crm.svg',
    codePreview: {
      method: 'Next.js Â· TypeScript Â· Supabase PostgreSQL',
      detail: 'Tablero Kanban Â· Control de Pagos Â· Google Sheets Sync'
    },
    summary:
      'AplicaciÃ³n CRM web para gestionar prospectos de admisiones, embudo Kanban de seis etapas, seguimiento por WhatsApp, control de pagos y reportes de conversiÃ³n, conectada a Supabase/PostgreSQL y Google Sheets.',
    highlights: [
      'Tablero Kanban interactivo para organizar prospectos, notas y estados de pago.',
      'SincronizaciÃ³n bidireccional con hojas de Google Sheets mediante Google Apps Script.',
      'Esquema en PostgreSQL sobre Supabase con polÃ­ticas Row Level Security (RLS) y tiempo real.'
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Supabase',
      'Git'
    ],
    links: [
      {
        label: 'Repositorio CRM',
        url: 'https://github.com/barriosevelyn488-web/proyecto_ia_academy',
        primary: true
      }
    ],
    architecture: {
      pattern: 'Next.js Full-Stack con base de datos relacional PostgreSQL en Supabase.',
      security: 'Row Level Security (RLS) y autenticaciÃ³n segura con Supabase Auth.',
      diagram: `proyecto_ia_academy/
â”œâ”€â”€ app/               # Vistas y endpoints de integraciÃ³n
â”œâ”€â”€ features/leads/    # Fichas de contactos y tablero Kanban
â””â”€â”€ supabase/          # Tablas SQL, Ã­ndices y polÃ­ticas RLS`,
      sampleEndpoint: `POST /api/integrations/sheets
{
  "source": "Google Sheets",
  "synced_leads": 18,
  "status": "OK"
}`
    }
  },
  {
    id: 'tutorbot-telegram',
    title: 'TutorBot para Telegram Â· Chatbot AcadÃ©mico con n8n',
    role: 'Desarrolladora Backend & AutomatizaciÃ³n',
    status: 'Publicado Â· n8n & Telegram',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/tutorbot.svg',
    codePreview: {
      method: 'Node.js Â· n8n Â· Telegram API Â· Webhooks',
      detail: 'Registro de estudiantes Â· Horarios Â· Docker Compose'
    },
    summary:
      'Chatbot automatizado para Telegram realizado en colaboraciÃ³n. Permite registrar estudiantes mediante un formulario web, consultar horarios de tutorÃ­as y gestionar matrÃ­culas con flujos en n8n.',
    highlights: [
      'IntegraciÃ³n de formulario HTML, Webhooks de n8n, Google Sheets y la API oficial de Telegram.',
      'GeneraciÃ³n automÃ¡tica de cÃ³digos de estudiante y menÃºs interactivos en Telegram.',
      'Despliegue y configuraciÃ³n en entorno local con Docker Compose para n8n y base de datos.'
    ],
    techStack: [
      'Node.js',
      'Docker',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],
    links: [
      {
        label: 'Formulario Web Publicado',
        url: 'https://barriosevelyn488-web.github.io/Proyecto_TutorBot_evelyn-barrios_Carlos-Velasco/',
        primary: true
      },
      {
        label: 'Repositorio TutorBot',
        url: 'https://github.com/barriosevelyn488-web/Proyecto_TutorBot_evelyn-barrios_Carlos-Velasco',
        primary: false
      }
    ],
    architecture: {
      pattern: 'AutomatizaciÃ³n modular guiada por eventos integrando webhooks y bots de mensajerÃ­a.',
      security: 'ValidaciÃ³n de datos entrantes y control de duplicados.',
      diagram: `Flujo TutorBot
â”œâ”€â”€ Formulario Web -> Webhook n8n -> Registro y GeneraciÃ³n de CÃ³digo
â””â”€â”€ Chat Telegram -> Telegram Trigger -> Consultas y MenÃº Interactivo`,
      sampleEndpoint: `{
  "accion": "registro_estudiante",
  "codigo_generado": "E014",
  "notificacion_telegram": "enviada"
}`
    }
  },
  {
    id: 'backend-sql-suite',
    title: 'Suite Backend Node.js & Modelado SQL',
    role: 'Desarrolladora Backend & Modelado SQL',
    status: 'Repositorios en GitHub',
    category: ['backend'],
    featured: false,
    image: 'img/proyectos/backend-sql.svg',
    codePreview: {
      method: 'Node.js Â· Express Â· PostgreSQL Â· MySQL',
      detail: 'Modelado Relacional Â· Procedimientos Â· Rate Limit'
    },
    summary:
      'ColecciÃ³n de soluciones backend y bases de datos relacionales: servidor Acme School (Node.js + SQL), Tech Zone Store (PostgreSQL en 3NF con PL/pgSQL), y microservicios Express con rate limiting y manejo de errores.',
    highlights: [
      'Modelado de bases de datos relacionales en PostgreSQL y MySQL con integridad referencial.',
      'ImplementaciÃ³n de middlewares de seguridad (express-rate-limit, validadores y loggers).',
      'Scripts de creaciÃ³n, consultas JOIN optimizadas, funciones y procedimientos almacenados.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'Git'
    ],
    links: [
      {
        label: 'Acme School (Node + SQL)',
        url: 'https://github.com/barriosevelyn488-web/acme_school_campus',
        primary: true
      },
      {
        label: 'Tech Zone Store (PostgreSQL)',
        url: 'https://github.com/barriosevelyn488-web/tech_zone_store',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Servidores modulares en Express y esquemas normalizados en PostgreSQL/MySQL.',
      security: 'Consultas preparadas parametrizadas y control de peticiones.',
      diagram: `Suite Backend
â”œâ”€â”€ tech_zone_store/   # DDL, DML, DQL y procedimientos PL/pgSQL
â”œâ”€â”€ acme_school/       # API Node.js con consultas SQL
â””â”€â”€ rate_limit_api/    # Middlewares Express de limitaciÃ³n y seguridad`,
      sampleEndpoint: `{
  "servidor": "Express.js",
  "base_datos": "PostgreSQL / MySQL (Normalizadas)",
  "seguridad": "Rate Limiting & Consultas Parametrizadas"
}`
    }
  },
  {
    id: 'python-suite',
    title: 'Force Tech Gym & Programas Modulares en Python',
    role: 'Desarrolladora Python & Trabajo en Equipo Scrum',
    status: 'Repositorios en GitHub',
    category: ['backend'],
    featured: false,
    image: 'img/proyecto1.png',
    codePreview: {
      method: 'Python Â· JSON Persistente Â· Scrum',
      detail: 'Control de Asistencias Â· Inventario Â· MenÃºs por Rol'
    },
    summary:
      'Proyectos desarrollados en Python con persistencia en archivos JSON: sistema para el gimnasio Force Tech realizado en equipo bajo Scrum, registro de inventarios y gestores de datos.',
    highlights: [
      'Sistema Force Tech desarrollado colaborativamente bajo Scrum con menÃºs por rol (Admin, Instructor, Cliente).',
      'Persistencia estructurada en JSON con funciones para crear, consultar, actualizar y auditar datos.',
      'Control de versiones en Git con ramas de caracterÃ­sticas e integraciÃ³n ordenada.'
    ],
    techStack: [
      'Python',
      'Git',
      'Docker',
      'Linux'
    ],
    links: [
      {
        label: 'Force Tech (Scrum)',
        url: 'https://github.com/barriosevelyn488-web/proyecto-SCRUM',
        primary: true
      },
      {
        label: 'Registro de Inventario',
        url: 'https://github.com/barriosevelyn488-web/proyectogitEve',
        primary: false
      }
    ],
    architecture: {
      pattern: 'ProgramaciÃ³n modular en Python dividida en mÃ³dulos de servicios, clientes y persistencia.',
      security: 'ValidaciÃ³n robusta de entrada de datos y control de accesos.',
      diagram: `proyecto-SCRUM/
â”œâ”€â”€ main.py          # Flujo principal y autenticaciÃ³n por rol
â”œâ”€â”€ clientes.py      # LÃ³gica de usuarios y evaluaciones
â””â”€â”€ archivo_Json.py  # MÃ³dulo de lectura/escritura JSON`,
      sampleEndpoint: `def autenticar_usuario(rol, uid):
    # Control de acceso y carga modular de servicios`
    }
  }
];


const CLAVE_TEMA = 'evelyn_theme_preference_v2';

function aplicarTema(tema) {
  const elementoRaiz = document.documentElement;
  const etiquetaTema = document.getElementById('themeLabel');

  elementoRaiz.setAttribute('data-theme', tema);
  localStorage.setItem(CLAVE_TEMA, tema);

  if (etiquetaTema) {
    etiquetaTema.textContent = tema === 'light' ? 'Modo Oscuro' : 'Modo Claro';
  }
}

function iniciarTema() {
  const botonTema = document.getElementById('themeToggleBtn');
  const temaGuardado = localStorage.getItem(CLAVE_TEMA);
  const temaInicial = temaGuardado || 'light';

  aplicarTema(temaInicial);

  if (botonTema) {
    botonTema.addEventListener('click', () => {
      const temaActual = document.documentElement.getAttribute('data-theme') || 'light';
      const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
      aplicarTema(nuevoTema);
    });
  }
}


function mostrarModal(elementoModal) {
  if (!elementoModal) return;
  elementoModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function cerrarModales() {
  const modales = document.querySelectorAll('.modal-backdrop');
  modales.forEach((modal) => {
    modal.setAttribute('hidden', '');
  });
  document.body.style.overflow = '';
}

function abrirLightboxImagen(urlImagen, titulo = 'Captura de pantalla del proyecto') {
  const modalLightbox = document.getElementById('imageLightboxModal');
  const imagenObjetivo = document.getElementById('lightboxTargetImg');
  const captionLightbox = document.getElementById('lightboxCaption');

  if (!modalLightbox || !imagenObjetivo) return;

  imagenObjetivo.src = urlImagen;
  imagenObjetivo.alt = titulo;

  if (captionLightbox) {
    captionLightbox.textContent = titulo;
  }

  mostrarModal(modalLightbox);
}

function abrirModalProyecto(proyecto) {
  const modalProyecto = document.getElementById('architectureModal');
  const cuerpoModal = document.getElementById('archModalBody');

  if (!modalProyecto || !cuerpoModal) return;

  const botonesEnlacesHTML = proyecto.links
    .map((enlace) => {
      const claseBoton = enlace.primary ? 'lui-btn-primary' : 'lui-btn-secondary';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer" class="lui-btn lui-btn-sm ${claseBoton}">
          <span>${enlace.label}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
    })
    .join('');

  const imagenBannerHTML = proyecto.image
    ? `<div class="modal-project-banner" data-lightbox-src="${proyecto.image}" data-lightbox-title="${proyecto.title}" title="Haz clic para ver la imagen en grande" style="cursor: zoom-in;">
         <img src="${proyecto.image}" alt="Vista previa de ${proyecto.title}" class="modal-project-banner-img" />
         <span class="banner-zoom-indicator">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
             <circle cx="11" cy="11" r="8"></circle>
             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             <line x1="11" y1="8" x2="11" y2="14"></line>
             <line x1="8" y1="11" x2="14" y2="11"></line>
           </svg>
           Ampliar captura
         </span>
       </div>`
    : '';

  const puntosClaveHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  cuerpoModal.innerHTML = `
    ${imagenBannerHTML}
    <span class="modal-badge">${proyecto.role} Â· ${proyecto.status}</span>
    <h3 id="modalTitle" class="modal-title">${proyecto.title}</h3>
    <p class="modal-subtitle">${proyecto.summary}</p>

    <div class="modal-grid">
      <div class="modal-panel">
        <h4>Estructura del Proyecto</h4>
        <p style="font-size: 0.86rem; color: var(--muted); margin-bottom: 10px;">
          ${proyecto.architecture.pattern}
        </p>
        <pre class="modal-code">${proyecto.architecture.diagram}</pre>
      </div>
      <div class="modal-panel">
        <h4>Detalle TÃ©cnico (${proyecto.codePreview.method})</h4>
        <p style="font-size: 0.84rem; color: var(--muted); margin-bottom: 10px;">
          ${proyecto.architecture.security}
        </p>
        <pre class="modal-code">${proyecto.architecture.sampleEndpoint}</pre>
      </div>
    </div>

    <div class="modal-panel" style="margin-bottom: 18px;">
      <h4>Aspectos Principales</h4>
      <ul class="modal-list">${puntosClaveHTML}</ul>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      ${botonesEnlacesHTML}
    </div>
  `;

  const bannerEnModal = cuerpoModal.querySelector('.modal-project-banner');
  if (bannerEnModal) {
    bannerEnModal.addEventListener('click', () => {
      abrirLightboxImagen(proyecto.image, proyecto.title);
    });
  }

  mostrarModal(modalProyecto);
}

function iniciarModales() {
  const modalProyecto = document.getElementById('architectureModal');
  const modalCV = document.getElementById('cvModal');
  const modalLightbox = document.getElementById('imageLightboxModal');

  const botonAbrirCV = document.getElementById('openCvModalBtn');
  const botonAbrirCVMovil = document.getElementById('drawerCvBtn');
  const botonCerrarProyecto = document.getElementById('closeArchModalBtn');
  const botonCerrarCV = document.getElementById('closeCvModalBtn');
  const botonCerrarLightbox = document.getElementById('closeLightboxBtn');

  if (botonAbrirCV) {
    botonAbrirCV.addEventListener('click', () => mostrarModal(modalCV));
  }

  if (botonAbrirCVMovil) {
    botonAbrirCVMovil.addEventListener('click', () => {
      if (typeof window.__cerrarMenuMovilDrawer__ === 'function') {
        window.__cerrarMenuMovilDrawer__();
      }
      mostrarModal(modalCV);
    });
  }

  if (botonCerrarProyecto) {
    botonCerrarProyecto.addEventListener('click', cerrarModales);
  }

  if (botonCerrarCV) {
    botonCerrarCV.addEventListener('click', cerrarModales);
  }

  if (botonCerrarLightbox) {
    botonCerrarLightbox.addEventListener('click', cerrarModales);
  }

  [modalProyecto, modalCV, modalLightbox].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (evento) => {
      // Cierra si se hace clic directamente en el fondo/backdrop
      if (evento.target === modal || evento.target.classList.contains('lightbox-backdrop-target')) {
        cerrarModales();
      }
    });
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      cerrarModales();
    }
  });
}




function obtenerIconoTecnologiaSVG(nombre) {
  const clave = nombre.toLowerCase().trim();

  if (clave.includes('node')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z"/></svg>`;
  }
  if (clave.includes('express')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17l6-10m0 10l-6-10m16 10l-6-10m0 10l6-10"/></svg>`;
  }
  if (clave.includes('postgres')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"></path><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path></svg>`;
  }
  if (clave.includes('mysql')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17a9 9 0 0 1 18 0"></path><path d="M7 17v-4a5 5 0 0 1 10 0v4"></path><circle cx="12" cy="9" r="1.5"></circle></svg>`;
  }
  if (clave.includes('typescript')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3 3h18v18H3V3zm8.2 8.7V10H6v1.7h1.6v6.9h1.9v-6.9h1.7zm3.1 5.4c.7.4 1.5.6 2.3.6.8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.4-1.1-1.5-.5-2.5-1.2-2.5-2.5 0-1.5 1.2-2.6 3.1-2.6.9 0 1.7.2 2.4.6l-.6 1.5c-.6-.3-1.2-.5-1.8-.5-.7 0-1.2.3-1.2.8 0 .5.4.7 1.4 1.1 1.6.5 2.5 1.2 2.5 2.5 0 1.6-1.3 2.6-3.3 2.6-1.1 0-2.1-.3-2.9-.8l.7-1.4z"/></svg>`;
  }
  if (clave.includes('javascript') || clave.includes('es6')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3 3h18v18H3V3zm13.7 13.9c.8 0 1.4-.4 1.7-.9l1.4.9c-.6 1-1.6 1.7-3.1 1.7-2.3 0-3.6-1.5-3.6-3.7 0-2.4 1.5-3.8 3.7-3.8 1.8 0 2.9 1 3.2 2.1l-1.5.7c-.2-.6-.7-1.1-1.7-1.1-1.2 0-2 .8-2 2.2 0 1.4.7 2.2 1.9 2.2zm-6.2.7c0 .8-.5 1.2-1.3 1.2-.7 0-1.2-.4-1.5-.9l-1.3.8c.6 1 1.5 1.6 2.8 1.6 1.7 0 2.8-.9 2.8-2.6v-6.9H8v1.5h1.5v5.3z"/></svg>`;
  }
  if (clave.includes('python')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M11.9 2c-3.4 0-5.4 1.5-5.4 4.4v2.2h5.4v.7H4.3C2 9.3 1 11.2 1 14.1c0 3 1.5 4.9 4.4 4.9h1.6v-2.3c0-1.8 1.6-3.3 3.5-3.3h5.3c1.6 0 2.9-1.3 2.9-2.9V6.4c0-2.7-2.1-4.4-6.8-4.4zm-2.4 1.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm2.6 18.2c3.4 0 5.4-1.5 5.4-4.4v-2.2h-5.4v-.7h7.6c2.3 0 3.3-1.9 3.3-4.8 0-3-1.5-4.9-4.4-4.9h-1.6v2.3c0 1.8-1.6 3.3-3.5 3.3H10c-1.6 0-2.9 1.3-2.9 2.9v4.1c0 2.7 2.1 4.4 6.8 4.4zm2.4-1.8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/></svg>`;
  }
  if (clave.includes('flutter') || clave.includes('dart')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M14.3 2.5L3.5 13.3l3.3 3.3L20.9 2.5h-6.6zm0 10.4l-4.9 4.9 4.9 4.9h6.6l-8.2-8.2 1.6-1.6z"/></svg>`;
  }
  if (clave.includes('docker')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M22.5 11.5c-.3-.2-1.7-.3-2.6.4-.3.2-.5.5-.7.9-.9-.5-2.2-.4-2.8-.2-.5-1.5-1.9-2.6-3.6-2.6h-.3V8.5h3V6h-3V3.5h-2.5V6H8V3.5H5.5V6H3V8.5h7v1.5H3c-.6 0-1 .4-1 1 0 4.1 3.2 7.5 7.3 7.8 1.4.1 2.8-.2 4-.8 2.2-1.1 3.7-3.2 4.1-5.7.9-.1 2.3-.4 2.8-1.5.2-.4.4-.8.4-1.3-.1.6-.6 1.7-1.1 2z"/></svg>`;
  }
  if (clave.includes('linux')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2C9.5 2 8 3.8 8 6.5v4c-.8.5-1.5 1.5-1.5 2.5 0 1.5.7 2.5 1.5 3-.5 1-1.5 1.8-3 2-.5.1-.9.5-.8 1 .1.5.5.9 1 .8 2.5-.3 4-1.8 4.5-3.3.8.3 1.6.5 2.3.5s1.5-.2 2.3-.5c.5 1.5 2 3 4.5 3.3.5.1.9-.3 1-.8.1-.5-.3-.9-.8-1-1.5-.2-2.5-1-3-2 .8-.5 1.5-1.5 1.5-3 0-1-.7-2-1.5-2.5v-4C16 3.8 14.5 2 12 2z"/></svg>`;
  }
  if (clave.includes('git')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M21.7 10.7l-8.4-8.4c-.4-.4-1.1-.4-1.5 0l-1.9 1.9 2.4 2.4c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.3 2.3c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-.4-.4-.5-1-.3-1.5l-2.2-2.2v5.1c.2.1.3.3.4.4.6.6.6 1.6 0 2.2s-1.6.6-2.2 0-1.6-.6 0-2.2c.4-.4 1-.5 1.5-.3V8.8c-.5-.2-1-.7-1.2-1.2L9.5 10l-7.2 7.2c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.5z"/></svg>`;
  }
  if (clave.includes('firebase') || clave.includes('supabase')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
  }
  if (clave.includes('html') || clave.includes('css')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  }
  if (clave.includes('redis')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-2.8 1.6L9.2 5.8 12 4.2zM5.2 8.6l5.8 3.2v6.6l-5.8-3.2V8.6zm7.8 9.8v-6.6l5.8-3.2v6.6l-5.8 3.2z"/></svg>`;
  }
  if (clave.includes('websocket')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M7 12a5 5 0 0 1 10 0"></path><line x1="12" y1="12" x2="12" y2="21"></line></svg>`;
  }
  return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>`;
}

function crearTarjetaProyectoHTML(proyecto) {
  const listaPuntosHTML = proyecto.highlights
    .slice(0, 3)
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  const tecnologiasHTML = proyecto.techStack
    .map((tecnologia) => {
      const iconoSVG = obtenerIconoTecnologiaSVG(tecnologia);
      return `<span>${iconoSVG}${tecnologia}</span>`;
    })
    .join('');

  const enlacesHTML = proyecto.links
    .map((enlace) => {
      const claseTipo = enlace.primary ? 'primary' : 'secondary';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer"
           class="project-link-btn ${claseTipo}">
          <span>${enlace.label}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
    })
    .join('');

  return `
    <article class="project-card ${proyecto.featured ? 'featured-project' : ''}" data-project-id="${proyecto.id}">
      <div class="project-cover-wrapper"
           data-lightbox-src="${proyecto.image}"
           data-lightbox-title="${proyecto.title}"
           title="Clic para ampliar captura en visor de pantalla completa"
           role="button"
           tabindex="0"
           aria-label="Ampliar captura de ${proyecto.title}">
        <img src="${proyecto.image}" alt="Captura o arquitectura de ${proyecto.title}" class="project-cover-img" loading="lazy">
        <div class="project-cover-overlay">
          <span class="project-role-tag">${proyecto.role}</span>
          <span class="project-type-badge">${proyecto.status}</span>
        </div>
        <div class="project-image-zoom-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>Ver captura</span>
        </div>
      </div>

      <div class="project-card-inner">
        <h3 class="project-title">${proyecto.title}</h3>
        <p class="project-summary">${proyecto.summary}</p>

        <ul class="project-highlights">
          ${listaPuntosHTML}
        </ul>

        <div class="project-tech-pills">
          ${tecnologiasHTML}
        </div>

        <div class="project-actions-bar">
          <div class="project-links-group">
            ${enlacesHTML}
          </div>
          <button type="button" class="project-explore-btn" data-explore-id="${proyecto.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Detalles</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderizarProyectos(listaProyectos, contenedorGrid) {
  if (!contenedorGrid) return;
  contenedorGrid.innerHTML = listaProyectos.map(crearTarjetaProyectoHTML).join('');
}

function iniciarProyectos(todosLosProyectos, alSeleccionarProyecto) {
  const contenedorGrid = document.getElementById('projectsGrid');
  const botonesFiltro = document.querySelectorAll('.filter-btn');

  if (!contenedorGrid) return;

  renderizarProyectos(todosLosProyectos, contenedorGrid);

  // Filtros de categorÃ­a: Todos, APIs & Backend, Frontend & Web, Mobile
  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoriaElegida = boton.getAttribute('data-filter') || 'all';

      botonesFiltro.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      const proyectosFiltrados =
        categoriaElegida === 'all'
          ? todosLosProyectos
          : todosLosProyectos.filter((proyecto) =>
              Array.isArray(proyecto.category) && proyecto.category.includes(categoriaElegida)
            );

      renderizarProyectos(proyectosFiltrados, contenedorGrid);
    });
  });

  // DelegaciÃ³n de eventos para Lightbox y modal de detalles
  contenedorGrid.addEventListener('click', (evento) => {
    // 1. Clic en miniatura de imagen -> Visor Lightbox
    const disparadorImagen = evento.target.closest('[data-lightbox-src]');
    if (disparadorImagen) {
      evento.preventDefault();
      const url = disparadorImagen.getAttribute('data-lightbox-src');
      const titulo = disparadorImagen.getAttribute('data-lightbox-title') || 'Captura del proyecto';
      abrirLightboxImagen(url, titulo);
      return;
    }

    // 2. Clic en botÃ³n "Detalles" -> Modal tÃ©cnico
    const botonExplorar = evento.target.closest('[data-explore-id]');
    if (botonExplorar) {
      const idProyecto = botonExplorar.getAttribute('data-explore-id');
      const proyectoEncontrado = todosLosProyectos.find((p) => p.id === idProyecto);

      if (proyectoEncontrado && typeof alSeleccionarProyecto === 'function') {
        alSeleccionarProyecto(proyectoEncontrado);
      }
    }
  });

  // Accesibilidad por teclado para miniaturas de imagen (Enter / Espacio)
  contenedorGrid.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      const disparadorImagen = evento.target.closest('[data-lightbox-src]');
      if (disparadorImagen) {
        evento.preventDefault();
        const url = disparadorImagen.getAttribute('data-lightbox-src');
        const titulo = disparadorImagen.getAttribute('data-lightbox-title') || 'Captura del proyecto';
        abrirLightboxImagen(url, titulo);
      }
    }
  });

  iniciarConsolaOMS();
}

function iniciarConsolaOMS() {
  const botonesConsola = document.querySelectorAll('[data-oms-view]');
  const salidaConsola = document.getElementById('omsConsoleOutput');
  if (!botonesConsola.length || !salidaConsola) return;

  const vistasOMS = {
    realtime: `Flujo Backend OMS: CreaciÃ³n y notificaciÃ³n de orden en tiempo real
POST /api/orders  -->  Middleware de ValidaciÃ³n y Manejo Centralizado de Errores
  â”œâ”€ 1. ValidaciÃ³n de estructura y stock en PostgreSQL (Base normalizada 3NF)
  â”œâ”€ 2. Registro de transacciÃ³n atÃ³mica en tablas de Ã³rdenes
  â””â”€ 3. PublicaciÃ³n de evento en Redis y emisiÃ³n bidireccional por WebSockets

Respuesta emitida en tiempo real:
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "channel": "orders_realtime_ws",
  "database": "PostgreSQL 3NF (Normalizada)",
  "error_handler": "CentralizedMiddleware"
}`,
    postgres: `ConfiguraciÃ³n de Plataforma PostgreSQL en Docker
Servicios en ejecuciÃ³n (docker compose ps):
  - postgres-db         (Puerto interno 5432 Â· Volumen persistente)
  - prometheus          (RecolecciÃ³n de mÃ©tricas internas)
  - postgres-exporter   (MÃ©tricas de actividad, conexiones y locks)
  - node-exporter       (Uso de CPU, memoria RAM, disco y red)

Paneles monitoreados en Grafana:
  [Estado PostgreSQL: ACTIVO]  [Conexiones activas: 14]  [Bloqueos: 0]`,
    backups: `AutomatizaciÃ³n de Respaldos y Seguridad en Servidor Linux
1. Seguridad de Red:
   - Acceso SSH por llave pÃºblica y firewall UFW configurado
   - Puertos de monitoreo restringidos a red privada / VPN

2. Respaldo Diario AutomÃ¡tico (crontab 02:00 AM):
   $ /opt/postgres-platform/scripts/backup_postgres.sh
   -> Ejecuta pg_dump dentro del contenedor PostgreSQL
   -> Comprime en .sql.gz y genera huella de verificaciÃ³n .sha256`
  };

  botonesConsola.forEach((boton) => {
    boton.addEventListener('click', () => {
      const claveVista = boton.getAttribute('data-oms-view');
      botonesConsola.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      if (vistasOMS[claveVista]) {
        salidaConsola.textContent = vistasOMS[claveVista];
      }
    });
  });
}


let temporizadorToast = null;

function mostrarNotificacion(mensaje) {
  const elementoToast = document.getElementById('copyToast');
  const textoToast = document.getElementById('copyToastText');
  if (!elementoToast) return;

  if (textoToast) {
    textoToast.textContent = mensaje;
  } else {
    elementoToast.textContent = mensaje;
  }

  elementoToast.removeAttribute('hidden');

  if (temporizadorToast) {
    clearTimeout(temporizadorToast);
  }

  temporizadorToast = setTimeout(() => {
    elementoToast.setAttribute('hidden', '');
  }, 2800);
}

function obtenerDatosFormulario() {
  const campoNombre = document.getElementById('senderName');
  const campoMotivo = document.getElementById('senderRole');
  const campoMensaje = document.getElementById('senderMessage');

  return {
    nombre: (campoNombre?.value || '').trim(),
    motivo: (campoMotivo?.value || 'Contacto desde Portafolio').trim(),
    mensaje: (campoMensaje?.value || '').trim()
  };
}

function iniciarContacto() {
  const NUMERO_WHATSAPP = '50233235828';
  const CORREO_EVELYN = 'barrios.evelyn.488@gmail.com';

  const botonesCopiar = document.querySelectorAll('[data-copy]');
  botonesCopiar.forEach((boton) => {
    boton.addEventListener('click', async () => {
      const textoACopiar = boton.getAttribute('data-copy');
      if (!textoACopiar) return;

      try {
        await navigator.clipboard.writeText(textoACopiar);
        mostrarNotificacion(`Copiado: ${textoACopiar}`);
      } catch {
        mostrarNotificacion(`Dato: ${textoACopiar}`);
      }
    });
  });

  const formulario = document.getElementById('contactQuickForm');
  if (formulario) {
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const { nombre, motivo, mensaje } = obtenerDatosFormulario();

      if (!nombre || !mensaje) {
        mostrarNotificacion('Por favor escribe tu nombre y mensaje.');
        return;
      }

      const textoWhatsApp = `Hola Evelyn, soy *${nombre}*.\n*Motivo:* ${motivo}\n\n${mensaje}`;
      const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoWhatsApp)}`;

      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
      mostrarNotificacion('Abriendo WhatsApp...');
    });
  }

  const botonCorreo = document.getElementById('sendEmailDirectBtn');
  if (botonCorreo) {
    botonCorreo.addEventListener('click', () => {
      const { nombre, motivo, mensaje } = obtenerDatosFormulario();

      if (!nombre || !mensaje) {
        mostrarNotificacion('Por favor escribe tu nombre y mensaje antes de enviar.');
        return;
      }

      const asunto = `${motivo} â€” ${nombre}`;
      const cuerpo = `Hola Evelyn,\n\nSoy ${nombre}.\n\n${mensaje}`;
      const urlMailto = `mailto:${CORREO_EVELYN}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

      window.location.href = urlMailto;
      mostrarNotificacion('Abriendo cliente de correo...');
    });
  }
}


function iniciarMenuMovil() {
  const botonMenu = document.getElementById('mobileMenuBtn');
  const drawerMovil = document.getElementById('mobileNavDrawer');
  const overlayDrawer = document.getElementById('mobileDrawerOverlay');
  const botonCerrarDrawer = document.getElementById('closeDrawerBtn');

  if (!botonMenu) return;

  const abrirDrawer = () => {
    botonMenu.classList.add('is-active');
    botonMenu.setAttribute('aria-expanded', 'true');
    if (drawerMovil) drawerMovil.removeAttribute('hidden');
    if (overlayDrawer) overlayDrawer.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const cerrarDrawer = () => {
    botonMenu.classList.remove('is-active');
    botonMenu.setAttribute('aria-expanded', 'false');
    if (drawerMovil) drawerMovil.setAttribute('hidden', '');
    if (overlayDrawer) overlayDrawer.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  botonMenu.addEventListener('click', () => {
    const estaActivo = botonMenu.classList.contains('is-active');
    if (estaActivo) {
      cerrarDrawer();
    } else {
      abrirDrawer();
    }
  });

  if (botonCerrarDrawer) {
    botonCerrarDrawer.addEventListener('click', cerrarDrawer);
  }

  if (overlayDrawer) {
    overlayDrawer.addEventListener('click', cerrarDrawer);
  }

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && botonMenu.classList.contains('is-active')) {
      cerrarDrawer();
    }
  });

  window.__cerrarMenuMovilDrawer__ = cerrarDrawer;
}

function iniciarPestanas() {
  const botonesNavegacion = document.querySelectorAll('[data-tab-target]');
  const barraTransicion = document.getElementById('sectionTransitionBar');

  const marcarBotonActivo = (idDestino) => {
    botonesNavegacion.forEach((boton) => {
      const coincide = boton.getAttribute('data-tab-target') === idDestino;
      boton.classList.toggle('active', coincide);
    });
  };

  botonesNavegacion.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      evento.preventDefault();
      const idDestino = boton.getAttribute('data-tab-target');
      if (!idDestino) return;

      const seccion = document.getElementById(idDestino);
      if (seccion) {
        seccion.classList.add('is-revealed');
        if (barraTransicion) {
          barraTransicion.classList.add('is-animating');
          setTimeout(() => {
            barraTransicion.classList.remove('is-animating');
          }, 380);
        }
        marcarBotonActivo(idDestino);
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (typeof window.__cerrarMenuMovilDrawer__ === 'function') {
        window.__cerrarMenuMovilDrawer__();
      }
    });
  });

  const secciones = document.querySelectorAll('.lui-section');
  if ('IntersectionObserver' in window && secciones.length) {
    const observadorRevelado = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observadorMenu = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting && entrada.target.id) {
            marcarBotonActivo(entrada.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -45% 0px' }
    );

    secciones.forEach((sec) => {
      observadorRevelado.observe(sec);
      observadorMenu.observe(sec);
    });
  } else {
    secciones.forEach((sec) => sec.classList.add('is-revealed'));
  }
}

function iniciarTypewriter() {
  const elementoTexto = document.getElementById('typewriterRole');
  if (!elementoTexto) return;

  const frases = [
    'Desarrolladora Backend',
    'APIs & Bases de Datos',
    'Desarrolladora Web'
  ];

  let indiceFrase = 0;
  let indiceCaracter = 0;
  let borrando = false;

  const escribirPaso = () => {
    const fraseActual = frases[indiceFrase];

    if (!borrando) {
      indiceCaracter += 1;
      elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
      if (indiceCaracter === fraseActual.length) {
        borrando = true;
        setTimeout(escribirPaso, 2100);
        return;
      }
      setTimeout(escribirPaso, 60);
    } else {
      indiceCaracter -= 1;
      elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
      if (indiceCaracter === 0) {
        borrando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        setTimeout(escribirPaso, 320);
        return;
      }
      setTimeout(escribirPaso, 30);
    }
  };

  escribirPaso();
}

function iniciarParallaxHero() {
  const panelIzquierdo = document.getElementById('leftShowcasePanel');
  const imagenRetrato = document.getElementById('mainPortraitImg');
  const haloRetrato = document.querySelector('.cutout-halo-ring');
  const orbeLuz = document.querySelector('.bg-glow-orb');
  const matricesPuntos = document.querySelectorAll('.bg-dots-matrix');

  if (panelIzquierdo) {
    panelIzquierdo.addEventListener('mousemove', (evento) => {
      const rect = panelIzquierdo.getBoundingClientRect();
      const x = (evento.clientX - rect.left) / rect.width - 0.5;
      const y = (evento.clientY - rect.top) / rect.height - 0.5;

      if (imagenRetrato) {
        imagenRetrato.style.transform = `translate3d(${x * -12}px, ${y * -8}px, 0) scale(1.06)`;
      }
      if (haloRetrato) {
        haloRetrato.style.transform = `translate(calc(-50% + ${x * 22}px), calc(-50% + ${y * 18}px)) scale(1.08)`;
      }
      if (orbeLuz) {
        orbeLuz.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 24}px))`;
      }
      matricesPuntos.forEach((matriz, idx) => {
        const factor = idx === 0 ? 18 : -16;
        matriz.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });

    panelIzquierdo.addEventListener('mouseleave', () => {
      if (imagenRetrato) {
        imagenRetrato.style.transform = 'translate3d(0, 0, 0) scale(1.04)';
      }
      if (haloRetrato) {
        haloRetrato.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (orbeLuz) {
        orbeLuz.style.transform = 'translate(-50%, -50%)';
      }
      matricesPuntos.forEach((matriz) => {
        matriz.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  document.addEventListener('mousemove', (evento) => {
    const tarjeta = evento.target.closest('.neo-card, .hero-card-showcase, .project-card, .oms-showcase-card, .project-showcase-card');
    if (!tarjeta) return;
    const rect = tarjeta.getBoundingClientRect();
    tarjeta.style.setProperty('--mouse-x', `${evento.clientX - rect.left}px`);
    tarjeta.style.setProperty('--mouse-y', `${evento.clientY - rect.top}px`);
  });
}

function iniciarAcordeonResumen() {
  const cabeceras = document.querySelectorAll('.lui-accordion-header');
  cabeceras.forEach((boton) => {
    boton.addEventListener('click', () => {
      const item = boton.closest('.lui-accordion-item');
      const icono = boton.querySelector('.acc-toggle-icon');
      if (!item) return;

      const abierto = item.classList.toggle('is-open');
      if (icono) {
        icono.textContent = abierto ? 'âˆ’' : '+';
      }
    });
  });
}

function iniciarAnimacionesScroll() {
  iniciarTypewriter();
  iniciarParallaxHero();
  iniciarAcordeonResumen();
}

async function actualizarMetricasGitHub(usuario) {
  const contadorRepos = document.getElementById('ghRepoCount');
  if (!contadorRepos) return;

  try {
    const respuesta = await fetch(`https://api.github.com/users/${usuario}`);
    if (!respuesta.ok) return;

    const datos = await respuesta.json();
    if (typeof datos.public_repos === 'number' && datos.public_repos > 0) {
      contadorRepos.textContent = `${datos.public_repos}+`;
    }
  } catch {
    contadorRepos.textContent = '61+';
  }
}


function iniciarAplicacion() {
  if (window.__PORTAFOLIO_INICIADO__) return;
  window.__PORTAFOLIO_INICIADO__ = true;

  iniciarTema();
  iniciarMenuMovil();
  iniciarPestanas();
  iniciarProyectos(PROYECTOS, abrirModalProyecto);
  iniciarModales();
  iniciarContacto();
  iniciarAnimacionesScroll();
  actualizarMetricasGitHub('barriosevelyn488-web');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAplicacion);
} else {
  iniciarAplicacion();
}

})();