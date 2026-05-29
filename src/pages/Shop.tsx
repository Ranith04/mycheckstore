import React, { useState } from 'react';
import {
  Search, SlidersHorizontal, Star, ShieldCheck, Heart,
  ShoppingCart, Grid3X3, List, MapPin, TrendingUp, Zap,
  Award, Filter, X, ChevronDown, Package, Truck, IndianRupee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Shop.css';

const allProducts = [
  { name: 'Premium Sickle', price: 350, original: 500, rating: 4.9, reviews: 89, emoji: '🔪', category: 'Agriculture', seller: 'FarmTools Pro', location: 'Punjab', verified: true, trending: true },
  { name: 'Smartphone 5G', price: 6800, original: 9999, rating: 4.8, reviews: 342, emoji: '📱', category: 'Electronics', seller: 'TechZone', location: 'Mumbai', verified: true, trending: true },
  { name: 'Mixer Grinder', price: 1850, original: 3200, rating: 4.7, reviews: 156, emoji: '🔌', category: 'Appliances', seller: 'HomeCraft', location: 'Chennai', verified: true, trending: true },
  { name: 'Solar Lantern', price: 1100, original: 1800, rating: 4.9, reviews: 203, emoji: '☀️', category: 'Energy', seller: 'BrightLife', location: 'Gujarat', verified: true, trending: true },
  { name: 'Power Bank 20000mAh', price: 899, original: 1499, rating: 4.6, reviews: 128, emoji: '🔋', category: 'Electronics', seller: 'PowerUp', location: 'Delhi', verified: true },
  { name: 'Water Purifier', price: 2499, original: 4200, rating: 4.8, reviews: 267, emoji: '💧', category: 'Home', seller: 'PureFlow', location: 'Bangalore', verified: true },
  { name: 'LED Bulb Pack (10)', price: 599, original: 999, rating: 4.5, reviews: 445, emoji: '💡', category: 'Energy', seller: 'BrightLife', location: 'Gujarat', verified: true },
  { name: 'Pressure Cooker', price: 1299, original: 2199, rating: 4.7, reviews: 234, emoji: '🍲', category: 'Kitchen', seller: 'HomeCraft', location: 'Chennai', verified: true },
  { name: 'Organic Rice 25kg', price: 1450, original: 1899, rating: 4.8, reviews: 567, emoji: '🌾', category: 'Grocery', seller: 'FarmFresh', location: 'Punjab', verified: true },
  { name: 'Hand Tools Set', price: 799, original: 1299, rating: 4.6, reviews: 178, emoji: '🔧', category: 'Tools', seller: 'ToolMaster', location: 'Maharashtra', verified: true },
  { name: 'Mosquito Net', price: 399, original: 699, rating: 4.4, reviews: 321, emoji: '🛏️', category: 'Home', seller: 'ComfortHome', location: 'Kerala', verified: true },
  { name: 'Battery Pack AA (12)', price: 249, original: 450, rating: 4.5, reviews: 289, emoji: '🔋', category: 'Electronics', seller: 'PowerUp', location: 'Delhi', verified: true },
];

const categories = ['All', 'Electronics', 'Agriculture', 'Appliances', 'Energy', 'Home', 'Kitchen', 'Grocery', 'Tools'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest', 'Most Popular'];

const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minRating, setMinRating] = useState(0);

  let filtered = allProducts.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchRating = p.rating >= minRating;
    return matchCat && matchSearch && matchPrice && matchRating;
  });

  if (sortBy === 'Price: Low to High') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'Price: High to Low') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'Rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'Most Popular') filtered.sort((a, b) => b.reviews - a.reviews);

  const toggleWishlist = (i: number) => {
    setWishlist(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 10000]);
    setMinRating(0);
    setSearchQuery('');
  };

  const trendingProducts = allProducts.filter(p => p.trending).slice(0, 4);

  return (
    <div className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero__bg">
          <div className="shop-hero__shape shop-hero__shape--1" />
          <div className="shop-hero__shape shop-hero__shape--2" />
        </div>
        <div className="container shop-hero__inner">
          <div className="shop-hero__content">
            <div className="section-label"><Package size={16} /> Verified Marketplace</div>
            <h1 className="shop-hero__title">
              Shop <span className="text-primary">Quality Products</span>
            </h1>
            <p className="shop-hero__desc">
              Discover verified products from trusted local sellers across India. Every item is physically checked and quality-assured.
            </p>
            <div className="shop-search">
              <Search size={20} className="shop-search__icon" />
              <input
                type="text"
                placeholder="Search for products, categories, or sellers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shop-search__input"
              />
              {searchQuery && (
                <button className="shop-search__clear" onClick={() => setSearchQuery('')}>
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="shop-hero__features">
              <div className="shop-hero__feature">
                <ShieldCheck size={18} />
                <span>100% Verified</span>
              </div>
              <div className="shop-hero__feature">
                <Truck size={18} />
                <span>Fast Delivery</span>
              </div>
              <div className="shop-hero__feature">
                <IndianRupee size={18} />
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Banner */}
      {trendingProducts.length > 0 && (
        <section className="shop-trending">
          <div className="container">
            <div className="shop-trending__header">
              <div className="shop-trending__title">
                <TrendingUp size={20} />
                <span>Trending Now</span>
              </div>
              <Link to="#" className="shop-trending__link">View All</Link>
            </div>
            <div className="shop-trending__grid">
              {trendingProducts.map((product, i) => (
                <div key={i} className="shop-trending__card">
                  <div className="shop-trending__emoji">{product.emoji}</div>
                  <div className="shop-trending__info">
                    <div className="shop-trending__name">{product.name}</div>
                    <div className="shop-trending__price">₹{product.price.toLocaleString()}</div>
                  </div>
                  <div className="shop-trending__badge">
                    <Zap size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                {cat !== 'All' && (
                  <span className="shop-categories__count">
                    {allProducts.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="shop-controls__right">
            <button className="shop-filter-btn" onClick={() => setShowFilters(!showFilters)}>
              <Filter size={16} />
              <span>Filters</span>
              {(minRating > 0 || priceRange[0] > 0 || priceRange[1] < 10000) && (
                <span className="shop-filter-badge">•</span>
              )}
            </button>
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

        {/* Filter Panel */}
        {showFilters && (
          <div className="shop-filters">
            <div className="container">
              <div className="shop-filters__panel">
                <div className="shop-filters__header">
                  <h3>Filters</h3>
                  <button onClick={clearFilters} className="shop-filters__clear">Clear All</button>
                </div>
                <div className="shop-filters__content">
                  <div className="shop-filter-group">
                    <label className="shop-filter-label">Price Range</label>
                    <div className="shop-filter-price">
                      <input 
                        type="number" 
                        value={priceRange[0]} 
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="shop-filter-input"
                        placeholder="Min"
                      />
                      <span>to</span>
                      <input 
                        type="number" 
                        value={priceRange[1]} 
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                        className="shop-filter-input"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  <div className="shop-filter-group">
                    <label className="shop-filter-label">Minimum Rating</label>
                    <div className="shop-filter-rating">
                      {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <button
                          key={rating}
                          className={`shop-filter-rating-btn ${minRating === rating ? 'active' : ''}`}
                          onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                        >
                          <Star size={14} fill={minRating === rating ? '#F5B731' : 'none'} color="#F5B731" />
                          <span>{rating}+</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Products */}
      <section className="shop-products">
        <div className="container">
          <div className="shop-results-header">
            <div className="shop-results-count">
              Showing <strong>{filtered.length}</strong> of <strong>{allProducts.length}</strong> products
            </div>
            {wishlist.length > 0 && (
              <Link to="#" className="shop-wishlist-link">
                <Heart size={16} fill="#EF4444" color="#EF4444" />
                <span>{wishlist.length} in wishlist</span>
              </Link>
            )}
          </div>
          <div className={`shop-grid ${viewMode === 'list' ? 'shop-grid--list' : ''}`}>
            {filtered.map((product, i) => {
              const discount = Math.round((1 - product.price / product.original) * 100);
              const commission = Math.round(product.price * 0.15);
              
              return (
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
                      -{discount}%
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
                      <div>
                        <span className="shop-product__price">₹{product.price.toLocaleString()}</span>
                        <span className="shop-product__original">₹{product.original.toLocaleString()}</span>
                      </div>
                      <div className="shop-product__commission">
                        <Award size={12} />
                        <span>₹{commission}</span>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm shop-product__btn">
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="shop-empty">
              <div className="shop-empty__icon">📦</div>
              <h3>No products found</h3>
              <p>Try adjusting your filters or search query</p>
              <button className="btn btn-primary" onClick={clearFilters}>Clear Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="shop-cta">
        <div className="container">
          <div className="shop-cta__card">
            <div className="shop-cta__icon">
              <Package size={48} />
            </div>
            <div className="shop-cta__content">
              <h2 className="shop-cta__title">Want to Sell on MyCheckStore?</h2>
              <p className="shop-cta__desc">
                Join thousands of verified sellers and reach customers across India with zero listing fees.
              </p>
            </div>
            <Link to="/join-us" className="btn btn-white btn-lg">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
