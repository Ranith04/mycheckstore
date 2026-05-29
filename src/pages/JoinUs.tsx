import React, { useState } from 'react';
import {
  Store, UserPlus, Upload, ArrowRight, CheckCircle,
  TrendingUp, CreditCard, BarChart3, Headphones, Zap, Shield
} from 'lucide-react';
import './JoinUs.css';

const benefits = [
  { icon: <Zap size={24} />, title: 'Instant Payouts', desc: 'Get paid instantly after every successful delivery — no waiting period.' },
  { icon: <BarChart3 size={24} />, title: 'Powerful Dashboard', desc: 'Track orders, revenue, analytics, and customer insights in real-time.' },
  { icon: <TrendingUp size={24} />, title: '3x Growth Potential', desc: 'Our platform connects you to thousands of customers in your area.' },
  { icon: <Shield size={24} />, title: 'Seller Protection', desc: 'Full protection against fraud, fake orders, and return abuse.' },
  { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Dedicated seller support team available round the clock.' },
  { icon: <Store size={24} />, title: 'Your Digital Storefront', desc: 'Get a branded storefront page with reviews and ratings.' },
];

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', business: '', city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  return (
    <div className="join-page">
      {/* Hero */}
      <section className="join-hero">
        <div className="join-hero__bg" />
        <div className="container join-hero__inner">
          <div className="join-hero__content">
            <div className="section-label"><Store size={16} /> Become a Partner</div>
            <h1 className="section-title" style={{ color: 'var(--white)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
              Grow Your Business with <span style={{ color: 'var(--primary-light)' }}>MyCheckStore</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '520px' }}>
              Join 500+ verified sellers who are already growing 3x with our platform. Zero listing fees, instant settlements, and dedicated support.
            </p>
            <div className="join-hero__stats">
              <div className="join-hero__stat">
                <div className="join-hero__stat-val">500+</div>
                <div className="join-hero__stat-label">Active Sellers</div>
              </div>
              <div className="join-hero__stat">
                <div className="join-hero__stat-val">₹0</div>
                <div className="join-hero__stat-label">Listing Fee</div>
              </div>
              <div className="join-hero__stat">
                <div className="join-hero__stat-val">24hr</div>
                <div className="join-hero__stat-label">Approval Time</div>
              </div>
            </div>
          </div>

          <div className="join-hero__form-wrap">
            <form className="join-form" onSubmit={handleSubmit}>
              <h3 className="join-form__title">Register as a Seller</h3>
              <p className="join-form__subtitle">Fill in your details and we'll get you started.</p>
              <div className="join-form__field">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="join-form__field">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="join-form__field">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="join-form__field">
                <label>Business Name</label>
                <input type="text" name="business" placeholder="Your store name" value={formData.business} onChange={handleChange} required />
              </div>
              <div className="join-form__field">
                <label>City</label>
                <input type="text" name="city" placeholder="Your city" value={formData.city} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Submit Application <ArrowRight size={18} />
              </button>
              <p className="join-form__note">
                <CheckCircle size={14} /> No credit card required. Free to join.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="join-benefits">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label"><TrendingUp size={16} /> Seller Benefits</div>
            <h2 className="section-title">Why Sellers <span className="text-primary">Love Us</span></h2>
          </div>
          <div className="join-benefits__grid">
            {benefits.map((b, i) => (
              <div key={i} className="join-benefits__card card">
                <div className="join-benefits__icon">{b.icon}</div>
                <h3 className="join-benefits__title">{b.title}</h3>
                <p className="join-benefits__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Steps */}
      <section className="join-steps">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Getting Started is <span className="text-primary">Easy</span></h2>
          </div>
          <div className="join-steps__grid">
            {[
              { icon: <UserPlus size={32} />, step: '01', title: 'Sign Up', desc: 'Fill in the application form with your business details.' },
              { icon: <Shield size={32} />, step: '02', title: 'Get Verified', desc: 'Our team reviews your application within 24 hours.' },
              { icon: <Upload size={32} />, step: '03', title: 'Upload Products', desc: 'List your products with photos, prices, and descriptions.' },
              { icon: <CreditCard size={32} />, step: '04', title: 'Start Earning', desc: 'Receive orders and get instant payouts to your bank.' },
            ].map((s, i) => (
              <div key={i} className="join-steps__card">
                <div className="join-steps__num">{s.step}</div>
                <div className="join-steps__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
