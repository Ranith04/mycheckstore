import React from 'react';
import './PhoneMockup.css';
import { Package, CheckCircle2 } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup__frame">
        <div className="phone-mockup__notch"></div>
        <div className="phone-mockup__screen">
          {/* Header */}
          <div className="phone-mockup__header">
            <div className="phone-mockup__title">চেক করেছো?</div>
            <div className="phone-mockup__subtitle">Verified Neighborhood Store</div>
          </div>
          
          {/* Content */}
          <div className="phone-mockup__content">
            {/* Alert */}
            <div className="phone-mockup__alert reveal-slide-left">
              <CheckCircle2 size={16} className="text-success" />
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>Settlement Complete</div>
                <div style={{ fontSize: '9px', color: 'var(--gray-500)' }}>₹1,450 credited instantly</div>
              </div>
            </div>

            {/* Products */}
            <div className="phone-mockup__products">
              <div className="phone-mockup__product reveal-fade-up" style={{ transitionDelay: '200ms' }}>
                <div className="phone-mockup__product-img">🎧</div>
                <div className="phone-mockup__product-info">
                  <div className="phone-mockup__product-name">Wireless Earbuds</div>
                  <div className="phone-mockup__product-price">₹1,299</div>
                </div>
                <div className="phone-mockup__badge">Verified</div>
              </div>

              <div className="phone-mockup__product reveal-fade-up" style={{ transitionDelay: '400ms' }}>
                <div className="phone-mockup__product-img">⌚</div>
                <div className="phone-mockup__product-info">
                  <div className="phone-mockup__product-name">Smart Watch Pro</div>
                  <div className="phone-mockup__product-price">₹2,499</div>
                </div>
                <div className="phone-mockup__badge">Verified</div>
              </div>
              
              <div className="phone-mockup__product reveal-fade-up" style={{ transitionDelay: '600ms' }}>
                <div className="phone-mockup__product-img">🎒</div>
                <div className="phone-mockup__product-info">
                  <div className="phone-mockup__product-name">Travel Backpack</div>
                  <div className="phone-mockup__product-price">₹899</div>
                </div>
                <div className="phone-mockup__badge">Verified</div>
              </div>
            </div>
            
            {/* Bottom Nav */}
            <div className="phone-mockup__nav">
              <div className="phone-mockup__nav-item active">
                <Package size={20} />
              </div>
              <div className="phone-mockup__nav-item">
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--gray-300)' }}></div>
              </div>
              <div className="phone-mockup__nav-item">
                <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--gray-300)', marginTop: '4px' }}></div>
                <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--gray-300)', marginTop: '4px' }}></div>
                <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--gray-300)', marginTop: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="phone-mockup__blob-1"></div>
      <div className="phone-mockup__blob-2"></div>
    </div>
  );
};

export default PhoneMockup;
