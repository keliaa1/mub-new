import { Marquee } from "./Marquee";
import { useLanguage } from '../context/LanguageContext';

const ReviewCard = ({
  img,
  name,
  business,
  body,
}: {
  img: string;
  name: string;
  business: string;
  body: string;
}) => {
  return (
    <figure
      className="relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 hover:dark:bg-white/10 bg-black/10 transition-colors"
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full object-cover border border-[#3c3b6e]/30" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white text-slate-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#3c3b6e]">{business}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm dark:text-gray-300 text-slate-700 leading-relaxed italic">"{body}"</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Alejandro Gomez",
      business: "Gomez Logistics LLC",
      body: t('test.review1'),
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Chen Wei",
      business: "Horizon Tech Solutions",
      body: t('test.review2'),
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Elena Petrova",
      business: "Petrova Consulting",
      body: t('test.review3'),
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Marcus Schmidt",
      business: "Schmidt Global Ventures",
      body: t('test.review4'),
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      name: "Sofia Rodriguez",
      business: " Rodriguez E-commerce",
      body: t('test.review5'),
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Ahmed Hassan",
      business: "Hassan Digital Agency",
      body: t('test.review6'),
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="py-24 dark:bg-[#121417] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold dark:text-gray-400 text-slate-600 tracking-wider uppercase mb-3">{t('test.subtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-normal dark:text-white text-slate-900 tracking-tight">{t('test.title')}</h3>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-[#121417] from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-[#121417] from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
