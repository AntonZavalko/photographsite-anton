import { useEffect } from 'react';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';
import Gallery from '../../components/Gallery/Gallery';
import './Home.css';

function Home() {
  useEffect(() => {
    document.title = "Фото Портфоліо | Головна";
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Зупиніть Ваші Найкращі Моменти</h1>
          <p>Професійні фото послуги для весіль, портретів та подій</p>
          <a href="#gallery" className="btn">Переглянути Галерею</a>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Ласкаво просимо до Мого Портфоліо</h2>
          <p>
            Маючи понад 10 років досвіду в професійній фотографії, 
            я спеціалізуюся на тому, щоб зберігати суть ваших найдорожчих моментів.
          </p>
        </div>
      </section>

      <section id="gallery" className="gallery-preview">
        <div className="container">
          <h2>Вибрані Роботи</h2>
          <Gallery />
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>Що кажуть клієнти</h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="widget-section">
        <div className="container">
          <WeatherWidget />
        </div>
      </section>
    </div>
  );
}

export default Home;