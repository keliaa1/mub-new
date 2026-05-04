const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-[#121417]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Your Advantages</h2>
            <h3 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">Expand Your Reach</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Unlock the world's largest economy with ease. We handle the paperwork so you can focus on growing your global brand.
            </p>
            <ul className="space-y-4">
              {[
                'LLC registration in any US state',
                'Remote US business bank account setup',
                'Fast-track EIN acquisition from IRS',
                'Professional Registered Agent service'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern Office Building"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
