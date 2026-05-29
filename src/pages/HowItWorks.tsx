import React, { useState } from 'react';
import { 
  CheckCircle, Users, Award, ShieldCheck, 
  TrendingUp, Package, Truck, 
  DollarSign, Globe, Smartphone, Zap, ArrowRight, PlayCircle, Search, CheckCircle2
} from 'lucide-react';
import './HowItWorks.css';
import ScrollReveal from '../components/ScrollReveal';

const HowItWorks: React.FC = () => {
  const [activeCustomerStep, setActiveCustomerStep] = useState(1);

  const customerSteps = [
    { 
      num: '01', 
      title: 'Browse Products', 
      desc: 'Explore thousands of verified, quality-checked products from local sellers near you.',
      icon: <Globe size={32} />,
      color: '#3B82F6'
    },
    { 
      num: '02', 
      title: 'Place Your Order', 
      desc: 'Add to cart and checkout securely. Multiple payment options available.',
      icon: <Smartphone size={32} />,
      color: '#10B981'
    },
    { 
      num: '03', 
      title: 'Fast Delivery', 
      desc: 'Get your products delivered right to your doorstep with real-time tracking.',
      icon: <Truck size={32} />,
      color: '#F59E0B'
    },
    { 
      num: '04', 
      title: 'Earn & Save', 
      desc: 'Earn rewards on every purchase. Refer friends for additional cashback.',
      icon: <DollarSign size={32} />,
      color: '#EC4899'
    }
  ];

  return (
    <div className="hiw-page">
      {/* Hero Section */}
      <section className="hiw-hero">
        <div className="hiw-hero__bg">
          <div className="hiw-hero__shape hiw-hero__shape--1" />
          <div className="hiw-hero__shape hiw-hero__shape--2" />
          <div className="hiw-hero__shape hiw-hero__shape--3" />
        </div>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div className="hiw-hero__content">
              <div className="section-label">
                <Zap size={16} /> Simple & Seamless
              </div>
              <h1 className="hiw-hero__title">
                How It <span className="text-primary">Works</span>
              </h1>
              <p className="hiw-hero__subtitle">
                From browsing to delivery, experience a seamless shopping journey in just 4 simple steps.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Customer Journey - 4 Steps */}
      <section className="section bg-white hiw-customer-journey">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="section-label" style={{ display: 'inline-flex' }}>
                <Package size={16} /> For Customers
              </div>
              <h2 className="section-title">Your Shopping Journey</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Experience hassle-free shopping with verified quality at every step
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Step Cards */}
          <div className="hiw-journey-grid">
            {customerSteps.map((step, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <div 
                  className={`hiw-journey-card ${activeCustomerStep === index + 1 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCustomerStep(index + 1)}
                  style={{ '--card-color': step.color } as React.CSSProperties}
                >
                  <div className="hiw-journey-card__number">{step.num}</div>
                  <div className="hiw-journey-card__icon">{step.icon}</div>
                  <h3 className="hiw-journey-card__title">{step.title}</h3>
                  <p className="hiw-journey-card__desc">{step.desc}</p>
                  <div className="hiw-journey-card__arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up">
            <div className="text-center mt-12">
              <button className="btn btn-primary btn-lg">
                Start Shopping <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 1. Customer Journey - Quality Focus */}
      <section className="section bg-gray-50 hiw-customer">
        <div className="container">
          <div className="hiw-customer__grid">
            {/* Left: Video/Visual */}
            <div className="hiw-customer__visual">
              <ScrollReveal variant="slide-right">
                <div className="hiw-video-placeholder">
                  <div className="hiw-video-overlay">
                    <div className="hiw-video-play">
                      <PlayCircle size={64} />
                    </div>
                    <div className="badge badge-primary mb-4" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '8px 16px', fontSize: '0.85rem' }}>
                      <CheckCircle2 size={16} />
                      Physical Audit Verified
                    </div>
                    <p className="text-white text-center font-medium px-4">
                      Every package receives direct hands-on verification before dispatch.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Content */}
            <div className="hiw-customer__content">
              <ScrollReveal variant="slide-left">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  The Customer Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Quality Delivered, <span className="text-primary">Prices Verified.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10 line-height-relaxed">
                  Experience the future of trusted local commerce. We hand-select regional essential goods and service configurations, which undergo strict technical checks.
                </p>

                <div className="hiw-features">
                  <div className="hiw-feature">
                    <div className="hiw-feature__icon">
                      <CheckCircle size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hand-delivered by trusted local partners</h4>
                      <p className="text-sm text-gray-600">Nearby micro-entrepreneurs manage localized handling for speedy, personal deliveries.</p>
                    </div>
                  </div>

                  <div className="hiw-feature">
                    <div className="hiw-feature__icon">
                      <CheckCircle size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Physical verification on every single unit</h4>
                      <p className="text-sm text-gray-600">Every sickle, stove, battery, tool is manually inspected for physical or digital defects.</p>
                    </div>
                  </div>

                  <div className="hiw-feature">
                    <div className="hiw-feature__icon">
                      <CheckCircle size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Honest pricing without hidden middle-man fees</h4>
                      <p className="text-sm text-gray-600">Direct margins shared straight with local partners. Raw, uninflated transparent billing.</p>
                    </div>
                  </div>
                </div>

                <button className="btn btn-outline mt-10">
                  <Search size={18} />
                  Explore Physical Security Checklist Audit
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Making a Real Difference */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="section-label" style={{ display: 'inline-flex' }}>
                <Award size={16} /> Our Impact
              </div>
              <h2 className="section-title">Making a Real Difference</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                We're not just a platform; we're a movement empowering local commerce through absolute transparency, real-time analytics, and verified trust.
              </p>
            </div>
          </ScrollReveal>

          <div className="hiw-difference-grid">
            {[
              {
                icon: <Users size={24} />,
                badge: 'COMMUNITY LED',
                title: 'Verify partners and Guide them',
                desc: 'Rigorous onboarding guides ensure every neighborhood store operates with utmost authenticity.',
                stat: '4,200+ Guides Active'
              },
              {
                icon: <Award size={24} />,
                badge: 'QUALITY FOCUS',
                title: '100% Unadulterated Goods Supply',
                desc: 'Every batch undergoes rigorous physical check and verification before being flagged on our platform.',
                stat: '99.9% Audit Standard'
              },
              {
                icon: <ShieldCheck size={24} />,
                badge: 'SMART BUSINESS',
                title: '0 Inventory Carrying Risk',
                desc: 'Partners execute digital inventory matching with regional suppliers, fully eliminating cash flow stress.',
                stat: 'Zero Stock Cost'
              },
              {
                icon: <TrendingUp size={24} />,
                badge: 'PARTNER SUPPORT',
                title: 'Consistent Growth Mentorship',
                desc: 'Hands-on regional training and continuous mentorship programs build digital micro-entrepreneurs.',
                stat: '24/7 Expert Academy'
              }
            ].map((card, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                <div className="hiw-diff-card card">
                  <div className="hiw-diff-card__header">
                    <div className="hiw-diff-card__icon">{card.icon}</div>
                    <div className="hiw-diff-card__badge">{card.badge}</div>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-1">{card.desc}</p>
                  <div className="hiw-diff-card__stat">
                    {card.stat}
                    <span style={{ color: 'var(--primary)' }}>✨</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default HowItWorks;
