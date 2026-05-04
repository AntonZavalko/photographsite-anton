import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Функція для обробки кліку по фільтру
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <div className="container">
          <h1>Моє Портфоліо</h1>
          <p>Колекція моїх найкращих робіт у різних жанрах фотографії</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              Всі
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'weddings' ? 'active' : ''}`}
              onClick={() => handleFilterClick('weddings')}
            >
              Весілля
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'portraits' ? 'active' : ''}`}
              onClick={() => handleFilterClick('portraits')}
            >
              Портрети
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'nature' ? 'active' : ''}`}
              onClick={() => handleFilterClick('nature')}
            >
              Природа
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`}
              onClick={() => handleFilterClick('events')}
            >
              Події
            </button>
          </div>
          
          {/* Передаємо активний фільтр в компонент Gallery */}
          <Gallery activeFilter={activeFilter} />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;