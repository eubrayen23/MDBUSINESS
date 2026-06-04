import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart'));
const About = React.lazy(() => import('./pages/About'));
const Admin = React.lazy(() => import('./pages/Admin'));

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center bg-cream-white">
            <div className="w-16 h-16 border-4 border-ochre-gold border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
      {!isHome && <Footer />}
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#0E0E0E',
          color: '#fff',
          borderRadius: '16px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }
      }} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
