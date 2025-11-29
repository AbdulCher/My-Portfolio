//  ============================================
// animate/BgPortfolio.js - AMÉLIORÉ
// ============================================
export default function BgPortfolio() {
  return (
    <div 
      className="text-[#ff7d00]/80 mt-8 mb-6 font-extrabold
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
        text-center select-none"
      data-aos="fade-up"
      data-aos-duration="1000"
      aria-hidden="true"
    >
      <span className="bg-gradient-to-r from-[#ff7d00]/80 to-[#ffb703]/80 
        bg-clip-text text-transparent
        hover:scale-110 inline-block transition-transform duration-300">
        Portfolio
      </span>
    </div>
  );
}