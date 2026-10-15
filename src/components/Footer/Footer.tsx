function Footer() {
  return (
    <footer>
      <section className="footer-blue">

        {/* Logotipo y redes sociales */}
        <article className="footer-blue__media">
          <img
            src="/img/logoAzulBlancoHE.png"
            alt="logo-sky"
            id="logo-sky"
          />

          <div className="media__social-media">
            <a
              href="https://www.instagram.com/hound.express/?igsh=OGQ5ZDc2ODk2ZA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/instagram.png" alt="instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/hound-express/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/linkedin.png" alt="linkedin" />
            </a>

            <a
              href="https://www.facebook.com/houndexpress?mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/facebook.png" alt="facebook" />
            </a>
          </div>
        </article>

        {/* Información de contacto */}
        <article className="footer-blue__info">
          <h2>Contáctanos</h2>

          <h4>Horarios</h4>
          <p>Lunes a viernes de 9:00 a 18:00 hrs.</p>
          <p>Sábados de 9:00 a 13:00 hrs.</p>
          <h4>México</h4>
          <p>+52(55)4000 1920</p>
          <i className="fa-solid fa-envelope"></i>
          <label>sclientes1@hound-express.com</label>

          <h4>USA</h4>
          <p>+1(95)6568 3443</p>
          <i className="fa-solid fa-envelope"></i>
          <label>cslaredo1@hound-express.com</label>
        </article>
      </section>

      {/* Derechos de autor */}
      <div className="copy">
        <p>
          <small>
            Copyright © 2025 Hound Express. Todos los derechos reservados.
          </small>
        </p>
      </div>
    </footer>
  )
}

export default Footer