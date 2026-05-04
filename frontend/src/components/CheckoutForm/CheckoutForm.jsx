import React, { useState } from 'react';
import './CheckoutForm.css';

// URL для API бекенду
const API_URL = 'https://photographsite-anton-c1eo.vercel.app/api';

function CheckoutForm({ cartItems, totalAmount, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "ПІБ обов'язкове";
    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email некоректний";
    }
    if (!formData.phone.trim()) newErrors.phone = "Телефон обов'язковий";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Генерація номера замовлення
    const orderNumber = `ORD-${Date.now()}`;
    
    // Формування даних замовлення
    const orderData = {
      orderNumber: orderNumber,
      client: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone
      },
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: totalAmount,
      comment: formData.comment || ''
    };
    
    try {
      // Відправка даних на бекенд
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log('Замовлення збережено:', data);
        
        // Очищення кошика
        localStorage.removeItem('servicesCart');
        
        alert(`✅ Замовлення оформлено!\n\nНомер замовлення: ${orderNumber}\nСума: ${totalAmount} грн\n\nДякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.`);
        
        if (onSuccess) onSuccess();
        if (onClose) onClose();
      } else {
        console.error('Помилка відповіді:', data);
        alert(`❌ Помилка при оформленні замовлення: ${data.message || 'Спробуйте пізніше'}`);
      }
    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('❌ Помилка при оформленні замовлення. Перевірте підключення до сервера.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <div className="checkout-header">
          <h2>📝 Оформлення замовлення</h2>
          <button className="checkout-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="order-summary">
          <h3>Ваше замовлення:</h3>
          <div className="order-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} грн</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <strong>Загалом до сплати: {totalAmount} грн</strong>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Контактні дані</h3>
          
          <div className="form-group">
            <label>ПІБ *</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange}
              placeholder="Іванов Іван Іванович"
              disabled={isSubmitting}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="example@mail.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label>Телефон *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="+380 99 123 45 67"
                disabled={isSubmitting}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label>Коментар до замовлення</label>
            <textarea 
              name="comment" 
              value={formData.comment} 
              onChange={handleChange}
              rows="3"
              placeholder="Дата, місце проведення зйомки, особливі побажання..."
              disabled={isSubmitting}
            />
          </div>
          
          <div className="checkout-buttons">
            <button type="button" className="cancel-btn" onClick={onClose} disabled={isSubmitting}>
              Скасувати
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Обробка...' : 'Підтвердити замовлення'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;