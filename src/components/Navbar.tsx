'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: 'דף הבית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'תיק עבודות', href: '#portfolio' },
    { label: 'המלצות', href: '#testimonials' },
    { label: 'שאלות נפוצות', href: '#faq' },
    { label: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      id="navbar"
      dir="rtl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFEEAD]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]'
          : 'bg-[#FFEEAD]/60 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Right Side (RTL) */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="text-right"
              aria-label="חזרה לדף הבית"
            >
              <motion.h1
                className="text-2xl md:text-3xl font-bold text-[#000000] tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                whileHover={{ 
                  textShadow: '0 0 8px rgba(0,0,0,0.3)',
                  letterSpacing: '0.05em'
                }}
                transition={{ duration: 0.3 }}
              >
                סטודיו לצילום ביתא
              </motion.h1>
            </a>
          </motion.div>

          {/* Desktop Navigation - Left Side (RTL) */}
          <div className="hidden md:flex items-center space-x-reverse space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative px-4 py-2 text-[#000000] font-semibold text-sm lg:text-base rounded-2xl transition-all duration-300 text-right"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                aria-label={`נווט ל${link.label}`}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ 
                    y: -2,
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {link.label}
                </motion.span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl bg-[#000000]/10 backdrop-blur-sm text-[#000000] hover:bg-[#000000]/20 transition-colors duration-300"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiX className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            dir="rtl"
            initial={{ opacity: 0, x: 100, height: 0 }}
            animate={{ opacity: 1, x: 0, height: 'auto' }}
            exit={{ opacity: 0, x: 100, height: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            className="md:hidden bg-[#FFEEAD]/95 backdrop-blur-xl border-t-2 border-[#000000]/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block px-6 py-4 text-[#000000] font-bold text-lg rounded-2xl bg-white/40 backdrop-blur-sm shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 text-right border border-[#000000]/10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    x: -5,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                  }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`נווט ל${link.label}`}
                >
                  <motion.span
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Bottom Border */}
      <motion.div
        className="h-1 bg-gradient-to-l from-[#000000]/20 via-[#000000]/40 to-[#000000]/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
};

export default Navbar;