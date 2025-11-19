export default function About() {
  return (
    <section
      id="apropos"
      className="snap-start w-full bg-gray-950 flex flex-col items-center justify-center p-6 lg:px-16 py-36"
    >
      {/* Texte à propos */}
      <div className="text-center text-gray-400 max-w-3xl mb-10">
        <h2 className="text-4xl font-bold mb-4">À propos</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Après une formation complète chez <strong>OpenClassrooms</strong>,<br />
          j’ai appris à transformer des maquettes Figma en sites web modernes et responsives.<br />
          Curieux et rigoureux, j’aime relever des défis techniques et concevoir<br />
          des interfaces élégantes et fonctionnelles.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <div className="bg-gray-400 text-black rounded-lg shadow p-4 flex flex-col items-center">
          <img
            src="/img/booki.jpg"
            alt="Projet Booki"
            className="w-full h-40 object-cover rounded-md mb-2 shadow-lg filter brightness-90 contrast-90"
          />
            
          <p className="text-center text-sm">
            Booki<br />Intégration HTML/CSS responsive
          </p>
        </div>

        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <img
            src="/img/sophiebluel.jpg"
            alt="Portfolio Sophie Bluel"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm">
            Portfolio Sophie Bluel<br />JavaScript dynamique
          </p>
        </div>

        <div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center">
          <img
            src="/img/Kasa.jpg"
            alt="Projet Kasa"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <p className="text-center text-sm">
            Kasa<br />Application React complète
          </p>
        </div>
      </div>

      {/* Bouton */}
      <a
        href="#projets"
        className="mt-6 inline-block px-6 py-2 border-2 border-white text-white rounded hover:text-blue-500 transition"
      >
        Voir tous les projets →
      </a>
    </section>
  );
}
