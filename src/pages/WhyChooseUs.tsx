import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Award, Truck, Clock, RefreshCw, Headphones,
  CheckCircle, Users, Star, ArrowRight,
  Zap, Lock, Eye
} from 'lucide-react';
import './WhyChooseUs.css';

const pillars = [
  {
    icon: <ShieldCheck size={32} />,
    title: '100% Verified Sellers',
    desc: 'Every seller on our platform goes through a rigorous background verification process including Aadhaar verification, business license checks, and in-person store visits.',
    highlight: 'Zero Fraud',
  },
  {
    icon: <Award size={32} />,
    title: 'Quality Guaranteed',
    desc: 'Our quality team inspects products before every dispatch. We maintain a rejection rate of 3% — only the best reaches you.',
    highlight: '97% Pass Rate',
  },
  {
    icon: <Truck size={32} />,
    title: 'Lightning Fast Delivery',
    desc: 'Same-day and next-day delivery available in most areas. Real-time tracking keeps you informed every step of the way.',
    highlight: 'Same Day',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Easy Returns & Refunds',
    desc: 'Not satisfied? Return within 7 days for a full refund — no questions asked. We handle the entire process for you.',
    highlight: '7-Day Returns',
  },
  {
    icon: <Lock size={32} />,
    title: 'Secure Payments',
    desc: 'Bank-grade encryption protects every transaction. Multiple payment options including UPI, cards, net banking, and COD.',
    highlight: '256-bit SSL',
  },
  {
    icon: <Headphones size={32} />,
    title: '24/7 Customer Support',
    desc: 'Our dedicated support team is available round the clock via chat, phone, and email to resolve any issue within hours.',
    highlight: 'Always Available',
  },
];

const comparisons = [
  { feature: 'Seller Verification', us: true, others: false },
  { feature: 'Quality Checks Before Dispatch', us: true, others: false },
  { feature: 'Same-Day Delivery', us: true, others: false },
  { feature: 'Instant Seller Payouts', us: true, others: false },
  { feature: 'Zero Listing Fees', us: true, others: false },
  { feature: '7-Day Free Returns', us: true, others: true },
  { feature: '24/7 Support', us: true, others: false },
  { feature: 'Local Store Network', us: true, others: false },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-page">
      {/* Hero */}
      <section className="why-hero">
        <div className="container why-hero__inner">
          <div className="section-label"><Award size={16} /> Our Promise</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
            Why Choose <span className="text-primary">MyCheckStore?</span>
          </h1>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            We don't just sell products — we build trust. Every feature is designed to give you the best, most reliable shopping experience.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="why-pillars">
        <div className="container">
          <div className="why-pillars__grid">
            {pillars.map((p, i) => (
              <div key={i} className="why-pillars__card card">
                <div className="why-pillars__badge">{p.highlight}</div>
                <div className="why-pillars__icon">{p.icon}</div>
                <h3 className="why-pillars__title">{p.title}</h3>
                <p className="why-pillars__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="why-compare">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label"><Eye size={16} /> Transparent Comparison</div>
            <h2 className="section-title">Us vs <span className="text-primary">Others</span></h2>
          </div>
          <div className="why-compare__table-wrap">
            <table className="why-compare__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="why-compare__us">MyCheckStore</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td className="why-compare__us">
                      <CheckCircle size={18} color="var(--green)" />
                    </td>
                    <td>
                      {row.others ?
                        <CheckCircle size={18} color="var(--gray-300)" /> :
                        <span className="why-compare__x">✕</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="why-numbers">
        <div className="container">
          <div className="why-numbers__grid">
            {[
              { val: '50,000+', label: 'Happy Customers', icon: <Users size={28} /> },
              { val: '4.9/5', label: 'Customer Rating', icon: <Star size={28} /> },
              { val: '<2hrs', label: 'Avg. Delivery Time', icon: <Clock size={28} /> },
              { val: '99.8%', label: 'Order Accuracy', icon: <Zap size={28} /> },
            ].map((n, i) => (
              <div key={i} className="why-numbers__item">
                <div className="why-numbers__icon">{n.icon}</div>
                <div className="why-numbers__val">{n.val}</div>
                <div className="why-numbers__label">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="why-cta">
        <div className="container why-cta__inner">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>
            Experience the Difference Today
          </h2>
          <p style={{ color: 'var(--gray-500)', maxWidth: '500px', margin: '0 auto 32px' }}>
            Join thousands of satisfied customers and sellers on India's most trusted neighborhood marketplace.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-primary btn-lg">Start Shopping <ArrowRight size={18} /></Link>
            <Link to="/join-us" className="btn btn-outline btn-lg">Become a Seller</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
