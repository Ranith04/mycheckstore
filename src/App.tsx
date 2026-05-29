import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import JoinUs from './pages/JoinUs';
import WhyChooseUs from './pages/WhyChooseUs';
import LiveDemo from './pages/LiveDemo';
import Shop from './pages/Shop';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/live-demo" element={<LiveDemo />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
