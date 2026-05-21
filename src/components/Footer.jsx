import "./Footer.css";

function Footer({ nombre }) {
  return (
    <footer className="footer">
      <div className="footer-newsletter-bar">
        <span>🐝 Suscribite a nuestras novedades</span>
        <div className="newsletter-form">
          <input type="email" placeholder="Ingresá tu email" />
          <button>Suscribirse</button>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-brand">
          <h2>🍯 {nombre}</h2>
          <p>
            Productores artesanales de miel pura y natural ubicados en las
            Sierras del Valle, Maldonado.
          </p>
        </div>
        <div className="footer-col">
          <h4>Secciones</h4>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-col">
          <h4>Compras</h4>
          <a href="#">Compras Mayoristas</a>
          <a href="#">Compras Minoristas</a>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📍 Sierras del Valle, Maldonado</p>
          <p>📞 +598 99 000 000</p>
          <p>✉️ info@apiarioelvalle.com</p>
        </div>
      </div>
      <button
        className="btn-arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆ Volver arriba
      </button>
      <div className="footer-bottom">
        <p>© 2026 {nombre}. Todos los derechos reservados. 🐝</p>
      </div>
    </footer>
  );
}

export default Footer;
