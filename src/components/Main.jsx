import Estudios from './Estudios';
import Tecnologias from './Tecnologias';
import Certificados from './Certificados';
import Idiomas from './Idiomas';
import '../styles/Main.css';

// Recibo los datos que me pasa Home como props
function Main({ nombre, apellido, dataEstudios, dataCertificados, dataIdiomas }) { 
  return (
    <main className="main-content">
      
      {/* Sección principal con mi foto y presentación */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/perfil.jpg" alt="Nicolás Moya" className="hero-profile-pic" />
          <h1 className="hero-name">{nombre} {apellido}</h1>
          <p className="hero-description">
            Graduado de la UTN-FRT y en Comunicación Social. Mi enfoque combina la precisión técnica del desarrollo de software con la claridad estratégica de la comunicación. Me especializo en crear soluciones web robustas, priorizando siempre la responsabilidad, la mejora continua y la experiencia del usuario. Comprometido con transformar ideas complejas en productos digitales eficientes.
          </p>
        </div>
      </section>

      <section id="estudios" className="section">
        <Estudios data={dataEstudios} /> 
      </section>

      <section id="tecnologias" className="section">
        <Tecnologias />
      </section>

      <section id="certificados" className="section">
        <Certificados data={dataCertificados} />
      </section>

      <section id="idiomas" className="section">
        <Idiomas data={dataIdiomas} />
      </section>
      
    </main>
  );
}
export default Main;