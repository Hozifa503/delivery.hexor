import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// To add or rename a menu item, change this list.
const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Restaurants', path: '/restaurants' },
  { label: 'Orders', path: '/orders' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // If the logo file is missing we hide the broken image icon and show only the text.
  const [isLogoMissing, setIsLogoMissing] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the user goes to another page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close the mobile menu when the Escape key is pressed.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" aria-label="OCT Delivery - go to the Home page">
          {!isLogoMissing && (
            <img
              className="navbar__logo"
              src="/assets/school-logo.png"
              alt=""
              onError={() => setIsLogoMissing(true)}
            />
          )}
          <span className="navbar__brand-text">
            <span className="navbar__school-name">STEM EGYPT</span>
            <span className="navbar__school-tagline">High school for boys 6th October</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
        >
          {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>

        <ul id="main-menu" className={isMenuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'}>
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
