export const projects = [
  {
    title: 'InfoChampions',
    repo: 'https://github.com/hreinosoflores/infochampions',
    demo: 'https://www.youtube.com/watch?v=0-0UXy-VIx8',
    image: '/img/infochampions.png',
    problem:
      'Las noticias y los resultados de la Champions League por temporada necesitan un sitio centralizado, con contenido que solo editores autorizados puedan actualizar.',
    solution:
      'API REST con Node/Express y MongoDB. Contraseñas con bcrypt y sesiones con JWT para el acceso de editores. El frontend se divide en dos módulos que consumen la misma API: Noticias (React) y Resultados (Angular).',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'React', 'Redux', 'Material UI', 'Angular', 'Bootstrap'],
    result:
      'Sitio funcional con login de editores, gestión de noticias y resultados por temporada, y dos frontends en tecnologías distintas integrados sobre una sola API.',
  },
  {
    title: 'CLVPS · Cardless Virtual Payment System',
    repo: 'https://github.com/hreinosoflores/clvps',
    demo: 'https://www.youtube.com/watch?v=KCAYq2N45wE',
    image: '/img/clvps.png',
    problem:
      'Comprar en línea sin depender de una tarjeta: compradores y negocios necesitan una cuenta de dinero electrónico para recargar, pagar y cobrar.',
    solution:
      'Dashboard para comprador y vendedor (perfil, saldo, historial de transacciones, métodos de recarga) con API .NET 8, Entity Framework y MySQL, y cliente Angular. Una tienda virtual de prueba en Spring Boot simula el comercio que cobra con la cuenta.',
    stack: ['.NET 8', 'Entity Framework', 'MySQL', 'Angular', 'Java 21', 'Spring Boot', 'Thymeleaf'],
    result:
      'Flujo de pago completo de punta a punta: recarga de saldo, compra en la tienda y confirmación con número de operación, monto y saldo final, con tres componentes en dos ecosistemas (.NET y Java) funcionando juntos.',
  },
  {
    title: 'Florei Import',
    repo: 'https://github.com/hreinosoflores/florei',
    demo: 'https://www.youtube.com/watch?v=9vI_ORDu-UQ',
    image: '/img/florei.png',
    problem:
      'Una distribuidora y comercial de luminarias LED necesitaba gestionar su catálogo de productos y tenerlo disponible tanto en web como en móvil.',
    solution:
      'API REST con Spring MVC, JPA/Hibernate y PostgreSQL. Aplicación web en React con Tailwind CSS y app móvil en Flutter, ambas consumiendo la misma API. Las imágenes de producto se gestionan con Cloudinary.',
    stack: ['Spring MVC', 'JPA/Hibernate', 'PostgreSQL', 'React', 'Tailwind CSS', 'Flutter', 'Cloudinary'],
    result:
      'Sistema en tres capas (API, web y móvil) para un negocio real, donde los cambios hechos desde una app se reflejan en la otra.',
  },
]