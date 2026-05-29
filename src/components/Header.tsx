import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShieldCheck } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'How it works', path: '/how-it-works' },
  { label: 'Join Us', path: '/join-us' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Live Demo', path: '/live-demo' },
  { label: 'Shop Marketplace', path: '/shop' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <ShieldCheck size={28} className="header__logo-icon" />
          <span className="header__logo-text">
            MyCheck<span className="header__logo-accent">Store</span>
          </span>
        </Link>

        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="header__nav-actions-mobile">
            <Link to="/shop" className="btn btn-primary btn-sm">Shop Now</Link>
          </div>
        </nav>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="header__icon-btn" aria-label="Account">
            <User size={20} />
          </button>
        </div>

        <button
          className="header__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && <div className="header__backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Header;
