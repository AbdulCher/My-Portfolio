
export default function About() {
  return (
    <section
        id="apropos"
        className="snap-start h-screen bg-blue-950 flex items-center justify-center"
      >
        <div className="text-4xl text-white flex items-center justify-between">
            <div className="grow order-1">
                <h2 >À propos</h2>
                <p className="text-2xl">
                    Après une formation complète chez <strong>OpenClassrooms</strong>, <br></br>j’ai appris à transformer
                    des maquettes Figma en sites web modernes et responsive.<br></br>
                    Curieux et rigoureux, j’aime relever des défis techniques et concevoir
                    <br></br>des interfaces élégantes et fonctionnelles.
                </p>
            </div>
            <div className="text-2xl grow text-white order-2">
                <h3>Quelques projets récents</h3>
                <div className="border-6 justify-items-center">
                    <img src="/img/booki.jpg" alt="Projet Booki" />
                    <p>Booki<br></br>Intégration HTML/CSS responsive</p>
                </div>
                <div className="border-6 justify-items-center-safe">
                    <img className="" src="/img/sophiebluel.jpg" />
                    <p className="">Portfolio Sophie Bluel<br></br> JavaScript dynamique</p>
                </div>
                <div className="border-8 justify-items-end-safe">
                    <img src="/img/Kasa.jpg" alt="Projet Kasa" />
                    <p>Kasa<br></br> Application React complète</p>
                </div>
            
                <a href="#projets" className="btn-secondary border-2 hover:text-blue-500">Voir tous les projets →</a>
            
            </div>
        </div>
        
      </section>
  );
}