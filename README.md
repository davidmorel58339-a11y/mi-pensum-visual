Gestor Visual de Pensum 🎓

Una plataforma web interactiva "Client-Side" diseñada para optimizar la planificación académica de los estudiantes universitarios. Transforma el tradicional plan de estudios estático en un mapa de nodos dinámico, integrando herramientas de simulación y proyección de índice académico (GPA).

https://project-14p44.vercel.app/

✨ Características Principales

Mapa de Nodos Interactivo: Visualización clara de la ruta crítica. Las asignaturas están organizadas por trimestres y conectadas según sus cadenas de prerrequisitos y correquisitos (laboratorios).

Modo Enfoque: Al hacer doble clic sobre cualquier asignatura, el sistema aísla visualmente toda su línea temporal (hacia atrás y hacia adelante), ocultando las materias irrelevantes.

Simulador de Inscripción: Detecta automáticamente qué materias han sido desbloqueadas basándose en el progreso del usuario. Contabiliza los créditos seleccionados para armar el próximo trimestre sin exceder el límite institucional.

Calculadora de GPA: Permite calcular el índice académico acumulado interactuando directamente con el mapa o mediante ingreso manual de créditos y puntos.

Predictor de Meta Académica: Algoritmo que cruza los créditos restantes con el historial actual para calcular la calificación promedio exacta que se necesita en el futuro para alcanzar una meta de índice específica.

Privacidad "Local-First": Todo el progreso del usuario (materias aprobadas, calificaciones, preferencias) se guarda en la memoria local del navegador (localStorage). No se utilizan bases de datos externas.

Diseño UI/UX Responsivo: Adaptable a dispositivos móviles, con soporte para Modo Oscuro (Dark Mode) y Modo Compacto.

🛠️ Tecnologías Utilizadas

React.js (Vite): Framework principal y empaquetador.

React Flow: Motor de renderizado para el mapa de nodos y aristas interactivos.

JavaScript (ES6+)

Vercel: Plataforma de despliegue continuo (CI/CD).


🤖 Cómo añadir tu propio plan de estudios (Generación con IA)

La plataforma permite renderizar cualquier pensum ingresando texto en un formato específico. Para facilitar este proceso, puedes utilizar Inteligencia Artificial (ChatGPT, Claude, Gemini) para convertir el PDF de tu plan de estudios al código que entiende la aplicación.

Copia el siguiente prompt y pégalo en la IA junto al texto o PDF de tu pensum:

"Actúa como un estructurador de datos. Convierte este pensum al formato exacto: '# Trimestre [N]' seguido de las materias así: 'CLAVE | Nombre | Prerequisitos separados por coma | Créditos'. Si no hay prerequisitos, deja el espacio vacío. Coloca los laboratorios debajo de su teoría. No agregues saludos ni explicaciones."

Una vez la IA te genere el texto, pégalo en la caja de texto inferior de la aplicación (en la pestaña "Mapa") y presiona Renderizar Pensum.


🤝 Contribuciones

Este proyecto es Open Source. Las contribuciones, reportes de bugs (issues) y pull requests son totalmente bienvenidos. 

👨‍💻 Autor

David Morel (IB)

Estudiante de Ingeniería Biomédica (INTEC)
