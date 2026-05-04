import { useState } from 'react';
import { galleryItems } from '../../assets/data/galleryItems';
import './Gallery.css';

function Gallery({ activeFilter = 'all' }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Фільтруємо елементи галереї
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery-section">
      <h2 className="section-title">Наша Галерея</h2>
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              loading="lazy"
            />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img 
              src={selectedImage.full} 
              alt={selectedImage.title} 
              className="modal-image"
            />
            <div className="image-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <p className="date">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;