// ============================================
// animate/LoaderScreen.js - COMPOSANT SÉPARÉ
// ============================================
export default function LoaderScreen({ fadeOut }) {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-[#001219] transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      aria-live="polite"
      aria-busy={!fadeOut}
    >
      <div className="flex items-center space-x-3">
        {/* Logo ou texte animé */}
        <div className="text-[#ff7d00] text-3xl font-bold animate-pulse">
          <span className="inline-block animate-bounce">C</span>
          <span className="inline-block animate-bounce delay-75">h</span>
          <span className="inline-block animate-bounce delay-150">a</span>
          <span className="inline-block animate-bounce delay-100">C</span>
          <span className="inline-block animate-bounce delay-200">h</span>
          <span className="inline-block animate-bounce delay-300">a</span>
        </div>

        {/* Points animés */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#27818f] rounded-full animate-bounce"></div>
          <div 
            className="w-3 h-3 bg-[#ff7d00] rounded-full animate-bounce"
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div 
            className="w-3 h-3 bg-[#78290f] rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}