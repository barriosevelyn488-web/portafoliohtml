export const PROYECTOS = [
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
