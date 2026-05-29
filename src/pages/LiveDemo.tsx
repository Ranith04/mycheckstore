import React, { useState } from 'react';
import {
  Play, ShieldCheck, CreditCard, Package,
  Star, ArrowRight, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './LiveDemo.css';

const demoProducts = [
  { name: 'Wireless Earbuds Pro', price: '₹1,299', original: '₹2,999', rating: 4.8, reviews: 342, verified: true, emoji: '🎧', category: 'Electronics' },
  { name: 'Organic Green Tea', price: '₹349', original: '₹599', rating: 4.9, reviews: 128, verified: true, emoji: '🍵', category: 'Grocery' },
  { name: 'Yoga Mat Premium', price: '₹799', original: '₹1,499', rating: 4.7, reviews: 89, verified: true, emoji: '🧘', category: 'Fitness' },
  { name: 'Stainless Steel Bottle', price: '₹449', original: '₹899', rating: 4.6, reviews: 204, verified: true, emoji: '🍶', category: 'Kitchen' },
  { name: 'LED Desk Lamp', price: '₹899', original: '₹1,799', rating: 4.8, reviews: 156, verified: true, emoji: '💡', category: 'Electronics' },
  { name: 'Hand Cream Set', price: '₹299', original: '₹599', rating: 4.5, reviews: 78, verified: true, emoji: '🧴', category: 'Beauty' },
];

const LiveDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (index: number) => {
    if (!cart.includes(index)) {
      setCart([...cart, index]);
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter(i => i !== index));
  };

  const steps = [
    {
      title: 'Browse Products',
      desc: 'See real verified products. Add them to your cart.',
      icon: <Package size={20} />,
    },
    {
      title: 'Review Cart',
      desc: 'Check your selections and see order summary.',
      icon: <CreditCard size={20} />,
    },
    {
      title: 'Order Confirmed!',
      desc: 'Experience our instant confirmation flow.',
      icon: <CheckCircle size={20} />,
    },
  ];

  return (
    <div className="demo-page">
      {/* Hero */}
      <section className="demo-hero">
        <div className="container demo-hero__inner">
          <div className="section-label"><Play size={16} /> Interactive Demo</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
            Experience <span className="text-primary">MyCheckStore</span> Live
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Try our platform right here — browse products, add to cart, and see how seamless the experience feels.
          </p>
        </div>
      </section>

      {/* Demo Steps Indicator */}
      <section className="demo-stepper">
        <div className="container">
          <div className="demo-stepper__bar">
            {steps.map((step, i) => (
              <button
                key={i}
                className={`demo-stepper__step ${i === activeStep ? 'demo-stepper__step--active' : ''} ${i < activeStep ? 'demo-stepper__step--done' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="demo-stepper__step-icon">{i < activeStep ? <CheckCircle size={20} /> : step.icon}</div>
                <div>
                  <div className="demo-stepper__step-title">{step.title}</div>
                  <div className="demo-stepper__step-desc">{step.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="demo-content">
        <div className="container">
          {activeStep === 0 && (
            <div className="demo-browse">
              <div className="demo-browse__head">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  🛍️ Trending Verified Products
                </h2>
                <span style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>
                  {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
                </span>
              </div>
              <div className="demo-browse__grid">
                {demoProducts.map((product, i) => (
                  <div key={i} className="demo-product card">
                    <div className="demo-product__emoji">{product.emoji}</div>
                    {product.verified && (
                      <div className="demo-product__badge">
                        <ShieldCheck size={12} /> Verified
                      </div>
                    )}
                    <div className="demo-product__category">{product.category}</div>
                    <h3 className="demo-product__name">{product.name}</h3>
                    <div className="demo-product__rating">
                      <Star size={14} fill="#F5B731" color="#F5B731" />
                      <span>{product.rating}</span>
                      <span className="demo-product__reviews">({product.reviews})</span>
                    </div>
                    <div className="demo-product__price-row">
                      <span className="demo-product__price">{product.price}</span>
                      <span className="demo-product__original">{product.original}</span>
                    </div>
                    {cart.includes(i) ? (
                      <button className="btn btn-sm" style={{ width: '100%', background: 'var(--green-light)', color: 'var(--green)', border: 'none' }} onClick={() => removeFromCart(i)}>
                        <CheckCircle size={16} /> Added
                      </button>
                    ) : (
                      <button className="btn btn-primary btn-sm" style={{ width: '100%' }} onClick={() => addToCart(i)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <button className="btn btn-primary btn-lg" onClick={() => setActiveStep(1)}>
                    Review Cart ({cart.length}) <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeStep === 1 && (
            <div className="demo-cart">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>🛒 Your Cart</h2>
              {cart.length === 0 ? (
                <div className="demo-cart__empty">
                  <p>Your cart is empty. <button onClick={() => setActiveStep(0)} style={{ color: 'var(--primary)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Browse products</button></p>
                </div>
              ) : (
                <>
                  <div className="demo-cart__items">
                    {cart.map((idx) => {
                      const p = demoProducts[idx];
                      return (
                        <div key={idx} className="demo-cart__item">
                          <div className="demo-cart__item-emoji">{p.emoji}</div>
                          <div className="demo-cart__item-info">
                            <div className="demo-cart__item-name">{p.name}</div>
                            <div className="demo-cart__item-price">{p.price}</div>
                          </div>
                          <button className="demo-cart__item-remove" onClick={() => removeFromCart(idx)}>✕</button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="demo-cart__summary">
                    <div className="demo-cart__summary-row">
                      <span>Items ({cart.length})</span>
                      <span style={{ fontWeight: 700 }}>
                        ₹{cart.reduce((sum, idx) => sum + parseInt(demoProducts[idx].price.replace(/[₹,]/g, '')), 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="demo-cart__summary-row">
                      <span>Delivery</span>
                      <span style={{ color: 'var(--green)', fontWeight: 600 }}>FREE</span>
                    </div>
                    <div className="demo-cart__summary-row demo-cart__summary-total">
                      <span>Total</span>
                      <span>
                        ₹{cart.reduce((sum, idx) => sum + parseInt(demoProducts[idx].price.replace(/[₹,]/g, '')), 0).toLocaleString()}
                      </span>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }} onClick={() => setActiveStep(2)}>
                      Place Order <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {activeStep === 2 && (
            <div className="demo-confirm">
              <div className="demo-confirm__card">
                <div className="demo-confirm__icon">
                  <CheckCircle size={64} color="var(--green)" />
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '12px' }}>Order Confirmed! 🎉</h2>
                <p style={{ color: 'var(--gray-500)', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
                  This is a demo! In the real app, you would receive an order confirmation via SMS and email with real-time tracking.
                </p>
                <div className="demo-confirm__details">
                  <div className="demo-confirm__detail">
                    <span>Order ID</span>
                    <strong>#MCS-{Math.floor(Math.random() * 900000 + 100000)}</strong>
                  </div>
                  <div className="demo-confirm__detail">
                    <span>Items</span>
                    <strong>{cart.length} products</strong>
                  </div>
                  <div className="demo-confirm__detail">
                    <span>Estimated Delivery</span>
                    <strong>Today by 6 PM</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => { setActiveStep(0); setCart([]); }}>
                    Try Again <ArrowRight size={18} />
                  </button>
                  <Link to="/shop" className="btn btn-outline">Visit Real Shop</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LiveDemo;
