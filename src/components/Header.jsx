import React from "react";

const Header = () => {
  return (
    <header className="text-blue-800 fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-md z-50 border-1">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl text-blue-800 font-bold border-t-4 border-0">/////</div>
        <ul className="flex space-x-6">
          <li><a href="#accueil" className="hover:text-gray-400">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#projets" className="hover:text-blue-500">Projets</a></li>
          <li><a href="#competences" className="hover:text-blue-500">Compétences</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
