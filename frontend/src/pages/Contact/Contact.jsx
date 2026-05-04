import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  useEffect(() => {
    document.title = "Фото Портфоліо | Контакти";
  }, []);

  const mapIframe = (
    <iframe 
      title="Розташування Студії"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d402.9656620613369!2d30.521735181098713!3d50.444191126235275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI2JzM4LjYiTiAzMMKwMzEnMTcuNCJF!5e0!3m2!1suk!2sua!4v1748987992721!5m2!1suk!2sua"
      width="600"
      height="450"
      style={{border:0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1>Зв'яжіться зі мною</h1>
          <p>Напишіть, щоб обговорити ваші фото потреби</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Контактна Інформація</h2>
              
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>contact@photographer.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Телефон</h3>
                  <p>+380 98   345 6789</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Адреса Студії</h3>
                  <p>Вулиця Фотографії, Київ, Україна</p>
                </div>
              </div>
              
              <div className="business-hours">
                <h3>Години Роботи</h3>
                <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
                <p>Субота: 10:00 - 15:00</p>
                <p>Неділя: Вихідний</p>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h2>Написати Повідомлення</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="map-container">
            {mapIframe}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;