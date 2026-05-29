import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, ShieldCheck, Star, Users, Package,
  CheckCircle, TrendingUp, Award, Clock, Heart,
  Zap, BadgeCheck, UserPlus, Store, Share2, 
  SearchCheck, IndianRupee
} from 'lucide-react';
import './Home.css';

/* ===== Intersection Observer Hook ===== */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

/* ===== Stats Counter ===== */
const stats = [
  { value: '50K+', label: 'Happy Customers', icon: <Users size={22} /> },
  { value: '10K+', label: 'Products Listed', icon: <Package size={22} /> },
  { value: '500+', label: 'Verified Sellers', icon: <BadgeCheck size={22} /> },
  { value: '99.8%', label: 'Satisfaction Rate', icon: <Star size={22} /> },
];

/* ===== Steps ===== */
const steps = [
  { 
    num: '01', 
    title: 'Join Us', 
    desc: 'Sign up as a verified neighborhood partner. Submit your simplified KYC and local details for quick onboarding.',
    icon: <UserPlus size={28} />
  },
  { 
    num: '02', 
    title: 'Setup Store', 
    desc: 'Configure the digital inventory you wish to offer. Browse verified regional goods with no upfront inventory costs.',
    icon: <Store size={28} />
  },
  { 
    num: '03', 
    title: 'Share Locally', 
    desc: 'Spread the word to your neighbors. Use built-in sharing tools to broadcast your store link to your community.',
    icon: <Share2 size={28} />
  },
  { 
    num: '04', 
    title: 'Verify Orders', 
    desc: 'Ensure every delivery meets quality standards. Handle final local delivery of physically verified goods.',
    icon: <SearchCheck size={28} />
  },
  { 
    num: '05', 
    title: 'Earn Rewards', 
    desc: 'Get instant settlements for every transaction. Your commission and margins are settled to your bank account.',
    icon: <IndianRupee size={28} />
  },
];

/* ===== Featured Categories ===== */
const categories = [
  { name: 'Electronics', count: '2.4K Products', emoji: '📱', color: '#3B82F6' },
  { name: 'Home & Kitchen', count: '1.8K Products', emoji: '🏠', color: '#10B981' },
  { name: 'Fashion', count: '3.2K Products', emoji: '👗', color: '#EC4899' },
  { name: 'Groceries', count: '5.1K Products', emoji: '🛒', color: '#F59E0B' },
  { name: 'Health & Beauty', count: '1.2K Products', emoji: '💊', color: '#8B5CF6' },
  { name: 'Sports & Fitness', count: '980 Products', emoji: '⚽', color: '#EF4444' },
];

/* ===== Testimonials ===== */
const testimonials = [
  { name: 'Rahul Sharma', role: 'Business Owner', text: 'MyCheckStore transformed how I source products for my shop. The verified sellers give me complete confidence in quality.', rating: 5 },
  { name: 'Priya Patel', role: 'Regular Buyer', text: 'I love the convenience! Fresh groceries and electronics from my neighborhood, delivered with care. The best shopping experience.', rating: 5 },
  { name: 'Amit Kumar', role: 'Seller Partner', text: 'Joining as a seller was seamless. The instant payout feature and dashboard analytics helped me grow 3x in just 6 months.', rating: 5 },
];

