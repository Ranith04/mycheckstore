import React, { useState } from 'react';
import {
  Search, SlidersHorizontal, Star, ShieldCheck, Heart,
  ShoppingCart, Grid3X3, List, MapPin
} from 'lucide-react';
import './Shop.css';

const allProducts = [
  { name: 'Wireless Earbuds Pro', price: 1299, original: 2999, rating: 4.8, reviews: 342, emoji: '🎧', category: 'Electronics', seller: 'TechZone', location: 'Mumbai', verified: true },
  { name: 'Organic Green Tea', price: 349, original: 599, rating: 4.9, reviews: 128, emoji: '🍵', category: 'Grocery', seller: 'Nature Fresh', location: 'Delhi', verified: true },
  { name: 'Yoga Mat Premium', price: 799, original: 1499, rating: 4.7, reviews: 89, emoji: '🧘', category: 'Fitness', seller: 'FitLife', location: 'Bangalore', verified: true },
  { name: 'Stainless Steel Bottle', price: 449, original: 899, rating: 4.6, reviews: 204, emoji: '🍶', category: 'Kitchen', seller: 'HomeCraft', location: 'Chennai', verified: true },
  { name: 'LED Desk Lamp', price: 899, original: 1799, rating: 4.8, reviews: 156, emoji: '💡', category: 'Electronics', seller: 'BrightLife', location: 'Pune', verified: true },
  { name: 'Hand Cream Set', price: 299, original: 599, rating: 4.5, reviews: 78, emoji: '🧴', category: 'Beauty', seller: 'GlowSkin', location: 'Hyderabad', verified: true },
  { name: 'Bluetooth Speaker', price: 1599, original: 3499, rating: 4.7, reviews: 267, emoji: '🔊', category: 'Electronics', seller: 'SoundBox', location: 'Mumbai', verified: true },
  { name: 'Running Shoes', price: 2499, original: 4999, rating: 4.8, reviews: 445, emoji: '👟', category: 'Fashion', seller: 'StepUp', location: 'Delhi', verified: true },
  { name: 'Face Wash Combo', price: 399, original: 799, rating: 4.4, reviews: 93, emoji: '🧼', category: 'Beauty', seller: 'CleanCo', location: 'Kolkata', verified: true },
  { name: 'Protein Powder', price: 1899, original: 3299, rating: 4.6, reviews: 178, emoji: '💪', category: 'Fitness', seller: 'MuscleFuel', location: 'Bangalore', verified: true },
  { name: 'Instant Noodles Pack', price: 199, original: 350, rating: 4.3, reviews: 521, emoji: '🍜', category: 'Grocery', seller: 'QuickBite', location: 'Chennai', verified: true },
  { name: 'Smart Watch', price: 3999, original: 7999, rating: 4.9, reviews: 612, emoji: '⌚', category: 'Electronics', seller: 'TechZone', location: 'Pune', verified: true },
];

const categories = ['All', 'Electronics', 'Grocery', 'Fitness', 'Kitchen', 'Beauty', 'Fashion'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest'];

const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [wishlist, setWishlist] = useState<number[]>([]);

  let filtered = allProducts.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sortBy === 'Price: Low to High') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'Price: High to Low') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'Rating') filtered.sort((a, b) => b.rating - a.rating);

  const toggleWishlist = (i: number) => {
    setWishlist(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <div className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="container">
          <h1 className="shop-hero__title">Shop <span className="text-primary">Marketplace</span></h1>
          <p className="shop-hero__desc">Discover verified products from trusted local sellers across India.</p>
          <div className="shop-search">
            <Search size={20} className="shop-search__icon" />
            <input
              type="text"
              placeholder="Search for products, categories, sellers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="shop-search__input"
            />
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="shop-controls">
        <div className="container shop-controls__inner">
          <div className="shop-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`shop-categories__btn ${selectedCategory === cat ? 'shop-categories__btn--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="shop-controls__right">
            <div className="shop-sort">
              <SlidersHorizontal size={16} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="shop-sort__select">
                {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div className="shop-view-toggle">
              <button className={`shop-view-btn ${viewMode === 'grid' ? 'shop-view-btn--active' : ''}`} onClick={() => setViewMode('grid')}><Grid3X3 size={18} /></button>
              <button className={`shop-view-btn ${viewMode === 'list' ? 'shop-view-btn--active' : ''}`} onClick={() => setViewMode('list')}><List size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="shop-products">
        <div className="container">
          <div className="shop-results-count">
            Showing <strong>{filtered.length}</strong> products
          </div>
          <div className={`shop-grid ${viewMode === 'list' ? 'shop-grid--list' : ''}`}>
            {filtered.map((product, i) => (
              <div key={i} className={`shop-product card ${viewMode === 'list' ? 'shop-product--list' : ''}`}>
                <div className="shop-product__image">
                  <div className="shop-product__emoji">{product.emoji}</div>
                  {product.verified && (
                    <div className="shop-product__verified">
                      <ShieldCheck size={12} /> Verified
                    </div>
                  )}
                  <button
                    className={`shop-product__wishlist ${wishlist.includes(i) ? 'shop-product__wishlist--active' : ''}`}
                    onClick={() => toggleWishlist(i)}
                  >
                    <Heart size={16} fill={wishlist.includes(i) ? '#EF4444' : 'none'} />
                  </button>
                  <div className="shop-product__discount">
                    -{Math.round((1 - product.price / product.original) * 100)}%
                  </div>
                </div>
                <div className="shop-product__info">
                  <div className="shop-product__category">{product.category}</div>
                  <h3 className="shop-product__name">{product.name}</h3>
                  <div className="shop-product__seller">
                    <MapPin size={12} /> {product.seller} · {product.location}
                  </div>
                  <div className="shop-product__rating">
                    <Star size={14} fill="#F5B731" color="#F5B731" />
                    <span>{product.rating}</span>
                    <span className="shop-product__reviews">({product.reviews} reviews)</span>
                  </div>
                  <div className="shop-product__price-row">
                    <span className="shop-product__price">₹{product.price.toLocaleString()}</span>
                    <span className="shop-product__original">₹{product.original.toLocaleString()}</span>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '12px' }}>
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="shop-empty">
              <p>No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
