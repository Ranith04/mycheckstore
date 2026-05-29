import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Globe, MessageCircle, Camera, Play, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <h3 className="footer__cta-title">Ready to Transform Your Business?</h3>
            <p className="footer__cta-text">Join thousands of sellers and buyers on MyCheckStore today.</p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/join-us" className="btn btn-white btn-lg">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <ShieldCheck size={24} />
              <span>MyCheck<span className="text-primary">Store</span></span>
            </Link>
            <p className="footer__brand-desc">
              Your personal neighborhood store — bringing verified, quality-checked local products directly to your doorstep.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Twitter"><MessageCircle size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Instagram"><Camera size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="YouTube"><Play size={18} /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <Link to="/how-it-works" className="footer__link">How It Works</Link>
            <Link to="/why-choose-us" className="footer__link">Why Choose Us</Link>
            <Link to="/shop" className="footer__link">Shop Marketplace</Link>
            <Link to="/live-demo" className="footer__link">Live Demo</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">For Partners</h4>
            <Link to="/join-us" className="footer__link">Join as Seller</Link>
            <a href="#" className="footer__link">Partner Dashboard</a>
            <a href="#" className="footer__link">Seller Guidelines</a>
            <a href="#" className="footer__link">Affiliate Program</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <a href="mailto:support@mycheckstore.com" className="footer__link footer__link--icon">
              <Mail size={16} /> support@mycheckstore.com
            </a>
            <a href="tel:+919876543210" className="footer__link footer__link--icon">
              <Phone size={16} /> +91 98765 43210
            </a>
            <span className="footer__link footer__link--icon">
              <MapPin size={16} /> India
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} MyCheckStore. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
