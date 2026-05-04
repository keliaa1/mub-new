import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0B0D0F]">
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
        </video>

        <div className="relative h-full flex flex-col">
          <Navbar />

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center text-center -mt-20 px-4">
              <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                PRIVATE JETS
              </span>

              <div className="flex flex-col items-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-400 leading-none tracking-tighter">
                  Premium.
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-none tracking-tighter -mt-[12px]">
                  Accessible.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-400 mt-2 mb-8 max-w-2xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center gap-4">
                <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all">
                  Discover
                </button>
                <button className="px-8 py-3 rounded-full text-[#0B0D0F] bg-white hover:bg-gray-200 transition-all font-medium shadow-lg shadow-white/5">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
