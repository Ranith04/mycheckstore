import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShoppingCart, Truck, CreditCard, ShieldCheck,
  CheckCircle, ArrowRight, Globe, Smartphone, Star, Zap
} from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    num: 1,
    icon: <Search size={32} />,
    title: 'Discover Products',
    desc: 'Browse through thousands of verified products from your local neighborhood sellers. Use our smart filters and categories to find exactly what you need.',
    details: ['Smart search with filters', 'Category-wise browsing', 'Real-time availability check'],
  },
  {
    num: 2,
    icon: <ShoppingCart size={32} />,
    title: 'Add to Cart & Checkout',
    desc: 'Add your favorite products to the cart and complete your purchase with our secure, one-tap checkout process.',
    details: ['Multiple payment options', 'Secure encryption', 'Promo codes & offers'],
  },
  {
    num: 3,
    icon: <ShieldCheck size={32} />,
    title: 'Quality Verification',
    desc: 'Every order goes through our rigorous quality check before dispatch. We verify freshness, packaging, and authenticity.',
    details: ['100% quality assurance', 'Freshness guarantee', 'Tamper-proof packaging'],
  },
  {
    num: 4,
    icon: <Truck size={32} />,
    title: 'Fast Doorstep Delivery',
    desc: 'Track your order in real-time as it makes its way to your doorstep. Same-day delivery available in most areas.',
    details: ['Real-time tracking', 'Same-day delivery', 'Contactless delivery option'],
  },
  {
    num: 5,
    icon: <Star size={32} />,
    title: 'Rate & Review',
    desc: 'Share your experience! Your reviews help other buyers and motivate sellers to maintain top quality.',
    details: ['Photo reviews', 'Verified purchase badge', 'Earn reward points'],
  },
];

const sellerSteps = [
  { icon: <Globe size={28} />, title: 'Register Your Store', desc: 'Sign up in minutes with basic documents. Our team helps you get started.' },
  { icon: <Smartphone size={28} />, title: 'List Your Products', desc: 'Upload your inventory with photos, descriptions, and pricing.' },
  { icon: <Zap size={28} />, title: 'Receive Orders', desc: 'Get instant notifications for new orders and manage from your dashboard.' },
  { icon: <CreditCard size={28} />, title: 'Instant Settlements', desc: 'Receive payments directly to your bank — no delays, no holdbacks.' },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="hiw-page">
      {/* Hero */}
      <section className="hiw-hero">
        <div className="container hiw-hero__inner">
          <div className="section-label"><Zap size={16} /> Simple & Transparent</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
            How <span className="text-primary">MyCheckStore</span> Works
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Whether you're a buyer looking for quality products or a seller wanting to grow your business — here's how it all comes together.
          </p>
        </div>
      </section>

      {/* Buyer Journey */}
      <section className="hiw-buyer">
        <div className="container">
          <h2 className="hiw-section-title">
            <span className="hiw-section-badge">🛍️</span> For Buyers
          </h2>
          <div className="hiw-timeline">
            {steps.map((step, i) => (
              <div key={i} className={`hiw-step ${i % 2 === 0 ? 'hiw-step--left' : 'hiw-step--right'}`}>
                <div className="hiw-step__line">
                  <div className="hiw-step__dot">{step.num}</div>
                </div>
                <div className="hiw-step__card card">
                  <div className="hiw-step__icon">{step.icon}</div>
                  <h3 className="hiw-step__title">{step.title}</h3>
                  <p className="hiw-step__desc">{step.desc}</p>
                  <ul className="hiw-step__details">
                    {step.details.map((d, j) => (
                      <li key={j}><CheckCircle size={14} /> {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Journey */}
      <section className="hiw-seller">
        <div className="container">
          <h2 className="hiw-section-title">
            <span className="hiw-section-badge">🏪</span> For Sellers
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            Start selling in minutes. No technical skills required.
          </p>
          <div className="hiw-seller__grid">
            {sellerSteps.map((step, i) => (
              <div key={i} className="hiw-seller__card card">
                <div className="hiw-seller__num">0{i + 1}</div>
                <div className="hiw-seller__icon">{step.icon}</div>
                <h3 className="hiw-seller__title">{step.title}</h3>
                <p className="hiw-seller__desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/join-us" className="btn btn-primary btn-lg">
              Start Selling Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
