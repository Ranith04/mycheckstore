import React, { useState } from 'react';
import { 
  CheckCircle, Users, Award, ShieldCheck, 
  TrendingUp, UserPlus, Store, Share2, SearchCheck, 
  IndianRupee, Search, CheckCircle2
} from 'lucide-react';
import './HowItWorks.css';
import ScrollReveal from '../components/ScrollReveal';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const stepsDetails = {
    1: {
      title: "Join Us",
      desc: "Submit your simplified KYC and local details. Our regional coordinators will carry out a quick digital audit and onboarding consultation in less than 24 hours.",
      tip: "Tip: Having basic document copies ready speeds up the verified status approval."
    },
    2: {
      title: "Setup Store",
      desc: "Browse our digital inventory and select the verified regional goods you want to feature in your virtual storefront. No upfront inventory costs.",
      tip: "Tip: Focus on essentials that are in high demand in your specific neighborhood."
    },
    3: {
      title: "Share Locally",
      desc: "Use our built-in sharing tools to broadcast your store link to your community via WhatsApp, local groups, and word-of-mouth.",
      tip: "Tip: Personal recommendations build the strongest customer trust."
    },
    4: {
      title: "Verify Orders",
      desc: "Once an order is placed, receive the physically verified goods from our fulfillment center and handle the final local delivery.",
      tip: "Tip: Fast, friendly delivery is key to repeat neighborhood customers."
    },
    5: {
      title: "Earn Rewards",
      desc: "Upon successful delivery, your commission and margins are instantly settled to your linked bank account.",
      tip: "Tip: Track your daily earnings and growth analytics in your partner dashboard."
    }
  };

  return (
    <div className="hiw-page">
      {/* 1. Customer Journey */}
      <section className="section bg-white hiw-customer">
        <div className="container">
          <div className="hiw-customer__grid">
            {/* Left: Video/Visual */}
            <div className="hiw-customer__visual">
              <ScrollReveal variant="slide-right">
                <div className="hiw-video-placeholder">
                  <div className="hiw-video-overlay">
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
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl font-extrabold mb-4">Making a Real Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              We're not just a platform; we're a movement empowering local commerce through absolute transparency, real-time analytics, and verified trust.
            </p>
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

      {/* 3. Five Steps to Growth */}
      <section className="section bg-white hiw-steps-section">
        <div className="container">
          <div className="text-center mb-16">
            <ScrollReveal variant="fade-up">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Five Steps to Growth</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven system designed to take you from community member to successful digital entrepreneur.
              </p>
            </ScrollReveal>
          </div>

          {/* Stepper Header */}
          <div className="hiw-stepper-container">
            <div className="hiw-stepper-line"></div>
            <div className="hiw-stepper-nodes">
              {[1, 2, 3, 4, 5].map((step) => (
                <button 
                  key={step}
                  className={`hiw-stepper-node ${activeStep === step ? 'active' : ''}`}
                  onClick={() => setActiveStep(step)}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Stepper Cards */}
          <div className="hiw-step-cards">
            {[
              { num: 1, icon: <UserPlus size={24} />, title: 'Join Us', desc: 'Sign up as a verified neighborhood partner.' },
              { num: 2, icon: <Store size={24} />, title: 'Setup Store', desc: 'Configure the digital inventory you wish to offer.' },
              { num: 3, icon: <Share2 size={24} />, title: 'Share Locally', desc: 'Spread the word to your neighbors.' },
              { num: 4, icon: <SearchCheck size={24} />, title: 'Verify Orders', desc: 'Ensure every delivery meets quality standards.' },
              { num: 5, icon: <IndianRupee size={24} />, title: 'Earn Rewards', desc: 'Get instant settlements for every transaction.' },
            ].map((card) => (
              <div 
                key={card.num} 
                className={`hiw-step-card card ${activeStep === card.num ? 'active' : ''}`}
                onClick={() => setActiveStep(card.num)}
                style={{ cursor: 'pointer' }}
              >
                <div className="hiw-step-card__icon">{card.icon}</div>
                <h4 className="font-bold mb-2 text-center">{card.title}</h4>
                <p className="text-xs text-gray-500 text-center">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Step Detail Panel */}
          <div className="hiw-step-detail card">
            <div className="hiw-step-detail__header">
              <span className="text-sm font-bold" style={{ color: '#F59E0B' }}>STEP {activeStep} IN DETAIL</span>
              <span className="text-xs text-gray-400 uppercase flex items-center gap-1">
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                Active Guide
              </span>
            </div>
            <div className="hiw-step-detail__body">
              <div className="hiw-step-detail__icon-large">
                {activeStep === 1 && <UserPlus size={32} />}
                {activeStep === 2 && <Store size={32} />}
                {activeStep === 3 && <Share2 size={32} />}
                {activeStep === 4 && <SearchCheck size={32} />}
                {activeStep === 5 && <IndianRupee size={32} />}
              </div>
              <div className="hiw-step-detail__content">
                <h3 className="text-2xl font-bold mb-4">{stepsDetails[activeStep as keyof typeof stepsDetails].title}</h3>
                <p className="text-gray-700 mb-6 line-height-relaxed">
                  {stepsDetails[activeStep as keyof typeof stepsDetails].desc}
                </p>
                <div className="hiw-step-detail__tip">
                  <div className="flex items-start gap-2">
                    <span style={{ color: '#F59E0B', fontWeight: 'bold' }}>?</span>
                    <span className="text-sm" style={{ color: '#B45309' }}>
                      {stepsDetails[activeStep as keyof typeof stepsDetails].tip}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
