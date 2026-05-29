import React, { useState } from 'react';
import {
  Play, ShieldCheck, CreditCard, Package,
  Star, ArrowRight, CheckCircle, Zap, TrendingUp,
  Users, Store, IndianRupee, Clock, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './LiveDemo.css';

const demoProducts = [
  { name: 'Premium Sickle', price: '₹350', original: '₹500', rating: 4.9, reviews: 89, verified: true, emoji: '🔪', category: 'Agriculture', seller: 'FarmTools Pro' },
  { name: 'Smartphone', price: '₹6,800', original: '₹9,999', rating: 4.8, reviews: 342, verified: true, emoji: '📱', category: 'Electronics', seller: 'TechZone' },
  { name: 'Mixer Grinder', price: '₹1,850', original: '₹3,200', rating: 4.7, reviews: 156, verified: true, emoji: '🔌', category: 'Appliances', seller: 'HomeCraft' },
  { name: 'Solar Lantern', price: '₹1,100', original: '₹1,800', rating: 4.9, reviews: 203, verified: true, emoji: '☀️', category: 'Energy', seller: 'BrightLife' },
  { name: 'Power Bank', price: '₹899', original: '₹1,499', rating: 4.6, reviews: 128, verified: true, emoji: '🔋', category: 'Electronics', seller: 'PowerUp' },
  { name: 'Water Purifier', price: '₹2,499', original: '₹4,200', rating: 4.8, reviews: 267, verified: true, emoji: '💧', category: 'Home', seller: 'PureFlow' },
];

const LiveDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cart, setCart] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const addToCart = (index: number) => {
    if (!cart.includes(index)) {
      setCart([...cart, index]);
      setSelectedProduct(index);
      setTimeout(() => setSelectedProduct(null), 1000);
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter(i => i !== index));
  };

  const steps = [
    {
      title: 'Browse Verified Products',
      desc: 'Explore quality-checked inventory from regional suppliers',
      icon: <Package size={20} />,
    },
    {
      title: 'Customer Orders',
      desc: 'Receive orders through your digital storefront',
      icon: <Smartphone size={20} />,
    },
    {
      title: 'Instant Settlement',
      desc: 'Get paid immediately upon delivery confirmation',
      icon: <IndianRupee size={20} />,
    },
  ];

  return (
    <div className="demo-page">
      {/* Hero */}
      <section className="demo-hero">
        <div className="demo-hero__bg">
          <div className="demo-hero__shape demo-hero__shape--1" />
          <div className="demo-hero__shape demo-hero__shape--2" />
        </div>
        <div className="container demo-hero__inner">
          <div className="section-label"><Play size={16} /> Interactive Dashboard</div>
          <h1 className="demo-hero__title">
            Experience the <span className="text-primary">Partner Dashboard</span>
          </h1>
          <p className="demo-hero__subtitle">
            See how easy it is to manage your digital storefront, process orders, and earn instant commissions. This is a live simulation of the MyCheckStore partner experience.
          </p>
          <div className="demo-hero__stats">
            <div className="demo-hero__stat">
              <div className="demo-hero__stat-icon"><Store size={20} /></div>
              <div className="demo-hero__stat-value">Zero</div>
              <div className="demo-hero__stat-label">Stock Investment</div>
            </div>
            <div className="demo-hero__stat">
              <div className="demo-hero__stat-icon"><Zap size={20} /></div>
              <div className="demo-hero__stat-value">Instant</div>
              <div className="demo-hero__stat-label">Settlements</div>
            </div>
            <div className="demo-hero__stat">
              <div className="demo-hero__stat-icon"><TrendingUp size={20} /></div>
              <div className="demo-hero__stat-value">100%</div>
              <div className="demo-hero__stat-label">Verified Products</div>
            </div>
          </div>
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
                <div>
                  <h2 className="demo-browse__title">
                    ⚡ Your Digital Inventory
                  </h2>
                  <p className="demo-browse__subtitle">Tap any product to simulate a customer purchase</p>
                </div>
                <div className="demo-browse__cart-badge">
                  <ShieldCheck size={16} />
                  <span>{cart.length} Orders</span>
                </div>
              </div>
              <div className="demo-browse__grid">
                {demoProducts.map((product, i) => (
                  <div 
                    key={i} 
                    className={`demo-product card ${selectedProduct === i ? 'demo-product--selected' : ''}`}
                  >
                    <div className="demo-product__emoji">{product.emoji}</div>
                    {product.verified && (
                      <div className="demo-product__badge">
                        <ShieldCheck size={12} /> Verified
                      </div>
                    )}
                    <div className="demo-product__category">{product.category}</div>
                    <h3 className="demo-product__name">{product.name}</h3>
                    <div className="demo-product__seller">by {product.seller}</div>
                    <div className="demo-product__rating">
                      <Star size={14} fill="#F5B731" color="#F5B731" />
                      <span>{product.rating}</span>
                      <span className="demo-product__reviews">({product.reviews})</span>
                    </div>
                    <div className="demo-product__price-row">
                      <span className="demo-product__price">{product.price}</span>
                      <span className="demo-product__original">{product.original}</span>
                    </div>
                    <div className="demo-product__commission">
                      Your Commission: <strong>₹{Math.round(parseInt(product.price.replace(/[₹,]/g, '')) * 0.15)}</strong>
                    </div>
                    {cart.includes(i) ? (
                      <button className="btn btn-sm demo-product__btn-added" onClick={() => removeFromCart(i)}>
                        <CheckCircle size={16} /> Order Received
                      </button>
                    ) : (
                      <button className="btn btn-primary btn-sm" style={{ width: '100%' }} onClick={() => addToCart(i)}>
                        Simulate Order
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <button className="btn btn-primary btn-lg" onClick={() => setActiveStep(1)}>
                    Process {cart.length} Order{cart.length !== 1 ? 's' : ''} <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeStep === 1 && (
            <div className="demo-cart">
              <h2 className="demo-cart__title">📦 Orders to Process</h2>
              <p className="demo-cart__subtitle">These orders are ready for verification and local delivery</p>
              {cart.length === 0 ? (
                <div className="demo-cart__empty">
                  <p>No orders yet. <button onClick={() => setActiveStep(0)} style={{ color: 'var(--primary)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Browse inventory</button></p>
                </div>
              ) : (
                <>
                  <div className="demo-cart__items">
                    {cart.map((idx) => {
                      const p = demoProducts[idx];
                      const commission = Math.round(parseInt(p.price.replace(/[₹,]/g, '')) * 0.15);
                      return (
                        <div key={idx} className="demo-cart__item">
                          <div className="demo-cart__item-emoji">{p.emoji}</div>
                          <div className="demo-cart__item-info">
                            <div className="demo-cart__item-name">{p.name}</div>
                            <div className="demo-cart__item-meta">
                              <span className="demo-cart__item-price">{p.price}</span>
                              <span className="demo-cart__item-commission">Commission: ₹{commission}</span>
                            </div>
                          </div>
                          <div className="demo-cart__item-status">
                            <Clock size={14} />
                            <span>Pending</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="demo-cart__summary">
                    <div className="demo-cart__summary-row">
                      <span>Total Orders</span>
                      <span style={{ fontWeight: 700 }}>{cart.length}</span>
                    </div>
                    <div className="demo-cart__summary-row">
                      <span>Order Value</span>
                      <span style={{ fontWeight: 700 }}>
                        ₹{cart.reduce((sum, idx) => sum + parseInt(demoProducts[idx].price.replace(/[₹,]/g, '')), 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="demo-cart__summary-row demo-cart__summary-highlight">
                      <span>Your Commission (15%)</span>
                      <span>
                        ₹{cart.reduce((sum, idx) => sum + Math.round(parseInt(demoProducts[idx].price.replace(/[₹,]/g, '')) * 0.15), 0).toLocaleString()}
                      </span>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => setActiveStep(2)}>
                      Complete Delivery <ArrowRight size={18} />
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
                  <CheckCircle size={72} color="var(--green)" />
                </div>
                <h2 className="demo-confirm__title">Settlement Complete! 🎉</h2>
                <p className="demo-confirm__subtitle">
                  This is a demo simulation. In the real platform, your commission would be instantly transferred to your linked bank account upon delivery confirmation.
                </p>
                <div className="demo-confirm__details">
                  <div className="demo-confirm__detail">
                    <span>Settlement ID</span>
                    <strong>#SET-{Math.floor(Math.random() * 900000 + 100000)}</strong>
                  </div>
                  <div className="demo-confirm__detail">
                    <span>Orders Completed</span>
                    <strong>{cart.length} products</strong>
                  </div>
                  <div className="demo-confirm__detail">
                    <span>Commission Earned</span>
                    <strong className="demo-confirm__amount">
                      ₹{cart.reduce((sum, idx) => sum + Math.round(parseInt(demoProducts[idx].price.replace(/[₹,]/g, '')) * 0.15), 0).toLocaleString()}
                    </strong>
                  </div>
                  <div className="demo-confirm__detail">
                    <span>Settlement Time</span>
                    <strong>Instant</strong>
                  </div>
                </div>
                <div className="demo-confirm__actions">
                  <button className="btn btn-primary" onClick={() => { setActiveStep(0); setCart([]); }}>
                    Try Again <ArrowRight size={18} />
                  </button>
                  <Link to="/join-us" className="btn btn-outline">Become a Partner</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-cta">
        <div className="container">
          <div className="demo-cta__card">
            <div className="demo-cta__content">
              <h2 className="demo-cta__title">Ready to Start Your Digital Store?</h2>
              <p className="demo-cta__desc">
                Join thousands of micro-entrepreneurs earning consistent income with zero stock investment. Get started in less than 24 hours.
              </p>
              <div className="demo-cta__features">
                <div className="demo-cta__feature">
                  <CheckCircle size={18} />
                  <span>No upfront investment</span>
                </div>
                <div className="demo-cta__feature">
                  <CheckCircle size={18} />
                  <span>Instant settlements</span>
                </div>
                <div className="demo-cta__feature">
                  <CheckCircle size={18} />
                  <span>24/7 support</span>
                </div>
              </div>
              <div className="demo-cta__buttons">
                <Link to="/join-us" className="btn btn-primary btn-lg">
                  Apply to Partner <ArrowRight size={18} />
                </Link>
                <Link to="/how-it-works" className="btn btn-white btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="demo-cta__visual">
              <div className="demo-cta__stat-card">
                <Users size={32} color="var(--primary)" />
                <div className="demo-cta__stat-value">4,200+</div>
                <div className="demo-cta__stat-label">Active Partners</div>
              </div>
              <div className="demo-cta__stat-card">
                <TrendingUp size={32} color="var(--green)" />
                <div className="demo-cta__stat-value">3x</div>
                <div className="demo-cta__stat-label">Average Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveDemo;
