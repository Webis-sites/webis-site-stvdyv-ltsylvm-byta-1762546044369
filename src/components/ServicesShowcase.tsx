'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCamera, 
  FaUserTie, 
  FaBox, 
  FaPalette, 
  FaPortrait, 
  FaVideo 
} from 'react-icons/fa';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ServicesShowcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <FaCamera className="w-12 h-12" />,
      title: 'צילומי אירועים',
      description: 'צילום מקצועי לאירועים מיוחדים - חתונות, בר מצוות ואירועי חברה',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'
    },
    {
      id: 2,
      icon: <FaUserTie className="w-12 h-12" />,
      title: 'צילומי תדמית',
      description: 'צילומי תדמית עסקיים ומקצועיים להעצמת המותג האישי שלך',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80'
    },
    {
      id: 3,
      icon: <FaBox className="w-12 h-12" />,
      title: 'צילומי מוצר',
      description: 'צילום מוצרים באיכות גבוהה לחנויות אונליין וקטלוגים',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'
    },
    {
      id: 4,
      icon: <FaPalette className="w-12 h-12" />,
      title: 'צילומי אומנות',
      description: 'צילום אומנותי יצירתי המשלב חזון אמנותי וטכניקות מתקדמות',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80'
    },
    {
      id: 5,
      icon: <FaPortrait className="w-12 h-12" />,
      title: 'צילומי פורטרט',
      description: 'צילומי פורטרט אישיים ומשפחתיים המדגישים את הייחודיות שלכם',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80'
    },
    {
      id: 6,
      icon: <FaVideo className="w-12 h-12" />,
      title: 'צילומי וידאו',
      description: 'הפקת סרטונים מקצועיים לאירועים, פרסומות ותוכן דיגיטלי',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      id="services-showcase" 
      dir="rtl" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEEAD] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFEEAD] opacity-10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-[#000000] mb-4 relative z-10"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              השירותים שלנו
            </motion.h2>
            <motion.div
              className="absolute -bottom-2 right-0 w-full h-4 bg-[#FFEEAD] -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <motion.p 
            className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            גלו את מגוון השירותים המקצועיים שלנו בתחום הצילום והבידור
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`שירות ${service.title}`}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setHoveredCard(service.id);
                }
              }}
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative h-full bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-gray-200/50">
                {/* Neumorphic Shadow Effect */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                  hoveredCard === service.id 
                    ? 'shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)]' 
                    : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.5)]'
                }`} />

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    className="absolute top-4 right-4 bg-[#FFEEAD] text-[#000000] p-4 rounded-2xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 text-right">
                  <h3 className="text-2xl font-bold text-[#000000] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredCard === service.id ? 1 : 0,
                      boxShadow: hoveredCard === service.id 
                        ? '0 0 30px rgba(255, 238, 173, 0.6), inset 0 0 20px rgba(255, 238, 173, 0.2)' 
                        : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-[#FFEEAD] to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === service.id ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Corner Decoration */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 bg-[#FFEEAD] opacity-20 rounded-br-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredCard === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-10 py-4 bg-[#000000] text-[#FFEEAD] font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="צור קשר לפרטים נוספים"
          >
            צור קשר לפרטים נוספים
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;