const Home: React.FC = () => {
  const heroRef = useInView();
  const statsRef = useInView();
  const stepsRef = useInView();
  const catRef = useInView();
  const whyRef = useInView();
  const testRef = useInView();

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="section-label">
              <ShieldCheck size={16} /> Verified & Quality Checked
            </div>
            <h1 className="hero__title">
              Your Personal<br />
              <span className="hero__title-accent">Neighborhood Store.</span>
            </h1>
            <p className="hero__desc">
              Bringing the best local products directly to your doorstep through verified partners.
              No stock holding, zero inventory carrying risk—just absolute quality you can trust.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-outline btn-lg">
                <Play size={18} /> Watch Journey
              </Link>
            </div>
            <div className="hero__trust">
              <div className="hero__trust-avatars">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="hero__trust-avatar" style={{ background: `hsl(${i * 60}, 60%, 70%)` }}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="hero__trust-stars">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#F5B731" color="#F5B731" />)}
                </div>
                <p className="hero__trust-text">Trusted by 50,000+ customers</p>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__phone">
              <div className="hero__phone-notch" />
              <div className="hero__phone-screen">
                {/* Header with gradient */}
                <div className="hero__phone-header">
                  <div className="hero__phone-time">9:41</div>
                  <span className="hero__phone-brand">চেক করেছো?</span>
                  <div className="hero__phone-icons">
                    <div className="hero__phone-signal"></div>
                    <div className="hero__phone-battery"></div>
                  </div>
                </div>
                
                {/* Banner with animation */}
                <div className="hero__phone-banner">
                  <div className="hero__phone-banner-icon">⚡</div>
                  <span>DIGITAL INVENTORY</span>
                  <div className="hero__phone-banner-badge">LIVE</div>
                </div>

                {/* Trending Section */}
                <div className="hero__phone-section">
                  <div className="hero__phone-section-head">
                    <strong>Trending Verified</strong>
                    <span className="hero__phone-see-all">See all →</span>
                  </div>
                  <div className="hero__phone-grid">
                    {[
                      { name: 'Smartphone', icon: '📱', price: '₹6,800', discount: '32% OFF' },
                      { name: 'Mixer Grinder', icon: '🔌', price: '₹1,850', discount: '42% OFF' },
                      { name: 'Solar Lantern', icon: '☀️', price: '₹1,100', discount: '39% OFF' },
                      { name: 'Power Bank', icon: '🔋', price: '₹899', discount: '40% OFF' }
                    ].map((item, i) => (
                      <div key={i} className="hero__phone-card">
                        <div className="hero__phone-card-discount">{item.discount}</div>
                        <div className="hero__phone-card-icon">{item.icon}</div>
                        <div className="hero__phone-card-name">{item.name}</div>
                        <div className="hero__phone-card-price">{item.price}</div>
                        <div className="hero__phone-card-badge">
                          <span className="hero__phone-card-check">✓</span>
                          VERIFIED
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Settlement Card with animation */}
                <div className="hero__phone-settlement">
                  <div className="hero__phone-settlement-icon">
                    <span>₹</span>
                  </div>
                  <div className="hero__phone-settlement-content">
                    <div className="hero__phone-settlement-label">SETTLEMENTS</div>
                    <div className="hero__phone-settlement-value">Instant Payout</div>
                    <div className="hero__phone-settlement-status">
                      <span className="hero__phone-settlement-dot"></span>
                      Active
                    </div>
                  </div>
                  <div className="hero__phone-settlement-arrow">→</div>
                </div>

                {/* Quick Stats */}
                <div className="hero__phone-stats">
                  <div className="hero__phone-stat">
                    <div className="hero__phone-stat-value">4.2K+</div>
                    <div className="hero__phone-stat-label">Partners</div>
                  </div>
                  <div className="hero__phone-stat-divider"></div>
                  <div className="hero__phone-stat">
                    <div className="hero__phone-stat-value">99.9%</div>
                    <div className="hero__phone-stat-label">Verified</div>
                  </div>
                  <div className="hero__phone-stat-divider"></div>
                  <div className="hero__phone-stat">
                    <div className="hero__phone-stat-value">24/7</div>
                    <div className="hero__phone-stat-label">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats" ref={statsRef}>
        <div className="container stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="stats__item" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="stats__icon">{stat.icon}</div>
              <div className="stats__value">{stat.value}</div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-preview" ref={stepsRef}>
        <div className="container">
          <div className="how-preview__head">
            <div className="section-label"><Zap size={16} /> Simple Process</div>
            <h2 className="section-title">How It <span className="text-primary">Works</span></h2>
            <p className="section-subtitle">Our proven system is designed to help community members build and grow their digital storefronts through a simple 5-step process.</p>
          </div>
          <div className="how-preview__grid">
            {steps.map((step, i) => (
              <div key={i} className="how-preview__card" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="how-preview__card-num">{step.num}</div>
                <div className="how-preview__card-icon">{step.icon}</div>
                <h3 className="how-preview__card-title">{step.title}</h3>
                <p className="how-preview__card-desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="how-preview__connector" />}
              </div>
            ))}
          </div>
          <div className="how-preview__cta">
            <Link to="/how-it-works" className="btn btn-primary">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="categories" ref={catRef}>
        <div className="container">
          <div className="categories__head">
            <div className="section-label"><Package size={16} /> Browse Categories</div>
            <h2 className="section-title">Shop by <span className="text-primary">Category</span></h2>
          </div>
          <div className="categories__grid">
            {categories.map((cat, i) => (
              <Link to="/shop" key={i} className="categories__card" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="categories__card-emoji">{cat.emoji}</div>
                <h3 className="categories__card-name">{cat.name}</h3>
                <span className="categories__card-count">{cat.count}</span>
                <div className="categories__card-bar" style={{ background: cat.color }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-home" ref={whyRef}>
        <div className="container why-home__inner">
          <div className="why-home__left">
            <div className="section-label"><Award size={16} /> Why Choose Us</div>
            <h2 className="section-title">Built on Trust,<br />Driven by <span className="text-primary">Quality.</span></h2>
            <p className="section-subtitle">Every product goes through our rigorous quality checking process before it reaches you.</p>
            <div className="why-home__features">
              {[
                { icon: <CheckCircle size={20} />, title: '100% Verified Sellers', desc: 'Every seller is background-checked and verified.' },
                { icon: <TrendingUp size={20} />, title: 'Instant Settlements', desc: 'Sellers receive instant payouts — no delays.' },
                { icon: <Heart size={20} />, title: 'Customer First', desc: 'Easy returns, 24/7 support, and satisfaction guarantee.' },
                { icon: <Clock size={20} />, title: 'Same Day Delivery', desc: 'Order by 2 PM for same-day delivery in your area.' },
              ].map((feat, i) => (
                <div key={i} className="why-home__feat">
                  <div className="why-home__feat-icon">{feat.icon}</div>
                  <div>
                    <h4 className="why-home__feat-title">{feat.title}</h4>
                    <p className="why-home__feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/why-choose-us" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
          <div className="why-home__right">
            <div className="why-home__card-stack">
              <div className="why-home__stat-card why-home__stat-card--1 animate-float">
                <Award size={32} color="var(--primary)" />
                <div className="why-home__stat-num">100%</div>
                <div className="why-home__stat-label">Quality Verified</div>
              </div>
              <div className="why-home__stat-card why-home__stat-card--2 animate-float" style={{ animationDelay: '1s' }}>
                <TrendingUp size={32} color="#10B981" />
                <div className="why-home__stat-num">3x</div>
                <div className="why-home__stat-label">Seller Growth</div>
              </div>
              <div className="why-home__stat-card why-home__stat-card--3 animate-float" style={{ animationDelay: '2s' }}>
                <Star size={32} color="#F59E0B" />
                <div className="why-home__stat-num">4.9★</div>
                <div className="why-home__stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" ref={testRef}>
        <div className="container">
          <div className="testimonials__head">
            <div className="section-label"><Star size={16} /> Testimonials</div>
            <h2 className="section-title">What People <span className="text-primary">Say</span></h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonials__card" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="testimonials__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#F5B731" color="#F5B731" />
                  ))}
                </div>
                <p className="testimonials__text">"{t.text}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar" style={{ background: `hsl(${i * 90 + 30}, 55%, 65%)` }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="testimonials__name">{t.name}</div>
                    <div className="testimonials__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
