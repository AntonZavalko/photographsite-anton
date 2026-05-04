import { useState, useEffect } from 'react';
import { testimonials } from '../../assets/data/testimonials';
import './TestimonialSlider.css';

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 useEffect(() => {
  let interval;
  if (isAutoPlaying) {
    interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  }
  return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-slider">
      <div className="slider-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <button 
          onClick={goToPrev}
          className="control-btn prev"
          aria-label="Попередній відгук"
        >
          &lt;
        </button>
        
        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти до відгуку ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          className="control-btn next"
          aria-label="Наступний відгук"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TestimonialSlider;