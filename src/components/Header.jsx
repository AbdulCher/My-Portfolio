import React from "react";

const Header = () => {
  return (
    <header className="text-gray-300 fixed top-0 left-0 w-full bg-gray/10 bg-opacity-80 backdrop-blur-md shadow-md z-50 border-b">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl text-[#fca311] font-bold border-t-8 border-0"><strong className="text-1xl">@</strong>/////</div>
        <ul className="flex space-x-6 text-[#fca311]">
          <li><a href="#accueil" className="rounded p-1 hover:text-[#14213d] hover:bg-[#fca311]">Accueil</a></li>
          <li><a href="#apropos" className="rounded p-1 hover:text-[#14213d] hover:bg-[#fca311]">À propos</a></li>
          <li><a href="#projets" className="rounded p-1 hover:text-[#14213d] hover:bg-[#fca311]">Projets</a></li>
          <li><a href="#competences" className="rounded p-1 hover:text-[#14213d] hover:bg-[#fca311]">Compétences</a></li>
          <li><a href="#contact" className="rounded p-1 hover:text-[#14213d] hover:bg-[#fca311]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
