import { useEffect } from 'react';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import Video from '../../components/Video/Video'; 
import './About.css';


function About() {
  useEffect(() => {
    document.title = "Фото Портфоліо | Про мене";
  }, []);

  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>Про мене</h1>
          <p>Дізнайтеся про людину за об'єктивом</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/assets/avatar.jpg" 
                alt="Фотограф" 
                className="profile-img"
              />
            </div>
            
            <div className="about-text">
              <h2>Привіт, я Завалко Антон</h2>
              <p>
                Привіт! Мені 20 років! Я студент 3 курсу навчаюся в ЧДТУ на 126 спеціальності. Цей сайт-портфоліо фотографа був створений
                для курсової роботи з дисципліни "Frontend Development". Створений він за допомогою фреймворка React. Цей сайт підійде
                для будь-якого фотографа, який хоче продемонструвати своє портфоліо, навички фотографа.
              </p>
              
              {/* Додаємо відео після основного тексту */}
              <div className="video-section">
                <h3>Мої роботи у дії</h3>
                <Video 
                  videoId="qRPTPF04pfo" 
                  title="Приклади моїх фотозйомок"
                />
                <p className="video-caption">
                  Подивіться це відео, щоб побачити процес моєї роботи та приклади зйомок.
                </p>
              </div>
              
              <p>
                Мені дуже подобається фотографувати людей, пейзажі, тварин різні захоплючі речі, щоб поділитися з вами і 
                сфотографувати різні моменти в житті. Адже фото це наша пам'ять на довгі роки!
              </p>
              
              <h3>Моя Філософія</h3>
              <p>
                Я вірю, що хороша фотографія - це щось більше, ніж просто знімки.
              </p>
              
              <div className="social-section">
                <h3>Мої соціальні мережі</h3>
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2>Мій Досвід</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2020 - Зараз</h3>
              <h4>Фріланс Фотограф</h4>
              <p>Робота з клієнтами по всьому світу над різними фото проектами</p>
            </div>
            <div className="timeline-item">
              <h3>2015 - 2020</h3>
              <h4>Головний фотограф у Студії XYZ</h4>
              <p>Керував командою фотографів та працював з високопоставленими клієнтами</p>
            </div>
            <div className="timeline-item">
              <h3>2012 - 2015</h3>
              <h4>Асистент фотографа</h4>
              <p>Навчався майстерності під керівництвом відомого фотографа Яни Сміт</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;