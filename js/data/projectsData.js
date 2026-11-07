export const PROYECTOS = [
  {
    id: 'proyecto-alba',
    title: 'Proyecto Alba · Asistencia y Contacto de Emergencia',
    role: 'Desarrolladora Mobile / Integración Técnica',
    status: 'Flutter & Dart · Guatemala',
    category: ['mobile'],
    featured: true,
    image: 'img/proyectos/alba-salud.svg',
    codePreview: {
      method: 'Flutter · Dart · SQLite · Firebase · Supabase',
      detail: 'Modo Offline-First · Autenticación · Scrum & Git'
    },
    summary:
      'Aplicación móvil orientada a la asistencia y contacto de emergencia para adultos mayores, desarrollada con arquitectura limpia en Flutter/Dart. Participé en la implementación de interfaces, manejo de almacenamiento local con SQLite para funcionamiento offline-first y persistencia/autenticación con Firebase y Supabase. Trabajo coordinado en equipo de desarrollo bajo Scrum y Git.',
    highlights: [
      'Aplicación móvil orientada a la asistencia y contacto de emergencia para adultos mayores.',
      'Arquitectura limpia en Flutter/Dart e interfaces accesibles de alto contraste con botones de gran tamaño.',
      'Almacenamiento local con SQLite para funcionamiento offline-first y sincronización de datos.',
      'Persistencia, gestión de perfiles y autenticación con Firebase y Supabase.',
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
        'Autenticación segura con Firebase Auth / Supabase, políticas de almacenamiento y sincronización offline-first con SQLite.',
      diagram: `lib/
├── models/      # Modelos de usuario, medicamentos, expedientes y alertas SOS
├── services/    # Conexión Firebase, Supabase, SQLite local y notificaciones
├── providers/   # Manejo de estado reactivo con ChangeNotifier
└── screens/     # Vistas para Adulto Mayor, Cuidador y Contactos de Emergencia`,
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
    title: 'OMS Backend · Sistema de Gestión de Órdenes',
    role: 'Desarrolladora Backend & Coordinación Técnica',
    status: 'En Desarrollo · Softplus',
    category: ['backend'],
    featured: true,
    image: 'img/proyectos/oms-backend.svg',
    codePreview: {
      method: 'Node.js · Express · PostgreSQL · Redis · WebSockets',
      detail: 'Base de datos normalizada · Validaciones · Docker'
    },
    summary:
      'Núcleo backend para un sistema de gestión de órdenes y pedidos en tiempo real. Diseñé y normalicé la base de datos relacional en PostgreSQL, implementé el manejo centralizado de errores, validaciones y servicios con Node.js, Express, Redis y WebSockets. Apoyé en la coordinación de sprints, flujo de trabajo en Git y pruebas de endpoints con Bruno/Postman y Docker.',
    highlights: [
      'Núcleo backend para un sistema de gestión de órdenes y pedidos en tiempo real.',
      'Diseño y normalización de la base de datos relacional en PostgreSQL aplicando Tercera Forma Normal (3NF).',
      'Manejo centralizado de errores, validaciones estrictas y arquitectura modular en Node.js y Express.',
      'Publicación de eventos y comunicación bidireccional en tiempo real con Redis y WebSockets.',
      'Apoyo en la coordinación técnica de sprints, flujo de trabajo en Git y pruebas exhaustivas de endpoints con Bruno, Postman y Docker.'
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
        label: 'Repositorio OMS Backend (GitHub)',
        url: 'https://github.com/barriosevelyn488-web/evelyn-oms-backend',
        primary: true
      }
    ],
    architecture: {
      pattern: 'Arquitectura backend modular desacoplada con Node.js, Express, Redis Pub/Sub y WebSockets sobre PostgreSQL.',
      security:
        'Validaciones de esquema de entrada, middleware centralizado de errores, credenciales protegidas en variables de entorno y contenedores Docker aislados.',
      diagram: `OMS Backend Architecture
├── API REST & Realtime (Node.js, Express, Redis Pub/Sub, WebSockets)
├── Middleware de Validación y Manejo Centralizado de Errores
├── Base de Datos Relacional PostgreSQL (Modelado 3NF y transacciones)
├── Contenedores Docker (PostgreSQL, Redis, Exporters)
└── Colección de Pruebas Automatizadas en Postman y Bruno`,
      sampleEndpoint: `POST /api/orders -> Validación -> Transacción PostgreSQL -> Notificación WebSocket
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
    title: 'Campus Parking · Automatización y Control Operativo',
    role: 'Desarrolladora Frontend',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: true,
    image: 'img/proyectos/campus-parking.svg',
    codePreview: {
      method: 'JavaScript (ES6+) · HTML5 · CSS3 · localStorage',
      detail: 'Manipulación del DOM · Control de Tarifas · Responsive'
    },
    summary:
      'Aplicación web para la automatización y control operativo de un estacionamiento. Diseñada con JavaScript Vanilla modular, manipulación eficiente del DOM, maquetación responsiva con HTML5/CSS3 y persistencia de datos mediante localStorage.',
    highlights: [
      'Automatización y control operativo diario de ingresos, egresos y asignación de espacios.',
      'Lógica modular en JavaScript Vanilla (ES6+) con manipulación eficiente del DOM.',
      'Maquetación responsiva construida con HTML5 semántico y CSS3 moderno.',
      'Persistencia de registros de vehículos y cálculo automático de tarifas por tiempo con localStorage.'
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
      security: 'Validación estricta de formularios y tipos de datos en el cliente.',
      diagram: `campus_parking_proyecto/
├── DOCSHTML/login.html      # Pantalla de acceso y autenticación local
├── DOCSHTML/dashboard.html  # Panel operativo de control de vehículos
└── js/                      # Lógica de cálculo de tarifas, DOM y persistencia localStorage`,
      sampleEndpoint: `{
  "placa": "P-482JKL",
  "categoria": "Automóvil",
  "hora_entrada": "08:15",
  "hora_salida": "11:45",
  "tarifa_calculada": "Q35.00"
}`
    }
  },
  {
    id: 'campus-shop',
    title: 'Campus Shop · Catálogo y Gestión de Compras',
    role: 'Desarrolladora Web',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: true,
    image: 'img/proyectos/campus-shop.svg',
    codePreview: {
      method: 'HTML5 · CSS3 · JavaScript ES6+',
      detail: 'Catálogo Interactivo · Validación de Estados · Responsive'
    },
    summary:
      'Catálogo y gestión de compras interactivo con validación de estados y arquitectura frontend responsiva.',
    highlights: [
      'Catálogo interactivo con filtrado dinámico de productos por categoría y vista previa.',
      'Gestión del carrito de compras con validación reactiva de estados, cantidades y totales.',
      'Arquitectura frontend responsiva maquetada con CSS Grid, Flexbox y tipografía adaptable.',
      'Publicación y despliegue continuo a través de GitHub Pages.'
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
      pattern: 'Maquetación frontend semántica, responsiva y orientada a la experiencia de usuario (UX/UI).',
      security: 'Sitio estático seguro servido mediante protocolo HTTPS en GitHub Pages.',
      diagram: `tienda_campus_shop/
├── index.html   # Estructura semántica del catálogo y modal de compra
├── css/         # Variables CSS, diseño adaptable con Grid y Flexbox
└── js/          # Validación de estados, catálogo y lógica del carrito`,
      sampleEndpoint: `.catalogo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}`
    }
  },
  {
    id: 'librarian',
    title: 'Librarian (ACME Store) · Biblioteca y Tienda Virtual',
    role: 'Desarrolladora Full-Stack · POO & SOLID',
    status: 'Desplegado en Vercel',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/librarian.svg',
    codePreview: {
      method: 'POST /api/sales/checkout',
      detail: 'Clean Architecture · SQLite 3NF · Node.js · Vanilla JS'
    },
    summary:
      'Aplicación Full-Stack (Backend API REST + Frontend Web) para gestionar catálogo de libros con sinopsis, préstamos, devoluciones, ventas y administración de usuarios aplicando Programación Orientada a Objetos (POO), Principios SOLID y Clean Architecture.',
    highlights: [
      'Backend estructurado en 4 capas (Domain, Application, Infrastructure, Presentation) aplicando principios SOLID.',
      'Base de datos relacional SQLite en Tercera Forma Normal (3NF) con pruebas de integración.',
      'Autenticación con JWT en Cookies HttpOnly, cifrado con Bcrypt, control de roles y Rate Limiting.',
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
├── domain/          # Entidades (Book, Loan, Sale, User) y contratos
├── application/     # Casos de uso y lógica de aplicación
├── infrastructure/  # Repositorios SQLite, JWT, Bcrypt
└── presentation/    # Controladores, rutas Express y middlewares`,
      sampleEndpoint: `GET https://acme-store-backend.vercel.app/api/books
{
  "status": "success",
  "data": [{ "id": 1, "titulo": "Clean Architecture", "stock": 8, "precio": 38.50 }]
}`
    }
  },
  {
    id: 'karenflix',
    title: 'KarenFlix · Catálogo y Reseñas de Películas',
    role: 'Desarrolladora Backend & Coordinación Ágil',
    status: 'Desplegado en Vercel',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/karenflix.svg',
    codePreview: {
      method: 'GET /api/v1/peliculas?page=1&limit=20',
      detail: 'Node.js · Express · MySQL 8 Cloud · Swagger UI'
    },
    summary:
      'Plataforma Full-Stack de catálogo de películas, reseñas, reacciones y ranking. Apoyé en la coordinación ágil del equipo y desarrollé la API REST con Node.js, Express y MySQL en la nube.',
    highlights: [
      'Desarrollo de API RESTful organizada por capas (rutas, middlewares, controladores, servicios y DTOs).',
      'Autenticación con JWT, cookies HttpOnly, control de roles y manejo de transacciones en MySQL.',
      'Documentación interactiva publicada en Swagger UI (/api-docs) y colección de pruebas en Bruno y Postman.',
      'Coordinación de historias de usuario y tablero Scrum en GitHub Projects con flujo Git.'
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
      { label: 'Documentación Swagger', url: 'https://karenflix-backend.vercel.app/api-docs', primary: false },
      { label: 'Repo Backend', url: 'https://github.com/barriosevelyn488-web/Karenflix_backend', primary: false }
    ],
    architecture: {
      pattern: 'Arquitectura por capas en Node.js y Express conectada a base de datos MySQL en la nube.',
      security: 'CORS con credenciales, contraseñas hasheadas con Bcrypt, Helmet y rate limiting.',
      diagram: `KarenFlix_backend/
├── src/routes/       # Rutas v1 (/auth, /peliculas, /categorias, /resenas)
├── src/middlewares/  # Autenticación, validación de roles y errores
├── src/controllers/  # Controladores HTTP y DTOs
└── database/         # Esquema MySQL y migraciones`,
      sampleEndpoint: `GET /api/v1/ranking?limit=10
{
  "status": "ok",
  "data": { "page": 1, "items": [{ "id": 4, "titulo": "Interstellar", "calificacion": 4.9 }] }
}`
    }
  },
  {
    id: 'ai-academy-crm',
    title: 'Campuslands CRM · Seguimiento de Admisiones y Kanban',
    role: 'Desarrolladora Full-Stack',
    status: 'Next.js · TypeScript · Supabase',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/ai-academy-crm.svg',
    codePreview: {
      method: 'Next.js · TypeScript · Supabase PostgreSQL',
      detail: 'Tablero Kanban · Control de Pagos · Google Sheets Sync'
    },
    summary:
      'Aplicación CRM web para gestionar prospectos de admisiones, embudo Kanban de seis etapas, seguimiento por WhatsApp, control de pagos y reportes de conversión, conectada a Supabase/PostgreSQL y Google Sheets.',
    highlights: [
      'Tablero Kanban interactivo para organizar prospectos, notas y estados de pago.',
      'Sincronización bidireccional con hojas de Google Sheets mediante Google Apps Script.',
      'Esquema en PostgreSQL sobre Supabase con políticas Row Level Security (RLS) y tiempo real.'
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
      security: 'Row Level Security (RLS) y autenticación segura con Supabase Auth.',
      diagram: `proyecto_ia_academy/
├── app/               # Vistas y endpoints de integración
├── features/leads/    # Fichas de contactos y tablero Kanban
└── supabase/          # Tablas SQL, índices y políticas RLS`,
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
    title: 'TutorBot para Telegram · Chatbot Académico con n8n',
    role: 'Desarrolladora Backend & Automatización',
    status: 'Publicado · n8n & Telegram',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/tutorbot.svg',
    codePreview: {
      method: 'Node.js · n8n · Telegram API · Webhooks',
      detail: 'Registro de estudiantes · Horarios · Docker Compose'
    },
    summary:
      'Chatbot automatizado para Telegram realizado en colaboración. Permite registrar estudiantes mediante un formulario web, consultar horarios de tutorías y gestionar matrículas con flujos en n8n.',
    highlights: [
      'Integración de formulario HTML, Webhooks de n8n, Google Sheets y la API oficial de Telegram.',
      'Generación automática de códigos de estudiante y menús interactivos en Telegram.',
      'Despliegue y configuración en entorno local con Docker Compose para n8n y base de datos.'
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
      pattern: 'Automatización modular guiada por eventos integrando webhooks y bots de mensajería.',
      security: 'Validación de datos entrantes y control de duplicados.',
      diagram: `Flujo TutorBot
├── Formulario Web -> Webhook n8n -> Registro y Generación de Código
└── Chat Telegram -> Telegram Trigger -> Consultas y Menú Interactivo`,
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
      method: 'Node.js · Express · PostgreSQL · MySQL',
      detail: 'Modelado Relacional · Procedimientos · Rate Limit'
    },
    summary:
      'Colección de soluciones backend y bases de datos relacionales: servidor Acme School (Node.js + SQL), Tech Zone Store (PostgreSQL en 3NF con PL/pgSQL), y microservicios Express con rate limiting y manejo de errores.',
    highlights: [
      'Modelado de bases de datos relacionales en PostgreSQL y MySQL con integridad referencial.',
      'Implementación de middlewares de seguridad (express-rate-limit, validadores y loggers).',
      'Scripts de creación, consultas JOIN optimizadas, funciones y procedimientos almacenados.'
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
├── tech_zone_store/   # DDL, DML, DQL y procedimientos PL/pgSQL
├── acme_school/       # API Node.js con consultas SQL
└── rate_limit_api/    # Middlewares Express de limitación y seguridad`,
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
      method: 'Python · JSON Persistente · Scrum',
      detail: 'Control de Asistencias · Inventario · Menús por Rol'
    },
    summary:
      'Proyectos desarrollados en Python con persistencia en archivos JSON: sistema para el gimnasio Force Tech realizado en equipo bajo Scrum, registro de inventarios y gestores de datos.',
    highlights: [
      'Sistema Force Tech desarrollado colaborativamente bajo Scrum con menús por rol (Admin, Instructor, Cliente).',
      'Persistencia estructurada en JSON con funciones para crear, consultar, actualizar y auditar datos.',
      'Control de versiones en Git con ramas de características e integración ordenada.'
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
      pattern: 'Programación modular en Python dividida en módulos de servicios, clientes y persistencia.',
      security: 'Validación robusta de entrada de datos y control de accesos.',
      diagram: `proyecto-SCRUM/
├── main.py          # Flujo principal y autenticación por rol
├── clientes.py      # Lógica de usuarios y evaluaciones
└── archivo_Json.py  # Módulo de lectura/escritura JSON`,
      sampleEndpoint: `def autenticar_usuario(rol, uid):
    # Control de acceso y carga modular de servicios`
    }
  }
];
