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
    'pricing.period': '/YEAR',
    'pricing.feature1': 'Everything in Standard',
    'pricing.feature2': 'Nominee Directors',
    'pricing.feature3': 'Banking Intro',
    'pricing.feature4': 'Full Digital Kit',
    'pricing.cta': 'View Plan',

    // Footer
    'footer.headquarters': 'Our corporate \nheadquarters',
    'footer.miami_desc': 'Centrally located in the heart of Miami\'s financial district. Operations and headquarters center.',
    'footer.vegas_desc': 'Our Las Vegas headquarters providing operational support and internal KYC processes.',
    'footer.panama_desc': 'Our Panama hub in the Oceania Business Plaza serves as our strategic bridge for Latin American founders.',
    'footer.description': 'Empowering international entrepreneurs to launch and manage successful businesses in the United States. Your global partner in corporate formation.',
    'footer.features': 'Features',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.security': 'Security',
    'footer.sitemap': 'Sitemap',
    
    // Quick Benefits
    'quick.secure': 'Secure Formation',
    'quick.secure_desc': 'State-approved incorporation with full legal protection for your global assets.',
    'quick.fast': 'Lightning Fast',
    'quick.fast_desc': 'Documents filed within 24 hours. Get your business up and running in days.',
    'quick.banking': 'Global Banking',
    'quick.banking_desc': 'Assistance with remote US bank account setup through our partner networks.',
    'quick.online': 'Always Online',
    'quick.online_desc': '24/7 dashboard access to manage your compliance and legal documents.',

    // Testimonials
    'test.title': 'Trusted by Founders Worldwide',
    'test.subtitle': 'Testimonials',
    'test.review1': 'Starting a US business from Colombia seemed impossible until I found My USA Business. The process was seamless and incredibly fast.',
    'test.review2': 'The EIN acquisition and banking support were life-savers. Highly recommend for any international founder entering the US market.',
    'test.review3': 'Professional, fast, and reliable. They handled all the compliance work so I could focus on my customers. A truly premium service.',
    'test.review4': 'The easiest way to get a US bank account as a non-resident. Their support team is world-class and always responsive.',
    'test.review5': 'Incredible service. I had my LLC and EIN in record time. Truly a premium experience for international founders.',
    'test.review6': 'Their tax and compliance support is top-notch. I feel confident running my US business from abroad knowing they have my back.',

    // Footer Links
    'link.llc_formation': 'LLC Formation',
    'link.ein_registration': 'EIN Registration',
    'link.registered_agent': 'Registered Agent',
    'link.banking_support': 'Banking Support',
    'link.help_center': 'Help Center',
    'link.faq': 'FAQ',
    'link.contact_us': 'Contact Us',
    'link.reviews': 'Reviews',
    'link.privacy_policy': 'Privacy Policy',
    'link.terms_of_service': 'Terms of Service',
    'link.cookies': 'Cookies',
    'link.payment_policy': 'Payment Policy',
    
    // Branches
    'branch.usa': 'Miami',
    'branch.vegas': 'Las Vegas',
    
    // Benefits
    'benefits.subtitle': 'Your Advantages',
    'benefits.title': 'Expand Your Reach',
    'benefits.desc': 'Unlock the world\'s largest economy with ease. We handle the paperwork so you can focus on growing your global brand.',
    'benefits.list1': 'Opening a Bank Account',
    'benefits.list2': 'Create or expand your business into the international market.',
    'benefits.list3': 'Receive payments directly into your account in dollars',
    'benefits.list4': 'Handle deposits, transfers, and withdrawals with ease',

    // Why Choose Us
    'why.expertise': 'Our Expertise',
    'why.title1': 'Why founders choose',
    'why.title2': 'My USA Business',
    'why.trust_title': 'Trusted Partnerships',
    'why.trust_desc': 'We\'ve helped over 5,000 founders from 120+ countries launch their US dream successfully.',
    
    // Notifications
    'why.guidance': 'Expert guidance',
    'why.guidance_desc': 'Personalized US business advisory.',
    'why.remote': '100% Remote',
    'why.remote_desc': 'No US travel required ever.',
    'why.ein': 'Fast EIN setup',
    'why.ein_desc': 'Direct IRS filing in record time.',
    'why.compliance': 'Legal compliance',
    'why.compliance_desc': 'Registered Agent & Annual Filings.',
    'why.time1': '',
    'why.time2': '',
    'why.time3': '',
    'why.time4': '',

    // Pricing
    'pricing.title_main': 'Transparent offshore solutions.',
    'pricing.desc': 'Select a state to view precise formation costs and included services. We believe in zero hidden fees and absolute clarity.',
    'pricing.state_selector': 'Formation State',
    'pricing.features_title': 'Included Features',
    'pricing.proceed': 'Proceed with',
    
    'pricing.feature.filing_fees': 'State Filing Fees Included',
    'pricing.feature.registered_agent': 'Registered Agent',
    'pricing.feature.operating_agreement': 'Operating Agreement',
    'pricing.feature.ein': 'EIN (Tax ID) Application',
    'pricing.feature.banking': 'Banking Introduction',
    'pricing.feature.kit': 'Digital Corporate Kit',
    'pricing.feature.resolution': 'Corporate Resolution',
    'pricing.feature.bank_resolution': 'Bank Account Resolution',

    'pricing.tag.popular': 'Most Popular',
    'pricing.tag.investor': 'Investor Friendly',
    'pricing.tag.value': 'Best Value',
    'pricing.tag.sunshine': 'Sunshine State',
    'pricing.tag.lonestar': 'Lone Star State',

    'pricing.sub.wyoming': 'Privacy & Low Fees. Ideal for Non-Residents.',
    'pricing.sub.delaware': 'Corporate Law Standard. Best for Startups.',
    'pricing.sub.new_mexico': 'No Annual Fees. Maximum Privacy.',
    'pricing.sub.florida': 'Great for E-commerce & Local Business.',
    'pricing.sub.texas': 'No State Income Tax. Strong Economy.',
    'pricing.sub.default': 'Professional LLC Formation in',
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
    
    // Quick Benefits ES
    'quick.secure': 'Formación Segura',
    'quick.secure_desc': 'Constitución aprobada por el estado con protección legal total para sus activos globales.',
    'quick.fast': 'Ultrarrápido',
    'quick.fast_desc': 'Documentos presentados en 24 horas. Ponga su negocio en marcha en días.',
    'quick.banking': 'Banca Global',
    'quick.banking_desc': 'Asistencia con la configuración remota de cuentas bancarias en EE. UU. a través de nuestras redes de socios.',
    'quick.online': 'Siempre en Línea',
    'quick.online_desc': 'Acceso al panel 24/7 para administrar su cumplimiento y documentos legales.',

    // Testimonials ES
    'test.title': 'Experiencias positivas y continuidad',
    'test.subtitle': 'Testimonios',
    'test.review1': 'Iniciar un negocio en EE. UU. desde Colombia parecía imposible hasta que encontré My USA Business. El proceso fue fluido e increíblemente rápido.',
    'test.review2': 'La adquisición del EIN y el apoyo bancario fueron salvavidas. Muy recomendable para cualquier fundador internacional que ingrese al mercado estadounidense.',
    'test.review3': 'Profesional, rápido y confiable. Manejaron todo el trabajo de cumplimiento para que yo pudiera concentrarme en mis clientes. Un servicio verdaderamente premium.',
    'test.review4': 'La forma más fácil de obtener una cuenta bancaria en EE. UU. como no residente. Su equipo de soporte es de clase mundial y siempre responde.',
    'test.review5': 'Servicio increíble. Tuve mi LLC y EIN en tiempo récord. Verdaderamente una experiencia premium para fundadores internacionales.',
    'test.review6': 'Su apoyo fiscal y de cumplimiento es de primer nivel. Me siento seguro al administrar mi negocio en EE. UU. desde el extranjero sabiendo que me respaldan.',
    
    // Pricing
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Soluciones offshore transparentes sin costos ocultos.',
    'pricing.badge': 'Ejecutivo Pro',
    'pricing.tag': 'Más Popular',
    'pricing.sub': 'Protección total de activos. Empresas Globales.',
    'pricing.price': '$4,900',
    'pricing.period': '/AÑO',
    'pricing.feature1': 'Todo en el Estándar',
    'pricing.feature2': 'Directores Nominales',
    'pricing.feature3': 'Introducción Bancaria',
    'pricing.feature4': 'Kit Digital Completo',
    'pricing.cta': 'Ver Plan',

    // Footer
    'footer.headquarters': 'Presencia en todo el país.',
    'footer.miami_desc': 'Centro de operaciones ubicado en el corazón del distrito financiero de Miami.',
    'footer.vegas_desc': 'Nuestra sede de Las Vegas brinda soporte operativo y procesos internos de KYC.',
    'footer.panama_desc': 'Nuestro centro de Panamá en Oceania Business Plaza sirve como nuestro puente estratégico para los fundadores latinoamericanos.',
    'footer.description': 'Empoderando a emprendedores internacionales para lanzar y administrar negocios exitosos en los Estados Unidos. Su socio global en formación corporativa.',
    'footer.features': 'Características',
    'footer.support': 'Soporte',
    'footer.legal': 'Legal',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.security': 'Seguridad',
    'footer.sitemap': 'Mapa del Sitio',
    
    // Footer Links
    'link.llc_formation': 'Formación de LLC',
    'link.ein_registration': 'Registro de EIN',
    'link.registered_agent': 'Agente Registrado',
    'link.banking_support': 'Soporte Bancario',
    'link.help_center': 'Centro de Ayuda',
    'link.faq': 'Preguntas Frecuentes',
    'link.contact_us': 'Contáctenos',
    'link.reviews': 'Reseñas',
    'link.privacy_policy': 'Política de Privacidad',
    'link.terms_of_service': 'Términos de Servicio',
    'link.cookies': 'Cookies',
    'link.payment_policy': 'Política de Pagos',
    
    // Branches
    'branch.usa': 'Miami',
    'branch.vegas': 'Las Vegas',
    
    // Benefits ES
    'benefits.subtitle': 'Tus Ventajas',
    'benefits.title': 'Expande Tu Alcance',
    'benefits.desc': 'Desbloquea la economía más grande del mundo con facilidad. Nosotros nos encargamos del papeleo para que puedas concentrarte en hacer crecer tu marca global.',
    'benefits.list1': 'Apertura de Cuenta Bancaria',
    'benefits.list2': 'Crea o expande tu negocio en el mercado internacional.',
    'benefits.list3': 'Recibe pagos directamente en tu cuenta en dólares',
    'benefits.list4': 'Maneja depósitos, transferencias y retiros con facilidad',

    // Why Choose Us ES
    'why.expertise': 'Nuestra Experiencia',
    'why.title1': 'Emprendedores y empresas de todo el mundo eligen',
    'why.title2': 'My USA Business',
    'why.trust_title': 'Asociaciones de Confianza',
    'why.trust_desc': 'Hemos ayudado a más de 5000 fundadores de más de 120 países a lanzar con éxito su sueño americano.',
    
    'why.guidance': 'Orientación experta',
    'why.guidance_desc': 'Asesoría empresarial personalizada en EE. UU.',
    'why.remote': '100% Remoto',
    'why.remote_desc': 'No se requiere visa ni viajar a Estados Unidos',
    'why.ein': 'Configuración rápida de EIN',
    'why.ein_desc': 'Presentación directa al IRS en tiempo récord.',
    'why.compliance': 'Cumplimiento legal',
    'why.compliance_desc': 'Agente Registrado y Presentaciones Anuales.',
    'why.time1': '',
    'why.time2': '',
    'why.time3': '',
    'why.time4': '',

    // Pricing ES
    'pricing.title_main': 'Soluciones empresariales transparentes.',
    'pricing.desc': 'Seleccione un estado para ver los costos exactos de formación y los servicios incluidos. Creemos en cero tarifas ocultas y claridad absoluta.',
    'pricing.state_selector': 'Estado de Formación',
    'pricing.features_title': 'Características Incluidas',
    'pricing.proceed': 'Continuar con',
    
    'pricing.feature.filing_fees': 'Tarifas de Presentación Estatales Incluidas',
    'pricing.feature.registered_agent': 'Agente Registrado',
    'pricing.feature.operating_agreement': 'Acuerdo Operativo',
    'pricing.feature.ein': 'Solicitud de EIN (ID Fiscal)',
    'pricing.feature.banking': 'Introducción Bancaria',
    'pricing.feature.kit': 'Kit Corporativo Digital',
    'pricing.feature.resolution': 'Resolución Corporativa',
    'pricing.feature.bank_resolution': 'Resolución de Cuenta Bancaria',

    'pricing.tag.popular': 'Más Popular',
    'pricing.tag.investor': 'Amigable para Inversores',
    'pricing.tag.value': 'Mejor Valor',
    'pricing.tag.sunshine': 'Estado del Sol',
    'pricing.tag.lonestar': 'Estado de la Estrella Solitaria',

    'pricing.sub.wyoming': 'Privacidad y Tarifas Bajas. Ideal para No Residentes.',
    'pricing.sub.delaware': 'Estándar en Ley Corporativa. Ideal para Startups.',
    'pricing.sub.new_mexico': 'Sin Tarifas Anuales. Máxima Privacidad.',
    'pricing.sub.florida': 'Genial para E-commerce y Negocios Locales.',
    'pricing.sub.texas': 'Sin Impuesto Estatal sobre la Renta. Economía Fuerte.',
    'pricing.sub.default': 'Formación de LLC Profesional en',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
