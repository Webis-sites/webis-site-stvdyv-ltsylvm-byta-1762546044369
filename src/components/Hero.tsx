'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToBooking = (): void => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      dir="rtl"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80"
            alt="סטודיו צילום מקצועי"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-4xl mr-auto text-right">
          {/* Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-xl bg-white/40 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/50"
            style={{
              boxShadow: '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
            }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-right mb-6 leading-tight"
              style={{
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              סטודיו לצילום{' '}
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200 }}
                className="inline-block"
                style={{
                  color: '#FFEEAD',
                  WebkitTextStroke: '2px #000000',
                  paintOrder: 'stroke fill',
                }}
              >
                מוביל
              </motion.span>{' '}
              בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-xl md:text-2xl lg:text-3xl text-right mb-10 font-medium"
              style={{ color: '#000000' }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button with Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 150 }}
              className="flex justify-end"
            >
              <motion.button
                onClick={handleScrollToBooking}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 text-xl md:text-2xl font-bold rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: '#FFEEAD',
                  color: '#000000',
                  boxShadow: '8px 8px 16px #d4d4d4, -8px -8px 16px #ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.boxShadow = '12px 12px 24px #c0c0c0, -12px -12px 24px #ffffff';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.boxShadow = '8px 8px 16px #d4d4d4, -8px -8px 16px #ffffff';
                }}
                aria-label="קבע תור עכשיו"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#000000', opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, type: 'spring' }}
            className="mt-12 flex justify-end gap-4"
          >
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl backdrop-blur-md bg-white/30 border border-white/50 flex items-center justify-center"
                style={{
                  boxShadow: '4px 4px 8px #d4d4d4, -4px -4px 8px #ffffff',
                }}
              >
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  style={{ backgroundColor: index === 1 ? '#FFEEAD' : '#000000' }}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-8 h-12 border-2 border-black/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#FFEEAD' }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl"
        style={{ backgroundColor: '#FFEEAD' }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-3xl"
        style={{ backgroundColor: '#FFEEAD' }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;