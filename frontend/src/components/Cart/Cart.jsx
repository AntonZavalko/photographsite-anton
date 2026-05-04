import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart({ cartItems, setCartItems, onClose, onProceed }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems(prev => prev.filter(item => item.id !== id));
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>🛒 Кошик замовлень</h2>
          <button className="cart-close" onClick={onClose}>&times;</button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Кошик порожній</p>
            <p className="cart-empty-hint">Додайте послуги з нашого каталогу!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price} грн</p>
                  </div>
                  <div className="cart-item-controls">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => removeItem(item.id)} className="remove-btn">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Загалом:</span>
                <strong>{total} грн</strong>
              </div>
              <button className="checkout-btn" onClick={onProceed}>
                📝 Оформити замовлення
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;