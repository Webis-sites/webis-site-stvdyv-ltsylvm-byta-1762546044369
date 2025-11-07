'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaCamera, FaCalendarAlt, FaLightbulb, FaEdit, FaCheckCircle } from 'react-icons/fa';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps: TimelineStep[] = [
    {
      id: 1,
      title: 'פגישת ייעוץ',
      description: 'נפגשים להכיר, להבין את הצרכים שלכם ולתכנן את החזון המשותף',
      icon: <FaLightbulb className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'תכנון הצילום',
      description: 'בוחרים לוקיישנים, מתאמים לוחות זמנים ומכינים את כל הפרטים הקטנים',
      icon: <FaCalendarAlt className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'יום הצילום',
      description: 'הקסם קורה! צוות מקצועי מלווה אתכם לאורך כל היום',
      icon: <FaCamera className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'עריכה ועיבוד',
      description: 'מעבדים ומשכללים כל תמונה בקפידה ובתשומת לב לפרטים',
      icon: <FaEdit className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'מסירת התוצר הסופי',
      description: 'מקבלים גלריה מושלמת של תמונות מעוצבות ומוכנות להדפסה',
      icon: <FaCheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="process-timeline-section"
      dir="rtl"
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFEEAD] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFEEAD] opacity-10 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#000000] mb-6 text-right md:text-center">
          התהליך שלנו
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto text-right md:text-center font-medium">
          שקיפות ומקצועיות בכל שלב - כך אנחנו עובדים איתכם
        </p>
      </motion.div>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden md:block" ref={containerRef}>
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-24 right-0 left-0 h-1 bg-gray-200">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-l from-[#FFEEAD] to-[#000000] origin-right"
            ></motion.div>
          </div>

          {/* Steps */}
          <div className="flex justify-between items-start relative">
            {steps.map((step, index) => (
              <TimelineStepDesktop key={step.id} step={step} index={index} total={steps.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative max-w-md mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 right-8 w-1 bg-gray-200">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-[#000000] to-[#FFEEAD] origin-top"
            ></motion.div>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <TimelineStepMobile key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-20"
      >
        <p className="text-2xl md:text-3xl font-bold text-[#000000] mb-6">
          מוכנים להתחיל את המסע?
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-[#FFEEAD] text-[#000000] text-xl font-black rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-[#000000]"
        >
          בואו נדבר
        </motion.button>
      </motion.div>
    </section>
  );
};

interface TimelineStepDesktopProps {
  step: TimelineStep;
  index: number;
  total: number;
}

const TimelineStepDesktop: React.FC<TimelineStepDesktopProps> = ({ step, index, total }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      className="flex flex-col items-center relative"
      style={{ width: `${100 / total}%` }}
    >
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
        className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-[#000000] flex items-center justify-center text-[#000000] shadow-lg mb-8"
        style={{
          boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.9)',
        }}
      >
        {step.icon}
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        className="relative p-6 rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-xl text-center max-w-xs"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {/* Step Number */}
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#FFEEAD] border-4 border-[#000000] flex items-center justify-center font-black text-2xl text-[#000000] shadow-lg">
          {step.id}
        </div>

        <h3 className="text-2xl font-black text-[#000000] mb-3 text-right">{step.title}</h3>
        <p className="text-base text-gray-700 text-right leading-relaxed">{step.description}</p>
      </motion.div>
    </motion.div>
  );
};

interface TimelineStepMobileProps {
  step: TimelineStep;
  index: number;
}

const TimelineStepMobile: React.FC<TimelineStepMobileProps> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="flex items-start gap-6 relative"
    >
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
        className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-[#000000] flex items-center justify-center text-[#000000] shadow-lg flex-shrink-0"
        style={{
          boxShadow: '6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,0.9)',
        }}
      >
        {step.icon}
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
        className="relative flex-1 p-5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-xl"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {/* Step Number */}
        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FFEEAD] border-4 border-[#000000] flex items-center justify-center font-black text-xl text-[#000000] shadow-lg">
          {step.id}
        </div>

        <h3 className="text-xl font-black text-[#000000] mb-2 text-right">{step.title}</h3>
        <p className="text-sm text-gray-700 text-right leading-relaxed">{step.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;