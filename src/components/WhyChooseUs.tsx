const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-normal text-white tracking-tight">Why Choose My USA Business</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Expert Guidance",
              desc: "Navigate the complexities of US business laws and regulations with our experienced team of professionals."
            },
            {
              title: "100% Remote",
              desc: "Register and manage your LLC from anywhere in the world. No US visit or physical presence required."
            },
            {
              title: "Total Compliance",
              desc: "From EIN registration to annual filings and tax prep, we ensure your business stays in good standing."
            }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white font-semibold text-lg">
                0{i + 1}
              </div>
              <h4 className="text-xl font-medium text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
