import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Orders from './pages/Orders.jsx';
import Restaurants from './pages/Restaurants.jsx';

// Every time the address changes, start the new page at the top.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
