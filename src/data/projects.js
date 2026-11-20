export const projects = [
  {
    title: 'CLVPS (CARDLESS VIRTUAL PAYMENT SYSTEM)',
    repo: 'https://github.com/hreinosoflores/clvps',
    demos: [
      {
        text: 'Demo',
        link: 'https://www.youtube.com/watch?v=KCAYq2N45wE'
      }
    ],
    image: '/img/clvps.png',
    description:
      'Prototipo de sistema de pago digital con cuenta de dinero electrónico para compradores y negocios en línea. Incluye dashboard de usuario comprador/vendedor (perfil, saldo actual, historial de transacciones, métodos de recarga), tienda virtual de prueba (catálogo de videojuegos + carrito de compras en sesión) y vista de confirmación de compra (nro operación, monto, saldo final). Dashboard desarrollado con MySQL, .NET 8.0, Entity Framework y Angular. Tienda virtual desarrollada con Java Spring Boot, Thymeleaf y mock data.',
    stack: ['MySQL', '.NET 8.0', 'Entity Framework', 'Angular', 'Java 21', 'Spring Boot', 'Thymeleaf']
  },
  {
    title: 'InfoChampions',
    repo: 'https://github.com/hreinosoflores/infochampions',
    demos: [
      {
        text: 'Demo Noticias',
        link: 'https://www.youtube.com/watch?v=0-0UXy-VIx8'
      },
      {
        text: 'Demo Resultados',
        link: 'https://www.youtube.com/watch?v=T_6PylNcjuc'
      }
    ],
    image: '/img/infochampions.png',
    description: 'Sitio web de información de la Champions League donde se muestra noticias del torneo y resultados de partidos por temporada, con acceso seguro para editores que deseen actualizar el contenido. Seguridad con contraseñas encriptadas en bcrypt. Manejo de sesiones con JWT. Manejo de bases de datos MongoDB. Servicio REST basado en Node Express JS y Mongoose. Aplicación web Frontend dividida en dos partes: Módulo Noticias desarrollado con React JS, Material UI y Redux, Módulo Resultados desarrollado con Angular, Bootstrap y Angular Material.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React', 'Material UI', 'Redux', 'Angular', 'Bootstrap', 'Angular Material', 'JWT', 'bcrypt']
  },
  {
    title: 'Florei Import',
    repo: 'https://github.com/hreinosoflores/florei',
    demos: [
      {
        text: 'Demo',
        link: 'https://www.youtube.com/watch?v=9vI_ORDu-UQ'
      }
    ],
    image: '/img/florei.png',
    description: 'Sistema informático de gestión de productos para una distribuidora y comercial de luminarias LED. Manejo de bases de datos PostgreSQL. Backend: Servicio REST basado en Spring MVC Framework y JPA Hibernate. Frontend: Aplicación web desarrollada en React JS y Tailwind CSS que consume datos del API REST. Móvil: Aplicación desarrollada en Flutter que consume datos del API REST, y actualiza la información mostrada en la aplicación web. Manejo de imágenes a través de la plataforma Cloudinary.',
    stack: ['Spring MVC', 'JPA/Hibernate', 'PostgreSQL', 'React', 'Tailwind CSS', 'Flutter', 'Cloudinary']
  },
]