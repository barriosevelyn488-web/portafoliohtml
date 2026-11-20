export const PROYECTOS = [
  {
    id: 'oms-backend',
    title: 'OMS Backend · Sistema de Gestión de Órdenes en Tiempo Real',
    role: 'Líder de Equipo & Desarrolladora Backend',
    status: 'SoftPlus GT · Node.js, Express, Strapi, PostgreSQL (3NF), Redis, Docker',
    category: ['backend'],
    featured: true,
    image: 'img/proyectos/oms-backend.png',
    codePreview: {
      method: 'Node.js · Express · Strapi · PostgreSQL (3NF) · Redis · WebSockets · Docker',
      detail: '26 Tablas Relacionales · Testing Bruno & Postman · Manejo Centralizado de Errores'
    },
    summary:
      'Modernización del sistema de gestión de órdenes para Softplus. Diseñé y normalicé la base de datos relacional en PostgreSQL estructurando 26 tablas en Tercera Forma Normal (3NF) para eliminar duplicidades y asegurar consistencia atómica. Desarrollé la API REST con Node.js, Express y Strapi, integrando Redis y WebSockets para notificaciones y actualización de estados en tiempo real, middleware centralizado de manejo de errores, contenedores Docker y testing automatizado de endpoints con Bruno y Postman, además de coordinar al equipo técnico bajo Scrum.',
    highlights: [
      'Diseño y normalización de base de datos relacional en PostgreSQL estructurando 26 tablas en Tercera Forma Normal (3NF).',
      'Arquitectura modular en Node.js, Express y Strapi con Redis Pub/Sub y WebSockets para estados de órdenes en tiempo real.',
      'Middleware centralizado de validación y manejo de errores con HTTP status codes consistentes.',
      'Configuración de entornos reproducibles con Docker y testing automatizado de cada endpoint con Bruno y Postman.',
      'Liderazgo técnico del equipo backend, coordinación de sprints y control de versiones colaborativo en Git/GitHub.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'Strapi',
      'PostgreSQL',
      'Redis',
      'WebSockets',
      'Docker',
      'Bruno',
      'Postman',
      'Git'
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
├── API REST & Realtime (Node.js, Express, Strapi, Redis Pub/Sub, WebSockets)
├── Middleware de Validación y Manejo Centralizado de Errores
├── Base de Datos Relacional PostgreSQL (26 tablas normalizadas en 3NF)
├── Contenedores Docker (PostgreSQL, Redis, Exporters)
└── Suite de Pruebas Automatizadas en Bruno y Postman`,
      sampleEndpoint: `POST /api/orders -> Validación -> Transacción PostgreSQL -> Notificación WebSocket
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "realtime_channel": "orders_realtime_ws",
  "database": "PostgreSQL 3NF (26 tablas)",
  "validation": "OK"
}`
    }
  },
  {
    id: 'proyecto-alba',
    title: 'Alba · Plataforma Móvil de Salud Farma-Geriátrica',
    role: 'Desarrolladora Móvil & Organización de Equipo',
    status: 'Flutter & Dart · Firebase · Clean Architecture',
    category: ['mobile'],
    featured: true,
    image: 'img/proyectos/alba-salud.png',
    codePreview: {
      method: 'Flutter · Dart · Firebase · Provider · SQLite',
      detail: 'Clean Architecture · Detección de Caídas · QR Roles · WCAG AAA'
    },
    summary:
      'Aplicación móvil integral de salud y adherencia farma-geriátrica pensada para adultos mayores, cuidadores y personal médico, desarrollada en un equipo multidisciplinario de 12 desarrolladores. Implementé la arquitectura limpia en Flutter/Dart conectada a Firebase, servicios en segundo plano para detección de caídas con sensores de giroscopio y acelerómetro, vinculación ágil de roles mediante códigos QR y estricto cumplimiento de accesibilidad WCAG AAA. En la etapa inicial, me encargué de la organización y asignación de tareas del equipo para asegurar el éxito de la primera presentación técnica.',
    highlights: [
      'Desarrollo móvil con Clean Architecture en Flutter/Dart y persistencia reactiva en Firebase.',
      'Organización y estructuración de tareas y entregas iniciales en equipo multidisciplinario de 12 desarrolladores.',
      'Servicios en segundo plano para detección de caídas mediante sensores de giroscopio y acelerómetro.',
      'Sistema dinámico de recordatorios y lectura de códigos QR para vinculación de roles (adulto mayor, cuidador y médico).',
      'Cumplimiento estricto de estándares de accesibilidad WCAG AAA y diseño adaptable de alto impacto social.'
    ],
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'Provider',
      'SQLite',
      'WCAG AAA',
      'Scrum',
      'Git'
    ],
    links: [
      {
        label: 'Repositorio Proyecto Alba (GitHub)',
        url: 'https://github.com/barriosevelyn488-web/proyecto_alba_guatemala',
        primary: true
      }
    ],
    architecture: {
      pattern: 'Arquitectura limpia en Flutter/Dart estructurada por capas (models, services, providers, screens y widgets).',
      security:
        'Autenticación segura con Firebase Auth, reglas de seguridad en la nube y persistencia offline-first con SQLite.',
      diagram: `lib/
├── models/      # Modelos de usuario, medicamentos, expedientes y alertas SOS
├── services/    # Conexión Firebase, SQLite local, notificaciones y sensores
├── providers/   # Manejo de estado reactivo con ChangeNotifier / Provider
└── screens/     # Vistas para Adulto Mayor, Cuidador y Contactos de Emergencia`,
      sampleEndpoint: `{
  "modulo": "Salud y Adherencia Farma-Geriátrica",
  "arquitectura": "Flutter Clean Architecture",
  "background_services": "Caídas (Giroscopio/Acelerómetro)",
  "roles_sync": "QR Code Linking",
  "accesibilidad": "WCAG AAA"
}`
    }
  },
  {
    id: 'karenflix',
    title: 'KarenFlix · Catálogo y Reseñas de Películas (Full-Stack)',
    role: 'Desarrolladora Full-Stack & Coordinación Ágil',
    status: 'Desplegado en Vercel · Node.js · Express · MySQL 8 · Swagger UI',
    category: ['backend', 'frontend'],
    featured: true,
    image: 'img/proyectos/karenflix.png',
    codePreview: {
      method: 'GET /api/v1/peliculas?page=1&limit=20',
      detail: 'Frontend Vercel · Node.js · Express · MySQL 8 Cloud · Swagger UI'
    },
    summary:
      'Plataforma Full-Stack desplegada en producción para exploración de películas, reseñas de usuarios y ranking dinámico. Desarrollé el frontend web interactivo y la API RESTful modular en Node.js y Express conectada a una base de datos relacional MySQL 8 en la nube, con autenticación segura JWT en cookies HttpOnly, documentación interactiva en Swagger UI y gestión ágil del equipo en GitHub Projects bajo Scrum.',
    highlights: [
      'Frontend web interactivo desplegado en Vercel con vistas dinámicas de catálogo, filtros por género y reseñas.',
      'API RESTful modular en Node.js y Express estructurada en capas (rutas v1, middlewares, controladores, servicios y DTOs).',
      'Base de datos relacional MySQL 8 en la nube con integridad referencial, transacciones y consultas optimizadas.',
      'Autenticación y seguridad robusta con JWT en cookies HttpOnly, contraseñas hasheadas con Bcrypt, CORS y Helmet.',
      'Documentación interactiva publicada en Swagger UI (/api-docs) y suite de pruebas probada con Bruno y Postman.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'MySQL',
      'JavaScript',
      'Swagger UI',
      'JWT',
      'Vercel',
      'Scrum',
      'Git'
    ],
    links: [
      { label: 'App en Vivo (Frontend Vercel)', url: 'https://karenflix-frontend.vercel.app', primary: true },
      { label: 'Documentación Swagger (Backend Vercel)', url: 'https://karenflix-backend.vercel.app/api-docs', primary: false },
      { label: 'Repositorio GitHub', url: 'https://github.com/barriosevelyn488-web/Karenflix_backend', primary: false }
    ],
    architecture: {
      pattern: 'Arquitectura por capas en Node.js y Express conectada a base de datos MySQL en la nube con frontend desacoplado en Vercel.',
      security: 'CORS con credenciales, cookies HttpOnly seguras, contraseñas hasheadas con Bcrypt, Helmet y rate limiting.',
      diagram: `KarenFlix Full-Stack
├── Frontend Vercel   # Interfaz web interactiva (catálogo, filtros, reseñas)
├── Backend Vercel    # API REST Express (rutas v1, auth, controladores, DTOs)
├── Swagger UI        # Documentación interactiva en vivo (/api-docs)
└── Database Cloud    # MySQL 8 en la nube (tablas relacionales y transacciones)`,
      sampleEndpoint: `GET /api/v1/ranking?limit=10
{
  "status": "ok",
  "data": { "page": 1, "items": [{ "id": 4, "titulo": "Interstellar", "calificacion": 4.9 }] }
}`
    }
  },
  {
    id: 'librarian',
    title: 'Librarian (ACME Store) · Biblioteca y Tienda Virtual (Full-Stack)',
    role: 'Desarrolladora Full-Stack · Clean Architecture & SOLID',
    status: 'Desplegado en Vercel · SQLite 3NF · Node.js · Tailwind CSS',
    category: ['backend', 'frontend'],
    featured: true,
    image: 'img/proyectos/librarian.png',
    codePreview: {
      method: 'POST /api/sales/checkout',
      detail: 'Clean Architecture (4 Capas) · SQLite 3NF · Node.js · Tailwind CSS · SOLID'
    },
    summary:
      'Solución Full-Stack de comercio y gestión bibliotecaria desplegada en Vercel, diseñada bajo Clean Architecture desacoplada en 4 capas y Principios SOLID. Desarrollé el frontend moderno y responsivo con Tailwind CSS y JavaScript orientado a objetos conectado a Open Library API, junto a un backend robusto con SQLite en 3NF, autenticación JWT HttpOnly, control de roles y pasarela de préstamos y ventas.',
    highlights: [
      'Clean Architecture en 4 capas desacopladas (Domain, Application, Infrastructure, Presentation) aplicando principios SOLID.',
      'Frontend responsivo desplegado en Vercel maquetado con Tailwind CSS y enriquecido con Open Library API para portadas y sinopsis.',
      'Base de datos relacional SQLite normalizada en 3NF con transacciones atómicas y pruebas de integración.',
      'Control de acceso basado en roles (Admin, Bibliotecario, Usuario) y cookies HttpOnly cifradas.',
      'Patrones de diseño de software implementados: Repository, Factory, Singleton y Strategy.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'JavaScript',
      'SQLite',
      'Tailwind CSS',
      'JWT',
      'SOLID',
      'Vercel'
    ],
    links: [
      { label: 'App en Vivo (Frontend Vercel)', url: 'https://acme-store-frontend.vercel.app/', primary: true },
      { label: 'API Backend (Vercel)', url: 'https://acme-store-backend.vercel.app', primary: false },
      { label: 'Repositorio GitHub', url: 'https://github.com/barriosevelyn488-web/librarian-backend', primary: false }
    ],
    architecture: {
      pattern: 'Clean Architecture y Principios SOLID (Patrones Singleton, Strategy, Repository y Factory).',
      security: 'Consultas parametrizadas, cookies HttpOnly, Helmet y control de acceso basado en roles.',
      diagram: `src/
├── domain/          # Entidades (Book, Loan, Sale, User) y contratos
├── application/     # Casos de uso y reglas de negocio
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
    id: 'campus-parking',
    title: 'Campus Parking · Automatización y Control Operativo',
    role: 'Desarrolladora Frontend',
    status: 'Publicado en GitHub Pages · JavaScript Vanilla (ES6+)',
    category: ['frontend'],
    featured: true,
    image: 'img/proyectos/campus-parking.png',
    codePreview: {
      method: 'JavaScript (ES6+) · HTML5 · CSS3 · localStorage',
      detail: 'Manipulación del DOM · Control de Tarifas · Sin Librerías Externas'
    },
    summary:
      'Aplicación web diseñada desde cero para automatizar el control operativo de un parqueadero mediante una interfaz liviana, rápida y sin dependencias pesadas. Implementada con JavaScript Vanilla modular (ES6+), manipulación directa del DOM, maquetación responsiva con HTML5/CSS3 y persistencia de datos en el cliente con localStorage para registro de entradas, salidas y cobro automático por tiempo.',
    highlights: [
      'Automatización operativa para control diario de plazas, ingresos, egresos y cálculo de tarifas.',
      'Lógica modular en JavaScript ES6+ con manipulación eficiente del DOM y sin librerías externas.',
      'Persistencia local de vehículos y cálculo tarifario automático en tiempo real mediante localStorage.',
      'Diseño 100% responsivo para móviles y escritorio publicado en GitHub Pages.'
    ],
    techStack: [
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'localStorage',
      'GitHub Pages'
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
    id: 'ai-academy-crm',
    title: 'Campuslands CRM & AI Academy · Seguimiento de Admisiones',
    role: 'Auxiliar Académica, Asesora de Admisiones & Desarrolladora Full-Stack',
    status: 'Next.js · TypeScript · Supabase · PostgreSQL',
    category: ['backend', 'frontend'],
    featured: false,
    image: 'img/proyectos/ai-academy-crm.png',
    codePreview: {
      method: 'Next.js · TypeScript · Supabase PostgreSQL',
      detail: 'Tablero Kanban · Control de Pagos · Google Sheets Sync'
    },
    summary:
      'Herramienta CRM integral para la gestión del embudo de admisiones de prospectos a talleres y cursos. Desarrollada con Next.js y TypeScript sobre Supabase (PostgreSQL), incluye tablero Kanban interactivo de seis etapas, control de pagos, sincronización bidireccional con Google Sheets y escucha activa de requerimientos para optimizar la conversión.',
    highlights: [
      'Acompañamiento docente y técnico presencial en talleres de IA (fundamentos, prompts y agentes).',
      'Tablero Kanban interactivo para clasificación de prospectos, notas de seguimiento y estados de pago.',
      'Base relacional en Supabase con PostgreSQL, Row Level Security (RLS) y sincronización con Google Sheets.'
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
    image: 'img/proyectos/tutorbot.png',
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
    id: 'campus-shop',
    title: 'Campus Shop · Catálogo y Gestión de Compras',
    role: 'Desarrolladora Web Frontend',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: false,
    image: 'img/proyectos/campus-shop.png',
    codePreview: {
      method: 'HTML5 · CSS3 · JavaScript ES6+',
      detail: 'Catálogo Interactivo · Validación de Estados · Responsive'
    },
    summary:
      'Catálogo y gestión de compras interactivo con validación de estados y arquitectura frontend responsiva construida con CSS Grid y Flexbox.',
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
    id: 'backend-sql-suite',
    title: 'Suite Backend Node.js & Modelado SQL',
    role: 'Desarrolladora Backend & Modelado SQL',
    status: 'Repositorios en GitHub',
    category: ['backend'],
    featured: false,
    image: 'img/proyectos/backend-sql.png',
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
    image: 'img/proyectos/python-suite.png',
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
