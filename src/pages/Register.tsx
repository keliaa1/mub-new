import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building2, Briefcase, User, Mail, Phone, Globe, CheckCircle2, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

type FormState = {
  companyName: string;
  commercialActivity: string;
  contactName: string;
  email: string;
  whatsapp: string;
  country: string;
};

const countries = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
  'Cuba', 'Ecuador', 'El Salvador', 'España', 'Estados Unidos', 'Guatemala',
  'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú',
  'Puerto Rico', 'República Dominicana', 'Uruguay', 'Venezuela',
  'Otro',
];

const Register = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    companyName: '',
    commercialActivity: '',
    contactName: '',
    email: '',
    whatsapp: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-[#050505] bg-white text-[#111] dark:text-[#eee]">
        <div className="relative z-30 border-b border-black/10 dark:border-white/10">
          <Navbar />
        </div>
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 rounded-full bg-[#111] dark:bg-[#eee] flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-white dark:text-[#111]" />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">¡Registro completado!</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en las próximas 24–48 horas para iniciar el proceso de formación.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111] dark:bg-[#eee] text-white dark:text-[#111] text-sm font-medium hover:bg-gray-800 dark:hover:bg-white transition-colors rounded-xl"
            >
              Volver al inicio
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#050505] bg-white text-[#111] dark:text-[#eee]">
      <div className="relative z-30 border-b border-black/10 dark:border-white/10">
        <Navbar />
      </div>

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 md:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#111] dark:hover:text-[#eee] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>

          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            <div className="w-2 h-2 bg-[#111] dark:bg-[#eee]" />
            Último paso
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
            Información de tu empresa
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Completa tus datos para iniciar el proceso de formación. Todo es confidencial y seguro.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-10"
          id="register-form"
        >
          {/* Company Section */}
          <fieldset className="space-y-5">
            <legend className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Información de la empresa
            </legend>

            <div className="space-y-1">
              <label htmlFor="companyName" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Nombre de la empresa <span className="text-red-400">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={form.companyName}
                onChange={handleChange}
                placeholder="My USA Business LLC"
                className="w-full px-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-transparent focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="commercialActivity" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Actividad comercial <span className="text-red-400">*</span>
              </label>
              <textarea
                id="commercialActivity"
                name="commercialActivity"
                required
                value={form.commercialActivity}
                onChange={handleChange}
                rows={3}
                placeholder="Ej: Venta de productos digitales, e-commerce, consultoría..."
                className="w-full px-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-transparent focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
              />
            </div>
          </fieldset>

          {/* Divider */}
          <div className="border-t border-black/8 dark:border-white/8" />

          {/* Contact Section */}
          <fieldset className="space-y-5">
            <legend className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
              <User className="w-4 h-4" />
              Información de contacto
            </legend>

            <div className="space-y-1">
              <label htmlFor="contactName" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Nombre completo <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  value={form.contactName}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-transparent focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Correo electrónico <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-transparent focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="whatsapp" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Número de WhatsApp <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="+1 305 000 0000"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-transparent focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="country" className="text-sm font-medium text-gray-600 dark:text-gray-400">
                País <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  id="country"
                  name="country"
                  required
                  value={form.country}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#050505] focus:outline-none focus:border-[#111] dark:focus:border-[#eee] transition-colors text-sm text-gray-600 dark:text-gray-400 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona tu país</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            id="submit-register"
            className="w-full flex items-center justify-between px-6 py-4 bg-[#111] dark:bg-[#eee] text-white dark:text-[#111] text-sm font-medium hover:bg-gray-800 dark:hover:bg-white transition-colors group rounded-xl"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Enviar información y comenzar
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <p className="text-xs text-center text-gray-400 dark:text-gray-600">
            Al enviar este formulario aceptas nuestros{' '}
            <a href="/terms-of-service" className="underline hover:text-[#111] dark:hover:text-[#eee] transition-colors">
              Términos de Servicio
            </a>{' '}
            y{' '}
            <a href="/privacy-policy" className="underline hover:text-[#111] dark:hover:text-[#eee] transition-colors">
              Política de Privacidad
            </a>.
          </p>
        </motion.form>
      </main>
    </div>
  );
};

export default Register;
