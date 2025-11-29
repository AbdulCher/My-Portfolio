// src/hooks/useAOS.js
import { useEffect } from "react";
import AOS from "aos";


/**
 * Hook pour initialiser AOS une seule fois dans l'application
 * À utiliser dans le composant racine (App.js)
 */
export function useAOSInit(globalOptions = {}) {
  useEffect(() => {
    AOS.init({
      // Configuration de base
      duration: 800,
      once: false, // false = l'animation se rejoue à chaque scroll
      easing: "ease-out",
      
      // Configuration pour le scroll section par section
      offset: 120, // Distance (en px) avant le déclenchement
      delay: 0,
      
      // Points d'ancrage pour les sections
      anchorPlacement: "top-bottom", // Quand le haut de l'élément atteint le bas du viewport
      
      // Désactiver sur mobile si nécessaire
      disable: false, // ou 'mobile', 'phone', 'tablet'
      
      // Comportement au scroll
      startEvent: "DOMContentLoaded",
      
      // Options personnalisées
      ...globalOptions
    });

    // Rafraîchir AOS lors du resize et du scroll
    const handleResize = () => AOS.refresh();
    const handleScroll = () => AOS.refresh();
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

/**
 * Hook pour rafraîchir AOS quand le contenu change
 * Utile pour le contenu dynamique
 */
export function useAOSRefresh(dependencies = []) {
  useEffect(() => {
    AOS.refresh();
  }, dependencies);
}

/**
 * Hook pour observer les sections et rafraîchir AOS
 * Optimisé pour les animations section par section
 */
export function useAOSSections(sectionRefs = []) {
  useEffect(() => {
    if (!sectionRefs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AOS.refresh();
          }
        });
      },
      {
        threshold: 0.1, // 10% de la section visible
        rootMargin: "0px 0px -100px 0px"
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);
}

// Export par défaut pour la compatibilité
export default useAOSInit;