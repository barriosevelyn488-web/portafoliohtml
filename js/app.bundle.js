(function(){

const PROYECTOS = [
  {
    id: 'oms-softplus',
    title: 'OMS Backend (Softplus) · Sistema de Gestión de Órdenes',
    role: 'Líder de Equipo Backend · Desarrolladora Backend',
    status: 'En Desarrollo · Softplus',
    category: ['liderazgo', 'fullstack'],
    featured: true,
    image: 'img/proyectos/oms-backend.svg',
    codePreview: {
      method: 'Node.js · PostgreSQL · Redis · WebSocket',
      detail: 'Base de datos normalizada · Validaciones · Docker'
    },
    summary:
      'Lideré al equipo backend para cumplir los tiempos de entrega en un proyecto real. Desarrollé una solución con base de datos normalizada en PostgreSQL, validaciones, manejo centralizado de errores y comunicación en tiempo real con Node.js, Redis y WebSocket.',
    highlights: [
      'Coordinación del equipo backend, organización de módulos de trabajo y seguimiento de entregables.',
      'Normalización de la base de datos en PostgreSQL y configuración de servidor Linux con Docker, Prometheus, Grafana y backups automáticos.',
      'Implementación de APIs en tiempo real con Node.js, Express, Strapi, Redis y WebSocket.',
      'Configuración del entorno, despliegue con Docker y pruebas de cada endpoint con Postman y Bruno.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'WebSocket',
      'Strapi',
      'Docker',
      'Prometheus & Grafana',
      'Postman & Bruno'
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
      pattern: 'API Backend en tiempo real (Node.js, Express, Redis y WebSocket) con base de datos PostgreSQL normalizada en Docker.',
      security:
        'Validaciones de entrada, manejo centralizado de errores, configuración de firewall UFW, SSH por llave y respaldos diarios verificados con SHA-256.',
      diagram: `OMS Backend & Plataforma PostgreSQL
├── API REST y Tiempo Real (Node.js, Express, Strapi, Redis, WebSocket)
├── Capa Centralizada de Validaciones y Manejo de Errores
├── Contenedores Docker (PostgreSQL, Prometheus, Exporters)
├── Monitoreo en Grafana (16 paneles de estado y rendimiento)
└── Scripts de Backup y Restauración (pg_dump + gzip + sha256sum)`,
      sampleEndpoint: `POST /api/orders -> Validación -> PostgreSQL -> Evento WebSocket
{
  "order_id": "OMS-2026-0842",
  "status": "PROCESSED",
  "realtime_channel": "redis_websocket",
  "database": "PostgreSQL 3NF",
  "validation": "OK"
}`
    }
  },
  {
    id: 'librarian',
    title: 'Librarian (ACME Store) · Biblioteca y Tienda Virtual',
    role: 'Desarrolladora Full-Stack · POO & SOLID',
    status: 'Desplegado en Vercel',
    category: ['fullstack'],
    featured: true,
    image: 'img/proyectos/librarian.svg',
    codePreview: {
      method: 'POST /api/sales/checkout',
      detail: 'Clean Architecture · SQLite 3NF · Node.js · Vanilla JS'
    },
    summary:
      'Aplicación Full-Stack (Backend API REST + Frontend Web) para gestionar catálogo de libros con sinopsis, préstamos, devoluciones, ventas y administración de usuarios aplicando Programación Orientada a Objetos (POO), Principios SOLID y Clean Architecture.',
    highlights: [
      'Backend estructurado en 4 capas (Domain, Application, Infrastructure, Presentation) aplicando principios SOLID.',
      'Base de datos relacional SQLite en Tercera Forma Normal (3NF) con 13 pruebas de integración.',
      'Autenticación con JWT en Cookies HttpOnly, cifrado con Bcrypt, control de roles (admin/cliente), Rate Limiting y consultas parametrizadas.',
      'Frontend en JavaScript Vanilla orientado a objetos y Tailwind CSS, conectado a Open Library API.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'POO & SOLID',
      'Clean Architecture',
      'SQLite (3NF)',
      'JavaScript',
      'Tailwind CSS',
      'JWT & Bcrypt',
      'Bruno'
    ],
    links: [
      { label: 'App Frontend (Vercel)', url: 'https://acme-store-frontend.vercel.app/', primary: true },
      { label: 'API Backend (Vercel)', url: 'https://acme-store-backend.vercel.app', primary: false },
      { label: 'Repo Backend', url: 'https://github.com/barriosevelyn488-web/librarian-backend', primary: false },
      { label: 'Repo Frontend', url: 'https://github.com/barriosevelyn488-web/librarian-frontend', primary: false }
    ],
    architecture: {
      pattern: 'Clean Architecture y Principios SOLID (Patrones Singleton, Strategy, Repository y Factory).',
      security:
        'Consultas SQL parametrizadas, límite de intentos en login (Rate Limit), cookies HttpOnly, cabeceras con Helmet y control de acceso por roles.',
      diagram: `src/
├── domain/          # Entidades (Book, Loan, Sale, User) y contratos de repositorios
├── application/     # Servicios de aplicación (Auth, Book, Loan, Sale, User)
├── infrastructure/  # Conexión SQLite 3NF, repositorios SQL, Bcrypt, JWT y PayPal
└── presentation/    # Controladores, rutas y middlewares en Express`,
      sampleEndpoint: `GET https://acme-store-backend.vercel.app/api/books
{
  "status": "success",
  "data": [
    {
      "id_libro": 1,
      "titulo": "Clean Architecture",
      "isbn": "978-0134494166",
      "stock_disponible": 8,
      "precio": 38.50
    }
  ]
}`
    }
  },
  {
    id: 'karenflix',
    title: 'KarenFlix · Catálogo y Reseñas de Películas',
    role: 'Scrum Master & Desarrolladora Backend',
    status: 'Desplegado en Vercel',
    category: ['fullstack', 'liderazgo'],
    featured: true,
    image: 'img/proyectos/karenflix.svg',
    codePreview: {
      method: 'GET /api/v1/peliculas?page=1&limit=20',
      detail: 'Node.js · Express · MySQL 8 Cloud · Swagger UI'
    },
    summary:
      'Plataforma Full-Stack de catálogo de películas, reseñas, reacciones y ranking. Participé como Scrum Master organizando el trabajo del equipo y desarrollé la API REST con Node.js, Express y MySQL en la nube.',
    highlights: [
      'Desarrollo de API RESTful organizada por capas (rutas, middlewares, controladores, servicios, modelos y DTOs) con MySQL 8.',
      'Inicio de sesión con JWT y cookies HttpOnly, control de roles para administradores y manejo de transacciones SQL.',
      'Documentación de endpoints publicada en Swagger UI (/api-docs) y colección de pruebas en Bruno y Postman.',
      'Coordinación de historias de usuario, tablero Scrum en GitHub Projects y flujo de integración por ramas.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'MySQL 8',
      'Swagger UI',
      'JWT & Cookies',
      'DTOs',
      'Bruno & Postman',
      'Scrum'
    ],
    links: [
      { label: 'App en Vivo', url: 'https://karenflix-frontend.vercel.app', primary: true },
      { label: 'Documentación Swagger', url: 'https://karenflix-backend.vercel.app/api-docs', primary: false },
      { label: 'Repo Backend', url: 'https://github.com/barriosevelyn488-web/Karenflix_backend', primary: false },
      { label: 'Tablero Scrum', url: 'https://github.com/users/barriosevelyn488-web/projects/1', primary: false },
      { label: 'Video Demostrativo', url: 'https://drive.google.com/drive/folders/1HSiNq5PU6jD3jWmLozYrz2bn8PvheCkM?usp=sharing', primary: false }
    ],
    architecture: {
      pattern: 'Arquitectura por capas en Node.js y Express conectada a MySQL en Aiven Cloud.',
      security:
        'Configuración de CORS con credenciales, cifrado de contraseñas con Bcrypt, Helmet, límites de peticiones y validación de roles.',
      diagram: `KarenFlix_backend/
├── src/routes/       # Rutas v1 (/auth, /peliculas, /categorias, /resenas, /ranking)
├── src/middlewares/  # Autenticación, validación de roles, rate limit y errores
├── src/controllers/  # Controladores HTTP y transformación con DTOs
├── src/services/     # Lógica de negocio y paginación
└── database/         # Esquema MySQL y migraciones`,
      sampleEndpoint: `GET https://karenflix-backend.vercel.app/api/v1/ranking?limit=10
{
  "status": "ok",
  "data": {
    "page": 1,
    "items": [
      {
        "id": 4,
        "titulo": "Interstellar",
        "categoria": "Ciencia Ficción",
        "promedio_calificacion": 4.9
      }
    ]
  }
}`
    }
  },
  {
    id: 'ai-academy-crm',
    title: 'Campuslands CRM · Seguimiento de Admisiones y Kanban',
    role: 'Desarrolladora Full-Stack · Apoyo en AI Academy',
    status: 'Next.js · TypeScript · Supabase',
    category: ['fullstack', 'liderazgo'],
    featured: true,
    image: 'img/proyectos/ai-academy-crm.svg',
    codePreview: {
      method: 'Next.js · TypeScript · Supabase PostgreSQL',
      detail: 'Tablero Kanban · Control de Pagos · Google Sheets Sync'
    },
    summary:
      'Aplicación CRM web para gestionar prospectos de admisiones, embudo Kanban de seis etapas, seguimiento por WhatsApp, control de pagos y reportes de conversión, conectada a Supabase/PostgreSQL y Google Sheets.',
    highlights: [
      'Tablero Kanban interactivo con seis etapas para organizar prospectos, notas, tareas pendientes y estado de pagos.',
      'Sincronización periódica con hojas de Google Sheets mediante Apps Script hacia un endpoint en el servidor.',
      'Esquema en PostgreSQL sobre Supabase con políticas Row Level Security (RLS), actualizaciones en tiempo real y exportación a CSV.',
      'Complementado con mi experiencia real en AI Academy realizando seguimiento de clientes en admisiones y apoyo en talleres de IA.'
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Google Apps Script',
      'Kanban',
      'Vercel'
    ],
    links: [
      {
        label: 'Repositorio CRM',
        url: 'https://github.com/barriosevelyn488-web/proyecto_ia_academy',
        primary: true
      },
      {
        label: 'Repositorio Taller IA',
        url: 'https://github.com/barriosevelyn488-web/TALLER_IA_EVE',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Aplicación modular en Next.js y TypeScript con base de datos PostgreSQL en Supabase y sincronización con Google Sheets.',
      security:
        'Autenticación con Supabase Auth, políticas Row Level Security (RLS) y validación de clave secreta en el servidor para la sincronización.',
      diagram: `proyecto_ia_academy/
├── app/                         # Vistas e integración /api/integrations/sheets
├── features/dashboard/          # Resumen de indicadores y reportes de conversión
├── features/leads/              # Fichas de contactos y tablero Kanban
├── features/payments/           # Registro de pagos parciales y recibidos
└── supabase/migrations/         # Tablas SQL, índices y políticas RLS`,
      sampleEndpoint: `POST /api/integrations/sheets
{
  "source": "Google Sheets",
  "synced_leads": 18,
  "stages": ["Nuevo", "Contactado", "Seguimiento", "Inscrito"],
  "status": "OK"
}`
    }
  },
  {
    id: 'proyecto-alba',
    title: 'Proyecto Alba · Plataforma de Salud para Adultos Mayores',
    role: 'Líder de Equipo Inicial & Desarrollo Móvil',
    status: 'Flutter & Firebase · Guatemala',
    category: ['liderazgo'],
    featured: true,
    image: 'img/proyectos/alba-salud.svg',
    codePreview: {
      method: 'Flutter · Dart · Firebase Firestore',
      detail: 'Perfiles Senior, Cuidador y Doctor · Scrum (12 Devs)'
    },
    summary:
      'Aplicación móvil pensada para apoyar el cuidado de la salud y toma de medicamentos de personas adultas mayores en Guatemala. Lideré la organización inicial del equipo y participé en el diseño y desarrollo móvil.',
    highlights: [
      'Organización de tareas y entregas del equipo para la primera presentación del proyecto.',
      'Colaboración con 12 desarrolladores organizados en 3 grupos mediante Scrum y flujo de ramas en Git (main, develop, feature/*).',
      'Desarrollo móvil con arquitectura limpia en Flutter/Dart y persistencia offline en Firebase Firestore.',
      'Diseño de tres perfiles conectados: Adulto Mayor (botones accesibles y alerta SOS), Cuidador (control de botiquín) y Doctor (expediente y QR).'
    ],
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'Firestore',
      'Git / GitHub',
      'Scrum'
    ],
    links: [
      {
        label: 'Repositorio Proyecto Alba',
        url: 'https://github.com/barriosevelyn488-web/proyecto_alba_guatemala',
        primary: true
      }
    ],
    architecture: {
      pattern: 'Aplicación móvil en Flutter estructurada por capas (models, services, providers, screens y widgets).',
      security:
        'Autenticación con Firebase Auth, reglas de acceso en Firestore y vinculación de pacientes mediante código QR y PIN.',
      diagram: `lib/
├── models/      # Modelos de usuario, medicamentos, expediente, citas y alertas SOS
├── services/    # Servicios de Firestore, notificaciones, detección de caídas y QR
├── providers/   # Gestión de estado con ChangeNotifier
└── screens/     # Pantallas para Adulto Mayor, Cuidador y Doctor`,
      sampleEndpoint: `{
  "perfiles": ["Adulto Mayor", "Cuidador", "Doctor"],
  "base_de_datos": "Firebase Cloud Firestore",
  "modo_offline": true,
  "equipo": "12 desarrolladores con Scrum y Git"
}`
    }
  },
  {
    id: 'tutorbot-telegram',
    title: 'TutorBot para Telegram · Chatbot Académico con n8n',
    role: 'Proyecto Colaborativo · Automatización',
    status: 'Formulario Web Publicado',
    category: ['python-ia', 'fullstack'],
    featured: false,
    image: 'img/proyectos/tutorbot.svg',
    codePreview: {
      method: 'n8n · Telegram API · Webhooks',
      detail: 'Registro de estudiantes · Horarios · Matrícula'
    },
    summary:
      'Chatbot automatizado para Telegram realizado como proyecto colaborativo. Permite registrar estudiantes mediante un formulario web, consultar horarios de tutorías y gestionar matrículas con flujos en n8n.',
    highlights: [
      'Conexión entre un formulario HTML publicado, Webhooks de n8n, Google Sheets y la API de Telegram.',
      'Generación automática de códigos de estudiante (E001), validación de datos y menús interactivos en Telegram.',
      'Pruebas y configuración de entorno local con Docker Compose para n8n y PostgreSQL.'
    ],
    techStack: [
      'n8n',
      'Telegram API',
      'Google Sheets',
      'Docker Compose',
      'JavaScript',
      'HTML & CSS'
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
      },
      {
        label: 'Configuración Docker n8n',
        url: 'https://github.com/barriosevelyn488-web/n8n-base-config-alcore-eve',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Flujo automatizado por eventos en n8n integrando formulario web, hojas de cálculo y bot de Telegram.',
      security: 'Validación de correos duplicados y códigos de estudiante antes de procesar registros.',
      diagram: `Flujo TutorBot
├── Formulario HTML ──► Webhook n8n ──► Generar código y guardar en Estudiantes
├── Chat de Telegram ──► Telegram Trigger ──► Consultar Materias y Horarios
└── Respuesta al estudiante en Telegram con botones interactivos`,
      sampleEndpoint: `{
  "accion": "registro_estudiante",
  "codigo_generado": "E014",
  "hojas_actualizadas": ["Estudiantes", "matricula"],
  "notificacion_telegram": "enviada"
}`
    }
  },
  {
    id: 'backend-sql-suite',
    title: 'Proyectos Backend Node.js & Bases de Datos SQL',
    role: 'Desarrollo Backend & Modelado SQL',
    status: '5 Repositorios en GitHub',
    category: ['fullstack'],
    featured: false,
    image: 'img/proyectos/backend-sql.svg',
    codePreview: {
      method: 'Node.js · Express · PostgreSQL · MySQL',
      detail: 'Consultas SQL · Procedimientos · Rate Limiting'
    },
    summary:
      'Proyectos prácticos de desarrollo backend y bases de datos relacionales: sistema escolar Acme School (Node.js + SQL), base de datos Tech Zone Store en PostgreSQL, APIs REST con Express y sistema de gimnasio con MySQL.',
    highlights: [
      'Acme School Campus: Servidor en Node.js y consultas SQL para consultar información académica y descargar reportes en HTML.',
      'Tech Zone Store: Base de datos en PostgreSQL organizada en scripts DDL, DML, DQL y procedimientos almacenados (PLpgSQL).',
      'APIs REST con Express: Implementación de rutas CRUD, middlewares de validación, registro de peticiones (logger) y express-rate-limit.',
      'Gimnasio Campus Tech CLI: Aplicación en Node.js con arquitectura por capas conectada a MySQL.'
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MySQL',
      'SQL',
      'Bruno'
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
      },
      {
        label: 'API con Rate Limit',
        url: 'https://github.com/barriosevelyn488-web/rate_limit_Libreria_campuslands',
        primary: false
      },
      {
        label: 'API REST Campers',
        url: 'https://github.com/barriosevelyn488-web/express_api_rest',
        primary: false
      },
      {
        label: 'Gimnasio Node + MySQL',
        url: 'https://github.com/barriosevelyn488-web/gimnasio_campus_tech',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Servidores modulares en Node.js/Express y diseño de bases de datos relacionales en PostgreSQL y MySQL.',
      security:
        'Uso de express-rate-limit para controlar peticiones por minuto, validadores de datos de entrada y manejo centralizado de errores.',
      diagram: `Repositorios Backend y SQL
├── acme_school_campus/      # Servidor Node.js, consultas SQL y reportes en HTML
├── tech_zone_store/         # Scripts 1. ddl -> 2. dml -> 3. dql -> 4. dcl (procedimientos)
├── rate_limit_Libreria/     # API Express con middlewares de límite de peticiones
└── gimnasio_campus_tech/    # Sistema CLI en Node.js conectado a MySQL`,
      sampleEndpoint: `GET /api/libros
{
  "limite_api": "5 peticiones por minuto",
  "limite_creacion": "3 POST por minuto",
  "base_de_datos": "PostgreSQL / MySQL"
}`
    }
  },
  {
    id: 'campus-parking',
    title: 'Campus Parking · Control Operativo de Parqueadero',
    role: 'Desarrollo Frontend & Lógica JavaScript',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: false,
    image: 'img/proyectos/campus-parking.svg',
    codePreview: {
      method: 'JavaScript · HTML5 · CSS3 · localStorage',
      detail: 'Entradas y salidas · Cálculo de tarifas por tiempo'
    },
    summary:
      'Aplicación web diseñada para gestionar entradas y salidas de vehículos, calcular tarifas según el tiempo de permanencia y administrar categorías de vehículos en un parqueadero.',
    highlights: [
      'Pantalla de acceso e interfaz clara para el control diario de vehículos.',
      'Lógica en JavaScript para calcular el cobro según el tiempo y el tipo de vehículo.',
      'Uso de localStorage para conservar los registros en el navegador.'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'localStorage'],
    links: [
      {
        label: 'Ver Proyecto en Vivo',
        url: 'https://barriosevelyn488-web.github.io/campus_parking_proyecto/DOCSHTML/login.html',
        primary: true
      },
      {
        label: 'Vista Alternativa',
        url: 'https://barriosevelyn488-web.github.io/proyecto_final_javascript/',
        primary: false
      },
      {
        label: 'App Grupo U1 (Vercel)',
        url: 'https://examen-evelyn-barrios-grupou1.vercel.app',
        primary: false
      },
      {
        label: 'Repositorio GitHub',
        url: 'https://github.com/barriosevelyn488-web/campus_parking_proyecto',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Aplicación web en JavaScript, HTML y CSS con almacenamiento local en el navegador.',
      security: 'Validación de campos del formulario y control de sesión local.',
      diagram: `campus_parking_proyecto/
├── DOCSHTML/login.html      # Inicio de sesión
├── DOCSHTML/dashboard.html  # Panel de registro de vehículos
└── js/                      # Cálculo de tarifas y manejo de localStorage`,
      sampleEndpoint: `{
  "placa": "P-482JKL",
  "categoria": "Automóvil",
  "hora_entrada": "08:15",
  "hora_salida": "11:45",
  "tarifa_quetzales": 35
}`
    }
  },
  {
    id: 'campus-shop',
    title: 'Campus Shop · Interfaz para Tienda Virtual',
    role: 'Desarrollo Frontend · HTML & CSS',
    status: 'Publicado en GitHub Pages',
    category: ['frontend'],
    featured: false,
    image: 'img/proyectos/campus-shop.svg',
    codePreview: {
      method: 'HTML5 · CSS3 · Flexbox & Grid',
      detail: 'Catálogo por categorías · Diseño adaptable'
    },
    summary:
      'Interfaz para una tienda virtual de ropa con enfoque en experiencia de usuario, orden visual y estructura adaptable a distintos tamaños de pantalla.',
    highlights: [
      'Organización del catálogo por categorías de productos y vista de carrito.',
      'Maquetación limpia con HTML5 semántico, CSS Grid y Flexbox.',
      'Sitio desplegado y disponible en GitHub Pages.'
    ],
    techStack: ['HTML5', 'CSS3', 'Flexbox & Grid', 'Responsive Design'],
    links: [
      {
        label: 'Ver Tienda en Vivo',
        url: 'https://barriosevelyn488-web.github.io/tienda_campus_shop/',
        primary: true
      },
      {
        label: 'Enlace Alternativo',
        url: 'https://barriosevelyn488-web.github.io/tiendacampusshop/',
        primary: false
      },
      {
        label: 'Repositorio GitHub',
        url: 'https://github.com/barriosevelyn488-web/tienda_campus_shop',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Maquetación web semántica con diseño responsivo para móvil y escritorio.',
      security: 'Publicación estática sobre HTTPS en GitHub Pages.',
      diagram: `tienda_campus_shop/
├── index.html   # Estructura del catálogo y carrito
├── css/         # Estilos con variables, Grid y Flexbox
└── img/         # Imágenes de productos`,
      sampleEndpoint: `.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}`
    }
  },
  {
    id: 'python-suite',
    title: 'Force Tech Gym & Programas en Python',
    role: 'Desarrollo en Python & Trabajo en Equipo Scrum',
    status: '3 Repositorios en GitHub',
    category: ['python-ia'],
    featured: false,
    image: 'img/proyecto1.png',
    codePreview: {
      method: 'Python · Archivos JSON · Git & Scrum',
      detail: 'Gimnasio Force Tech · Inventario · Colecciones'
    },
    summary:
      'Proyectos desarrollados en Python con almacenamiento en archivos JSON: sistema para el gimnasio Force Tech realizado en equipo bajo Scrum, registro de inventario para tienda y gestor de colecciones.',
    highlights: [
      'Sistema Force Tech: menús por rol (Administrador, Instructor y Cliente), control de asistencias y progreso.',
      'Registro de Inventario: funciones para agregar, mostrar, buscar, actualizar stock y eliminar productos.',
      'Gestor de Colecciones: organización de libros, películas y música por categoría con persistencia en JSON.'
    ],
    techStack: ['Python', 'JSON', 'Git & GitHub', 'Scrum'],
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
      },
      {
        label: 'Gestor de Colecciones',
        url: 'https://github.com/barriosevelyn488-web/solo-prueba',
        primary: false
      }
    ],
    architecture: {
      pattern: 'Programación modular en Python separando funciones por archivo y guardando los datos en JSON.',
      security: 'Validación de opciones ingresadas por consola y separación de menús según el rol.',
      diagram: `proyecto-SCRUM/
├── main.py          # Menú principal por rol (ADMIN, INSTRUCTOR, CLIENTE)
├── clientes.py      # Registro, búsqueda y evaluación de clientes
├── servicios.py     # Catálogo de servicios, instructores y asistencias
└── archivo_Json.py  # Lectura y guardado en gym_data.json`,
      sampleEndpoint: `def menu_principal(rol, data, nombre, uid):
    if rol == "ADMIN":
        # 1. Registro | 2. Buscar | 3. Eliminar | 4. Instructores | 5. Servicios
    elif rol == "INSTRUCTOR":
        # 1. Catalogo | 2. Asistencia | 3. Evaluar`
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


function crearTarjetaProyectoHTML(proyecto) {
  const listaPuntosHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  const tecnologiasHTML = proyecto.techStack
    .map((tecnologia, indice) => {
      const claseDestacada = indice < 3 ? 'highlight' : '';
      return `<span class="tech-tag ${claseDestacada}">${tecnologia}</span>`;
    })
    .join('');

  const enlacesHTML = proyecto.links
    .map((enlace) => {
      const clasePrincipal = enlace.primary ? 'live-link' : '';
      return `
        <a href="${enlace.url}" target="_blank" rel="noopener noreferrer"
           class="project-action-link ${clasePrincipal}">
          <span>${enlace.label}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
    })
    .join('');

  return `
    <article class="project-showcase-card ${proyecto.featured ? 'featured-project' : ''}">
      <div class="project-cover-wrapper">
        <img src="${proyecto.image}" alt="Vista representativa de ${proyecto.title}" class="project-cover-image" loading="lazy">
        <div class="project-cover-badges">
          <span class="project-role-badge">${proyecto.role}</span>
          <span class="project-status-badge">${proyecto.status}</span>
        </div>
      </div>

      <div class="project-card-body">
        <div class="project-tech-summary-bar">
          <code>${proyecto.codePreview.method}</code>
          <span>${proyecto.codePreview.detail}</span>
        </div>

        <h3>${proyecto.title}</h3>
        <p class="project-card-summary">${proyecto.summary}</p>

        <ul class="project-highlights-list">
          ${listaPuntosHTML}
        </ul>

        <div class="tech-badges">
          ${tecnologiasHTML}
        </div>

        <div class="project-card-footer">
          <div class="project-links-row">
            ${enlacesHTML}
          </div>
          <button type="button" class="project-explore-btn" data-explore-id="${proyecto.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Ver estructura técnica y detalles</span>
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

  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoriaElegida = boton.getAttribute('data-filter') || 'all';

      botonesFiltro.forEach((b) => b.classList.remove('active'));
      boton.classList.add('active');

      const proyectosFiltrados =
        categoriaElegida === 'all'
          ? todosLosProyectos
          : todosLosProyectos.filter((proyecto) =>
              proyecto.category.includes(categoriaElegida)
            );

      renderizarProyectos(proyectosFiltrados, contenedorGrid);
    });
  });

  contenedorGrid.addEventListener('click', (evento) => {
    const botonExplorar = evento.target.closest('[data-explore-id]');
    if (!botonExplorar) return;

    const idProyecto = botonExplorar.getAttribute('data-explore-id');
    const proyectoEncontrado = todosLosProyectos.find((p) => p.id === idProyecto);

    if (proyectoEncontrado && typeof alSeleccionarProyecto === 'function') {
      alSeleccionarProyecto(proyectoEncontrado);
    }
  });

  iniciarConsolaOMS();
}

function iniciarConsolaOMS() {
  const botonesConsola = document.querySelectorAll('[data-oms-view]');
  const salidaConsola = document.getElementById('omsConsoleOutput');
  if (!botonesConsola.length || !salidaConsola) return;

  const vistasOMS = {
    realtime: `Flujo Backend OMS: Creación y notificación de orden en tiempo real
POST /api/orders  -->  Middleware de Validación y Manejo de Errores
  ├─ 1. Validación de estructura y stock en PostgreSQL (Base normalizada)
  ├─ 2. Registro de transacción en tablas de órdenes
  └─ 3. Publicación de evento en Redis y emisión por WebSocket

Respuesta emitida en tiempo real:
{
  "order_id": "OMS-2026-0842",
  "status": "CONFIRMED",
  "channel": "websocket_realtime",
  "database": "PostgreSQL (Normalizada)",
  "error_handler": "CentralizedMiddleware"
}`,
    postgres: `Configuración de Plataforma PostgreSQL en Docker (Softplus)
Servicios en ejecución (docker compose ps):
  - postgres-db         (Puerto interno 5432 · Volumen persistente)
  - prometheus          (Recolección de métricas internas)
  - postgres-exporter   (Métricas de actividad, conexiones y locks)
  - node-exporter       (Uso de CPU, memoria RAM, disco y red)

Paneles monitoreados en Grafana:
  [Estado PostgreSQL: ACTIVO]  [Conexiones activas: 14]  [Bloqueos: 0]`,
    backups: `Automatización de Respaldos y Seguridad en Servidor Linux
1. Seguridad de Red:
   - Acceso SSH por llave pública y firewall UFW configurado
   - Puertos de monitoreo restringidos a red privada / VPN

2. Respaldo Diario Automático (crontab 02:00 AM):
   $ /opt/postgres-platform/scripts/backup_postgres.sh
   -> Ejecuta pg_dump dentro del contenedor PostgreSQL
   -> Comprime en .sql.gz y genera huella de verificación .sha256`
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
        </a>
      `;
    })
    .join('');

  const imagenBannerHTML = proyecto.image
    ? `<div class="modal-project-banner">
         <img src="${proyecto.image}" alt="Ilustración de ${proyecto.title}" class="modal-project-banner-img" />
       </div>`
    : '';

  const puntosClaveHTML = proyecto.highlights
    .map((punto) => `<li>${punto}</li>`)
    .join('');

  cuerpoModal.innerHTML = `
    ${imagenBannerHTML}
    <span class="modal-badge">${proyecto.role} · ${proyecto.status}</span>
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
        <h4>Detalle Técnico (${proyecto.codePreview.method})</h4>
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

  mostrarModal(modalProyecto);
}

function iniciarModales() {
  const modalProyecto = document.getElementById('architectureModal');
  const modalCV = document.getElementById('cvModal');
  const botonAbrirCV = document.getElementById('openCvModalBtn');
  const botonCerrarProyecto = document.getElementById('closeArchModalBtn');
  const botonCerrarCV = document.getElementById('closeCvModalBtn');

  if (botonAbrirCV) {
    botonAbrirCV.addEventListener('click', () => mostrarModal(modalCV));
  }

  if (botonCerrarProyecto) {
    botonCerrarProyecto.addEventListener('click', cerrarModales);
  }

  if (botonCerrarCV) {
    botonCerrarCV.addEventListener('click', cerrarModales);
  }

  [modalProyecto, modalCV].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (evento) => {
      if (evento.target === modal) {
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
  const CORREO_EVELYN = 'barriosevelyn488@gmail.com';

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

      const asunto = `${motivo} — ${nombre}`;
      const cuerpo = `Hola Evelyn,\n\nSoy ${nombre}.\n\n${mensaje}`;
      const urlMailto = `mailto:${CORREO_EVELYN}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

      window.location.href = urlMailto;
      mostrarNotificacion('Abriendo cliente de correo...');
    });
  }
}


function iniciarMenuMovil() {
  const botonMenu = document.getElementById('mobileMenuBtn');
  const menuNavegacion = document.getElementById('navLinks');

  if (!botonMenu || !menuNavegacion) return;

  botonMenu.addEventListener('click', () => {
    const estaAbierto = menuNavegacion.classList.toggle('is-open');
    botonMenu.setAttribute('aria-expanded', String(estaAbierto));
  });
}

function iniciarPestanas() {
  const botonesNavegacion = document.querySelectorAll('[data-tab-target]');
  const barraTransicion = document.getElementById('sectionTransitionBar');
  const menuNavegacion = document.getElementById('navLinks');
  const botonMenu = document.getElementById('mobileMenuBtn');

  const marcarBotonActivo = (idDestino) => {
    botonesNavegacion.forEach((boton) => {
      if (boton.classList.contains('nav-pill-btn')) {
        const coincide = boton.getAttribute('data-tab-target') === idDestino;
        boton.classList.toggle('active', coincide);
      }
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

      if (menuNavegacion && botonMenu) {
        menuNavegacion.classList.remove('is-open');
        botonMenu.setAttribute('aria-expanded', 'false');
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
    'Técnica en Desarrollo de Software',
    'Desarrolladora Backend & Full-Stack',
    'Node.js · PostgreSQL · MySQL · SOLID',
    'Liderazgo Ágil de Equipos (Scrum)'
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
      setTimeout(escribirPaso, 55);
    } else {
      indiceCaracter -= 1;
      elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
      if (indiceCaracter === 0) {
        borrando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        setTimeout(escribirPaso, 320);
        return;
      }
      setTimeout(escribirPaso, 28);
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
    const tarjeta = evento.target.closest('.neo-card, .hero-card-showcase, .project-card, .oms-showcase-card');
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
        icono.textContent = abierto ? '−' : '+';
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
