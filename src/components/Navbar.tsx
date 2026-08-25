import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { KosmoLogo } from './KosmoLogo';
import { Menu as MenuIcon, X, Phone, MapPin, Sparkles, Clock, Utensils } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Signature Milo', path: '/signature-milo' },
    { label: 'Our Story', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Visit & Contact', path: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#043C2A]/95 backdrop-blur-md border-b border-[#D6B34A]/30 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-[#043C2A]/98 via-[#043C2A]/85 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" id="navbar-brand-link" className="focus:outline-none flex items-center group">
          <KosmoLogo size="md" id="navbar-logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs xl:text-sm font-semibold tracking-wider uppercase transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? 'text-[#E5C65A] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#D6B34A] after:shadow-[0_0_8px_#D6B34A]'
                    : 'text-[#F6F0DD]/85 hover:text-[#FFF0BE] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D6B34A]/60 hover:after:w-full after:transition-all after:duration-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls: Direct Call & Explore/Visit Action */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Call Direct */}
          <a
            id="nav-call-btn"
            href="tel:09962303090"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#075C3B]/80 hover:bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/40 text-xs font-semibold tracking-wider transition-all hover:scale-[1.02]"
            title="Call Kosmo Cafe"
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B34A]" />
            <span className="hidden xl:inline font-mono">099623 03090</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Visit Cafe / Directions Button */}
          <Link
            id="nav-visit-btn"
            to="/contact"
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn shadow-md"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT CAFE</span>
          </Link>

          {/* Menu Shortcut on Small Screens */}
          <Link
            id="nav-menu-shortcut-btn"
            to="/menu"
            className="md:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D6B34A] text-[#043C2A] text-xs font-extrabold uppercase tracking-wider"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Menu</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#075C3B]/70 text-[#E5C65A] hover:text-[#FFF0BE] border border-[#D6B34A]/30 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#043C2A] border-b border-[#D6B34A]/30 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-300"
        >
          {/* Quick Info Strip */}
          <div className="flex items-center justify-between text-xs text-[#FFF0BE] pb-3 border-b border-[#D6B34A]/20">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D6B34A]" /> Open Late till 3:30 AM
            </span>
            <span className="text-[#D6B34A] font-semibold">Alwarpet, Chennai</span>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-1 pt-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/50 font-bold'
                      : 'text-[#F6F0DD] hover:bg-[#075C3B]/60 hover:text-[#E5C65A]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D6B34A]">→</span>
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#D6B34A]/20 flex flex-col gap-2.5">
            <Link
              to="/menu"
              className="w-full py-3 rounded-full text-center font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
            >
              EXPLORE DIGITAL MENU
            </Link>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:09962303090"
                className="py-2.5 px-3 rounded-xl bg-[#075C3B]/80 text-[#FFF0BE] border border-[#D6B34A]/30 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B34A]" /> Call Cafe
              </a>
              <Link
                to="/contact"
                className="py-2.5 px-3 rounded-xl bg-[#075C3B]/80 text-[#FFF0BE] border border-[#D6B34A]/30 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D6B34A]" /> Directions
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
