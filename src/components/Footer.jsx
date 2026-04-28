import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>
            Email: <a href="https://mail.google.com/mail/?view=cm&to=moyanico044@gmail.com" target="_blank" rel="noreferrer">moyanico044@gmail.com</a>
          </p>
          <p>
            Teléfono: <a href="https://wa.me/543815737316" target="_blank" rel="noreferrer">+54 381 573 7316</a>
          </p>
          <p>Tucumán, Argentina</p>
        </div>

        <div className="footer-section">
          <h3>Sobre este sitio</h3>
          <p>© 2025 Nicolás Moya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
