import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import '../styles/Tecnologias.css';

function Tecnologias() {
  const tecnologias = [
    { id: 1, nombre: 'HTML', icono: <FaHtml5 /> },
    { id: 2, nombre: 'CSS', icono: <FaCss3Alt /> },
    { id: 3, nombre: 'JavaScript', icono: <FaJs /> },
    { id: 4, nombre: 'React', icono: <FaReact /> },
    { id: 5, nombre: 'MySQL', icono: <SiMysql /> },
  ];

  const carouselItems = [...tecnologias, ...tecnologias];

  return (
    <div className="tecnologias-container">
      <h2 className="section-title">Tecnologías</h2>
      <div className="tecnologias-carousel">
        <div className="tecnologias-track">
          {carouselItems.map((tech, index) => (
            <div key={`${tech.id}-${index}`} className="tech-card" data-tech={tech.nombre} tabIndex={0}>
              <div className="tech-icon">{tech.icono}</div>
              <h3 className="tech-nombre">{tech.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
