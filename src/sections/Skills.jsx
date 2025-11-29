import { useEffect, useRef } from "react";
import BgPortfolio from "../animate/BgPortfolio";
import Icons from "../components/Icons";

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Skills() {
  const sectionRef = useReveal();

  const skills = {
    Outils: [
      { name: "Figma", icon: "/img/icons/figma.svg" },
      { name: "VS Code", icon: "/img/icons/vscode.svg" },
      { name: "Git & GitHub", icon: "/img/icons/github.svg" },
    ],
    Langages: [
      { name: "React.js", icon: "/img/icons/react.svg" },
      { name: "HTML5", icon: "/img/icons/html5.svg" },
      { name: "CSS3", icon: "/img/icons/css3.svg" },
      { name: "JavaScript (ES6+)", icon: "/img/icons/javascript.svg" },
    ],
    Frameworks: [
      { name: "Tailwind CSS", icon: "/img/icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/img/icons/bootstrap.svg" },
      { name: "Framer Motion", icon: "/img/icons/framer.svg" },
    ],
  };

  return (
    <section
      id="competences"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative
        bg-[#001524] text-[#ece5dd]
        items-center
        md:px-12 lg:px-20
      "
    >
      <h2 className="text-[#ece5dd] mb-8 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
        Compétences
      </h2>

      <div className="relative w-full max-w-6xl grid gap-12 mb-12 sm:grid-cols-1 lg:grid-cols-3 text-center">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="flex flex-col items-center"
          data-aos="fade-right"
            data-aos-delay={idx * 150} // <-- delay progressif
            data-aos-offset="200"       // Décalage du déclenchement
            data-aos-once="false"       // Répéter l'animation
            data-aos-anchor-placement="center" // Point d'ancrage
          >
            <h3 className="text-2xl opacity-90 font-semibold text-[#ff7d00] mb-6">
              {category}
            </h3>

            <ul className="space-y-6">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center space-x-4 opacity-0 fade-slide-up"
                  style={{ animationDelay: `${i * 250}ms` }}
                >
                  <img
                    src={item.icon}
                    className="w-10 h-10 fade-scale"
                    style={{ animationDelay: `${i * 250}ms` }}
                    alt={item.name}
                  />

                  <span className="text-xl text-[#ece5dd] opacity-90">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <BgPortfolio />
      <Icons />
    </section>
  );
}
