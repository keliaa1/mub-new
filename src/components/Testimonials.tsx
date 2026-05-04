import { Marquee } from "./Marquee";

const reviews = [
  {
    name: "Alejandro Gomez",
    business: "Gomez Logistics LLC",
    body: "Starting a US business from Colombia seemed impossible until I found My USA Business. The process was seamless and incredibly fast.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Chen Wei",
    business: "Horizon Tech Solutions",
    body: "The EIN acquisition and banking support were life-savers. Highly recommend for any international founder entering the US market.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Elena Petrova",
    business: "Petrova Consulting",
    body: "Professional, fast, and reliable. They handled all the compliance work so I could focus on my customers. A truly premium service.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Marcus Schmidt",
    business: "Schmidt Global Ventures",
    body: "The easiest way to get a US bank account as a non-resident. Their support team is world-class and always responsive.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Sofia Rodriguez",
    business: " Rodriguez E-commerce",
    body: "Incredible service. I had my LLC and EIN in record time. Truly a premium experience for international founders.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Ahmed Hassan",
    business: "Hassan Digital Agency",
    body: "Their tax and compliance support is top-notch. I feel confident running my US business from abroad knowing they have my back.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
      className="relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full object-cover border border-[#3c3b6e]/30" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#3c3b6e]">{business}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed italic">"{body}"</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#121417] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-normal text-white tracking-tight">Trusted by Founders Worldwide</h3>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#121417] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#121417] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
