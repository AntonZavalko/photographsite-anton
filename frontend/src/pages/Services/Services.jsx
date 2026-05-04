import { useEffect, useState } from 'react';
import { services } from '../../assets/data/services';
import Cart from '../../components/Cart/Cart';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import './Services.css';

function Services() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    document.title = "Фото Портфоліо | Послуги";
    
    const savedCart = localStorage.getItem('servicesCart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCartItems(cart);
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalAmount(total);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('servicesCart', JSON.stringify(cartItems));
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 2000);
  };

  const addToCart = (service) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === service.id);
      if (existing) {
        showNotification(`✅ ${service.title} додано до кошика! (тепер: ${existing.quantity + 1} шт.)`);
        return prev.map(item =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      showNotification(`✅ ${service.title} додано до кошика!`);
      return [...prev, { 
        id: service.id, 
        name: service.title, 
        price: service.startingPrice, 
        quantity: 1 
      }];
    });
  };

  const getCartCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Кошик порожній! Додайте послуги для оформлення замовлення.');
      return;
    }
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    setShowCheckout(false);
    showNotification('🎉 Замовлення успішно оформлено! Дякуємо!');
  };

  return (
    <div className="services-page">
      {notification.show && <div className="notification">{notification.message}</div>}

      <button className="cart-floating-btn" onClick={() => setShowCart(true)}>
        🛒 Кошик {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
      </button>

      <section className="services-header">
        <div className="container">
          <h1>Мої Послуги</h1>
          <p>Професійні фото послуги, адаптовані під ваші потреби</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
                <div className="service-price">
                  <span>Від {service.startingPrice} грн</span>
                </div>
                <button className="btn order-btn" onClick={() => addToCart(service)}>
                  📦 Замовити
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Доступні Індивідуальні Пакети</h2>
          <p>Не знайшли те, що шукали? Зв'яжіться зі мною, щоб обговорити індивідуальний фото пакет.</p>
          <a href="/contact" className="btn">Зв'язатися</a>
        </div>
      </section>

      {showCart && (
        <Cart 
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowCart(false)}
          onProceed={handleProceedToCheckout}
        />
      )}

      {showCheckout && (
        <CheckoutForm 
          cartItems={cartItems}
          totalAmount={totalAmount}
          onClose={() => setShowCheckout(false)}
          onSuccess={handleCheckoutSuccess}
        />
      )}
    </div>
  );
}

export default Services;