import React, { useEffect } from 'react';
import { partners } from '../../assets/data/partners';
import './Partners.css';

function Partners() {
  useEffect(() => {
    document.title = "Фото Портфоліо | Партнери";
  }, []);

  return (
    <div className="partners-page">
      <section className="partners-header">
        <div className="container">
          <h1>Наші Партнери</h1>
          <p>Ми співпрацюємо з кращими компаніями у сфері фотографії</p>
        </div>
      </section>

      <section className="partners-list">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-link">
                  Детальніше →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-cta">
        <div className="container">
          <h2>Стати нашим партнером</h2>
          <p>Запрошуємо до співпраці фотостудії, друкарні та інші профільні компанії</p>
          <a href="/contact" className="btn">Зв'язатися з нами</a>
        </div>
      </section>
    </div>
  );
}

export default Partners;