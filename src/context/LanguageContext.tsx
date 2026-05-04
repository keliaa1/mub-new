import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'EN' | 'ES';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    'nav.home': 'Home',
    'nav.whyChooseUs': 'Why Choose Us',
    'nav.benefits': 'Benefits',
    'nav.pricing': 'Pricing',
    'nav.language': 'Language',
    
    // Hero
    'hero.badge': 'Global Business Solutions',
    'hero.title1': 'Launch Your.',
    'hero.title2': 'US Dream.',
    'hero.desc': 'The easiest way for non-residents to start and manage a business in the United States. LLC formation, EIN, and compliance—all in one place.',
    'hero.btn1': 'Start Your Business',
    'hero.btn2': 'How It Works',
    
    // Why Choose Us
    'why.title': 'Why Global Entrepreneurs Choose Us',
    'why.speed': 'Lightning Fast Setup',
    'why.speed_desc': 'Get your US entity and bank accounts in record time.',
    'why.support': 'Expert Support',
    'why.support_desc': '24/7 dedicated assistance for all your business needs.',
    'why.secure': 'Secure & Trusted',
    'why.secure_desc': 'Your data and business are protected with bank-grade security.',
    
    // Payment Marquee
    'payment.title': 'Accepted Payment Methods',
    
    // Pricing
    'pricing.title': 'Plans & Pricing',
    'pricing.subtitle': 'Transparent offshore solutions with zero hidden costs.',
    'pricing.badge': 'Executive Pro',
    'pricing.tag': 'Most Popular',
    'pricing.sub': 'Full Asset Protection. Global Enterprises.',
    'pricing.price': '$4,900',
    'pricing.period': '/ONE-TIME',
    'pricing.feature1': 'Everything in Standard',
    'pricing.feature2': 'Nominee Directors',
    'pricing.feature3': 'Banking Intro',
    'pricing.feature4': 'Full Digital Kit',
    'pricing.cta': 'View Plan',

    // Footer
    'footer.rights': 'All rights reserved.',
  },
  ES: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.whyChooseUs': 'Por Qué Elegirnos',
    'nav.benefits': 'Beneficios',
    'nav.pricing': 'Precios',
    'nav.language': 'Idioma',
    
    // Hero
    'hero.badge': 'Soluciones de Negocios Globales',
    'hero.title1': 'Lanza Tu.',
    'hero.title2': 'Sueño Americano.',
    'hero.desc': 'La forma más fácil para que los no residentes inicien y gestionen un negocio en los Estados Unidos. Formación de LLC, EIN y cumplimiento: todo en un solo lugar.',
    'hero.btn1': 'Inicia Tu Negocio',
    'hero.btn2': 'Cómo Funciona',
    
    // Why Choose Us
    'why.title': 'Por Qué los Emprendedores Globales nos Eligen',
    'why.speed': 'Configuración Ultrarrápida',
    'why.speed_desc': 'Obtenga su entidad en EE. UU. y sus cuentas bancarias en un tiempo récord.',
    'why.support': 'Soporte Experto',
    'why.support_desc': 'Asistencia dedicada las 24 horas, los 7 días de la semana para todas sus necesidades comerciales.',
    'why.secure': 'Seguro y Confiable',
    'why.secure_desc': 'Sus datos y su negocio están protegidos con seguridad de nivel bancario.',
    
    // Payment Marquee
    'payment.title': 'Métodos de Pago Aceptados',
    
    // Pricing
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Soluciones offshore transparentes sin costos ocultos.',
    'pricing.badge': 'Ejecutivo Pro',
    'pricing.tag': 'Más Popular',
    'pricing.sub': 'Protección total de activos. Empresas Globales.',
    'pricing.price': '$4,900',
    'pricing.period': '/ÚNICO PAGO',
    'pricing.feature1': 'Todo en el Estándar',
    'pricing.feature2': 'Directores Nominales',
    'pricing.feature3': 'Introducción Bancaria',
    'pricing.feature4': 'Kit Digital Completo',
    'pricing.cta': 'Ver Plan',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
