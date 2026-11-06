# Portafolio Profesional — Evelyn Barrios | Técnica en Desarrollo de Software

[![Portafolio en Vivo](https://img.shields.io/badge/GitHub_Pages-Portafolio_en_Vivo-0284c7?style=for-the-badge&logo=github)](https://barriosevelyn488-web.github.io/portafoliohtml/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Evelyn_Barrios-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/evelyn-noem%C3%AD-barrios-m%C3%A9ndez-aa315130a)
[![GitHub](https://img.shields.io/badge/GitHub-barriosevelyn488--web-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/barriosevelyn488-web)

Portafolio profesional de **Evelyn Noemí Barrios Méndez** (**Técnica en Desarrollo de Software**), desarrollado con **HTML5 semántico, CSS3 adaptable (paleta Azul, Celeste y Plata con Modo Oscuro y Modo Claro)** y **módulos JavaScript ES6+ con programación funcional**.

---

## Estructura Modular del Proyecto

```text
portafoliohtml/
├── index.html                                    # Estructura semántica con sistema de pestañas dinámicas
├── styles.css                                    # Variables CSS (Azul, Celeste y Plata) con Modo Claro y Oscuro
├── img/                                          # Retrato profesional, CV e ilustraciones técnicas de proyectos
│   ├── perfil-evelyn.jpg
│   ├── cv-evelyn-barrios.jpg
│   └── proyectos/                                # Ilustraciones técnicas representativas de cada proyecto
└── js/
    ├── main.js                                   # Punto de entrada que inicializa los módulos
    ├── data/
    │   └── projectsData.js                       # Arreglo de proyectos (PROYECTOS) con enlaces desplegados
    └── modules/
        ├── tema.js                               # Cambio entre Modo Claro y Oscuro con localStorage
        ├── proyectos.js                          # Renderizado de tarjetas, filtros (.map, .filter, .find) y consola OMS
        ├── modales.js                            # Ventanas emergentes de detalle de proyecto y visor de CV
        ├── contacto.js                           # Copiado al portapapeles y envío por WhatsApp o correo
        └── navegacion.js                         # Cambio de pestañas en la misma página y consulta a GitHub API
```

---

## Características Principales

1. **Navegación por Pestañas Dinámicas y Vista Continua:**
   - Permite cambiar de ventana dentro de la misma página (**Sobre mí**, **Proyectos y OMS Backend**, **Stack Tecnológico**, **Liderazgo, Experiencia y Formación**, **Contacto**) o activar el modo de lectura continua.
2. **Consola Interactiva OMS Backend (Softplus):**
   - Muestra el trabajo realizado como **Líder de Equipo Backend**, incluyendo el flujo de órdenes en tiempo real (`Node.js`, `PostgreSQL`, `Redis`, `WebSocket`), la plataforma en `Docker Compose` con `Prometheus` y `Grafana`, y la automatización de respaldos en servidor Linux.
3. **Proyectos Conectados a Despliegues Reales:**
   - Incluye ilustraciones representativas y enlaces directos a proyectos desplegados en **Vercel** y **GitHub Pages** (`Librarian`, `KarenFlix`, `Campuslands / AI Academy CRM`, `Proyecto Alba`, `TutorBot para Telegram`, `Suite Backend Node.js & SQL`, `Campus Parking`, `Campus Shop` y `Sistemas en Python`).
4. **Modo Claro y Modo Oscuro (Azul, Celeste y Plata):**
   - Paleta tecnológica y fresca con cambio de tema persistente en `localStorage`.

---

## Ejecución Local

Para probar los módulos nativos ES6 (`type="module"`) en entorno local:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador.
